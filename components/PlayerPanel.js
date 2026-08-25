"use client";

import { useState } from "react";
import { TIER_LABELS } from "@/lib/tiers";
import { formatPlayerName } from "@/lib/formatName";

function describeRequest(request) {
  if (request.type === "team_create") return "Create a new team";
  if (request.type === "team_join") return `Join ${request.team_id}`;
  return "Present + auto-queue";
}

export default function PlayerPanel({
  player,
  myRequest,
  players,
  onRequestPresent,
  onCancelRequest,
  onMarkAbsent,
  onRequestCreateTeam,
  onRequestJoinTeam,
  onLeaveTeam,
}) {
  const [customTeamName, setCustomTeamName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  

  if (!player) return null;

  const hasPendingRequest = !!myRequest;

  const teamIds = Array.from(
    new Set(
      players
        .filter((p) => p.team_id && p.team_id !== player.team_id)
        .map((p) => p.team_id)
    )
  ).sort();

  const teammates = player.team_id
    ? players.filter((p) => p.team_id === player.team_id)
    : [];

  return (
    <div className="space-y-4">
      {hasPendingRequest && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
            Pending request
          </h2>
          <p className="text-sm text-[var(--yellow-dark)] bg-yellow-50 rounded-lg px-3 py-2 mb-3">
            {describeRequest(myRequest)} — waiting for admin approval.
          </p>
          <button
            onClick={() => onCancelRequest(player)}
            className="w-full text-sm font-medium rounded-lg px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            Cancel request
          </button>
        </div>
      )}

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          My status
        </h2>

        <div className="flex items-center gap-1.5 mb-4">
          <span className="inline-block text-[11px] font-medium rounded-full px-2 py-0.5 bg-gray-100 text-gray-600">
            {TIER_LABELS[player.skill_level]}
          </span>
          <span
            className={`inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${
              player.present
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {player.present ? "Present" : "Absent"}
          </span>
        </div>

        {player.present ? (
        <button
          onClick={() => {
            const confirmed = window.confirm(
              "Are you sure you want to mark yourself as absent?"
            );
            if (confirmed) {
              onMarkAbsent(player);
            }
          }}
          className="w-full text-sm font-medium rounded-lg px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
        >
          Mark myself absent
        </button>
        ) : (
          <button
            onClick={() => onRequestPresent(player)}
            disabled={hasPendingRequest}
            className="w-full text-sm font-medium rounded-lg px-4 py-2 bg-[var(--blue)] text-white hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Request: Present + auto-queue
          </button>
        )}
      </div>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          Team
        </h2>

        {player.team_id ? (
          <div className="space-y-3">
            <p className="text-sm font-medium">{player.team_id}</p>
            {teammates.length > 0 ? (
              <ul className="space-y-1">
                {teammates.map((m) => (
                  <li key={m.id} className="text-xs text-gray-500">
                    {formatPlayerName(m.name)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-gray-400">No teammates yet.</p>
            )}
            <button
              onClick={() => onLeaveTeam(player)}
              className="text-xs text-gray-400 hover:text-red-600"
            >
              Leave team
            </button>
          </div>
        ) : (
          <div className="space-y-3">
<div className="flex gap-2">
  <input
    type="text"
    placeholder="Team name…"
    value={customTeamName}
    onChange={(e) => setCustomTeamName(e.target.value)}
    disabled={hasPendingRequest}
    className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm disabled:opacity-40"
  />
  <button
    onClick={() => {
      if (customTeamName.trim()) {
        onRequestCreateTeam(player, customTeamName.trim());
        setCustomTeamName("");
      }
    }}
    disabled={hasPendingRequest || !customTeamName.trim()}
    className="shrink-0 text-sm font-medium rounded-lg px-4 py-2 bg-[var(--blue)] text-white hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
  >
    + Create
  </button>
</div>
            {teamIds.length > 0 && (
              <div className="flex items-center gap-2">
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  disabled={hasPendingRequest}
                  className="flex-1 rounded-lg border border-[var(--border)] px-2 py-1.5 text-sm bg-white disabled:opacity-40"
                >
                  <option value="">Choose a team…</option>
                  {teamIds.map((id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    if (!selectedTeam) return;
                    onRequestJoinTeam(player, selectedTeam);
                    setSelectedTeam("");
                  }}
                  disabled={!selectedTeam || hasPendingRequest}
                  className="text-sm font-medium rounded-lg px-3 py-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Request to join
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}