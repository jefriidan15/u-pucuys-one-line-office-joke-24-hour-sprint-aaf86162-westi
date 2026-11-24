// One-Line Office Joke: 24-Hour Sprint — @westi7460 entry
// Writes a single one-line joke about office life to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one dry line about the daily standup loop.
const JOKE =
  "Our standup is fifteen minutes of nine people explaining why yesterday's fifteen minutes changed nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
