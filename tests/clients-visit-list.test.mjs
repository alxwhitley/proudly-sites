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
  assert.equal(data.sets.length, 7);
  assert.equal(stops.length, 79);

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
  assert.ok(leesville.mapsUrl.includes("9201+Leesville+Road"));
  assert.match(html, /Raleigh Family Orthodontics/);
  assert.match(html, /mailto:info@raleighfamilyortho.com/);

  const nrcc = stops.find((stop) => stop.name === "North Raleigh Christian Church");
  assert.ok(nrcc, "North Raleigh Christian Church should be present");
  assert.equal(nrcc.email, "info@northraleigh.church");
  assert.equal(nrcc.emailed, true);
  assert.equal(nrcc.rating, 3);
  assert.equal(nrcc.visit, true);
  assert.equal(nrcc.instagram, "@northraleighcc");
  assert.ok(leesville.stops.some((stop) => stop.name === "North Raleigh Christian Church"));
  assert.ok(leesville.mapsUrl.includes("9225+Leesville+Rd"));

  const falls = data.sets.find((set) => set.id === "falls-raven-ridge");
  const neurobloom = stops.find((stop) => stop.name === "NeuroBloom Physical Therapy & Wellness");
  assert.ok(neurobloom, "NeuroBloom Physical Therapy & Wellness should be present");
  assert.equal(neurobloom.email, "nidhi.seth@neurobloompt.com");
  assert.equal(neurobloom.emailed, true);
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
  assert.equal(amos.emailed, true);
  assert.equal(amos.rating, 2);
  assert.equal(amos.visit, false);
  assert.ok(falls.stops.some((stop) => stop.name === "Amos & Amos, Attorneys at Law"));

  const meliora = stops.find((stop) => stop.name === "Meliora Wellness");
  assert.ok(meliora, "Meliora Wellness should be present");
  assert.equal(meliora.industry, "Concierge wellness");
  assert.equal(meliora.email, "contact@meliorawellnessnc.com");
  assert.equal(meliora.instagram, "@meliora_wellness_nc");
  assert.equal(meliora.phone, "984-233-0534");
  assert.equal(meliora.emailed, true);
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
    fallsNames.indexOf("EYES on North Ridge"),
    fallsNames.indexOf("Betham Law, PLLC") + 1
  );
  assert.equal(
    fallsNames.indexOf("The Mueller Law Firm, P.A."),
    fallsNames.indexOf("EYES on North Ridge") + 1
  );

  const perio = stops.find((stop) => stop.name === "North Raleigh Periodontics & Implant Center");
  assert.ok(perio, "North Raleigh Periodontics & Implant Center should be present");
  assert.equal(perio.email, "contact@northraleighperio.com");
  assert.equal(perio.emailed, true);
  assert.equal(perio.instagram, "@doctor_gums");
  assert.ok(falls.mapsUrl.includes("7805+Fiesta+Way"));

  const crabtree = data.sets.find((set) => set.id === "crabtree-midtown");
  const kratt = stops.find((stop) => stop.name === "Kratt Dedmond & Associates");
  assert.ok(kratt, "Kratt Dedmond & Associates should be present");
  assert.equal(kratt.email, "bkratt@kdanc.com");
  assert.equal(kratt.emailed, true);
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
  assert.equal(allen.emailed, true);
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
  assert.ok(midtown.mapsUrl.includes("5660+Six+Forks+Rd"));
  const midtownNames = midtown.stops.map((stop) => stop.name);
  assert.equal(
    midtownNames.indexOf("The Roper Law Firm, P.A."),
    midtownNames.indexOf("Oak City Estate Planning") + 1
  );
  assert.equal(
    midtownNames.indexOf("Doctor Direct"),
    midtownNames.indexOf("The Roper Law Firm, P.A.") + 1
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
  assert.ok(midtown.stops.some((stop) => stop.name === "Faithful Paws Mobile Veterinary Services"));
  assert.equal(midtownNames.at(-1), "The King's Chapel");

  const nichols = stops.find((stop) => stop.name === "Nichols, Choi & Lee, PLLC");
  assert.ok(nichols, "Nichols, Choi & Lee, PLLC should be present");
  assert.equal(nichols.industry, "Law");
  assert.equal(nichols.email, "info@ncl-law.com");
  assert.equal(nichols.instagram, "");
  assert.equal(nichols.phone, "919-341-2636");
  assert.equal(nichols.website, "https://info48912.wixsite.com/nichols-choi-lee");
  assert.equal(nichols.address, "4700 Homewood Court, Suite 320, Raleigh NC 27609");
  assert.equal(nichols.hours, "Not published - call first");
  assert.equal(nichols.emailed, false);
  assert.equal(nichols.rating, 3);
  assert.equal(nichols.visit, true);
  assert.ok(midtown.stops.some((stop) => stop.name === "Nichols, Choi & Lee, PLLC"));
  assert.ok(midtown.mapsUrl.includes("4700+Homewood+Court"));
  assert.equal(
    midtownNames.indexOf("Nichols, Choi & Lee, PLLC"),
    midtownNames.indexOf("Jenny Doyle, Esq. Immigration Counsel, LLC") + 1
  );

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

  const sixForks = data.sets.find((set) => set.id === "six-forks-lead-mine");
  const roper = stops.find((stop) => stop.name === "The Roper Law Firm, P.A.");
  assert.ok(roper, "The Roper Law Firm, P.A. should be present");
  assert.equal(roper.industry, "Law");
  assert.equal(roper.email, "wayne@roperlaw.net");
  assert.equal(roper.instagram, "");
  assert.equal(roper.phone, "919-847-1228");
  assert.equal(roper.emailed, false);
  assert.equal(roper.rating, 3);
  assert.equal(roper.visit, true);
  assert.ok(midtown.stops.some((stop) => stop.name === "The Roper Law Firm, P.A."));

  const lowry = stops.find((stop) => stop.name === "Lowry Law Offices");
  assert.ok(lowry, "Lowry Law Offices should be present");
  assert.equal(lowry.industry, "Law");
  assert.equal(lowry.email, "gray@lowrylawoffices.com");
  assert.equal(lowry.instagram, "");
  assert.equal(lowry.phone, "919-518-0783");
  assert.equal(lowry.emailed, false);
  assert.equal(lowry.rating, 3);
  assert.equal(lowry.visit, true);
  assert.ok(sixForks.stops.some((stop) => stop.name === "Lowry Law Offices"));
  assert.ok(sixForks.mapsUrl.includes("8358+Six+Forks+Rd"));

  const marsocci = stops.find((stop) => stop.name === "The Law Offices of Jeffrey G. Marsocci, PLLC");
  assert.ok(marsocci, "The Law Offices of Jeffrey G. Marsocci, PLLC should be present");
  assert.equal(marsocci.industry, "Law");
  assert.equal(marsocci.email, "jeff@livingtrustlawfirm.com");
  assert.equal(marsocci.instagram, "@the_plain_english_attorney");
  assert.equal(marsocci.phone, "919-844-7993");
  assert.equal(marsocci.emailed, false);
  assert.equal(marsocci.rating, 3);
  assert.equal(marsocci.visit, true);
  assert.ok(sixForks.stops.some((stop) => stop.name === "The Law Offices of Jeffrey G. Marsocci, PLLC"));
  assert.ok(sixForks.mapsUrl.includes("8406+Six+Forks+Road"));
  const sixForksNames = sixForks.stops.map((stop) => stop.name);
  assert.equal(
    sixForksNames.indexOf("The Law Offices of Jeffrey G. Marsocci, PLLC"),
    sixForksNames.indexOf("Levy Law Offices") + 1
  );
  assert.equal(
    sixForksNames.indexOf("Lowry Law Offices"),
    sixForksNames.indexOf("The Law Offices of Jeffrey G. Marsocci, PLLC") + 1
  );

  const firstInSight = stops.find((stop) => stop.name === "FIRST IN SIGHT");
  assert.ok(firstInSight, "FIRST IN SIGHT should be present");
  assert.equal(firstInSight.industry, "Optometry");
  assert.equal(firstInSight.email, "firstinsight@bellsouth.net");
  assert.equal(firstInSight.instagram, "");
  assert.equal(firstInSight.phone, "919-845-5555");
  assert.equal(firstInSight.emailed, false);
  assert.equal(firstInSight.rating, 3);
  assert.equal(firstInSight.visit, true);
  assert.ok(creedmoor.stops.some((stop) => stop.name === "FIRST IN SIGHT"));
  assert.ok(creedmoor.mapsUrl.includes("8015+Creedmoor+Rd"));
  assert.equal(
    creedmoorNames.indexOf("FIRST IN SIGHT"),
    creedmoorNames.indexOf("Revive Physiotherapy and Wellness") + 1
  );

  const brierCreekVision = stops.find((stop) => stop.name === "Brier Creek Vision Care");
  assert.ok(brierCreekVision, "Brier Creek Vision Care should be present");
  assert.equal(brierCreekVision.industry, "Optometry");
  assert.equal(brierCreekVision.email, "info@briercreekvision.com");
  assert.equal(brierCreekVision.instagram, "");
  assert.equal(brierCreekVision.phone, "919-361-2299");
  assert.equal(brierCreekVision.emailed, false);
  assert.equal(brierCreekVision.rating, 3);
  assert.equal(brierCreekVision.visit, true);
  assert.ok(leesville.stops.some((stop) => stop.name === "Brier Creek Vision Care"));
  assert.ok(leesville.mapsUrl.includes("9650+Brier+Creek+Parkway"));
  const leesvilleNames = leesville.stops.map((stop) => stop.name);
  assert.equal(
    leesvilleNames.indexOf("Brier Creek Vision Care"),
    leesvilleNames.indexOf("Triangle Christian Center") + 1
  );

  const sixForksAH = stops.find((stop) => stop.name === "Six Forks Animal Hospital");
  assert.ok(sixForksAH, "Six Forks Animal Hospital should be present");
  assert.equal(sixForksAH.industry, "Veterinary");
  assert.equal(sixForksAH.email, "6forks@bellsouth.net");
  assert.equal(sixForksAH.instagram, "");
  assert.equal(sixForksAH.phone, "919-847-5854");
  assert.equal(sixForksAH.emailed, false);
  assert.equal(sixForksAH.rating, 3);
  assert.equal(sixForksAH.visit, true);
  assert.equal(typeof sixForksAH.typicallyClosed, "string");
  assert.ok(sixForks.stops.some((stop) => stop.name === "Six Forks Animal Hospital"));
  assert.ok(sixForks.mapsUrl.includes("7130+Six+Forks+Rd"));
  assert.equal(
    sixForksNames.indexOf("Hilton Silvers & McClanahan PLLC"),
    sixForksNames.indexOf("Kindrachuk & Gilchrist") + 1
  );
  assert.equal(
    sixForksNames.indexOf("Six Forks Animal Hospital"),
    sixForksNames.indexOf("Hilton Silvers & McClanahan PLLC") + 1
  );

  const reflex = stops.find((stop) => stop.name === "Reflex Physical Therapy");
  assert.ok(reflex, "Reflex Physical Therapy should be present");
  assert.equal(reflex.industry, "Physical therapy");
  assert.equal(reflex.email, "info@reflexphysicaltherapy.com");
  assert.equal(reflex.instagram, "");
  assert.equal(reflex.phone, "919-341-7543");
  assert.equal(reflex.emailed, false);
  assert.equal(reflex.rating, 3);
  assert.equal(reflex.visit, true);
  assert.equal(typeof reflex.typicallyClosed, "string");
  assert.ok(leesville.stops.some((stop) => stop.name === "Reflex Physical Therapy"));
  assert.ok(leesville.mapsUrl.includes("7901+ACC+Blvd"));
  assert.equal(
    leesvilleNames.indexOf("Reflex Physical Therapy"),
    leesvilleNames.indexOf("Brier Creek Vision Care") + 1
  );

  const mantilla = stops.find((stop) => stop.name === "Mantilla Immigration Law Office");
  assert.ok(mantilla, "Mantilla Immigration Law Office should be present");
  assert.equal(mantilla.industry, "Law");
  assert.equal(mantilla.email, "attorney@mantillaimmigration.com");
  assert.equal(mantilla.instagram, "@mantillaimmigration");
  assert.equal(mantilla.phone, "919-977-4002");
  assert.equal(mantilla.emailed, false);
  assert.equal(mantilla.rating, 3);
  assert.equal(mantilla.visit, true);
  assert.equal(typeof mantilla.typicallyClosed, "string");
  assert.ok(midtown.stops.some((stop) => stop.name === "Mantilla Immigration Law Office"));
  assert.ok(midtown.mapsUrl.includes("6060+Six+Forks+Rd"));
  assert.equal(
    midtownNames.indexOf("Mantilla Immigration Law Office"),
    midtownNames.indexOf("Doctor Direct") + 1
  );

  const matta = stops.find((stop) => stop.name === "The Matta Law Firm, PLLC");
  assert.ok(matta, "The Matta Law Firm, PLLC should be present");
  assert.equal(matta.industry, "Law");
  assert.equal(matta.email, "info@mattalawfirm.com");
  assert.equal(matta.instagram, "");
  assert.equal(matta.phone, "919-703-0470");
  assert.equal(matta.emailed, false);
  assert.equal(matta.rating, 3);
  assert.equal(matta.visit, true);
  assert.ok(midtown.stops.some((stop) => stop.name === "The Matta Law Firm, PLLC"));
  assert.ok(midtown.mapsUrl.includes("211+E.+Six+Forks+Rd."));
  assert.equal(
    midtownNames.indexOf("The Matta Law Firm, PLLC"),
    midtownNames.indexOf("Hormone Wellness MD") + 1
  );

  const neuseEast = data.sets.find((set) => set.id === "neuse-east");
  assert.ok(neuseEast, "neuse-east set should exist");
  assert.equal(neuseEast.name, "Neuse / east");
  assert.equal(neuseEast.distance, "~20 mi");
  const grace = stops.find((stop) => stop.name === "Grace Baptist Church");
  assert.ok(grace, "Grace Baptist Church should be present");
  assert.equal(grace.industry, "Church");
  assert.equal(grace.email, "grace.baptist.raleigh@gmail.com");
  assert.equal(grace.instagram, "");
  assert.equal(grace.phone, "919-217-4487");
  assert.equal(grace.emailed, false);
  assert.equal(grace.rating, 3);
  assert.equal(grace.visit, true);
  assert.equal(typeof grace.typicallyClosed, "string");
  assert.equal(grace.extra, undefined);
  assert.ok(neuseEast.stops.some((stop) => stop.name === "Grace Baptist Church"));
  assert.ok(neuseEast.mapsUrl.includes("3305+Old+Milburnie+Rd"));
  assert.match(html, /Grace Baptist Church/);
  assert.match(html, /mailto:grace.baptist.raleigh@gmail.com/);

  const kingsChapel = stops.find((stop) => stop.name === "The King's Chapel");
  assert.ok(kingsChapel, "The King's Chapel should be present");
  assert.equal(kingsChapel.industry, "Church");
  assert.equal(kingsChapel.email, "info@thekingschapel.com");
  assert.equal(kingsChapel.instagram, "@thekingschapelnc");
  assert.equal(kingsChapel.phone, "919-573-5454");
  assert.equal(kingsChapel.emailed, false);
  assert.equal(kingsChapel.rating, 3);
  assert.equal(kingsChapel.visit, true);
  assert.ok(midtown.stops.some((stop) => stop.name === "The King's Chapel"));
  assert.ok(midtown.mapsUrl.includes("400+Newton+Rd"));
  assert.match(html, /The King(?:'|&#39;)s Chapel/);
  assert.match(html, /mailto:info@thekingschapel.com/);

  const lifehouse = stops.find((stop) => stop.name === "LifeHouse Church");
  assert.ok(lifehouse, "LifeHouse Church should be present");
  assert.equal(lifehouse.industry, "Church");
  assert.equal(lifehouse.email, "info@mylifehousechurch.com");
  assert.equal(lifehouse.instagram, "@mylifehousechurchnc");
  assert.equal(lifehouse.phone, "919-432-5839");
  assert.equal(lifehouse.emailed, false);
  assert.equal(lifehouse.rating, 3);
  assert.equal(lifehouse.visit, true);
  assert.ok(falls.stops.some((stop) => stop.name === "LifeHouse Church"));
  assert.ok(falls.mapsUrl.includes("11001+Raven+Ridge+Rd"));
  assert.equal(fallsNames.at(-1), "LifeHouse Church");

  const brierPeds = stops.find((stop) => stop.name === "Brier Creek Pediatric Dentistry");
  assert.ok(brierPeds, "Brier Creek Pediatric Dentistry should be present");
  assert.equal(brierPeds.industry, "Pediatric dentistry");
  assert.equal(brierPeds.email, "info@briercreekpediatricdentistry.com");
  assert.equal(brierPeds.instagram, "");
  assert.equal(brierPeds.phone, "919-806-0200");
  assert.equal(brierPeds.emailed, false);
  assert.equal(brierPeds.rating, 3);
  assert.equal(brierPeds.visit, true);
  assert.equal(typeof brierPeds.typicallyClosed, "string");
  assert.ok(leesville.stops.some((stop) => stop.name === "Brier Creek Pediatric Dentistry"));
  assert.ok(leesville.mapsUrl.includes("10411+Moncreiffe+Rd"));
  assert.equal(leesvilleNames.at(-1), "Brier Creek Pediatric Dentistry");

  const raleighOptometry = stops.find((stop) => stop.name === "Raleigh Optometry");
  assert.ok(raleighOptometry, "Raleigh Optometry should be present");
  assert.equal(raleighOptometry.industry, "Optometry");
  assert.equal(raleighOptometry.email, "raleighoptometry@gmail.com");
  assert.equal(raleighOptometry.instagram, "@raleighoptometry");
  assert.equal(raleighOptometry.phone, "919-781-2116");
  assert.equal(raleighOptometry.emailed, false);
  assert.equal(raleighOptometry.rating, 3);
  assert.equal(raleighOptometry.visit, true);
  assert.equal(typeof raleighOptometry.typicallyClosed, "string");
  assert.ok(crabtree.stops.some((stop) => stop.name === "Raleigh Optometry"));
  assert.ok(crabtree.mapsUrl.includes("2501+Atrium+Dr"));

  const ludwig = stops.find((stop) => stop.name === "Law Office of Constance M. Ludwig");
  assert.ok(ludwig, "Law Office of Constance M. Ludwig should be present");
  assert.equal(ludwig.industry, "Law");
  assert.equal(ludwig.email, "constanceludwiglaw@gmail.com");
  assert.equal(ludwig.instagram, "");
  assert.equal(ludwig.phone, "919-390-6468");
  assert.equal(ludwig.emailed, false);
  assert.equal(ludwig.rating, 3);
  assert.equal(ludwig.visit, true);
  assert.ok(crabtree.stops.some((stop) => stop.name === "Law Office of Constance M. Ludwig"));
  assert.ok(crabtree.mapsUrl.includes("4801+Glenwood+Avenue"));
  assert.equal(
    crabtreeNames.indexOf("Raleigh Optometry"),
    crabtreeNames.indexOf("Barrett Law Offices, PLLC") + 1
  );
  assert.equal(
    crabtreeNames.indexOf("Law Office of Constance M. Ludwig"),
    crabtreeNames.indexOf("Raleigh Optometry") + 1
  );

  const donnaCohen = stops.find((stop) => stop.name === "Donna R. Cohen Attorney at Law, PLLC");
  assert.ok(donnaCohen, "Donna R. Cohen Attorney at Law, PLLC should be present");
  assert.equal(donnaCohen.industry, "Law");
  assert.equal(donnaCohen.email, "donna@donnacohenlaw.com");
  assert.equal(donnaCohen.instagram, "");
  assert.equal(donnaCohen.phone, "919-783-9900");
  assert.equal(donnaCohen.website, "http://www.donnacohenlaw.com/");
  assert.equal(donnaCohen.address, "2840 Plaza Place, Suite 315, Raleigh NC 27612");
  assert.equal(donnaCohen.hours, "By appointment; hours not published");
  assert.equal(donnaCohen.typicallyClosed, "Weekend hours not published");
  assert.equal(donnaCohen.emailed, false);
  assert.equal(donnaCohen.rating, 3);
  assert.equal(donnaCohen.visit, true);
  assert.ok(crabtree.stops.some((stop) => stop.name === "Donna R. Cohen Attorney at Law, PLLC"));
  assert.ok(crabtree.mapsUrl.includes("2840+Plaza+Place"));
  assert.equal(
    crabtreeNames.indexOf("Donna R. Cohen Attorney at Law, PLLC"),
    crabtreeNames.indexOf("Law Office of Constance M. Ludwig") + 1
  );
  assert.equal(crabtreeNames.at(-1), "Donna R. Cohen Attorney at Law, PLLC");
  assert.equal(
    stops.find((stop) => stop.name === "David C. Franklin, Attorney at Law"),
    undefined
  );
  assert.equal(
    stops.find((stop) => stop.name === "The Spence Law Firm, PA"),
    undefined
  );

  const ahs = stops.find((stop) => stop.name === "Advanced Healthcare Solutions");
  assert.ok(ahs, "Advanced Healthcare Solutions should be present");
  assert.equal(ahs.industry, "Functional medicine / fertility");
  assert.equal(ahs.email, "info@advancedhealthcaresolutions.org");
  assert.equal(ahs.instagram, "");
  assert.equal(ahs.phone, "919-899-2772");
  assert.equal(ahs.address, "8351 Standonshire Way, Suite 105, Raleigh NC 27615");
  assert.equal(ahs.hours, "Mon-Fri 9:00am-5:30pm");
  assert.equal(ahs.typicallyClosed, "Closed Sat, Sun");
  assert.equal(ahs.emailed, false);
  assert.equal(ahs.rating, 3);
  assert.equal(ahs.visit, true);
  assert.ok(sixForks.stops.some((stop) => stop.name === "Advanced Healthcare Solutions"));
  assert.ok(sixForks.mapsUrl.includes("8351+Standonshire+Way"));
  assert.equal(
    sixForksNames.indexOf("Advanced Healthcare Solutions"),
    sixForksNames.indexOf("Lowry Law Offices") + 1
  );

  const hsm = stops.find((stop) => stop.name === "Hilton Silvers & McClanahan PLLC");
  assert.ok(hsm, "Hilton Silvers & McClanahan PLLC should be present");
  assert.equal(hsm.industry, "Law");
  assert.equal(hsm.email, "David@HSMlawyers.com");
  assert.equal(hsm.instagram, "");
  assert.equal(hsm.phone, "919-848-6164");
  assert.equal(hsm.address, "7320 Six Forks Road, Suite 100, Raleigh NC 27615");
  assert.equal(hsm.hours, "Not published - call first");
  assert.equal(hsm.emailed, false);
  assert.equal(hsm.rating, 3);
  assert.equal(hsm.visit, true);
  assert.ok(sixForks.stops.some((stop) => stop.name === "Hilton Silvers & McClanahan PLLC"));
  assert.ok(sixForks.mapsUrl.includes("7320+Six+Forks+Road"));

  const layton = stops.find((stop) => stop.name === "Layton & Carraway, P.A.");
  assert.ok(layton, "Layton & Carraway, P.A. should be present");
  assert.equal(layton.industry, "Law");
  assert.equal(layton.email, "Tom@LaytonCarraway.com");
  assert.equal(layton.instagram, "");
  assert.equal(layton.phone, "919-846-4964");
  assert.equal(layton.address, "8524 Six Forks Road, Suite 201, Raleigh NC 27615");
  assert.equal(layton.hours, "Not published - call first");
  assert.equal(layton.typicallyClosed, "Closed Sat, Sun");
  assert.equal(layton.emailed, false);
  assert.equal(layton.rating, 3);
  assert.equal(layton.visit, true);
  assert.ok(sixForks.stops.some((stop) => stop.name === "Layton & Carraway, P.A."));
  assert.ok(sixForks.mapsUrl.includes("8524+Six+Forks+Road"));
  assert.equal(
    sixForksNames.indexOf("Layton & Carraway, P.A."),
    sixForksNames.indexOf("Plastic Surgical Center of North Raleigh") + 1
  );
  assert.equal(
    sixForksNames.indexOf("Levy Law Offices"),
    sixForksNames.indexOf("Layton & Carraway, P.A.") + 1
  );

  const eyes = stops.find((stop) => stop.name === "EYES on North Ridge");
  assert.ok(eyes, "EYES on North Ridge should be present");
  assert.equal(eyes.industry, "Optometry");
  assert.equal(eyes.email, "info@eyesonnorthridge.com");
  assert.equal(eyes.instagram, "@eyesonnorthridge");
  assert.equal(eyes.phone, "984-206-6890");
  assert.equal(eyes.address, "6136 Falls of Neuse Rd, Raleigh NC 27609");
  assert.equal(eyes.typicallyClosed, "Closed Sat, Sun, Mon");
  assert.equal(eyes.emailed, false);
  assert.equal(eyes.rating, 3);
  assert.equal(eyes.visit, true);
  assert.ok(falls.stops.some((stop) => stop.name === "EYES on North Ridge"));
  assert.ok(falls.mapsUrl.includes("6136+Falls+of+Neuse+Rd"));

  const chun = stops.find((stop) => stop.name === "Jennifer Chun Immigration Law");
  assert.ok(chun, "Jennifer Chun Immigration Law should be present");
  assert.equal(chun.industry, "Law");
  assert.equal(chun.email, "lawchun@gmail.com");
  assert.equal(chun.instagram, "");
  assert.equal(chun.phone, "919-783-8999");
  assert.equal(chun.address, "9104 Glenwood Avenue, Raleigh NC 27617");
  assert.equal(chun.website, "https://www.visa-immigration.com/");
  assert.equal(chun.hours, "Not published - call first");
  assert.equal(chun.emailed, false);
  assert.equal(chun.rating, 3);
  assert.equal(chun.visit, true);
  assert.ok(crabtree.stops.some((stop) => stop.name === "Jennifer Chun Immigration Law"));
  assert.ok(crabtree.mapsUrl.includes("9104+Glenwood+Avenue"));
  assert.equal(crabtreeNames[0], "Jennifer Chun Immigration Law");

  const naturalHealthcare = stops.find((stop) => stop.name === "Natural Healthcare & Diagnostics");
  assert.ok(naturalHealthcare, "Natural Healthcare & Diagnostics should be present");
  assert.equal(naturalHealthcare.industry, "Functional medicine");
  assert.equal(naturalHealthcare.email, "karen@drcarrick.com");
  assert.equal(naturalHealthcare.instagram, "");
  assert.equal(naturalHealthcare.phone, "919-781-0177");
  assert.equal(naturalHealthcare.address, "188 Wind Chime Ct, Suite 204, Raleigh NC 27615");
  assert.equal(naturalHealthcare.hours, "Mon/Wed/Fri 9:00am-5:00pm");
  assert.equal(naturalHealthcare.typicallyClosed, "Closed Tue, Thu, Sat, Sun");
  assert.equal(naturalHealthcare.website, "https://drcarrick.com/");
  assert.equal(naturalHealthcare.emailed, false);
  assert.equal(naturalHealthcare.rating, 3);
  assert.equal(naturalHealthcare.visit, true);
  assert.ok(creedmoor.stops.some((stop) => stop.name === "Natural Healthcare & Diagnostics"));
  assert.ok(creedmoor.mapsUrl.includes("188+Wind+Chime+Ct"));
  assert.equal(
    creedmoorNames.indexOf("Natural Healthcare & Diagnostics"),
    creedmoorNames.indexOf("The Peck Law Firm") + 1
  );

  const stolfo = stops.find((stop) => stop.name === "Linda M. Stolfo, O.D. (EYEdeals Optometry)");
  assert.ok(stolfo, "Linda M. Stolfo, O.D. (EYEdeals Optometry) should be present");
  assert.equal(stolfo.industry, "Optometry");
  assert.equal(stolfo.email, "drstolfo@gmail.com");
  assert.equal(stolfo.instagram, "");
  assert.equal(stolfo.phone, "919-676-1300");
  assert.equal(stolfo.address, "8331 Bandford Way 001, Raleigh NC 27615");
  assert.equal(stolfo.hours, "Mon-Thu 9:00am-5:00pm; Fri 9:00am-1:00pm");
  assert.equal(stolfo.typicallyClosed, "Closed Sat, Sun");
  assert.equal(stolfo.website, "https://www.eyemaxoptometry.net/");
  assert.equal(stolfo.emailed, false);
  assert.equal(stolfo.rating, 3);
  assert.equal(stolfo.visit, true);
  assert.ok(falls.stops.some((stop) => stop.name === "Linda M. Stolfo, O.D. (EYEdeals Optometry)"));
  assert.ok(falls.mapsUrl.includes("8331+Bandford+Way+001"));
  assert.equal(
    fallsNames.indexOf("Linda M. Stolfo, O.D. (EYEdeals Optometry)"),
    fallsNames.indexOf("Champion Orthodontics") + 1
  );
  assert.equal(
    fallsNames.indexOf("LifeHouse Church"),
    fallsNames.indexOf("Linda M. Stolfo, O.D. (EYEdeals Optometry)") + 1
  );
  assert.equal(fallsNames.at(-1), "LifeHouse Church");

  const visionDerm = stops.find((stop) => stop.name === "Vision Dermatology");
  assert.ok(visionDerm, "Vision Dermatology should be present");
  assert.equal(visionDerm.industry, "Dermatology");
  assert.equal(visionDerm.email, "info@visiondermatology.com");
  assert.equal(visionDerm.instagram, "@medspavision");
  assert.equal(visionDerm.phone, "919-390-0200");
  assert.equal(visionDerm.address, "3811 Ed Drive #110, Raleigh NC 27612");
  assert.equal(visionDerm.hours, "Not published - call first");
  assert.equal(visionDerm.typicallyClosed, "");
  assert.equal(visionDerm.website, "https://www.visiondermatology.com/");
  assert.equal(visionDerm.emailed, false);
  assert.equal(visionDerm.rating, 3);
  assert.equal(visionDerm.visit, true);
  assert.ok(crabtree.stops.some((stop) => stop.name === "Vision Dermatology"));
  assert.ok(crabtree.mapsUrl.includes("3811+Ed+Drive"));
  assert.equal(
    crabtreeNames.indexOf("Vision Dermatology"),
    crabtreeNames.indexOf("The Morton Law Offices") + 1
  );

  const integratedPt = stops.find((stop) => stop.name === "Integrated Physical Therapy");
  assert.ok(integratedPt, "Integrated Physical Therapy should be present");
  assert.equal(integratedPt.industry, "Physical therapy");
  assert.equal(integratedPt.email, "joshua.cooke.ipt@gmail.com");
  assert.equal(integratedPt.instagram, "@integratedpt");
  assert.equal(integratedPt.phone, "919-306-0222");
  assert.equal(integratedPt.address, "6512 Six Forks Road, Suite 601A, Raleigh NC 27615");
  assert.equal(integratedPt.hours, "Not published - call first");
  assert.equal(integratedPt.website, "https://www.integratedpt.co/");
  assert.equal(integratedPt.emailed, false);
  assert.equal(integratedPt.rating, 2);
  assert.equal(integratedPt.visit, false);
  assert.ok(sixForks.stops.some((stop) => stop.name === "Integrated Physical Therapy"));
  assert.ok(sixForks.mapsUrl.includes("6512+Six+Forks+Road"));
  assert.equal(
    sixForksNames.indexOf("Integrated Physical Therapy"),
    sixForksNames.indexOf("Sisson Law Firm") + 1
  );

  const lesnik = stops.find((stop) => stop.name === "Lesnik Family Law, P.C.");
  assert.ok(lesnik, "Lesnik Family Law, P.C. should be present");
  assert.equal(lesnik.industry, "Law");
  assert.equal(lesnik.email, "tiffany@lesnik-law.com");
  assert.equal(lesnik.instagram, "");
  assert.equal(lesnik.phone, "919-906-8988");
  assert.equal(lesnik.address, "172 Mine Lake Court, Suite 100, Raleigh NC 27615");
  assert.equal(lesnik.hours, "Mon-Fri 10:00am-5:00pm");
  assert.equal(lesnik.typicallyClosed, "Closed Sat, Sun");
  assert.equal(lesnik.website, "https://www.lesnik-law.com/");
  assert.equal(lesnik.emailed, false);
  assert.equal(lesnik.rating, 3);
  assert.equal(lesnik.visit, true);
  assert.ok(sixForks.stops.some((stop) => stop.name === "Lesnik Family Law, P.C."));
  assert.ok(sixForks.mapsUrl.includes("172+Mine+Lake+Court"));
  assert.equal(
    sixForksNames.indexOf("Lesnik Family Law, P.C."),
    sixForksNames.indexOf("North Haven Church") + 1
  );
  assert.equal(
    sixForksNames.indexOf("Sisson Law Firm"),
    sixForksNames.indexOf("Lesnik Family Law, P.C.") + 1
  );

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
    "The Roper Law Firm, P.A.": "wayne@roperlaw.net",
    "Lowry Law Offices": "gray@lowrylawoffices.com",
    "The Law Offices of Jeffrey G. Marsocci, PLLC": "jeff@livingtrustlawfirm.com",
    "FIRST IN SIGHT": "firstinsight@bellsouth.net",
    "Brier Creek Vision Care": "info@briercreekvision.com",
    "Six Forks Animal Hospital": "6forks@bellsouth.net",
    "Reflex Physical Therapy": "info@reflexphysicaltherapy.com",
    "Mantilla Immigration Law Office": "attorney@mantillaimmigration.com",
    "The Matta Law Firm, PLLC": "info@mattalawfirm.com",
    "Grace Baptist Church": "grace.baptist.raleigh@gmail.com",
    "The King's Chapel": "info@thekingschapel.com",
    "LifeHouse Church": "info@mylifehousechurch.com",
    "Brier Creek Pediatric Dentistry": "info@briercreekpediatricdentistry.com",
    "Raleigh Optometry": "raleighoptometry@gmail.com",
    "Law Office of Constance M. Ludwig": "constanceludwiglaw@gmail.com",
    "Nichols, Choi & Lee, PLLC": "info@ncl-law.com",
    "Donna R. Cohen Attorney at Law, PLLC": "donna@donnacohenlaw.com",
    "Advanced Healthcare Solutions": "info@advancedhealthcaresolutions.org",
    "Hilton Silvers & McClanahan PLLC": "David@HSMlawyers.com",
    "EYES on North Ridge": "info@eyesonnorthridge.com",
    "Layton & Carraway, P.A.": "Tom@LaytonCarraway.com",
    "Jennifer Chun Immigration Law": "lawchun@gmail.com",
    "Natural Healthcare & Diagnostics": "karen@drcarrick.com",
    "Linda M. Stolfo, O.D. (EYEdeals Optometry)": "drstolfo@gmail.com",
    "Vision Dermatology": "info@visiondermatology.com",
    "Integrated Physical Therapy": "joshua.cooke.ipt@gmail.com",
    "Lesnik Family Law, P.C.": "tiffany@lesnik-law.com",
  };
  const withEmail = stops.filter((stop) => stop.email);
  assert.equal(withEmail.length, 56);
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
    "Allen Law Offices",
    "Amos & Amos, Attorneys at Law",
    "Campbell Orthodontics",
    "Freedom Church Raleigh",
    "Kratt Dedmond & Associates",
    "Meliora Wellness",
    "NeuroBloom Physical Therapy & Wellness",
    "North Raleigh Christian Church",
    "North Raleigh Periodontics & Implant Center",
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
  assert.ok(visitStops.length >= 4 && visitStops.length <= 35);
  assert.match(html, new RegExp(`Visit · ${visitStops.length}`));
  for (const stop of visitStops) {
    assert.ok(html.includes(`data-visit="true"`));
    assert.ok(html.includes(decode(stop.name)), `missing visit stop ${stop.name}`);
  }
});
