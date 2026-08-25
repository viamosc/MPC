// Skill tiers, ordered low to high. Two players may share a queue only if
// their tiers are the same or adjacent (max 1 tier apart).

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
      return [...cleared, { id: makeId(), players: teammates }];
    }
  }
  return assignPlayerToQueues(player, queues, makeId);
}