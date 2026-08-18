"use client";

import { TIER_LABELS } from "@/lib/tiers";

const TIER_COLORS = {
  newbie: "bg-gray-100 text-gray-600",
  beginner: "bg-blue-50 text-[var(--blue)]",
  novice: "bg-yellow-50 text-[var(--yellow-dark)]",
  intermediate: "bg-[var(--blue)] text-white",
};

const STATUS_LABELS = {
  playing: "Playing",
  queued: "In queue",
};

const STATUS_STYLES = {
  playing: "bg-[var(--yellow)] text-[var(--blue-dark)]",
  queued: "bg-yellow-100 text-[var(--yellow-dark)]",
};

function PlayerRow({ p, status, onTogglePresent }) {
  return (
    <li className="flex items-center justify-between gap-2 text-sm">
      <div className="min-w-0">
        <p className="truncate">{p.name}</p>
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
      <button
        onClick={() => onTogglePresent(p)}
        className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 transition-colors ${
          p.present
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
        }`}
      >
        {p.present ? "Present" : "Absent"}
      </button>
    </li>
  );
}

export default function PresentPanel({ players, statusMap, onTogglePresent, loading }) {
  const present = players.filter((p) => p.present);
  const absent = players.filter((p) => !p.present);

  return (
    <div className="space-y-6">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          Present ({present.length})
        </h2>

        {loading ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : present.length === 0 ? (
          <p className="text-sm text-gray-400">No one marked present yet.</p>
        ) : (
          <ul className="space-y-2">
            {present.map((p) => (
              <PlayerRow
                key={p.id}
                p={p}
                status={statusMap[p.id]}
                onTogglePresent={onTogglePresent}
              />
            ))}
          </ul>
        )}
      </div>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          Absent ({absent.length})
        </h2>

        {loading ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : absent.length === 0 ? (
          <p className="text-sm text-gray-400">Everyone registered is present.</p>
        ) : (
          <ul className="space-y-2">
            {absent.map((p) => (
              <PlayerRow
                key={p.id}
                p={p}
                status={null}
                onTogglePresent={onTogglePresent}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
