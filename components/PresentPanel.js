"use client";

import { useState } from "react";
import { TIER_LABELS } from "@/lib/tiers";
import { formatPlayerName } from "@/lib/formatName";
import TeamManager from "@/components/TeamManager";

const TIER_COLORS = {
  newbie: "bg-gray-100 text-gray-600",
  beginner: "bg-blue-50 text-[var(--blue)]",
  novice: "bg-yellow-50 text-[var(--yellow-dark)]",
  intermediate: "bg-[var(--blue)] text-white",
  executive: "bg-slate-900 text-amber-300",
};

const STATUS_LABELS = {
  playing: "Playing",
  queued: "In queue",
};

const STATUS_STYLES = {
  playing: "bg-[var(--yellow)] text-[var(--blue-dark)]",
  queued: "bg-yellow-100 text-[var(--yellow-dark)]",
};

function PlayerRow({ p, status, onTogglePresent, onQueuePlayer }) {
  return (
    <li className="flex items-center justify-between gap-2 text-sm py-2">
      <div className="min-w-0">
        <p className="break-words">{formatPlayerName(p.name)}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${
              TIER_COLORS[p.skill_level] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {TIER_LABELS[p.skill_level]}
          </span>
          {status && (
            <span
              className={`inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${STATUS_STYLES[status]}`}
            >
              {STATUS_LABELS[status]}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={() => onTogglePresent(p)}
          className={`text-xs font-medium rounded-full px-3 py-1 transition-colors ${
            p.present
              ? "bg-gray-100 text-gray-500 hover:bg-gray-200"
              : "bg-green-600 text-white hover:bg-green-70"
          }`}
        >
          {p.present ? "Mark as Absent" : "Mark as Present"}
        </button>
        {p.present && !status && (
          <button
            onClick={() => onQueuePlayer(p)}
            className="text-xs font-medium rounded-full w-7 h-7 flex items-center justify-center bg-[var(--blue)] text-white hover:bg-[var(--blue-dark)] transition-colors"
          >
            Q
          </button>
        )}
      </div>
    </li>
  );
}

function PlayerList({ players, statusMap, onTogglePresent, onQueuePlayer, emptyLabel }) {
  if (players.length === 0) {
    return <p className="text-sm text-gray-400">{emptyLabel}</p>;
  }
  return (
    <ul className="max-h-80 overflow-y-auto divide-y divide-[var(--border)]">
      {players.map((p) => (
        <PlayerRow
          key={p.id}
          p={p}
          status={statusMap ? statusMap[p.id] : null}
          onTogglePresent={onTogglePresent}
          onQueuePlayer={onQueuePlayer}
        />
      ))}
    </ul>
  );
}

function CollapsiblePanel({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between"
      >
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          {title}
        </h2>
        <span className="text-gray-400 text-xs">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default function PresentPanel({
  players,
  statusMap,
  onTogglePresent,
  onQueuePlayer,
  loading,
  // team management passthrough
  onAddPlayerToTeam,
  onRemovePlayerFromTeam,
  onDeleteTeam,
  onQueueTeam,
}) {
  const [presentSearch, setPresentSearch] = useState("");
  const [absentSearch, setAbsentSearch] = useState("");

  const present = players.filter((p) => p.present);
  const absent = players.filter((p) => !p.present);

  const filteredPresent = present.filter((p) =>
    p.name.toLowerCase().includes(presentSearch.toLowerCase())
  );
  const filteredAbsent = absent.filter((p) =>
    p.name.toLowerCase().includes(absentSearch.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <CollapsiblePanel title={`Present (${present.length})`}>
        <input
          type="text"
          value={presentSearch}
          onChange={(e) => setPresentSearch(e.target.value)}
          placeholder="Search present players…"
          className="w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm mb-3"
        />
        {loading ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : (
          <PlayerList
            players={filteredPresent}
            statusMap={statusMap}
            onTogglePresent={onTogglePresent}
            onQueuePlayer={onQueuePlayer}
            emptyLabel={
              presentSearch ? "No matches." : "No one marked present yet."
            }
          />
        )}
      </CollapsiblePanel>

      <CollapsiblePanel title={`Absent (${absent.length})`} defaultOpen={false}>
        <input
          type="text"
          value={absentSearch}
          onChange={(e) => setAbsentSearch(e.target.value)}
          placeholder="Search absent players…"
          className="w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm mb-3"
        />
        {loading ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : (
          <PlayerList
            players={filteredAbsent}
            statusMap={null}
            onTogglePresent={onTogglePresent}
            onQueuePlayer={onQueuePlayer}
            emptyLabel={
              absentSearch ? "No matches." : "Everyone registered is present."
            }
          />
        )}
      </CollapsiblePanel>

      <CollapsiblePanel title="Team" defaultOpen={false}>
        <div className="max-h-80 overflow-y-auto">
          <TeamManager
            players={players}
            onAddPlayer={onAddPlayerToTeam}
            onRemovePlayer={onRemovePlayerFromTeam}
            onDeleteTeam={onDeleteTeam}
            onQueueTeam={onQueueTeam}
          />
        </div>
      </CollapsiblePanel>
    </div>
  );
}