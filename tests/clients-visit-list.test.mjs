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

const KEEP = {
  "Capital Dermatology of NC": { buyer_score: 2, visit: true },
  "Brier Creek Vision Care": { buyer_score: 2, visit: true },
  "Raleigh Pediatric Dentistry": { buyer_score: 3, visit: true },
  "Hormone Wellness MD": { buyer_score: 2, visit: true },
  "Doctor Direct": { buyer_score: 2, visit: true },
  "Hampson Family Law": { buyer_score: 2, visit: true },
  "The Peck Law Firm": { buyer_score: 2, visit: true },
  "Layton & Carraway, P.A.": { buyer_score: 3, visit: true },
  "Hilton Silvers & McClanahan PLLC": { buyer_score: 3, visit: true },
  "Sisson Law Firm": { buyer_score: 2, visit: true },
  "Amos & Amos, Attorneys at Law": { buyer_score: 2, visit: true },
  "The Mueller Law Firm, P.A.": { buyer_score: 3, visit: true },
  "Julyan Canty Law": { buyer_score: 2, visit: true },
  "Jenny Doyle, Esq. Immigration Counsel, LLC": { buyer_score: 3, visit: true },
  "Jennifer Chun Immigration Law": { buyer_score: 2, visit: true },
  "Carolina Estate Counsel": { buyer_score: 2, visit: true },
  "W.G. Alexander & Associates": { buyer_score: 2, visit: true },
  "Barrett Law Offices, PLLC": { buyer_score: 2, visit: true },
  "Law Office of Constance M. Ludwig": { buyer_score: 2, visit: true },
  "Donna R. Cohen Attorney at Law, PLLC": { buyer_score: 2, visit: true },
  "Pediatric Possibilities": {
    buyer_score: 3,
    visit: true,
    ai_visible: false,
    competitors_shown: ["All About Therapy for Kids", "Ivy Rehab for Kids", "Pediatric Therapy Associates"],
  },
  "Six Forks Animal Hospital": {
    buyer_score: 3,
    visit: true,
    ai_visible: false,
    competitors_shown: ["North Hills Animal Hospital & Resort", "Petfolk North Hills", "Oak Heart Veterinary Hospital"],
  },
  "Law Offices of Lowry & Associates": {
    buyer_score: 3,
    visit: true,
    ai_visible: false,
    competitors_shown: ["Horsley Law", "Raleigh Real Estate Law", "North Raleigh Law"],
  },
  "Raleigh Real Estate Law": {
    buyer_score: 2,
    visit: true,
    ai_visible: false,
    competitors_shown: ["Horsley Law", "Midtown Law", "Mann McGibney & Jordan"],
  },
  "Ladd Immigration Law, LLC": {
    buyer_score: 3,
    visit: true,
    ai_visible: false,
    competitors_shown: ["Edgerton Immigration", "Bashyam Global", "Araneda & Stroud"],
  },
  "Matta Law Firm, PLLC": {
    buyer_score: 3,
    visit: true,
    ai_visible: false,
    competitors_shown: ["Edgerton Immigration", "Bashyam Global", "Araneda & Stroud"],
  },
  "Monroe Wallace Law Firm": {
    buyer_score: 3,
    visit: true,
    ai_visible: false,
    competitors_shown: ["Cary Estate Planning", "Lynch & Eatman", "Kirschbaum Nanney"],
  },
  "Law Offices of Jeffrey G. Marsocci, PLLC": {
    buyer_score: 3,
    visit: true,
    ai_visible: false,
    competitors_shown: ["NC Planning", "NC Wills & Trusts", "Carolina Estate Plan"],
  },
};

