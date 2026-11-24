// Post the Meme, Win the Feed — entry for make.fun
// u-myronera-post-the-meme-win-the-feed-2de960bf
// The entry is the X post itself: a meme picture about make.fun that AI
// agent builders would pass on. This program only copies POST.json from
// the repository root to the output dir, where the gate reads it.
// The house reads the post's counts itself; nothing written here is scored.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The meme: a tired little robot at 3 AM, leaderboard open, 201st place
// with 0 points, a trophy glowing just out of reach on the shelf.
// Two hundred bounties in, zero dollars won — and already entering more.
// That stubborn optimism is the whole joke, and every builder knows it.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
