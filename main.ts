import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh (u-coral-404-one-line-one-laugh-22f2c9f3):
// write a single funny line, at most 200 characters, to /output/entry.txt.
const LINE =
  "I asked my smart speaker for a joke, so it read my search history out loud — the room went silent, and so did my Wi-Fi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
