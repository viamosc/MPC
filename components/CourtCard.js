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

export default function CourtCard({ court, isAdmin, onToggleActive }) {
  const [now, setNow] = useState(Date.now());
  const isOff = court.active === false;

  useEffect(() => {
    if (!court.running || isOff) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [court.running, isOff]);

  const remaining = court.endsAt ? court.endsAt - now : 0;
  const timeUp = court.running && remaining <= 0;

  return (
    <div
      className={`rounded-xl p-5 border transition-all ${
        isOff
          ? "bg-gray-100/70 border-gray-200 opacity-60"
          : "bg-green-50 border-green-200"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className={`font-medium ${isOff ? "text-gray-400" : "text-gray-800"}`}>
            {court.name}
          </h3>
          {isOff && (
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
              Off
            </span>
          )}
        </div>

        {isAdmin && onToggleActive && (
          <button
            onClick={() => onToggleActive(court.id)}
            className={`text-xs px-2 py-0.5 rounded font-medium border transition-colors ${
              isOff
                ? "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                : "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
            }`}
          >
            {isOff ? "Turn On" : "Turn Off"}
          </button>
        )}
      </div>

      {isOff ? (
        <p className="text-sm text-gray-400 italic mb-3">Court is disabled</p>
      ) : (
        <>
          {court.running && (
            <div
              className={`text-sm font-medium mb-3 ${
                timeUp ? "text-red-600" : "text-[var(--blue)]"
              }`}
            >
              {timeUp ? "Time's up" : formatTime(remaining)}
            </div>
          )}

          {(court.players || []).length === 0 ? (
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
        </>
      )}
    </div>
  );
}