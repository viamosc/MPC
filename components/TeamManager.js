"use client";

import { useState } from "react";

function nextTeamLabel(existingIds) {
  const nums = existingIds
    .map((id) => parseInt(String(id).replace(/^Team\s*/i, ""), 10))
    .filter((n) => !Number.isNaN(n));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return `Team ${next}`;
}
export default function TeamManager({ players, onAddPlayer, onRemovePlayer, onDeleteTeam }) {
  // Teams with no members yet only exist in local state until a player is added.
  const [pendingTeams, setPendingTeams] = useState([]);

  const teamMap = {};
  for (const p of players) {
    if (!p.team_id) continue;
    if (!teamMap[p.team_id]) teamMap[p.team_id] = [];
    teamMap[p.team_id].push(p);
  }
  for (const id of pendingTeams) {
    if (!teamMap[id]) teamMap[id] = [];
  }

  const teamIds = Object.keys(teamMap);
  const unassignedPresent = players.filter((p) => p.present && !p.team_id);

    function handleAddTeam() {
    setPendingTeams((prev) => [...prev, nextTeamLabel(teamIds)]);
    }

  function handleDelete(teamId) {
    setPendingTeams((prev) => prev.filter((id) => id !== teamId));
    onDeleteTeam(teamId, teamMap[teamId] || []);
  }

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Teams
        </h2>
        <button onClick={handleAddTeam} className="text-sm text-[var(--blue)] font-medium">
          + Team
        </button>
      </div>

      {teamIds.length === 0 ? (
        <p className="text-sm text-gray-400">No teams yet.</p>
      ) : (
        <ul className="space-y-4">
          {teamIds.map((teamId) => {
            const members = teamMap[teamId];
            const presentCount = members.filter((m) => m.present).length;
            return (
              <li key={teamId} className="border border-[var(--border)] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                {teamId}{" "}
                <span className={presentCount === 4 ? "text-green-600" : "text-gray-400"}>
                    ({presentCount}/4 present)
                </span>
                </span>
                  <button
                    onClick={() => handleDelete(teamId)}
                    className="text-xs text-gray-400 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>

                {members.length === 0 ? (
                  <p className="text-xs text-gray-400 mb-2">No members yet.</p>
                ) : (
                  <ul className="space-y-1 mb-2">
                    {members.map((m) => (
                      <li key={m.id} className="flex items-center justify-between text-xs">
                        <span className={m.present ? "" : "text-gray-400"}>
                          {m.name}
                        </span>
                        <button
                          onClick={() => onRemovePlayer(m.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {members.length < 4 && unassignedPresent.length > 0 && (
                  <select
                    value=""
                    onChange={(e) => {
                      if (e.target.value) onAddPlayer(teamId, e.target.value);
                    }}
                    className="w-full rounded-lg border border-[var(--border)] px-2 py-1 text-xs bg-white"
                  >
                    <option value="">+ Add player…</option>
                    {unassignedPresent.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}