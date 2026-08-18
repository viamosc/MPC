// Session, courts, and queue state live in localStorage (single-device demo).
// Registered players and their skill level live in Supabase (see lib/players.js).


const SESSION_KEY = "pickleball_session";
function read(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

// ---------- Session ----------

export function getSession() {
  return read(SESSION_KEY, null);
}

export function setSession(session) {
  write(SESSION_KEY, session);
}

export function logout() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_KEY);
}

// ---------- Courts ----------
// Each court: { id, name, players: [names], queueLabel, endsAt, running }

const DEFAULT_COURTS = [
  { id: 1, name: "Court 1", players: [], queueLabel: null, endsAt: null, running: false },
  { id: 2, name: "Court 2", players: [], queueLabel: null, endsAt: null, running: false },
  { id: 3, name: "Court 3", players: [], queueLabel: null, endsAt: null, running: false },
];

import { supabase } from "@/lib/supabaseClient";

const STATE_ROW_ID = 1;

export async function getAppState() {
  const { data, error } = await supabase
    .from("app_state")
    .select("courts, queues, duration")
    .eq("id", STATE_ROW_ID)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function saveCourts(courts) {
  const { error } = await supabase
    .from("app_state")
    .update({ courts, updated_at: new Date().toISOString() })
    .eq("id", STATE_ROW_ID);

  if (error) throw new Error(error.message);
}

export async function saveQueues(queues) {
  const { error } = await supabase
    .from("app_state")
    .update({ queues, updated_at: new Date().toISOString() })
    .eq("id", STATE_ROW_ID);

  if (error) throw new Error(error.message);
}

export async function saveDuration(duration) {
  const { error } = await supabase
    .from("app_state")
    .update({ duration, updated_at: new Date().toISOString() })
    .eq("id", STATE_ROW_ID);

  if (error) throw new Error(error.message);
}

// Live-updates from other devices/tabs editing the same row.
export function subscribeToAppState(onChange) {
  const channel = supabase
    .channel("app_state_changes")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "app_state", filter: `id=eq.${STATE_ROW_ID}` },
      (payload) => onChange(payload.new)
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}