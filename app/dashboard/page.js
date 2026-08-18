"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
// NEW
import {
  getSession,
  logout,
  getAppState,
  saveCourts,
  saveQueues,
  saveDuration,
  subscribeToAppState,
} from "@/lib/store";
import { getAllPlayers, setPlayerPresent, setPlayerTeam } from "@/lib/players";
import { assignPresentPlayer } from "@/lib/tiers";
import CourtCard from "@/components/CourtCard";
import QueueBoard from "@/components/QueueBoard";
import PresentPanel from "@/components/PresentPanel";
import TeamManager from "@/components/TeamManager";

let nextQueueId = 1;
function newQueueId() {
  return `q${Date.now()}_${nextQueueId++}`;
}

export default function DashboardPage() {
  const router = useRouter();
  const [session, setSessionState] = useState(null);
  const [courts, setCourts] = useState([]);
  const [queues, setQueues] = useState([]);
  const [duration, setDuration] = useState(20);
  const [players, setPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [ready, setReady] = useState(false);
  const [playersError, setPlayersError] = useState("");

  const refreshPlayers = useCallback(async () => {
    setLoadingPlayers(true);
    try {
      const data = await getAllPlayers();
      setPlayers(data);
      setPlayersError("");
    } catch (err) {
      setPlayersError(err.message);
    }
    setLoadingPlayers(false);
  }, []);

// NEW
useEffect(() => {
  const s = getSession();
  if (!s) {
    router.replace("/login");
    return;
  }
  setSessionState(s);
  refreshPlayers();

  (async () => {
    try {
      const state = await getAppState();
      setCourts(state.courts || []);
      setQueues(state.queues || []);
      setDuration(state.duration ?? 20);
    } catch (err) {
      setPlayersError(err.message);
    }
    setReady(true);
  })();

  const unsubscribe = subscribeToAppState((newState) => {
    if (newState.courts) setCourts(newState.courts);
    if (newState.queues) setQueues(newState.queues);
    if (newState.duration != null) setDuration(newState.duration);
  });

  return () => unsubscribe();
}, [router, refreshPlayers]);

// NEW
function persistQueues(next) {
  setQueues(next);
  saveQueues(next).catch((err) => setPlayersError(err.message));
}

function persistCourts(next) {
  setCourts(next);
  saveCourts(next).catch((err) => setPlayersError(err.message));
}

  // Players who are present but not sitting in a queue or on a court.
  function getAvailable(playersList, queuesList, courtsList) {
    const queuedIds = new Set(
      queuesList.flatMap((q) => (q.players || []).filter(Boolean).map((p) => p.id))
    );
    const onCourtIds = new Set(
      courtsList.flatMap((c) => (c.players || []).filter(Boolean).map((p) => p.id))
    );
    return playersList.filter(
      (p) => p.present && !queuedIds.has(p.id) && !onCourtIds.has(p.id)
    );
  }

// NEW
async function handleTogglePresent(player) {
  const nextPresent = !player.present;
  const updatedPlayers = players.map((p) =>
    p.id === player.id ? { ...p, present: nextPresent } : p
  );
  setPlayers(updatedPlayers);

  try {
    await setPlayerPresent(player.id, nextPresent);
  } catch (err) {
    setPlayersError(err.message);
  }

  if (!nextPresent) {
    // Pull them out of wherever they are (does nothing if on a court).
    const next = queues.map((q) => ({
      ...q,
      players: q.players.filter((p) => p.id !== player.id),
    }));
    persistQueues(next);
  }
}

function handleQueuePlayer(player) {
  const next = assignPresentPlayer(player, queues, players, newQueueId);
  persistQueues(next);
}

// NEW
async function handleSetPlayerTeam(playerId, teamId) {
  setPlayers((prev) =>
    prev.map((p) => (p.id === playerId ? { ...p, team_id: teamId || null } : p))
  );

  try {
    await setPlayerTeam(playerId, teamId);
  } catch (err) {
    setPlayersError(err.message);
  }
}

function handleDeleteTeam(teamId, members) {
  const memberIds = new Set(members.map((m) => m.id));
  setPlayers((prev) =>
    prev.map((p) => (memberIds.has(p.id) ? { ...p, team_id: null } : p))
  );
  for (const m of members) {
    setPlayerTeam(m.id, "").catch((err) => setPlayersError(err.message));
  }
}

    function handleAddPlayerToTeam(teamId, playerId) {
    handleSetPlayerTeam(playerId, teamId);
  }

  function handleRemovePlayerFromTeam(playerId) {
    handleSetPlayerTeam(playerId, "");
  }


  
  function handleRemovePlayerFromQueue(queueId, playerId) {
    const next = queues.map((q) =>
      q.id === queueId
        ? { ...q, players: q.players.filter((p) => p.id !== playerId) }
        : q
    );
    persistQueues(next);
  }

  function handleAddPlayerToQueue(queueId, player) {
    const next = queues.map((q) =>
      q.id === queueId && q.players.length < 4
        ? { ...q, players: [...q.players, player] }
        : q
    );
    persistQueues(next);
  }

  function handleDeleteQueue(queueId) {
    persistQueues(queues.filter((q) => q.id !== queueId));
  }

  function handleAddQueue() {
    persistQueues([...queues, { id: newQueueId(), players: [] }]);
  }

  function handlePlay() {
    if (queues.length < 3) return;
    const [q1, q2, q3, ...rest] = queues;
    if (q1.players.length !== 4 || q2.players.length !== 4 || q3.players.length !== 4) return;

    const endsAt = Date.now() + duration * 60 * 1000;
    const nextCourts = courts.map((court, i) => {
      const q = [q1, q2, q3][i];
      return {
        ...court,
        players: q.players.map((p) => ({ id: p.id, name: p.name })),
        queueLabel: `Queue ${i + 1}`,
        endsAt,
        running: true,
      };
    });

    persistCourts(nextCourts);
    persistQueues(rest);
  }

  function handleMatchFinished() {
    const playingCourts = courts.filter((c) => c.players.length > 0);
    if (playingCourts.length === 0) return;

    const nextCourts = courts.map((c) =>
      c.players.length > 0
        ? { ...c, players: [], queueLabel: null, endsAt: null, running: false }
        : c
    );
    persistCourts(nextCourts);

    // Freed-up players go back into the queue pool, one at a time, so each
    // still only joins a queue within 1 tier of everyone already in it.
    let next = queues;
    for (const court of playingCourts) {
      for (const freed of court.players) {
        const fullPlayer = players.find((p) => p.id === freed.id);
        if (fullPlayer && fullPlayer.present) {
          next = assignPresentPlayer(fullPlayer, next, players, newQueueId);
        }
      }
    }
    persistQueues(next);
  }

// NEW
function handleDurationChange(minutes) {
  setDuration(minutes);
  saveDuration(minutes).catch((err) => setPlayersError(err.message));
}
  function handleLogout() {
    logout();
    router.replace("/login");
  }

  if (!ready) return null;

  const available = getAvailable(players, queues, courts);
  const statusMap = {};
  for (const c of courts) {
    for (const p of c.players || []) {
      if (p) statusMap[p.id] = "playing";
    }
  }
  for (const q of queues) {
    for (const p of q.players || []) {
      if (p && !statusMap[p.id]) statusMap[p.id] = "queued";
    }
  }
  const canPlay =
    queues.length >= 3 &&
    queues[0]?.players.length === 4 &&
    queues[1]?.players.length === 4 &&
    queues[2]?.players.length === 4;
  const isAdmin = session?.role === "admin";
  const nextToPlayIds = new Set(
    queues.slice(0, 3).flatMap((q) => (q.players || []).filter(Boolean).map((p) => p.id))
  );
  const myStatus = session
    ? statusMap[session.id] === "playing"
      ? "playing"
      : nextToPlayIds.has(session.id)
      ? "next"
      : null
    : null;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {myStatus === "playing" && (
        <div className="bg-green-600 text-white text-sm font-medium text-center py-2 px-4">
          You're currently playing, {session?.name}
        </div>
      )}
      {myStatus === "next" && (
        <div className="bg-red-600 text-white text-sm font-medium text-center py-2 px-4">
          You're next to play, {session?.name}
        </div>
      )}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[var(--yellow)]" />
            <h1 className="font-semibold tracking-tight">Miagao Pickleball Club</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{session?.name}</span>
            <button onClick={handleLogout} className="text-sm text-[var(--blue)] font-medium">
              Log out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        <div className="space-y-8">
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Courts
              </h2>
              {isAdmin && (
                <button
                  onClick={handleMatchFinished}
                  disabled={!courts.some((c) => c.players.length > 0)}
                  className="text-sm text-[var(--blue)] font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Match finished
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {courts.map((court) => (
                <CourtCard key={court.id} court={court} />
              ))}
            </div>
          </section>

          <section>
            {isAdmin && (
                          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-500">Match length</label>
                <div className="flex items-center rounded-lg border border-[var(--border)] overflow-hidden">
                  {[15, 20].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => handleDurationChange(mins)}
                      className={`px-3 py-1 text-sm ${
                        duration === mins
                          ? "bg-[var(--blue)] text-white"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      {mins}m
                    </button>
                  ))}
                  <input
                    type="number"
                    min="1"
                    value={duration}
                    onChange={(e) => handleDurationChange(Number(e.target.value) || 1)}
                    className="w-16 px-2 py-1 text-sm border-l border-[var(--border)]"
                  />
                </div>
              </div>

              <button
                onClick={handlePlay}
                disabled={!canPlay}
                className="rounded-lg bg-[var(--blue)] text-white font-medium text-sm px-5 py-2 hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ▶ Play — send queues 1–3 to courts
              </button>
            </div>
            )}


            <QueueBoard
              queues={queues}
              availablePlayers={available}
              onRemovePlayer={handleRemovePlayerFromQueue}
              onAddPlayer={handleAddPlayerToQueue}
              onDeleteQueue={handleDeleteQueue}
              onAddQueue={handleAddQueue}
              readOnly={!isAdmin}
            />
          </section>
        </div>

        {isAdmin && (
          <aside>
          {playersError && (
            <p className="text-sm text-red-600 mb-3">{playersError}</p>
          )}
        
          <PresentPanel
            players={players}
            statusMap={statusMap}
            onTogglePresent={handleTogglePresent}
            onQueuePlayer={handleQueuePlayer}
            loading={loadingPlayers}
          />

            <TeamManager
            players={players}
            onAddPlayer={handleAddPlayerToTeam}
            onRemovePlayer={handleRemovePlayerFromTeam}
            onDeleteTeam={handleDeleteTeam}
          />
        </aside>
        )}
      </div>
    </main>
  );
}
