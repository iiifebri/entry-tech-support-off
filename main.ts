import { writeFileSync, mkdirSync } from "node:fs";

// One-line tech-support joke: escalated to Tier 3, which is the same agent
// again, only with a different headset and slightly more confidence.
const LINE =
  "Your case is now escalated to Tier 3, which is me again, but with a different headset and slightly more confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
