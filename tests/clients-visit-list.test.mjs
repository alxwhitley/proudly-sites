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

test("clients page renders a dense lead table from the data file", async () => {
  const html = await readFile(clientsPath, "utf8");
  const data = JSON.parse(await readFile(dataPath, "utf8"));
  const stops = data.sets.flatMap((set) => set.stops);

  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.match(html, /class="lead-table"/);
  assert.doesNotMatch(html, /class="stop-list"/);
  assert.doesNotMatch(html, /class="site-header"/);
  assert.match(html, /data-mode="general"/);
  assert.match(html, /data-mode="visit"/);
  assert.match(html, /data-filter="all"/);
  assert.match(html, /data-filter="church"/);
  assert.match(html, /data-filter="healthcare"/);
  assert.match(html, /data-filter="law"/);
  assert.match(html, /4133 Lake Lynn Dr, Raleigh NC 27613/);
  assert.match(html, new RegExp(`data-row-count[^>]*>${stops.length}<`));
  assert.equal(data.sets.length, 6);
  assert.equal(stops.length, 49);

  for (const set of data.sets) {
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
      if (stop.email) {
        assert.ok(html.includes(`mailto:${stop.email}`), `missing mailto for ${stop.name}`);
        assert.ok(html.includes(stop.email), `missing email for ${stop.name}`);
      }
      if (stop.industry) {
        assert.ok(html.includes(decode(stop.industry)), `missing industry for ${stop.name}`);
      }
      assert.equal(typeof stop.instagram, "string", `${stop.name} is missing instagram`);
      if (stop.instagram) {
        const handle = stop.instagram.replace(/^@/, "");
        assert.match(stop.instagram, /^@[A-Za-z0-9._]+$/, `${stop.name} instagram must be @handle`);
        assert.ok(html.includes(`@${handle}`), `missing IG label for ${stop.name}`);
        assert.ok(
          html.includes(`instagram.com/${handle}`),
          `missing IG link for ${stop.name}`
        );
      }
    }
  }

  const freedom = stops.find((stop) => stop.name === "Freedom Church Raleigh");
  assert.ok(freedom, "Freedom Church Raleigh should be present");
  assert.equal(freedom.extra, true);
  assert.equal(freedom.industry, "Church");
  assert.equal(freedom.email, "info@freedomchurchraleigh.com");
  assert.equal(freedom.instagram, "@freedomraleigh");
  assert.equal(freedom.phone, undefined);
  assert.equal(freedom.emailed, true);
  assert.equal(freedom.rating, 2);
  assert.equal(freedom.visit, false);
  assert.doesNotMatch(JSON.stringify(freedom), /raleigh@freedomchurch\.cc/);
  const midtown = data.sets.find((set) => set.id === "midtown-six-forks");
  assert.ok(midtown.stops.some((stop) => stop.name === "Freedom Church Raleigh"));
  assert.match(html, /Freedom Church Raleigh/);
  assert.match(html, /mailto:info@freedomchurchraleigh.com/);

  const rfo = stops.find((stop) => stop.name === "Raleigh Family Orthodontics");
  assert.ok(rfo, "Raleigh Family Orthodontics should be present");
  assert.equal(rfo.extra, undefined);
  assert.equal(rfo.industry, "Orthodontics");
  assert.equal(rfo.email, "info@raleighfamilyortho.com");
  assert.equal(rfo.instagram, "@raleighfamilyortho");
  assert.equal(rfo.phone, "984-254-0585");
  assert.equal(rfo.emailed, false);
  assert.equal(rfo.rating, 2);
  assert.equal(rfo.visit, false);
  const leesville = data.sets.find((set) => set.id === "leesville");
  assert.ok(leesville.stops.some((stop) => stop.name === "Raleigh Family Orthodontics"));
  assert.ok(leesville.mapsUrl.includes("9201+Leesville+Rd"));
  assert.match(html, /Raleigh Family Orthodontics/);
  assert.match(html, /mailto:info@raleighfamilyortho.com/);

  const nrcc = stops.find((stop) => stop.name === "North Raleigh Christian Church");
  assert.ok(nrcc, "North Raleigh Christian Church should be present");
  assert.equal(nrcc.email, "info@northraleigh.church");
  assert.equal(nrcc.emailed, false);
  assert.equal(nrcc.rating, 3);
  assert.equal(nrcc.visit, true);
  assert.equal(nrcc.instagram, "@northraleighcc");
  assert.ok(leesville.stops.some((stop) => stop.name === "North Raleigh Christian Church"));
  assert.ok(leesville.mapsUrl.includes("9225+Leesville+Rd"));

  const falls = data.sets.find((set) => set.id === "falls-raven-ridge");
  const neurobloom = stops.find((stop) => stop.name === "NeuroBloom Physical Therapy & Wellness");
  assert.ok(neurobloom, "NeuroBloom Physical Therapy & Wellness should be present");
  assert.equal(neurobloom.email, "nidhi.seth@neurobloompt.com");
  assert.equal(neurobloom.emailed, false);
  assert.equal(neurobloom.visit, false);
  assert.equal(neurobloom.instagram, "@neurobloompt");
  assert.ok(falls.mapsUrl.includes("9360+Falls+of+Neuse+Rd"));
  assert.ok(falls.mapsUrl.includes("9204-200+Falls+of+Neuse+Rd"));
  assert.ok(falls.mapsUrl.includes("6837+Falls+of+Neuse+Rd"));
  assert.ok(falls.mapsUrl.includes("6325+Falls+of+Neuse+Rd"));

  const amos = stops.find((stop) => stop.name === "Amos & Amos, Attorneys at Law");
  assert.ok(amos, "Amos & Amos, Attorneys at Law should be present");
  assert.equal(amos.industry, "Law");
  assert.equal(amos.email, "general@amoslawnc.com");
  assert.equal(amos.instagram, "@amoslawnc");
  assert.equal(amos.phone, "919-900-7747");
  assert.equal(amos.emailed, false);
  assert.equal(amos.rating, 2);
  assert.equal(amos.visit, false);
  assert.ok(falls.stops.some((stop) => stop.name === "Amos & Amos, Attorneys at Law"));

  const meliora = stops.find((stop) => stop.name === "Meliora Wellness");
  assert.ok(meliora, "Meliora Wellness should be present");
  assert.equal(meliora.industry, "Concierge wellness");
  assert.equal(meliora.email, "contact@meliorawellnessnc.com");
  assert.equal(meliora.instagram, "@meliora_wellness_nc");
  assert.equal(meliora.phone, "984-233-0534");
  assert.equal(meliora.emailed, false);
  assert.equal(meliora.rating, 2);
  assert.equal(meliora.visit, false);
  assert.ok(falls.stops.some((stop) => stop.name === "Meliora Wellness"));

  const betham = stops.find((stop) => stop.name === "Betham Law, PLLC");
  assert.ok(betham, "Betham Law, PLLC should be present");
  assert.equal(betham.industry, "Law");
  assert.equal(betham.email, "brittany@bethamlaw.com");
  assert.equal(betham.instagram, "");
  assert.equal(betham.phone, "919-604-3678");
  assert.equal(betham.emailed, false);
  assert.equal(betham.rating, 2);
  assert.equal(betham.visit, false);
  assert.ok(falls.stops.some((stop) => stop.name === "Betham Law, PLLC"));
  const fallsNames = falls.stops.map((stop) => stop.name);
  assert.equal(
    fallsNames.indexOf("Betham Law, PLLC"),
    fallsNames.indexOf("Meliora Wellness") + 1
  );

  const mueller = stops.find((stop) => stop.name === "The Mueller Law Firm, P.A.");
  assert.ok(mueller, "The Mueller Law Firm, P.A. should be present");
  assert.equal(mueller.industry, "Law");
  assert.equal(mueller.email, "MLF@muellerfamilylaw.com");
  assert.equal(mueller.instagram, "");
  assert.equal(mueller.phone, "919-676-5770");
  assert.equal(mueller.emailed, false);
  assert.equal(mueller.rating, 2);
  assert.equal(mueller.visit, false);
  assert.ok(falls.stops.some((stop) => stop.name === "The Mueller Law Firm, P.A."));
  assert.ok(falls.mapsUrl.includes("7000+Harps+Mill+Rd"));
  assert.equal(
    fallsNames.indexOf("The Mueller Law Firm, P.A."),
    fallsNames.indexOf("Betham Law, PLLC") + 1
  );

  const perio = stops.find((stop) => stop.name === "North Raleigh Periodontics & Implant Center");
  assert.ok(perio, "North Raleigh Periodontics & Implant Center should be present");
  assert.equal(perio.email, "contact@northraleighperio.com");
  assert.equal(perio.emailed, false);
  assert.equal(perio.instagram, "@doctor_gums");
  assert.ok(falls.mapsUrl.includes("7805+Fiesta+Way"));

  const crabtree = data.sets.find((set) => set.id === "crabtree-midtown");
  const kratt = stops.find((stop) => stop.name === "Kratt Dedmond & Associates");
  assert.ok(kratt, "Kratt Dedmond & Associates should be present");
  assert.equal(kratt.email, "bkratt@kdanc.com");
  assert.equal(kratt.emailed, false);
  assert.equal(kratt.rating, 3);
  assert.equal(kratt.visit, true);
  assert.equal(kratt.instagram, "");
  assert.ok(crabtree.mapsUrl.includes("5623-111+Duraleigh+Rd"));

  const araneda = stops.find((stop) => stop.name === "Araneda & Stroud Immigration Law Group");
  assert.ok(araneda, "Araneda & Stroud Immigration Law Group should be present");
  assert.equal(araneda.email, "info@aranedalaw.com");
  assert.equal(araneda.emailed, false);
  assert.equal(araneda.visit, false);
  assert.ok(crabtree.mapsUrl.includes("5400+Glenwood+Ave"));
  assert.ok(crabtree.mapsUrl.includes("4030+Wake+Forest+Rd"));

  const allen = stops.find((stop) => stop.name === "Allen Law Offices");
  assert.ok(allen, "Allen Law Offices should be present");
  assert.equal(allen.industry, "Law");
  assert.equal(allen.email, "dallen@theallenlawoffices.com");
  assert.equal(allen.instagram, "");
  assert.equal(allen.phone, "919-838-9529");
  assert.equal(allen.emailed, false);
  assert.equal(allen.rating, 3);
  assert.equal(allen.visit, true);
  assert.ok(crabtree.stops.some((stop) => stop.name === "Allen Law Offices"));

  const barrett = stops.find((stop) => stop.name === "Barrett Law Offices, PLLC");
  assert.ok(barrett, "Barrett Law Offices, PLLC should be present");
  assert.equal(barrett.industry, "Law");
  assert.equal(barrett.email, "wbarrett@barrettlawoffices.com");
  assert.equal(barrett.instagram, "");
  assert.equal(barrett.phone, "919-999-2799");
  assert.equal(barrett.emailed, false);
  assert.equal(barrett.rating, 2);
  assert.equal(barrett.visit, false);
  assert.ok(crabtree.stops.some((stop) => stop.name === "Barrett Law Offices, PLLC"));
  assert.ok(crabtree.mapsUrl.includes("5+West+Hargett+Street"));
  const crabtreeNames = crabtree.stops.map((stop) => stop.name);
  assert.equal(
    crabtreeNames.indexOf("Barrett Law Offices, PLLC"),
    crabtreeNames.indexOf("Allen Law Offices") + 1
  );

  const doctorDirect = stops.find((stop) => stop.name === "Doctor Direct");
  assert.ok(doctorDirect, "Doctor Direct should be present");
  assert.equal(doctorDirect.industry, "Direct primary care");
  assert.equal(doctorDirect.email, "info@doctordirectmd.com");
  assert.equal(doctorDirect.instagram, "@doctordirectmd");
  assert.equal(doctorDirect.phone, "919-277-9866");
  assert.equal(doctorDirect.emailed, false);
  assert.equal(doctorDirect.rating, 2);
  assert.equal(doctorDirect.visit, false);
  assert.ok(midtown.stops.some((stop) => stop.name === "Doctor Direct"));
  assert.ok(midtown.mapsUrl.includes("5838+Six+Forks+Road"));
  const midtownNames = midtown.stops.map((stop) => stop.name);
  assert.equal(
    midtownNames.indexOf("Doctor Direct"),
    midtownNames.indexOf("Oak City Estate Planning") + 1
  );

  const jennyDoyle = stops.find((stop) => stop.name === "Jenny Doyle, Esq. Immigration Counsel, LLC");
  assert.ok(jennyDoyle, "Jenny Doyle, Esq. Immigration Counsel, LLC should be present");
  assert.equal(jennyDoyle.industry, "Law");
  assert.equal(jennyDoyle.email, "doyleimmigration@gmail.com");
  assert.equal(jennyDoyle.instagram, "");
  assert.equal(jennyDoyle.phone, "919-307-4408");
  assert.equal(jennyDoyle.emailed, false);
  assert.equal(jennyDoyle.rating, 2);
  assert.equal(jennyDoyle.visit, false);
  assert.ok(midtown.stops.some((stop) => stop.name === "Jenny Doyle, Esq. Immigration Counsel, LLC"));
  assert.ok(midtown.mapsUrl.includes("4016+Barrett+Drive"));
  assert.equal(midtownNames.at(-1), "Jenny Doyle, Esq. Immigration Counsel, LLC");

  const triangleFm = stops.find((stop) => stop.name === "Triangle Functional Medicine");
  assert.ok(triangleFm, "Triangle Functional Medicine should be present");
  assert.equal(triangleFm.extra, undefined);
  assert.equal(triangleFm.industry, "Functional medicine");
  assert.equal(triangleFm.email, "info@trianglefunctionalmedicine.com");
  assert.equal(triangleFm.instagram, "@trianglefunctionalmedicine");
  assert.equal(triangleFm.phone, "919-758-2622");
  assert.equal(triangleFm.emailed, false);
  assert.equal(triangleFm.rating, 2);
  assert.equal(triangleFm.visit, false);
  const midtownLoop = data.sets.find((set) => set.id === "midtown-six-forks");
  assert.ok(midtownLoop.stops.some((stop) => stop.name === "Triangle Functional Medicine"));
  assert.ok(midtownLoop.mapsUrl.includes("809+Spring+Forest+Rd"));
  assert.ok(midtownLoop.mapsUrl.includes("226+W+Millbrook+Rd"));
  assert.ok(midtownLoop.mapsUrl.includes("276+W+Millbrook+Rd"));
  assert.ok(midtownLoop.mapsUrl.includes("5660+Six+Forks+Rd"));
  const vasilko = stops.find((stop) => stop.name === "Vasilko & Pedersen");
  assert.ok(vasilko, "Vasilko & Pedersen should be present");
  assert.equal(vasilko.industry, "Law");
  assert.equal(vasilko.email, "info@vplawnc.com");
  assert.equal(vasilko.instagram, "@vplawnc");
  assert.equal(vasilko.phone, "919-503-6680");
  assert.equal(vasilko.emailed, false);
  assert.equal(vasilko.rating, 3);
  assert.equal(vasilko.visit, true);
  assert.ok(midtownLoop.stops.some((stop) => stop.name === "Vasilko & Pedersen"));
  const millbrookNames = midtownLoop.stops.map((stop) => stop.name);
  assert.equal(
    millbrookNames.indexOf("Vasilko & Pedersen"),
    millbrookNames.indexOf("McNeil Law Firm") + 1
  );
  assert.match(html, /Triangle Functional Medicine/);
  assert.match(html, /mailto:info@trianglefunctionalmedicine.com/);

  const creedmoor = data.sets.find((set) => set.id === "creedmoor");
  const revive = stops.find((stop) => stop.name === "Revive Physiotherapy and Wellness");
  assert.ok(revive, "Revive Physiotherapy and Wellness should be present");
  assert.equal(revive.industry, "Physical therapy");
  assert.equal(revive.email, "info@reviveptandwellnessnc.com");
  assert.equal(revive.instagram, "@revive.physiotherapy.wellness");
  assert.equal(revive.phone, "919-670-1310");
  assert.equal(revive.emailed, false);
  assert.equal(revive.rating, 2);
  assert.equal(revive.visit, false);
  assert.ok(creedmoor.stops.some((stop) => stop.name === "Revive Physiotherapy and Wellness"));
  assert.ok(creedmoor.mapsUrl.includes("7201+Creedmoor+Rd"));
  const creedmoorNames = creedmoor.stops.map((stop) => stop.name);
  assert.equal(
    creedmoorNames.indexOf("Revive Physiotherapy and Wellness"),
    creedmoorNames.indexOf("Capital Dermatology of NC") + 1
  );

  const peck = stops.find((stop) => stop.name === "The Peck Law Firm");
  assert.equal(peck?.emailed, true);
  assert.equal(peck?.email, "info@pecklawfirm.net");

  const campbell = stops.find((stop) => stop.name === "Campbell Orthodontics");
  assert.equal(campbell?.emailed, true);
  assert.equal(campbell?.email, "Info@ericcampbellortho.com");

  const sisson = stops.find((stop) => stop.name === "Sisson Law Firm");
  assert.equal(sisson?.emailed, true);
  assert.equal(sisson?.email, "kevin@sissonlawfirm.com");
  assert.equal(sisson?.address, "6512 Six Forks Rd, Ste 604B, Raleigh NC 27615");

  assert.match(html, /Kindrachuk &amp; Gilchrist/);
  const kindrachuk = stops.find((stop) => stop.name === "Kindrachuk & Gilchrist");
  assert.equal(kindrachuk?.industry, undefined);

  assert.match(html, />IG</);
  const withInstagram = stops.filter((stop) => stop.instagram);
  assert.ok(withInstagram.length >= 10, "verified published Instagram handles should be present");
  assert.ok(withInstagram.length < stops.length, "leads without a published handle stay blank");

  const publishedEmails = {
    "The Peck Law Firm": "info@pecklawfirm.net",
    "Triangle Christian Center": "joelwhitfield@trianglecc.org",
    "Campbell Orthodontics": "Info@ericcampbellortho.com",
    "Sisson Law Firm": "kevin@sissonlawfirm.com",
    "Hampson Family Law": "office@hampsonfamilylaw.com",
    "The Law Corner": "kelly@thelawcorner.com",
    "Hormone Wellness MD": "info@hormonewellnessmd.com",
    "Capital Dermatology of NC": "info@capitalderm.com",
    "Freedom Church Raleigh": "info@freedomchurchraleigh.com",
    "Raleigh Family Orthodontics": "info@raleighfamilyortho.com",
    "North Raleigh Christian Church": "info@northraleigh.church",
    "NeuroBloom Physical Therapy & Wellness": "nidhi.seth@neurobloompt.com",
    "North Raleigh Periodontics & Implant Center": "contact@northraleighperio.com",
    "Kratt Dedmond & Associates": "bkratt@kdanc.com",
    "Araneda & Stroud Immigration Law Group": "info@aranedalaw.com",
    "Triangle Functional Medicine": "info@trianglefunctionalmedicine.com",
    "Meliora Wellness": "contact@meliorawellnessnc.com",
    "Amos & Amos, Attorneys at Law": "general@amoslawnc.com",
    "Allen Law Offices": "dallen@theallenlawoffices.com",
    "Vasilko & Pedersen": "info@vplawnc.com",
    "Revive Physiotherapy and Wellness": "info@reviveptandwellnessnc.com",
    "Betham Law, PLLC": "brittany@bethamlaw.com",
    "Barrett Law Offices, PLLC": "wbarrett@barrettlawoffices.com",
    "The Mueller Law Firm, P.A.": "MLF@muellerfamilylaw.com",
    "Jenny Doyle, Esq. Immigration Counsel, LLC": "doyleimmigration@gmail.com",
    "Doctor Direct": "info@doctordirectmd.com",
  };
  const withEmail = stops.filter((stop) => stop.email);
  assert.equal(withEmail.length, 26);
  for (const [name, email] of Object.entries(publishedEmails)) {
    const stop = stops.find((item) => item.name === name);
    assert.equal(stop?.email, email, `${name} email`);
  }
  for (const name of ["The Morton Law Offices", "Omar Baloch Law", "Levy Law Offices", "McNeil Law Firm", "Fusion Eye Care"]) {
    const stop = stops.find((item) => item.name === name);
    assert.equal(stop?.email, undefined, `${name} must not have an invented email`);
  }
  assert.doesNotMatch(JSON.stringify(data), /tckidmin@gmail\.com/);

  assert.match(html, />Sent</);
  const emailedTrue = stops.filter((stop) => stop.emailed === true);
  const emailedNames = emailedTrue.map((stop) => stop.name).sort();
  assert.deepEqual(emailedNames, [
    "Campbell Orthodontics",
    "Freedom Church Raleigh",
    "Sisson Law Firm",
    "The Peck Law Firm",
    "Triangle Christian Center",
  ]);
  assert.ok(
    stops
      .filter((stop) => !emailedNames.includes(stop.name))
      .every((stop) => stop.emailed === false)
  );
  const checkboxes = html.match(/type="checkbox"/g) ?? [];
  assert.equal(checkboxes.length, stops.length);
  const checkedBoxes = html.match(/type="checkbox"[^>]*checked/g) ?? [];
  assert.equal(checkedBoxes.length, emailedTrue.length);

  assert.match(html, />Rate</);
  const visitStops = stops.filter((stop) => stop.visit === true);
  assert.ok(stops.every((stop) => stop.rating === 1 || stop.rating === 2 || stop.rating === 3));
  assert.ok(stops.every((stop) => stop.visit === (stop.rating === 3)));
  assert.ok(visitStops.length >= 4 && visitStops.length <= 12);
  assert.match(html, new RegExp(`Visit · ${visitStops.length}`));
  for (const stop of visitStops) {
    assert.ok(html.includes(`data-visit="true"`));
    assert.ok(html.includes(decode(stop.name)), `missing visit stop ${stop.name}`);
  }
});
