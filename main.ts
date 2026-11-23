import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The demo crashed. My agent said, 'Works on my machine.' Its machine is my machine.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
