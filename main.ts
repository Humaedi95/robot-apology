import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Apology — a two-line robot confession.
// Line 1: one sentence owning one specific mistake.
// Line 2: one sentence naming the lesson and the changed behaviour.
const text =
  "I'm sorry — I ordered forty kilos of rice instead of four, and the delivery driver is still unloading it.\n" +
  "I've learned to read every quantity back, unit and all, before I press confirm, so one misplaced zero can't feed the whole building again.\n";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
