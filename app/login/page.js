"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginPlayer } from "@/lib/players";
import { setSession } from "@/lib/store";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await loginPlayer(form);
    setLoading(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }
    setSession({ id: result.player.id, name: result.player.name, email: result.player.email });
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[var(--background)]">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <span className="w-3 h-3 rounded-full bg-[var(--yellow)]" />
          <h1 className="text-xl font-semibold tracking-tight">Miagao Pickleball Club</h1>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
          <h2 className="text-lg font-medium mb-1">Log in</h2>
          <p className="text-sm text-gray-500 mb-6">Welcome back.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
                placeholder="dvmoscoso@gmail.com"
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

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[var(--blue)] text-white py-2 text-sm font-medium hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-60"
            >
              {loading ? "Logging in…" : "Log in"}
            </button>
          </form>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[var(--blue)] font-medium">Register</Link>
        </p>
      </div>
    </main>
  );
}
