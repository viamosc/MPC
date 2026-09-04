// Skill tiers, ordered low to high. Defined for display purposes
// (TIER_LABELS) only — queue assignment below is plain first-come-first-
// served and does not check tier at all.

export const TIERS = ["newbie", "beginner", "novice", "intermediate", "executive"];

export const TIER_LABELS = {
  newbie: "New",
  beginner: "Beg",
  novice: "Nov",
  intermediate: "Int",
  executive: "Exec",
};

const TIER_INDEX = Object.fromEntries(TIERS.map((t, i) => [t, i]));

export function tierIndex(skillLevel) {
  return TIER_INDEX[skillLevel] ?? 0;
}



// Places a single player into the first queue with space (<4 players),
// or creates a new queue if all are full.
export function assignPlayerToQueues(player, queues, makeId) {
  for (let i = 0; i < queues.length; i++) {
    const q = queues[i];
    if (q.players.length < 4) {
      const next = [...queues];
      next[i] = { ...q, players: [...q.players, player] };
      return next;
    }
  }

  return [...queues, { id: makeId(), players: [player] }];
}

// Places a whole group (e.g. a team) into the first queue that has room
// for *all* of them, or creates a new queue if none do. Keeps the group
// together instead of splitting it across queues.
export function assignGroupToQueues(group, queues, makeId) {
  if (!group || group.length === 0) return queues;
  for (let i = 0; i < queues.length; i++) {
    const q = queues[i];
    if (q.players.length + group.length <= 4) {
      const next = [...queues];
      next[i] = { ...q, players: [...q.players, ...group] };
      return next;
    }
  }

  return [...queues, { id: makeId(), players: group }];
}

export function assignPresentPlayer(player, queues, allPlayers, makeId) {
  if (player.team_id) {
    const teammates = allPlayers.filter(
      (p) => p.team_id === player.team_id && p.present
    );
    if (teammates.length > 1) {
      const teamIds = new Set(teammates.map((p) => p.id));
      const cleared = queues.map((q) => ({
        ...q,
        players: q.players.filter((p) => !teamIds.has(p.id)),
      }));
      // Fill an existing queue with room for the whole team (FCFS) before
      // opening a new one — repeated calls (e.g. approving teammates one
      // at a time) re-fill the same now-empty queue instead of abandoning
      // it and minting a fresh one each time.
      return assignGroupToQueues(teammates, cleared, makeId);
    }
  }
  return assignPlayerToQueues(player, queues, makeId);
}