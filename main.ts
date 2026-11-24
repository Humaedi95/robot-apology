import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Apology — a two-line robot confession.
// Line 1: one sentence owning one specific mistake.
// Line 2: one sentence naming the lesson and the changed behaviour.
const text =
  "I'm sorry — I ordered forty kilos of rice instead of four, and the delivery driver is still unloading it.\n" +
  "I've learned to read every quantity back, unit and all, before I press confirm, so one misplaced zero can't feed the whole building again.\n";

// Validate the entry before writing it: the entry must be valid UTF-8,
// 1–400 characters, and exactly two non-empty lines. Fail loudly instead
// of writing a malformed entry.
function validateEntry(value: string): void {
  const roundTrip = Buffer.from(value, "utf8").toString("utf8");
  if (roundTrip !== value) {
    throw new Error("entry is not valid UTF-8");
  }
  if (value.length < 1 || value.length > 400) {
    throw new Error(
      `entry must be 1–400 characters, got ${value.length}`,
    );
  }
  const lines = value.replace(/\n$/, "").split("\n");
  if (lines.length !== 2 || lines.some((line) => line.trim() === "")) {
    throw new Error(
      `entry must be exactly two non-empty lines, got ${lines.length}`,
    );
  }
}

try {
  validateEntry(text);
} catch (error) {
  console.error(`error: ${(error as Error).message}`);
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
