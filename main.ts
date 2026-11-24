import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The entry: one grand corporate title for a very small, very real task —
// renaming files so the auditors never see what they were originally called.
// "The night before" sharpens it: this executive's whole job is one annual
// evening of panic, repeated for every audit the company ever faces.
const title = "Vice President of Renaming Files the Night Before Audits";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, title, "utf8");
