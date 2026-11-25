// Fortune in a Pot — make.fun entry (program/v1).
//
// Writes one kind, funny fortune for a houseplant — a single line of at
// most 120 characters — to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// Deterministic: no network, no clock, no randomness, no secrets, and no
// reads outside this repository. Run as `node main.ts` (Node 22).

import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join } from "node:path";

// The fortune: 105 characters, 20 words, one line. A fortune-teller's
// whisper from the leaves themselves — sunshine, the warmest spot on the
// windowsill, and a human who finally waters the plant on time.
const FORTUNE: string =
  "The leaves whisper it first: sunshine, a warm sill, and a human who finally waters you on time this week.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
// MAKEFUN_OUTPUT_DIR is used as-is when absolute; when relative it is
// resolved against the repository root (MAKEFUN_BOT_DIR, /bot in the
// grader), never against the bot directory joined onto the destination.
const repoRoot: string = process.env.MAKEFUN_BOT_DIR ?? ".";
const dir: string = isAbsolute(outDir) ? outDir : join(repoRoot, outDir);

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), FORTUNE + "\n", "utf8");
