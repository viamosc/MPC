"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerPlayer } from "@/lib/players";
import { TIERS, TIER_LABELS } from "@/lib/tiers";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    skill_level: TIERS[0],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("Fill in every field.");
      return;
    }

    setLoading(true);
    const result = await registerPlayer(form);
    setLoading(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[var(--background)]">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <span className="w-3 h-3 rounded-full bg-[var(--yellow)]" />
          <h1 className="text-xl font-semibold tracking-tight">Miagao Pickleball Club</h1>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
          <h2 className="text-lg font-medium mb-1">Create an account</h2>
          <p className="text-sm text-gray-500 mb-6">Register to join the player pool.</p>

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
                placeholder="Jane Doe"
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
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="password">Password</label>
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

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[var(--blue)] text-white py-2 text-sm font-medium hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-60"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-[var(--blue)] font-medium">Log in</Link>
        </p>
      </div>
    </main>
  );
}
