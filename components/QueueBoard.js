"use client";

import { TIER_LABELS } from "@/lib/tiers";

export default function QueueBoard({
  queues,
  availablePlayers,
  onRemovePlayer,
  onAddPlayer,
  onDeleteQueue,
  onAddQueue,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Queues
        </h2>
        <button
          onClick={onAddQueue}
          className="text-sm text-[var(--blue)] font-medium"
        >
          + New queue
        </button>
      </div>

      {queues.length === 0 ? (
        <p className="text-sm text-gray-400">
          No one queued yet. Mark players present to fill a queue automatically.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {queues.map((queue, i) => (
            <div
              key={queue.id}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-[var(--blue-dark)]">
                  Queue {i + 1}{" "}
                  <span className="text-xs font-normal text-gray-400">
                    {queue.players.length}/4
                  </span>
                </h3>
                <button
                  onClick={() => onDeleteQueue(queue.id)}
                  className="text-xs text-gray-400 hover:text-red-600"
                >
                  Delete
                </button>
              </div>

              {queue.players.length === 0 ? (
                <p className="text-sm text-gray-400 mb-3">Empty.</p>
              ) : (
                <ul className="space-y-1.5 mb-3">
                  {queue.players.map((p) => (
                    <li
                      key={p.id}
                      className="flex items-center justify-between gap-2 text-sm rounded-lg border border-[var(--border)] px-3 py-1.5"
                    >
                      <span className="truncate">
                        {p.name}{" "}
                        <span className="text-xs text-gray-400">
                          {TIER_LABELS[p.skill_level]}
                        </span>
                      </span>
                      <button
                        onClick={() => onRemovePlayer(queue.id, p.id)}
                        className="text-xs text-gray-400 hover:text-red-600 shrink-0"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {queue.players.length < 4 && availablePlayers.length > 0 && (
                <select
                  value=""
                  onChange={(e) => {
                    const player = availablePlayers.find(
                      (p) => p.id === e.target.value
                    );
                    if (player) onAddPlayer(queue.id, player);
                  }}
                  className="w-full rounded-lg border border-[var(--border)] px-2 py-1.5 text-sm bg-white"
                >
                  <option value="">+ Add player…</option>
                  {availablePlayers.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({TIER_LABELS[p.skill_level]})
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
