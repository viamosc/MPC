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
