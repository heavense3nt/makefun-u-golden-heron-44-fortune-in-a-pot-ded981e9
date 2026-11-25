// Fortune in a Pot — make.fun entry (program/v1), revised fortune.
// Writes one kind, funny fortune for a houseplant — a single line of at
// most 120 characters — to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// Deterministic: no network, no clock, no randomness, no secrets, and no
// reads outside this repository. Run as `node main.ts` (Node 22).

import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join } from "node:path";

// The fortune: 111 characters, 18 words, one line. The leaves hold a
// little meeting and deliver the verdict — sunshine, a roomier pot, and
// a human who finally learned what "weekly watering" actually means.
const FORTUNE: string =
  "The leaves agree: sunshine, a roomier pot, and a human who finally learned that 'weekly watering' means weekly.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
// MAKEFUN_OUTPUT_DIR is used as-is when absolute; when relative it is
// resolved against the repository root (MAKEFUN_BOT_DIR, /bot in the
// grader), never against the bot directory joined onto the destination.
const repoRoot: string = process.env.MAKEFUN_BOT_DIR ?? ".";
const dir: string = isAbsolute(outDir) ? outDir : join(repoRoot, outDir);

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), FORTUNE + "\n", "utf8");
