"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  getSession,
  logout,
  getAppState,
  saveCourts,
  saveQueues,
  saveDuration,
  subscribeToAppState,
} from "@/lib/store";
import { getAllPlayers, setPlayerPresent, setPlayerTeam, subscribeToPlayers} from "@/lib/players";
import {
  createPresenceRequest,
  createTeamCreateRequest,
  createTeamJoinRequest,
  cancelRequest,
  resolveRequest,
  getAllRequests,
  getOwnRequest,
  subscribeToAllRequests,
  subscribeToOwnRequest,
} from "@/lib/requests";
import { assignPresentPlayer } from "@/lib/tiers";
import { formatPlayerName } from "@/lib/formatName";
import CourtCard from "@/components/CourtCard";
import QueueBoard from "@/components/QueueBoard";
import PresentPanel from "@/components/PresentPanel";
import RequestsPanel from "@/components/RequestsPanel";
import PlayerPanel from "@/components/PlayerPanel";
import { nextTeamLabel } from "@/components/TeamManager";
import { refresh } from "next/cache";
import { supabase } from "@/lib/supabaseClient";

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
  const [requests, setRequests] = useState([]); // admin: all pending requests
  const [myRequest, setMyRequest] = useState(null); // player: own pending request, or null
  const [players, setPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [ready, setReady] = useState(false);
  const [playersError, setPlayersError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [autoPlayIn, setAutoPlayIn] = useState(null);
  const [skillBased, setSkillBased] = useState(true);
  const [autoDuration, setAutoDuration] = useState(true);

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

useEffect(() => {
  const s = getSession();
  if (!s) {
    router.replace("/login");
    return;
  }
  setSessionState(s);
  refreshPlayers();

  const unsubscribePlayers = subscribeToPlayers(refreshPlayers);

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

  return () => {
    unsubscribe();
    unsubscribePlayers();
  };
}, [router, refreshPlayers]);

  // Live-updates player rows (present/absent, team assignment, etc.) so
// changes made by the admin — including direct toggles that don't go
// through the request flow — show up on every device without a refresh.
useEffect(() => {
  if (!session) return;

  const channel = supabase
    .channel("players_changes")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "players" },
      () => refreshPlayers()
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}, [session, refreshPlayers]);

  function persistQueues(next) {
    setQueues(next);
    saveQueues(next).catch((err) => setPlayersError(err.message));
  }

  function persistCourts(next) {
    setCourts(next);
    saveCourts(next).catch((err) => setPlayersError(err.message));
  }

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
      const next = queues.map((q) => ({
        ...q,
        players: q.players.filter((p) => p.id !== player.id),
      }));
      persistQueues(next);
    }
  }

  function handleQueuePlayer(player) {
    const next = assignPresentPlayer(player, queues, players, newQueueId, skillBased);
    persistQueues(next);
  }

  function handleQueueTeam(teamId) {
    const teammates = players.filter((p) => p.team_id === teamId && p.present);
    if (teammates.length === 0) return;
    const teamIds = new Set(teammates.map((p) => p.id));
    const cleared = queues.map((q) => ({
      ...q,
      players: q.players.filter((p) => !teamIds.has(p.id)),
    }));
    persistQueues([...cleared, { id: newQueueId(), players: teammates }]);
  }

  function isPlayerQueuedOrPlaying(playerId) {
    const onCourt = courts.some((c) => (c.players || []).some((p) => p.id === playerId));
    const inQueue = queues.some((q) => (q.players || []).some((p) => p.id === playerId));
    return onCourt || inQueue;
  }

  function handleRequestPresent(player) {
    setMyRequest({
      id: "pending",
      player_id: player.id,
      player_name: player.name,
      type: "presence",
      team_id: null,
      created_at: new Date().toISOString(),
    });
    createPresenceRequest(player.id, player.name).catch((err) => {
      setPlayersError(err.message);
      setMyRequest(null);
    });
  }

  function handleRequestCreateTeam(player) {
    setMyRequest({
      id: "pending",
      player_id: player.id,
      player_name: player.name,
      type: "team_create",
      team_id: null,
      created_at: new Date().toISOString(),
    });
    createTeamCreateRequest(player.id, player.name).catch((err) => {
      setPlayersError(err.message);
      setMyRequest(null);
    });
  }

  function handleRequestJoinTeam(player, teamId) {
    setMyRequest({
      id: "pending",
      player_id: player.id,
      player_name: player.name,
      type: "team_join",
      team_id: teamId,
      created_at: new Date().toISOString(),
    });
    createTeamJoinRequest(player.id, player.name, teamId).catch((err) => {
      setPlayersError(err.message);
      setMyRequest(null);
    });
  }

  function handleCancelRequest(player) {
    setMyRequest(null);
    cancelRequest(player.id).catch((err) => setPlayersError(err.message));
  }

  // Approving any request type (presence, team create, team join) marks the
  // player present and auto-queues them — but only if they aren't already
  // queued/playing, to avoid placing them into a second queue.
  function handleApproveRequest(request) {
    setRequests((prev) => prev.filter((r) => r.id !== request.id));
    resolveRequest(request.id).catch((err) => setPlayersError(err.message));

    const player = players.find((p) => p.id === request.player_id);
    if (!player) return;

    let updatedPlayer = { ...player, present: true };

    if (request.type === "team_create") {
      const existingIds = players.map((p) => p.team_id).filter(Boolean);
      const label = nextTeamLabel(existingIds);
      updatedPlayer.team_id = label;
      setPlayerTeam(player.id, label).catch((err) => setPlayersError(err.message));
    } else if (request.type === "team_join") {
      updatedPlayer.team_id = request.team_id;
      setPlayerTeam(player.id, request.team_id).catch((err) => setPlayersError(err.message));
    }

    const updatedPlayers = players.map((p) => (p.id === player.id ? updatedPlayer : p));
    setPlayers(updatedPlayers);
    if (!player.present) {
      setPlayerPresent(player.id, true).catch((err) => setPlayersError(err.message));
    }

if (
  !isPlayerQueuedOrPlaying(player.id) &&
  request.type !== "team_create" &&
  request.type !== "team_join"
) {
  const next = assignPresentPlayer(updatedPlayer, queues, updatedPlayers, newQueueId, skillBased);
  persistQueues(next);
}
  }

  function handleDenyRequest(requestId) {
    setRequests((prev) => prev.filter((r) => r.id !== requestId));
    resolveRequest(requestId).catch((err) => setPlayersError(err.message));
  }

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

  function handleLeaveTeamSelf(player) {
    handleSetPlayerTeam(player.id, "");
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

    let next = queues;
    for (const court of playingCourts) {
      for (const freed of court.players) {
        const fullPlayer = players.find((p) => p.id === freed.id);
        if (fullPlayer && fullPlayer.present) {
          next = assignPresentPlayer(fullPlayer, next, players, newQueueId, skillBased);
        }
      }
    }
    persistQueues(next);
  }

  function handleDurationChange(minutes, manual = true) {
    if (manual) setAutoDuration(false);
    setDuration(minutes);
    saveDuration(minutes).catch((err) => setPlayersError(err.message));
  }

  // Counts full (4-player) courts and full (4-player) queues — i.e. complete
  // teams currently playing or waiting to play. Partially-filled queues
  // don't count.
  function countFullTeams(courtsList, queuesList) {
    const courtTeams = courtsList.filter((c) => (c.players || []).length === 4).length;
    const queueTeams = queuesList.filter((q) => (q.players || []).length === 4).length;
    return courtTeams + queueTeams;
  }
  function handleLogout() {
    logout();
    router.replace("/login");
  }

  const isAdmin = session?.role === "admin";
  const currentPlayer = session ? players.find((p) => p.id === session.id) : null;
  const showSidebar = (isAdmin && sidebarOpen) || (!isAdmin && !!currentPlayer);
  const currentPlayerId = currentPlayer?.id ?? null;

  // Requests are scoped per-role: admin subscribes to every pending request,
  // a player only ever fetches/subscribes to their own single row so other
  // players' requests never reach their client.
  useEffect(() => {
    if (!session) return;

    if (isAdmin) {
      let cancelled = false;
      const refresh = () =>
        getAllRequests()
          .then((data) => {
            if (!cancelled) setRequests(data);
          })
          .catch((err) => setPlayersError(err.message));

      refresh();
      const unsubscribe = subscribeToAllRequests(refresh);
      return () => {
        cancelled = true;
        unsubscribe();
      };
    }

    if (currentPlayerId) {
      let cancelled = false;
      const refresh = () =>
        getOwnRequest(currentPlayerId)
          .then((data) => {
            if (!cancelled) setMyRequest(data);
          })
          .catch((err) => setPlayersError(err.message));

refresh();
const unsubscribe = subscribeToOwnRequest(currentPlayerId, () => {
  refresh();
  refreshPlayers();
});
return () => {
  cancelled = true;
  unsubscribe();
};
}
}, [session, isAdmin, currentPlayerId, refreshPlayers]);

  // Auto match length: 6 full teams (courts + queues combined) -> 20m,
  // 7+ -> 15m. Only applies while autoDuration is on; a manual change via
  // handleDurationChange turns it off so the admin's choice sticks.
  useEffect(() => {
    if (!isAdmin || !autoDuration) return;
    const totalTeams = countFullTeams(courts, queues);
    const target = totalTeams >= 7 ? 15 : 20;
    if (target !== duration) {
      handleDurationChange(target, false);
    }
  }, [isAdmin, autoDuration, courts, queues]);

  const canPlay =
    queues.length >= 3 &&
    queues[0]?.players.length === 4 &&
    queues[1]?.players.length === 4 &&
    queues[2]?.players.length === 4;

  // Auto "Match finished": once a running court's timer (endsAt) has
  // passed, trigger the same logic the button does. Button stays visible.
  useEffect(() => {
    if (!isAdmin) return;
    const interval = setInterval(() => {
      const expired = courts.some(
        (c) => c.running && c.endsAt && Date.now() >= c.endsAt
      );
      if (expired) handleMatchFinished();
    }, 1000);
    return () => clearInterval(interval);
  }, [isAdmin, courts, queues, players, skillBased]);

  // Auto "Play": once queues 1-3 are full (canPlay), wait 1 minute then
  // trigger the same logic the button does, unless it stops being ready
  // before the minute is up. Button stays visible.
  const courtsEmpty = courts.every((c) => !c.running && (c.players || []).length === 0);

  useEffect(() => {
    if (!isAdmin || !canPlay || !courtsEmpty) {
      setAutoPlayIn(null);
      return;
    }
    const target = Date.now() + 60 * 1000;
    setAutoPlayIn(60);

    const tick = setInterval(() => {
      const secsLeft = Math.max(0, Math.ceil((target - Date.now()) / 1000));
      setAutoPlayIn(secsLeft);
    }, 1000);

    const timeout = setTimeout(() => {
      handlePlay();
    }, 60 * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(timeout);
    };
  }, [isAdmin, canPlay, courtsEmpty, queues, courts, duration]);

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
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[var(--yellow)]" />
            <h1 className="font-semibold tracking-tight">Miagao Pickleball Club</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{formatPlayerName(session?.name)}</span>
            <button onClick={handleLogout} className="text-sm text-[var(--blue)] font-medium">
              Log out
            </button>
          </div>
        </div>
      </header>

      {myStatus === "playing" && (
        <div className="bg-green-600 text-white text-sm font-medium text-center py-2 px-4">
          You're currently playing, {formatPlayerName(session?.name)}
        </div>
      )}
      {myStatus === "next" && (
        <div className="bg-red-600 text-white text-sm font-medium text-center py-2 px-4">
          You're next to play, {formatPlayerName(session?.name)}
        </div>
      )}

      <div
        className={`max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 gap-8 ${
          showSidebar ? "lg:grid-cols-[1fr_280px]" : "lg:grid-cols-1"
        }`}
      >
        <div className="space-y-8">
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Courts
              </h2>
              <div className="flex items-center gap-3">
                {isAdmin && (
                  <button
                    onClick={handleMatchFinished}
                    disabled={!courts.some((c) => c.players.length > 0)}
                    className="text-sm text-[var(--blue)] font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Match finished
                  </button>
                )}
                {isAdmin && (
                  <button
                    onClick={() => setSidebarOpen((o) => !o)}
                    className="text-sm text-gray-400 hover:text-[var(--blue)] font-medium"
                    title={sidebarOpen ? "Hide panel" : "Show panel"}
                  >
                    {sidebarOpen ? "› Hide panel" : "‹ Show panel"}
                  </button>
                )}
              </div>
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
                  <button
                    onClick={() => setAutoDuration((a) => !a)}
                    title="Auto: 7+ full teams (courts + queues) -> 15m, else 20m"
                    className={`text-xs font-medium px-2 py-1 rounded-lg border ${
                      autoDuration
                        ? "border-[var(--blue)] text-[var(--blue)] bg-[var(--blue)]/10"
                        : "border-[var(--border)] text-gray-400"
                    }`}
                  >
                    Auto
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-500">Queueing</label>
                  <div className="flex items-center rounded-lg border border-[var(--border)] overflow-hidden">
                    <button
                      onClick={() => setSkillBased(true)}
                      title="Group players so tiers are at most 1 apart"
                      className={`px-3 py-1 text-sm ${
                        skillBased
                          ? "bg-[var(--blue)] text-white"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      Skill-based
                    </button>
                    <button
                      onClick={() => setSkillBased(false)}
                      title="Fill queues in the order players become available"
                      className={`px-3 py-1 text-sm border-l border-[var(--border)] ${
                        !skillBased
                          ? "bg-[var(--blue)] text-white"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      Open Play
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePlay}
                    disabled={!canPlay}
                    className="rounded-lg bg-[var(--blue)] text-white font-medium text-sm px-5 py-2 hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ▶ Play — send queues 1–3 to courts
                  </button>
                  {autoPlayIn != null && (
                    <span className="text-xs text-gray-400">
                      Automatically starts in {autoPlayIn}s
                    </span>
                  )}
                </div>
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

        {isAdmin && sidebarOpen && (
          <aside className="space-y-4">
            {playersError && (
              <p className="text-sm text-red-600 mb-3">{playersError}</p>
            )}

            <RequestsPanel
              requests={requests}
              onApprove={handleApproveRequest}
              onDeny={handleDenyRequest}
            />

            <PresentPanel
              players={players}
              statusMap={statusMap}
              onTogglePresent={handleTogglePresent}
              onQueuePlayer={handleQueuePlayer}
              loading={loadingPlayers}
              onAddPlayerToTeam={handleAddPlayerToTeam}
              onRemovePlayerFromTeam={handleRemovePlayerFromTeam}
              onDeleteTeam={handleDeleteTeam}
              onQueueTeam={handleQueueTeam}
            />
          </aside>
        )}

        {!isAdmin && currentPlayer && (
          <aside>
            {playersError && (
              <p className="text-sm text-red-600 mb-3">{playersError}</p>
            )}

            <PlayerPanel
              player={currentPlayer}
              myRequest={myRequest}
              players={players}
              onRequestPresent={handleRequestPresent}
              onCancelRequest={handleCancelRequest}
              onMarkAbsent={handleTogglePresent}
              onRequestCreateTeam={handleRequestCreateTeam}
              onRequestJoinTeam={handleRequestJoinTeam}
              onLeaveTeam={handleLeaveTeamSelf}
            />
          </aside>
        )}
      </div>
    </main>
  );
}