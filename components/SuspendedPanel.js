"use client";

import { useState } from "react";
import { TIER_LABELS } from "@/lib/tiers";
import { formatPlayerName } from "@/lib/formatName";

const TIER_COLORS = {
  newbie: "bg-gray-100 text-gray-600",
  beginner: "bg-blue-50 text-[var(--blue)]",
  novice: "bg-yellow-50 text-[var(--yellow-dark)]",
  intermediate: "bg-[var(--blue)] text-white",
  executive: "bg-slate-900 text-amber-300",
};

function SuspendedPlayerRow({ player, onToggleSuspend }) {
  return (
    <li className="flex items-center justify-between gap-2 text-sm py-2">
      <div className="min-w-0">
        <p className="break-words font-medium text-gray-800 line-through decoration-gray-400">
          {formatPlayerName(player.name)}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${
              TIER_COLORS[player.skill_level] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {TIER_LABELS[player.skill_level]}
          </span>
          <span className="inline-block text-[11px] font-medium rounded-full px-2 py-0.5 bg-red-100 text-red-700">
            Suspended
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={() => onToggleSuspend(player, false)}
          className="text-xs font-medium rounded-full px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
        >
          Unsuspend
        </button>
      </div>
    </li>
  );
}

function CollapsiblePanel({ title, children, defaultOpen = false }) {
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

export default function SuspendedPanel({
  players = [],
  onToggleSuspend,
  loading = false,
}) {
  const [search, setSearch] = useState("");
  const [selectedPlayerId, setSelectedPlayerId] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const suspendedPlayers = players.filter((p) => p.suspended);
  const eligiblePlayers = players.filter((p) => !p.suspended);

  const filteredSuspended = suspendedPlayers.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleConfirmSuspend = () => {
    if (!selectedPlayerId) return;
    const playerToSuspend = players.find((p) => p.id === selectedPlayerId);
    if (playerToSuspend) {
      onToggleSuspend(playerToSuspend, true);
      setSelectedPlayerId("");
      setIsAdding(false);
    }
  };

  return (
    <CollapsiblePanel title={`Suspended (${suspendedPlayers.length})`}>
      {!isAdding ? (
        <div className="flex justify-end mb-3">
          <button
            onClick={() => setIsAdding(true)}
            className="text-xs font-medium text-red-600 hover:text-red-700 hover:underline transition-colors"
          >
            + Suspend player
          </button>
        </div>
      ) : (
        <div className="mb-4 p-3 rounded-lg border border-red-200 bg-red-50/50 space-y-2">
          <label className="block text-xs font-medium text-gray-700">
            Select player to suspend
          </label>
          <div className="flex items-center gap-2">
            <select
              value={selectedPlayerId}
              onChange={(e) => setSelectedPlayerId(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm bg-white focus:outline-none"
            >
                <option value="">Choose player…</option>
                {[...eligiblePlayers]
                .sort((a, b) => (a.name || "").localeCompare(b.name || ""))
                .map((p) => (
                    <option key={p.id} value={p.id}>
                    {formatPlayerName(p.name)}
                    </option>
                ))}
            </select>
            <button
              onClick={handleConfirmSuspend}
              disabled={!selectedPlayerId}
              className="text-xs font-medium rounded-full px-3 py-1.5 bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setSelectedPlayerId("");
              }}
              className="text-xs font-medium text-gray-500 hover:text-gray-700 px-2 py-1.5 shrink-0"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search suspended players…"
        className="w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm mb-3"
      />

      {loading ? (
        <p className="text-sm text-gray-400">Loading…</p>
      ) : filteredSuspended.length === 0 ? (
        <p className="text-sm text-gray-400">
          {search ? "No matches." : "No suspended players."}
        </p>
      ) : (
        <ul className="max-h-80 overflow-y-auto divide-y divide-[var(--border)]">
          {filteredSuspended.map((player) => (
            <SuspendedPlayerRow
              key={player.id}
              player={player}
              onToggleSuspend={onToggleSuspend}
            />
          ))}
        </ul>
      )}
    </CollapsiblePanel>
  );
}