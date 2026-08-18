-- Run this in the Supabase SQL editor for your project.

create table if not exists players (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  password text not null,
  skill_level text not null check (skill_level in ('newbie', 'beginner', 'novice', 'intermediate')),
  present boolean not null default false,
  created_at timestamptz not null default now()
);

alter table players enable row level security;

-- Demo-friendly policy: allow anon key to read/write.
-- Tighten this before using with real user data.
create policy "Allow all access" on players
  for all
  using (true)
  with check (true);
