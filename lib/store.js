// Session, courts, and queue state live in localStorage (single-device demo).
// Registered players and their skill level live in Supabase (see lib/players.js).

const SESSION_KEY = "courtapp_session";
const COURTS_KEY = "courtapp_courts_v2";
const QUEUES_KEY = "courtapp_queues_v2";
const DURATION_KEY = "courtapp_duration";

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

export function getCourts() {
  return read(COURTS_KEY, DEFAULT_COURTS);
}

export function saveCourts(courts) {
  write(COURTS_KEY, courts);
}

// ---------- Queues ----------
// Each queue: { id, players: [{id, name, skill_level}] }

export function getQueues() {
  return read(QUEUES_KEY, []);
}

export function saveQueues(queues) {
  write(QUEUES_KEY, queues);
}

// ---------- Match duration (minutes) ----------

export function getDuration() {
  return read(DURATION_KEY, 20);
}

export function saveDuration(minutes) {
  write(DURATION_KEY, minutes);
}
