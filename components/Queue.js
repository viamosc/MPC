"use client";

import { useState } from "react";
import { formatPlayerName } from "@/lib/formatName";

export default function Queue({ queue, onAddTeam, onRemoveTeam }) {
  const [names, setNames] = useState(["", "", "", ""]);

  function handleNameChange(i, value) {
    const next = [...names];
    next[i] = value;
    setNames(next);
  }

  function handleAdd() {
    const players = names.map((n) => n.trim()).filter(Boolean);
    if (players.length === 0) return;
    onAddTeam(players);
    setNames(["", "", "", ""]);
  }

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
      <h3 className="font-medium text-[var(--blue-dark)] mb-4">Queue</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {names.map((n, i) => (
          <input
            key={i}
            type="text"
            value={n}
            onChange={(e) => handleNameChange(i, e.target.value)}
            placeholder={`Player ${i + 1}`}
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm placeholder:text-gray-400"
          />
        ))}
      </div>
      <button
        onClick={handleAdd}
        className="rounded-lg bg-[var(--yellow)] text-[var(--blue-dark)] font-medium text-sm px-4 py-1.5 mb-5 hover:bg-[var(--yellow-dark)] hover:text-white transition-colors"
      >
        Add team to queue
      </button>

      {queue.length === 0 ? (
        <p className="text-sm text-gray-400">No teams waiting.</p>
      ) : (
        <ol className="space-y-2">
          {queue.map((team, i) => (
            <li
              key={team.id}
              className="flex items-center justify-between gap-3 border border-[var(--border)] rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--blue)] text-white text-xs font-medium shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm">
                  {team.players.map(formatPlayerName).join(", ")}
                </span>
              </div>
              <button
                onClick={() => onRemoveTeam(team.id)}
                className="text-xs text-gray-400 hover:text-red-600 shrink-0"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}