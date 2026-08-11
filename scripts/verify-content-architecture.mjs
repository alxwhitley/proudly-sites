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

const mediaContracts = {
  "smith-cash-family-law": [
    "case-study-section-1.png",
    "case-study-section2.png",
    "case-study-section3.png",
  ],
  "legacy-renovations": [
    "legacy-brand-mark.png",
    "legacy-homepage-quote-path.png",
    "legacy-services-navigation.png",
  ],
  "after-hours-ministry": [
    "section1-browser.webm",
    "case-study-section2.png",
    "section3-mobile.webm",
  ],
};
const caseComponentPath = join(root, "src/components/CaseStudy.astro");
const routePath = join(root, "src/pages/work/[slug].astro");

for (const [slug, filenames] of Object.entries(mediaContracts)) {
  const contentPath = join(caseRoot, slug, "index.md");
  const content = existsSync(contentPath) ? readFileSync(contentPath, "utf8") : "";
  let previousIndex = -1;
  for (const filename of filenames) {
    const assetPath = join(root, "src/assets/case-studies", slug, filename);
    if (!existsSync(assetPath)) failures.push(`Missing approved case-study media: ${slug}/${filename}`);
    const referenceIndex = content.indexOf(filename);
    if (referenceIndex === -1) {
      failures.push(`${slug}/index.md lacks approved media reference: ${filename}`);
    } else if (referenceIndex <= previousIndex) {
      failures.push(`${slug}/index.md media order is not section 1, section 2, section 3`);
    }
    previousIndex = referenceIndex;
  }
}

const pointerMotionContracts = {
  "smith-cash-family-law": ["case-study-section-1.png", "case-study-section2.png", "case-study-section3.png"],
  "after-hours-ministry": ["case-study-section2.png"],
};

const naturalPresentationContracts = {
  "legacy-renovations": [
    "legacy-brand-mark.png",
    "legacy-homepage-quote-path.png",
    "legacy-services-navigation.png",
  ],
};

for (const [slug, filenames] of Object.entries(pointerMotionContracts)) {
  const content = readFileSync(join(caseRoot, slug, "index.md"), "utf8");
  const browserKindCount = (content.match(/^\s+mediaKind: browser$/gm) || []).length;
  if (browserKindCount !== filenames.length) {
    failures.push(`${slug} requires ${filenames.length} browser mediaKind entries; found ${browserKindCount}`);
  }
  for (const filename of filenames) {
    const escapedFilename = filename.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(`${escapedFilename}[\\s\\S]{0,160}mediaKind: browser`).test(content)) {
      failures.push(`${slug} must classify ${filename} as browser media`);
    }
  }
}

for (const [slug, filenames] of Object.entries(naturalPresentationContracts)) {
  const content = readFileSync(join(caseRoot, slug, "index.md"), "utf8");
  const naturalCount = (content.match(/^\s+mediaPresentation: natural$/gm) || []).length;
  if (naturalCount !== filenames.length) {
    failures.push(`${slug} requires ${filenames.length} natural mediaPresentation entries; found ${naturalCount}`);
  }
  for (const filename of filenames) {
    const escapedFilename = filename.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(`${escapedFilename}[\\s\\S]{0,160}mediaPresentation: natural`).test(content)) {
      failures.push(`${slug} must classify ${filename} as natural media`);
    }
  }
}

if (existsSync(caseComponentPath)) {
  const caseComponent = readFileSync(caseComponentPath, "utf8");
  for (const requirement of ["<video", "autoplay", "muted", "loop", "playsinline", "video.pause()", "removeAttribute(\"autoplay\")", "feature-media--mobile"]) {
    if (!caseComponent.includes(requirement)) failures.push(`CaseStudy.astro lacks video requirement: ${requirement}`);
  }
}

if (existsSync(routePath)) {
  const route = readFileSync(routePath, "utf8");
  if (!route.includes("import.meta.glob")) failures.push("Dynamic case route lacks route-owned video resolution");
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
