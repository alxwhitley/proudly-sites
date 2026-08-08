import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const expectedCases = [
  "after-hours-ministry",
  "legacy-renovations",
  "smith-cash-family-law",
  "strictly-clean-detailing",
];

const requiredPaths = [
  "src/content.config.ts",
  "src/pages/work/[slug].astro",
  "src/content/blog/README.md",
  "content-inbox/README.md",
  "structure.md",
];

const failures = requiredPaths
  .filter((path) => !existsSync(join(root, path)))
  .map((path) => `Missing required path: ${path}`);

const caseRoot = join(root, "src/content/case-studies");
const actualCases = existsSync(caseRoot)
  ? readdirSync(caseRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort()
  : [];

if (JSON.stringify(actualCases) !== JSON.stringify(expectedCases)) {
  failures.push(`Case-study slugs differ: ${actualCases.join(", ") || "none"}`);
}

for (const slug of expectedCases) {
  const contentPath = join(caseRoot, slug, "index.md");
  if (!existsSync(contentPath)) {
    failures.push(`Missing case-study content: ${slug}/index.md`);
    continue;
  }
  const content = readFileSync(contentPath, "utf8");
  for (const field of ["title:", "headline:", "summary:", "status:"]) {
    if (!content.includes(field)) failures.push(`${slug}/index.md lacks ${field}`);
  }
}

for (const oldRoute of expectedCases) {
  if (existsSync(join(root, `src/pages/work/${oldRoute}.astro`))) {
    failures.push(`Static route still exists: src/pages/work/${oldRoute}.astro`);
  }
}

if (existsSync(join(root, "src/data/work.ts"))) {
  failures.push("Duplicate case-study index still exists: src/data/work.ts");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Content architecture verified: ${expectedCases.length} case studies.`);
