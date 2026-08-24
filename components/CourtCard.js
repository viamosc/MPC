"use client";

import { useEffect, useState } from "react";
import { formatPlayerName } from "@/lib/formatName";

function formatTime(ms) {
  if (ms <= 0) return "0:00";
  const totalSeconds = Math.ceil(ms / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function CourtCard({ court }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!court.running) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [court.running]);

  const remaining = court.endsAt ? court.endsAt - now : 0;
  const timeUp = court.running && remaining <= 0;

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-800">{court.name}</h3>
        {/* {court.queueLabel && (
          <span className="text-xs font-medium bg-transparent border border-green-300 text-green-600 rounded-full px-2 py-0.5">
            {court.queueLabel}
          </span>
        )} */}
      </div>

      {court.running && (
        <div
          className={`text-sm font-medium mb-3 ${
            timeUp ? "text-red-600" : "text-[var(--blue)]"
          }`}
        >
          {timeUp ? "Time's up" : formatTime(remaining)}
        </div>
      )}

      {court.players.length === 0 ? (
        <p className="text-sm text-gray-400 mb-3">Waiting for players.</p>
      ) : (
        <ul className="space-y-1.5 mb-3">
          {court.players.map((player, i) => (
            <li
              key={player?.id ?? i}
              className="text-sm rounded-lg border border-[var(--border)] bg-white px-3 py-1.5"
            >
              {formatPlayerName(player?.name ?? player)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}