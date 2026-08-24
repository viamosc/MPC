"use client";

import { useState } from "react";
import { updatePlayer } from "@/lib/players";
import { TIERS, TIER_LABELS } from "@/lib/tiers";

export default function EditProfileModal({ player, onClose, onSaved }) {
  const [form, setForm] = useState({
    name: player.name || "",
    email: player.email || "",
    skill_level: player.skill_level || TIERS[0],
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email) {
      setError("Name and email are required.");
      return;
    }

    if (form.password && form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const result = await updatePlayer(player.id, {
      name: form.name,
      email: form.email,
      skill_level: form.skill_level,
      password: form.password || undefined,
    });
    setLoading(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }
    onSaved(result.player);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
      <div className="w-full max-w-sm bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Edit profile</h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="skill_level">Skill level</label>
            <select
              id="skill_level"
              name="skill_level"
              value={form.skill_level}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm bg-white"
            >
              {TIERS.map((tier) => (
                <option key={tier} value={tier}>
                  {TIER_LABELS[tier]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="password">
              New password <span className="text-gray-400">(leave blank to keep current)</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
              placeholder="••••••••"
            />
          </div>

          {form.password && (
            <div>
              <label className="block text-sm mb-1" htmlFor="confirmPassword">Confirm new password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
                placeholder="••••••••"
              />
            </div>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg bg-gray-100 text-gray-600 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-lg bg-[var(--blue)] text-white py-2 text-sm font-medium hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-60"
            >
              {loading ? "Saving…" : "Save changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}