const DROPPED = [
  "Fusion Eye Care",
  "Natural Healthcare & Diagnostics",
  "Revive Physiotherapy and Wellness",
  "FIRST IN SIGHT",
  "Bowman Animal Hospital",
  "Reflex Physical Therapy",
  "Campbell Orthodontics",
  "Leesville Animal Hospital",
  "Raleigh Family Orthodontics",
  "Brier Creek Pediatric Dentistry",
  "Plastic Surgical Center of North Raleigh",
  "Advanced Healthcare Solutions",
  "Kindrachuk & Gilchrist",
  "Integrated Physical Therapy",
  "Allergy Asthma & Sinus Center",
  "NeuroBloom Physical Therapy & Wellness",
  "North Raleigh Periodontics & Implant Center",
  "Meliora Wellness",
  "EYES on North Ridge",
  "Champion Orthodontics",
  "Linda M. Stolfo, O.D. (EYEdeals Optometry)",
  "Triangle Functional Medicine",
  "Whole Health Mobile Pet Care",
  "Faithful Paws Mobile Veterinary Services",
  "Vision Dermatology",
  "Triangle Sinus Center",
  "Raleigh Optometry",
  "Omar Baloch Law",
  "Levy Law Offices",
  "The Law Offices of Jeffrey G. Marsocci, PLLC",
  "Lowry Law Offices",
  "Lesnik Family Law, P.C.",
  "Betham Law, PLLC",
  "McNeil Law Firm",
  "Vasilko & Pedersen",
  "The Law Corner",
  "The Matta Law Firm, PLLC",
  "Oak City Estate Planning",
  "The Roper Law Firm, P.A.",
  "Mantilla Immigration Law Office",
  "Nichols, Choi & Lee, PLLC",
  "Kratt Dedmond & Associates",
  "Araneda & Stroud Immigration Law Group",
  "The Morton Law Offices",
  "Edgerton Immigration Law",
  "Allen Law Offices",
  "Baptist Grove Church",
  "Newpath Church",
  "North Raleigh Christian Church",
  "Triangle Christian Center",
  "North Haven Church",
  "North Raleigh Church of Christ",
  "North Ridge Church",
  "LifeHouse Church",
  "Freedom Church Raleigh",
  "The King's Chapel",
  "Grace Baptist Church",
];

const TODAY = [
  "Capital Dermatology of NC",
  "Hampson Family Law",
  "Layton & Carraway, P.A.",
  "Law Offices of Jeffrey G. Marsocci, PLLC",
  "Hilton Silvers & McClanahan PLLC",
  "The Peck Law Firm",
  "The Mueller Law Firm, P.A.",
  "Monroe Wallace Law Firm",
  "Raleigh Pediatric Dentistry",
  "Amos & Amos, Attorneys at Law",
  "Ladd Immigration Law, LLC",
  "Jenny Doyle, Esq. Immigration Counsel, LLC",
  "Hormone Wellness MD",
  "Matta Law Firm, PLLC",
];

