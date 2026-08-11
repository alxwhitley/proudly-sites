import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workIndexPath = new URL("../dist/work/index.html", import.meta.url);

test("work index renders five project cards", async () => {
  const html = await readFile(workIndexPath, "utf8");
  const cards = html.match(/class="work-card rv"/g) ?? [];

  assert.equal(cards.length, 5);
  assert.match(html, /Vital Watch/);
  assert.match(html, /Vital Watch healthcare website shown in a desktop browser frame/);
  assert.match(html, /After Hours Ministry website shown in a desktop browser frame/);
});

test("external-only cards use safe live-site links", async () => {
  const html = await readFile(workIndexPath, "utf8");

  assert.match(
    html,
    /href="https:\/\/www\.vitalwatch24\.com\/"[^>]*target="_blank"[^>]*rel="noopener noreferrer"/
  );
  assert.match(
    html,
    /href="https:\/\/www\.strictlycleandetailing\.com\/"[^>]*target="_blank"[^>]*rel="noopener noreferrer"/
  );
  assert.match(html, /href="\/work\/smith-cash-family-law"/);
  assert.match(html, /href="\/work\/legacy-renovations"/);
  assert.match(html, /href="\/work\/after-hours-ministry"/);
});
