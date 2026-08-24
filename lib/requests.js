import { supabase } from "@/lib/supabaseClient";

// One row per pending player request. A unique constraint on player_id
// means submitting a new request just replaces any existing pending one
// for that player, rather than creating a duplicate — a player can only
// have a single request in flight at a time.
//
// type: "presence" | "team_create" | "team_join"
// team_id: only set for "team_join" (the team being requested to join).
// "team_create" doesn't carry a team_id — the admin's approval assigns
// the next "Team N" label at approval time, avoiding label collisions
// between two players creating teams at the same moment.

async function upsertRequest(playerId, playerName, type, teamId) {
  const { error } = await supabase.from("player_requests").upsert(
    {
      player_id: playerId,
      player_name: playerName,
      type,
      team_id: teamId ?? null,
      created_at: new Date().toISOString(),
    },
    { onConflict: "player_id" }
  );

  if (error) throw new Error(error.message);
}

export function createPresenceRequest(playerId, playerName) {
  return upsertRequest(playerId, playerName, "presence", null);
}

export function createTeamCreateRequest(playerId, playerName) {
  return upsertRequest(playerId, playerName, "team_create", null);
}

export function createTeamJoinRequest(playerId, playerName, teamId) {
  return upsertRequest(playerId, playerName, "team_join", teamId);
}

// Cancels whatever request (of any type) this player currently has pending.
export async function cancelRequest(playerId) {
  const { error } = await supabase
    .from("player_requests")
    .delete()
    .eq("player_id", playerId);

  if (error) throw new Error(error.message);
}

// Resolves (approves or denies) a request by deleting its row.
export async function resolveRequest(requestId) {
  const { error } = await supabase
    .from("player_requests")
    .delete()
    .eq("id", requestId);

  if (error) throw new Error(error.message);
}

// Admin-only: every pending request, oldest first.
export async function getAllRequests() {
  const { data, error } = await supabase
    .from("player_requests")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

// Player-only: just this player's own pending request, if any.
export async function getOwnRequest(playerId) {
  const { data, error } = await supabase
    .from("player_requests")
    .select("*")
    .eq("player_id", playerId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
}

// Admin-only: live updates across the whole requests table.
export function subscribeToAllRequests(onChange) {
  const channel = supabase
    .channel("player_requests_admin")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "player_requests" },
      onChange
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}

// Player-only: live updates filtered server-side to just this player's row,
// so a player's client never receives other players' request data.
export function subscribeToOwnRequest(playerId, onChange) {
  const channel = supabase
    .channel(`player_requests_own_${playerId}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "player_requests",
        filter: `player_id=eq.${playerId}`,
      },
      onChange
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}