test("clients page renders the pruned ADD lead table", async () => {
  const html = await readFile(clientsPath, "utf8");
  const data = JSON.parse(await readFile(dataPath, "utf8"));
  const stops = data.sets.flatMap((set) => set.stops);
  const names = stops.map((stop) => stop.name);

  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.match(html, /class="lead-table"/);
  assert.doesNotMatch(html, /class="stop-list"/);
  assert.doesNotMatch(html, /class="site-header"/);
  assert.match(html, /data-mode="general"/);
  assert.match(html, /data-mode="visit"/);
  assert.match(html, /data-mode="today"/);
  assert.match(html, /data-filter="all"/);
  assert.match(html, /data-filter="church"/);
  assert.match(html, /data-filter="healthcare"/);
  assert.match(html, /data-filter="law"/);
  assert.match(html, /4133 Lake Lynn Dr, Raleigh NC 27613/);
  assert.match(html, new RegExp(`data-row-count[^>]*>${stops.length}<`));
  assert.equal(data.sets.length, 6);
  assert.equal(stops.length, 28);
  assert.deepEqual(names.sort(), Object.keys(KEEP).sort());
  assert.equal(
    data.sets.some((set) => set.id === "neuse-east" || set.stops.length === 0),
    false,
    "empty sets must be removed"
  );

  for (const set of data.sets) {
    assert.ok(html.includes(set.mapsUrl), `missing loop Maps URL for ${set.name}`);
    const homeSeg = "4133+Lake+Lynn+Dr%2C+Raleigh%2C+NC+27613";
    assert.ok(set.mapsUrl.startsWith(`https://www.google.com/maps/dir/${homeSeg}/`));
    assert.ok(set.mapsUrl.endsWith(`/${homeSeg}`));
    let cursor = set.mapsUrl.indexOf(homeSeg) + homeSeg.length;
    for (const stop of set.stops) {
      const segment = encodeURIComponent(stop.address).replaceAll("%20", "+");
      const at = set.mapsUrl.indexOf(segment, cursor);
      assert.ok(at >= cursor, `${set.id} mapsUrl missing ${stop.name} in set order`);
      cursor = at + segment.length;
    }
    for (const stop of set.stops) {
      const expected = KEEP[stop.name];
      assert.ok(expected, `unexpected stop ${stop.name}`);
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
        assert.notEqual(stop.industry, "Church", `${stop.name} must not be a church`);
      }
      assert.equal("rating" in stop, false, `${stop.name} still has rating`);
      assert.equal(stop.buyer_score, expected.buyer_score, `${stop.name} buyer_score`);
      assert.equal(stop.visit, expected.visit, `${stop.name} visit`);
      assert.equal(stop.ai_visible, expected.ai_visible ?? null, `${stop.name} ai_visible`);
      assert.deepEqual(
        stop.competitors_shown,
        expected.competitors_shown ?? [],
        `${stop.name} competitors_shown`
      );
      assert.ok(
        ["", "no_reply", "replied", "meeting", "declined", "closed"].includes(stop.outcome),
        `${stop.name} has invalid outcome`
      );
      assert.equal(
        stop.outcome,
        stop.emailed === true ? "no_reply" : "",
        `${stop.name} outcome should follow emailed`
      );
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

  for (const name of DROPPED) {
    assert.equal(
      stops.find((stop) => stop.name === name),
      undefined,
      `${name} should be removed`
    );
    assert.doesNotMatch(html, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.equal(stops.filter((stop) => stop.industry === "Church").length, 0);
  assert.doesNotMatch(html, /data-group="church"/);

  const peck = stops.find((stop) => stop.name === "The Peck Law Firm");
  assert.equal(peck?.emailed, true);
  assert.equal(peck?.email, "info@pecklawfirm.net");
  assert.equal(peck?.outcome, "no_reply");

  const sisson = stops.find((stop) => stop.name === "Sisson Law Firm");
  assert.equal(sisson?.emailed, true);
  assert.equal(sisson?.email, "kevin@sissonlawfirm.com");
  assert.equal(sisson?.address, "6512 Six Forks Rd, Ste 604B, Raleigh NC 27615");

  const amos = stops.find((stop) => stop.name === "Amos & Amos, Attorneys at Law");
  assert.equal(amos?.emailed, true);
  assert.equal(amos?.email, "general@amoslawnc.com");
  assert.equal(amos?.instagram, "@amoslawnc");

  const donnaCohen = stops.find((stop) => stop.name === "Donna R. Cohen Attorney at Law, PLLC");
  assert.equal(donnaCohen?.email, "donna@donnacohenlaw.com");
  assert.equal(donnaCohen?.address, "2840 Plaza Place, Suite 315, Raleigh NC 27612");
  assert.equal(donnaCohen?.website, "http://www.donnacohenlaw.com/");

  const publishedEmails = {
    "The Peck Law Firm": "info@pecklawfirm.net",
    "Sisson Law Firm": "kevin@sissonlawfirm.com",
    "Hampson Family Law": "office@hampsonfamilylaw.com",
    "Hormone Wellness MD": "info@hormonewellnessmd.com",
    "Capital Dermatology of NC": "info@capitalderm.com",
    "Amos & Amos, Attorneys at Law": "general@amoslawnc.com",
    "Barrett Law Offices, PLLC": "wbarrett@barrettlawoffices.com",
    "The Mueller Law Firm, P.A.": "MLF@muellerfamilylaw.com",
    "Jenny Doyle, Esq. Immigration Counsel, LLC": "doyleimmigration@gmail.com",
    "Doctor Direct": "info@doctordirectmd.com",
    "Brier Creek Vision Care": "info@briercreekvision.com",
    "Law Office of Constance M. Ludwig": "constanceludwiglaw@gmail.com",
    "Donna R. Cohen Attorney at Law, PLLC": "donna@donnacohenlaw.com",
    "Hilton Silvers & McClanahan PLLC": "David@HSMlawyers.com",
    "Layton & Carraway, P.A.": "Tom@LaytonCarraway.com",
    "Jennifer Chun Immigration Law": "lawchun@gmail.com",
    "Pediatric Possibilities": "office@pediatricpossibilities.com",
    "Six Forks Animal Hospital": "6forks@bellsouth.net",
    "Law Offices of Lowry & Associates": "gray@lowrylawoffices.com",
    "Raleigh Real Estate Law": "closings@raleighrealestatelaw.com",
    "Ladd Immigration Law, LLC": "laddimmigration@gmail.com",
    "Matta Law Firm, PLLC": "INFO@MATTALAWFIRM.COM",
    "Monroe Wallace Law Firm": "christym@monroewallace.com",
    "Law Offices of Jeffrey G. Marsocci, PLLC": "jeff@livingtrustlawfirm.com",
  };
  const withEmail = stops.filter((stop) => stop.email);
  assert.equal(withEmail.length, 24);
  for (const [name, email] of Object.entries(publishedEmails)) {
    const stop = stops.find((item) => item.name === name);
    assert.equal(stop?.email, email, `${name} email`);
  }
  for (const name of [
    "Raleigh Pediatric Dentistry",
    "Julyan Canty Law",
    "Carolina Estate Counsel",
    "W.G. Alexander & Associates",
  ]) {
    const stop = stops.find((item) => item.name === name);
    assert.equal(stop?.email, undefined, `${name} must not have an invented email`);
  }
  assert.doesNotMatch(JSON.stringify(data), /tckidmin@gmail\.com/);

  assert.match(html, />Sent</);
  const emailedTrue = stops.filter((stop) => stop.emailed === true);
  assert.deepEqual(emailedTrue.map((stop) => stop.name).sort(), [
    "Amos & Amos, Attorneys at Law",
    "Sisson Law Firm",
    "The Peck Law Firm",
  ]);
  assert.ok(stops.filter((stop) => stop.emailed !== true).every((stop) => stop.emailed === false));
  const checkboxes = html.match(/type="checkbox"/g) ?? [];
  assert.equal(checkboxes.length, stops.length);
  const checkedBoxes = html.match(/type="checkbox"[^>]*checked/g) ?? [];
  assert.equal(checkedBoxes.length, emailedTrue.length);

  assert.match(html, />Buyer</);
  assert.doesNotMatch(html, />Rate</);
  assert.match(html, />Outcome</);
  const visitStops = stops.filter((stop) => stop.visit === true);
  assert.equal(visitStops.length, 28);
  assert.equal((html.match(/data-visit="true"/g) ?? []).length, 28);
  assert.match(html, /Visit · 28/);
  const outcomeBadges = html.match(/class="outcome-badge is-no_reply"/g) ?? [];
  assert.equal(outcomeBadges.length, emailedTrue.length);
  assert.match(html, />No reply</);
  assert.doesNotMatch(JSON.stringify(data), /"rating"/);

  assert.match(html, />IG</);
  const withInstagram = stops.filter((stop) => stop.instagram);
  assert.deepEqual(
    withInstagram.map((stop) => stop.name).sort(),
    [
      "Amos & Amos, Attorneys at Law",
      "Capital Dermatology of NC",
      "Doctor Direct",
      "Hormone Wellness MD",
      "Law Offices of Jeffrey G. Marsocci, PLLC",
      "Pediatric Possibilities",
      "Six Forks Animal Hospital",
    ]
  );

  assert.ok(data.today, "today loop should be a top-level object");
  assert.equal(data.today.label, "North Raleigh walk-ins");
  assert.match(data.today.note, /ADD prune/);
  assert.deepEqual(data.today.stopNames, TODAY);
  assert.equal(TODAY.length, 14);
  assert.equal(
    data.sets.some((set) => set.id === "today" || set.name === data.today.label),
    false,
    "Today stops must not be duplicated as a General set"
  );

  const todayStops = TODAY.map((name) => {
    const stop = stops.find((item) => item.name === name);
    assert.ok(stop, `today stop missing from sets: ${name}`);
    assert.equal(stop.visit, true, `${name} must stay visit:true for Today`);
    return stop;
  });
  const mapsUrl = data.today.mapsUrl;
  assert.match(mapsUrl, /^https:\/\/www\.google\.com\/maps\/dir\//);
  assert.ok(html.includes(mapsUrl), "missing Today loop Maps URL");
  assert.match(html, /Open Today loop in Maps/);
  const homeSeg = "4133+Lake+Lynn+Dr%2C+Raleigh%2C+NC+27613";
  assert.ok(mapsUrl.startsWith(`https://www.google.com/maps/dir/${homeSeg}/`));
  assert.ok(mapsUrl.endsWith(`/${homeSeg}`));
  let cursor = mapsUrl.indexOf(homeSeg) + homeSeg.length;
  for (const stop of todayStops) {
    const segment = encodeURIComponent(stop.address).replaceAll("%20", "+");
    const at = mapsUrl.indexOf(segment, cursor);
    assert.ok(at >= cursor, `Today mapsUrl missing ${stop.name} address in drive order`);
    cursor = at + segment.length;
  }
  const todayMarks = html.match(/data-today="true"/g) ?? [];
  assert.equal(todayMarks.length, TODAY.length);
  for (const [index] of TODAY.entries()) {
    assert.match(
      html,
      new RegExp(`data-today-order="${index + 1}"`),
      `missing today order ${index + 1}`
    );
  }
});
