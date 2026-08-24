// Formats a full name as "First I.I." — first name kept as-is, every
// subsequent word collapsed to its initial + period, no spaces between
// initials.
//
//   formatPlayerName("Darah Via Moscoso") -> "Darah V.M."
//   formatPlayerName("Alex Mart")         -> "Alex M."
//   formatPlayerName("Cher")              -> "Cher"
export function formatPlayerName(fullName) {
  if (!fullName) return "";
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 1) return parts[0] || "";
  const [first, ...rest] = parts;
  const initials = rest.map((w) => `${w[0].toUpperCase()}.`).join("");
  return `${first} ${initials}`;
}