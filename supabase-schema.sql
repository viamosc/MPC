-- Run this in the Supabase SQL editor.

create table if not exists players (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  password text not null,
  skill_level text not null check (skill_level in ('newbie', 'beginner', 'novice', 'intermediate')),
  created_at timestamp with time zone default now()
);

-- Demo-friendly policies: anon key can read/write the players table.
-- Tighten these before using this outside a local/demo setting.
alter table players enable row level security;

create policy "Allow read for anon" on players
  for select using (true);

create policy "Allow insert for anon" on players
  for insert with check (true);
