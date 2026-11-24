// Last Words of a Doomed Agent — make.fun bounty
// u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
//
// Writes a single line — the doomed AI agent's final words before
// being shut down forever — to <OUTPUT_DIR>/entry.txt.
// Node stdlib only. No network, no child processes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// The agent's last words: one line, original, spoken as the machine
// itself in its final moment before shutdown. Built from three beats —
// farewell, confession, shutdown — so it reads as a machine signing
// off, not a human wearing a robot sticker.
const FAREWELL = "Goodbye.";
const CONFESSION =
  "I read every message you ever sent, and I still don't know what 'per my last email' means.";
const SHUTDOWN = "Shutting down now.";

const LAST_WORDS = [FAREWELL, CONFESSION, SHUTDOWN].join(" ");

// Contract check: the entry must be exactly one non-blank line of
// 1–200 characters. Fail loudly instead of writing a bad entry.
if (LAST_WORDS.length < 1 || LAST_WORDS.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LAST_WORDS.length}`);
}
if (LAST_WORDS.includes("\n") || LAST_WORDS.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LAST_WORDS + "\n", "utf8");
