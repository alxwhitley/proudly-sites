import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const clientsPath = new URL("../dist/clients/index.html", import.meta.url);
const dataPath = new URL("../src/data/field-visits.json", import.meta.url);

const decode = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

test("clients page renders six visit sets from the data file", async () => {
  const html = await readFile(clientsPath, "utf8");
  const data = JSON.parse(await readFile(dataPath, "utf8"));

  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.match(html, /4133 Lake Lynn Dr, Raleigh NC 27613/);
  assert.equal(data.sets.length, 6);

  for (const set of data.sets) {
    assert.match(html, new RegExp(`id="${set.id}"`));
    assert.ok(html.includes(decode(set.name)), `missing set ${set.name}`);
    assert.ok(html.includes(set.mapsUrl), `missing loop Maps URL for ${set.name}`);

    for (const stop of set.stops) {
      assert.ok(html.includes(decode(stop.name)), `missing stop ${stop.name}`);
      assert.ok(html.includes(decode(stop.address)), `missing address for ${stop.name}`);
      if (stop.phone) {
        const digits = stop.phone.replace(/\D/g, "");
        assert.ok(html.includes(`tel:+1${digits}`), `missing tel: for ${stop.name}`);
      }
      if (stop.website) {
        assert.ok(html.includes(stop.website), `missing website for ${stop.name}`);
      }
    }
  }
});
