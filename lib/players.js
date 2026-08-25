import { supabase } from "@/lib/supabaseClient";

export async function registerPlayer({ name, email, password, skill_level }) {
  const { data: existing } = await supabase
    .from("players")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (existing) {
    return { ok: false, error: "An account with this email already exists." };
  }

  const { data, error } = await supabase
    .from("players")
    .insert({ name, email, password, skill_level, present: false })
    .select()
    .single();

  if (error) return { ok: false, error: error.message };
  return { ok: true, player: data };
}

export async function loginPlayer({ email, password }) {
  const { data, error } = await supabase
    .from("players")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .maybeSingle();

  if (error) return { ok: false, error: error.message };
  if (!data) return { ok: false, error: "Incorrect email or password." };
  return { ok: true, player: data };
}

export async function getAllPlayers() {
  const { data, error } = await supabase
    .from("players")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function setPlayerPresent(id, present) {
  const { error } = await supabase
    .from("players")
    .update({ present })
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function setPlayerTeam(id, team_id) {
  const { error } = await supabase
    .from("players")
    .update({ team_id: team_id || null })
    .eq("id", id);

  if (error) throw new Error(error.message);
}
export function subscribeToPlayers(onChange) {
  const channel = supabase
    .channel(`players_changes_${Math.random().toString(36).slice(2)}`)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "players" },
      () => onChange()
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}

export async function updatePlayer(id, { name, email, skill_level, password }) {
  if (email) {
    const { data: existing } = await supabase
      .from("players")
      .select("id")
      .eq("email", email)
      .neq("id", id)
      .maybeSingle();

    if (existing) {
      return { ok: false, error: "An account with this email already exists." };
    }
  }

  const updates = { name, email, skill_level };
  if (password) updates.password = password;

  const { data, error } = await supabase
    .from("players")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return { ok: false, error: error.message };
  return { ok: true, player: data };
}

export async function setPlayerSuspended(playerId, suspended) {
  const { data, error } = await supabase
    .from("players")
    .update({ suspended })
    .eq("id", playerId)
    .select()
    .single();

  if (error) throw error;
  return data;
}