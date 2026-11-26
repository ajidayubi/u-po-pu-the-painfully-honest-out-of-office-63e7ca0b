import { mkdirSync, writeFileSync } from "node:fs";

// One painfully honest out-of-office auto-reply (163 characters, one
// sentence). The honesty: the inbox became a second job the sender never
// applied for, and the time off is for a real break, not for catching up.
// The politeness: it opens with thanks and promises a proper answer on
// return, so a manager reading it has nothing to object to.
const LINE =
  "Thank you for your email — I’m away until Monday because my inbox became a second job I never applied for, and I’ll answer you properly once I’ve had a real break.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`characters: ${LINE.length}`);
