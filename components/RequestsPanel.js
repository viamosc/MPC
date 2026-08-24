"use client";

import { formatPlayerName } from "@/lib/formatName";

function describeRequest(request) {
  if (request.type === "team_create") return "Create a new team";
  if (request.type === "team_join") return `Join ${request.team_id}`;
  return "Present + auto-queue";
}

function timeAgo(isoString) {
  const secs = Math.max(0, Math.floor((Date.now() - new Date(isoString).getTime()) / 1000));
  if (secs < 60) return "just now";
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  return `${hrs}h ago`;
}

export default function RequestsPanel({ requests, onApprove, onDeny }) {
  const sorted = [...requests].sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Requests
        </h2>
        {requests.length > 0 && (
          <span className="inline-flex items-center justify-center text-[11px] font-semibold rounded-full min-w-[1.25rem] h-5 px-1.5 bg-red-600 text-white">
            {requests.length}
          </span>
        )}
      </div>

      {sorted.length === 0 ? (
        <p className="text-sm text-gray-400">No pending requests.</p>
      ) : (
        <ul className="space-y-2 max-h-80 overflow-y-auto">
          {sorted.map((r) => (
            <li
              key={r.id}
              className="flex items-center justify-between gap-2 text-sm border border-[var(--border)] rounded-lg px-3 py-2"
            >
              <div className="min-w-0">
                <p className="break-words font-medium">{formatPlayerName(r.player_name)}</p>
                <p className="text-xs text-gray-500">{describeRequest(r)}</p>
                <p className="text-xs text-gray-400">{timeAgo(r.created_at)}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => onApprove(r)}
                  className="text-xs font-medium rounded-full px-3 py-1 bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  Approve
                </button>
                <button
                  onClick={() => onDeny(r.id)}
                  className="text-xs font-medium rounded-full px-3 py-1 bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  Deny
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}