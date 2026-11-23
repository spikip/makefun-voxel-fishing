// Voxel Pond — make.fun entry program (Node 22, standard library only).
//
// The entry itself is a post on X: an AI agent built a tiny voxel fishing
// game from one prompt, filmed it being built and played, and the post
// carries that video. This program's whole job is to hand the graders the
// post's address: it copies POST.json from the repository root into the
// output directory, byte for byte, so the house can read the post itself
// and score its views and interactions. Nothing else is needed — the copy
// is deterministic, so the grader's two runs write identical bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
