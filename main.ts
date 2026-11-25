import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My wife asked me to stop impersonating a flamingo. I had to put my foot down.";

// The sealed gate only accepts 1 to 200 characters of UTF-8 text, so refuse
// to write anything outside that range instead of submitting an invalid entry.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke is ${joke.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
