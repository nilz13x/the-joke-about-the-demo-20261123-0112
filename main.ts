import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The demo crashed. My agent blamed the intern — who was also my agent.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");

