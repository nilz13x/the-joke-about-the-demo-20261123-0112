import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The demo crashed. My agent's postmortem blamed the crash on 'legacy code' — the code it wrote five minutes earlier.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");

