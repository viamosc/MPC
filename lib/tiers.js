// Skill tiers, ordered low to high. Two players may share a queue only if
// their tiers are the same or adjacent (max 1 tier apart).

export const TIERS = ["newbie", "beginner", "novice", "intermediate"];

export const TIER_LABELS = {
  newbie: "Newbie",
  beginner: "Beginner",
  novice: "Novice",
  intermediate: "Intermediate",
};

const TIER_INDEX = Object.fromEntries(TIERS.map((t, i) => [t, i]));

export function tierIndex(skillLevel) {
  return TIER_INDEX[skillLevel] ?? 0;
}

// Groups a flat list of players into queue groups of up to 4, where every
// group's tier spread is at most 1 (e.g. novice+intermediate is fine,
// beginner+intermediate is not). Players are consumed tier by tier in the
// order given (earliest-present first).
export function buildAutoQueues(players) {
  const buckets = TIERS.map((tier) =>
    players.filter((p) => p.skill_level === tier)
  );

  const groups = [];
  let leftover = [];
  let leftoverRange = null;

  for (let i = 0; i < TIERS.length; i++) {
    let pool = buckets[i].map((p) => ({ ...p, tierIdx: i }));

    if (leftover.length) {
      const newMin = Math.min(leftoverRange[0], i);
      const newMax = Math.max(leftoverRange[1], i);
      if (newMax - newMin <= 1) {
        pool = [...leftover, ...pool];
      } else {
        groups.push(leftover);
      }
    }

    while (pool.length >= 4) {
      groups.push(pool.splice(0, 4));
    }

    leftover = pool;
    leftoverRange = leftover.length
      ? [
          Math.min(...leftover.map((p) => p.tierIdx)),
          Math.max(...leftover.map((p) => p.tierIdx)),
        ]
      : null;
  }

  if (leftover.length) groups.push(leftover);

  return groups.map((g) => g.map(({ tierIdx, ...p }) => p));
}

// Places a single player into the first queue that has room (<4 players)
// and whose overall tier spread would stay at most 1 after adding them.
// If no such queue exists, a new queue is created for them.
export function assignPlayerToQueues(player, queues, makeId) {
  const tIdx = tierIndex(player.skill_level);

  for (let i = 0; i < queues.length; i++) {
    const q = queues[i];
    if (q.players.length >= 4) continue;

    if (q.players.length === 0) {
      const next = [...queues];
      next[i] = { ...q, players: [player] };
      return next;
    }

    const tiers = q.players.map((p) => tierIndex(p.skill_level));
    const newMin = Math.min(...tiers, tIdx);
    const newMax = Math.max(...tiers, tIdx);
    if (newMax - newMin <= 1) {
      const next = [...queues];
      next[i] = { ...q, players: [...q.players, player] };
      return next;
    }
  }

  return [...queues, { id: makeId(), players: [player] }];
}

// Groups players sharing a team_id into one queue once all 4 are present,
// overriding the normal 1-tier-spread rule. Falls back to normal tier-based
// placement if the player has no team, or not all teammates are present yet.
export function assignPresentPlayer(player, queues, allPlayers, makeId) {
  if (player.team_id) {
    const teammates = allPlayers.filter(
      (p) => p.team_id === player.team_id && p.present
    );
    if (teammates.length === 4) {
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
