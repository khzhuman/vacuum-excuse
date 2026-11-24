// The Robot Vacuum's Best Excuse — one line, written to /output/entry.txt.
// The vacuum speaks for itself: sensors, a sock, and a decision.
import { mkdirSync, writeFileSync } from "node:fs";

// A missed spot is not a failure; it is a choice the vacuum made on purpose.
const excuse = "My sensors detected a sock. I chose peace.";

// Keep the output exactly one line: no trailing newline, no extra text.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(excuse);
