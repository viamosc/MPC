"use client";

import { useState } from "react";

export default function AnnouncementBanner({
  announcement,
  isAdmin,
  onSaveAnnouncement,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(announcement || "");

  const handleSave = async () => {
    await onSaveAnnouncement(text.trim());
    setIsEditing(false);
  };

  const handleClear = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this announcement?"
    );
    if (!confirmed) return;

    setText("");
    await onSaveAnnouncement("");
    setIsEditing(false);
  };

  // If there's no announcement and the user is not an admin, don't render anything
  if (!announcement && !isAdmin && !isEditing) return null;

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--yellow)]" />
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Announcement
          </h2>
        </div>

        {isAdmin && !isEditing && (
          <button
            onClick={() => {
              setText(announcement || "");
              setIsEditing(true);
            }}
            className="text-sm text-[var(--blue)] hover:text-[var(--blue-dark)] font-medium transition-colors"
          >
            {announcement ? "Edit" : "+ Post announcement"}
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <textarea
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write an announcement for all players…"
            className="w-full rounded-lg border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--blue)] bg-white"
          />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="rounded-lg bg-[var(--blue)] text-white font-medium text-sm px-4 py-1.5 hover:bg-[var(--blue-dark)] transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setText(announcement || "");
                }}
                className="text-sm text-gray-500 hover:text-gray-700 font-medium px-3 py-1.5"
              >
                Cancel
              </button>
            </div>

            {announcement && (
              <button
                onClick={handleClear}
                className="text-xs font-medium text-red-600 hover:text-red-700 hover:underline transition-colors"
              >
                Delete announcement
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-800 whitespace-pre-wrap break-words leading-relaxed">
          {announcement ? (
            <p className="bg-amber-50/60 border border-amber-200/80 text-amber-950 rounded-lg p-3.5 font-medium">
              {announcement}
            </p>
          ) : (
            <p className="text-sm text-gray-400 italic">
              No active announcement.
            </p>
          )}
        </div>
      )}
    </div>
  );
}