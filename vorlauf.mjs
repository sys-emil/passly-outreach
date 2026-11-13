// Vorlauf: Stufe 0 und 1 der Recherche, ohne Modell und ohne Tokens.
//
//   npm run vorlauf -- --liga vbl-frauen-sued            nur ansehen (schreibt vorlauf/<liga>.json)
//   npm run vorlauf -- --liga vbl-frauen-sued --schreibe  dazu Ergebnisse für Vereine anlegen,
//                                                         die das Skript allein klären kann
//
// Stufe 0: Die VBL-Mannschaftsseite der Staffel nennt für jedes Team offiziellen Namen,
//          Homepage, Ticketlink, Halle und Ansprechpersonen. Ein Abruf statt zehn Suchen.
// Stufe 1: Homepage, Ticketlink und die Ticket-/Eintrittsseiten des Vereins abrufen und
//          nach Anbieter-Adressen, „Abendkasse", „Dauerkarte", Preisen, Instagram und
//          E-Mail durchsuchen. Ein erkannter Anbieter heißt: fertig, kein Modell nötig.
//
// Was übrig bleibt (nur Abendkasse, von Hand, keine Angabe, unklar), recherchiert danach
// eine Claude-Code-Sitzung mit den Startpunkten aus vorlauf/<liga>.json (CLAUDE.md).

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VBL = 'https://www.volleyball-bundesliga.de';
const VBL_PFAD = {
  'vbl-pro': '2_bundesliga_frauen/2_bundesliga_frauen_pro',
  'vbl-frauen-sued': '2_bundesliga_frauen/2_bundesliga_frauen_sued',
  'vbl-frauen-nord': '2_bundesliga_frauen/2_bundesliga_frauen_nord',
  'vbl-maenner-sued': '2_bundesliga_maenner/2_bundesliga_maenner_sued',
  'vbl-maenner-nord': '2_bundesliga_maenner/2_bundesliga_maenner_nord',
};

// Adresse im Link → Anbieter. Reihenfolge zählt: spezifisch vor allgemein.
const ANBIETER = [
  [/vereinsticket\.de/, 'Vereinsticket'],
  [/vivenu\.(com|de)/, 'vivenu'],
  [/eventim-light\.com/, 'Eventim Light'],
  [/eventimsports\.de|eventim\.de/, 'Eventim'],
  [/reservix\.(de|net)|adticket\.de/, 'Reservix'],
  [/ticket\.io\b/, 'ticket.io'],
  // Beide gehören Leomedia; der Name muss in der Adresse stehen, sonst findet pruefe.mjs ihn nicht.
  [/ticketleo\.com/, 'ticketleo'],
  [/leoticket\.de/, 'leoticket'],
  [/eventfrog\.(de|ch|com)/, 'Eventfrog'],
  [/ticketino\.com/, 'Ticketino'],
  [/eventbrite\.(de|com)/, 'Eventbrite'],
  [/pretix\.eu/, 'pretix'],
  [/tixforgigs\.com/, 'tixforgigs'],
  [/ticket-regional\.de/, 'Ticket Regional'],
  [/tickettoaster\.de/, 'TicketToaster'],
  [/tickettune\.(com|de)/, 'tickettune'],
  // Im American Football verbreitet (GFL 2026: Berlin, Hildesheim, München, Pforzheim, Saarland).
  [/vbotickets\.com/, 'VBO Tickets'],
  [/vibe-shop\.io|vibe\.io/, 'vibe'],
  [/getpassly\.de/, 'Passly'],
];

const SIGNALE = {
  nur_abendkasse: /(nur|ausschlie(?:ß|ss)lich)[^.!?]{0,50}(abendkasse|tageskasse)/,
  abendkasse: /abendkasse|tageskasse/,
  vorverkauf: /vorverkauf/,
  von_hand: /(karten|tickets?)[^.!?]{0,80}(per|via|unter|an)\s+(e-?mail|mail|telefon)|reservier|vorbestell/,
  // „Kinder bis 12 Jahre freier Eintritt" ist kein freier Eintritt (SV Lohhof, 2026-11-13).
  eintritt_frei: /(?<!(?:kinder|jugend\w*|schüler\w*|jahre?n?|mitglieder\w*|begleit\w*)[^.€]{0,30})(?:eintritt\s+(?:ist\s+)?frei|freier eintritt|eintritt kostenlos|(?:benötigst|brauchst|braucht|benötigt) (?:du |ihr )?kein(?:e)? tickets?)/,
  dauerkarte: /dauerkarte|saisonkarte/,
  bar: /nur bar|barzahlung|bargeld/,
};

const args = parseArgs(process.argv.slice(2));
const ligaId = args.liga ?? 'vbl-pro';
const vereineJson = JSON.parse(await fs.readFile(path.join(HERE, 'vereine.json'), 'utf8'));
const liga = vereineJson.ligen[ligaId];
// Quelle der Teamliste: in vereine.json je Liga („quelle"), sonst VBL über VBL_PFAD.
const QUELLE = liga?.quelle ?? (VBL_PFAD[ligaId] ? { typ: 'vbl', pfad: VBL_PFAD[ligaId] } : null);
if (!liga || !QUELLE) {
  console.error(`Liga ${ligaId} unbekannt oder ohne Quelle. Bekannt: ${Object.keys(vereineJson.ligen).join(', ')}`);
  process.exit(1);
}
QUELLE.name ??= { vbl: 'VBL', gfl: 'GFL' }[QUELLE.typ] ?? QUELLE.typ.toUpperCase();
const heute = new Date().toISOString().slice(0, 10);
let abrufe = 0;

// ---------------------------------------------------------------------------
// Stufe 0: Teamliste aus der Verbandsquelle

let listeUrl;
let teams;
try {
  teams = QUELLE.typ === 'gfl' ? await stufe0Gfl(QUELLE) : await stufe0Vbl(QUELLE);
} catch {
  process.exit(2);
}

// VBL: Mannschaftsseite (Homepage, Ticketlink), Spielhallen, Kontaktansicht je Team.
async function stufe0Vbl(q) {

  listeUrl = `${VBL}/cms/home/${q.pfad}/mannschaften.xhtml`;
  const liste = await holen(listeUrl);
  if (!liste.ok) {
    console.error(`VBL-Seite nicht abrufbar (${liste.grund}): ${listeUrl}`);
    throw new Error('quelle');
  }
  const teams = [];
  for (const block of liste.roh.split('samsCmsComponentBlock samsCmsTeamListComponentBlock').slice(1)) {
    const name = text(block.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '');
    const teamId = block.match(/teamId=(\d+)/)?.[1];
    if (!name || !teamId) continue;
    const link = (wort) => block.match(new RegExp(`href="(https?://[^"]+)"[^>]*>\\s*${wort}`))?.[1]?.replace(/&amp;/g, '&') ?? null;
    teams.push({
      verband_name: name, team_id: teamId, homepage: link('Homepage'), ticketlink: link('Tickets'),
      // Die Teamansicht enthält nur die Links dieses Teams: Beleg für Homepage und Ticketlink.
      verband_team_url: `${VBL}/cms/home/${q.pfad}/mannschaften.xhtml?c.teamId=${teamId}&c.view=teamMain`,
    });
  }
  if (teams.length === 0) {
    console.error('Keine Teams auf der VBL-Seite gefunden; hat sich der Aufbau geändert?');
    throw new Error('quelle');
  }

  const hallen = await holen(`${VBL}/cms/home/${q.pfad}/spielhallen.xhtml`);
  const hallenText = hallen.ok ? hallen.text : '';
  const namenSortiert = teams.map((t) => t.verband_name).sort((a, b) => b.length - a.length);
  for (const t of teams) {
    // Abschnitt vom Teamnamen bis zum nächsten Teamnamen; jede Halle endet mit „Further information".
    const i = hallenText.indexOf(`${t.verband_name} `, hallenText.indexOf('Spielhallen |'));
    if (i < 0) continue;
    let ende = hallenText.length;
    for (const n of namenSortiert) {
      const j = hallenText.indexOf(n, i + t.verband_name.length);
      if (j > 0 && j < ende && n !== t.verband_name) ende = j;
    }
    t.hallen = hallenText.slice(i + t.verband_name.length, ende).split(/further information|weitere informationen/i).map((s) => s.trim()).filter((s) => s.length > 5 && s.length < 160);
  }

  for (const t of teams) {
    const url = `${VBL}/cms/home/${q.pfad}/mannschaften.xhtml?c.teamId=${t.team_id}&c.view=contact`;
    const k = await holen(url);
    t.verband_kontakt_url = url;
    if (!k.ok) continue;
    // Deutsch („Ansprechpartner … Kontakt Jobs") oder Englisch („Contact persons … Contact Jobs").
    const abschnitt = k.text.match(/(?:contact persons|ansprechpartner)\s([\s\S]*?)(?:kontakt jobs|contact jobs|impressum)/i)?.[1] ?? '';
    t.verband_kontakte = [...abschnitt.matchAll(/(\S*verantwortliche?r?|\S*manager\S*|trainer\S*|vorsitzende?r?|abteilungsleite\S*)\s+([^,]+?),\s+(\S+)(?:\s+e-mail:\s*([\w.+-]+@[\w-]+(?:\.[\w-]+)+))?/gi)]
      .map((m) => ({ rolle: m[1], name: `${m[3]} ${m[2]}`, email: m[4] ?? null }));
    t.verband_emails = [...new Set(k.roh.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g) ?? [])].filter((e) => !/volleyball-bundesliga|sams|example/.test(e));
  }
  return teams;
}

// GFL/GFL2: Übersicht /teams/ verlinkt je Team eine Seite mit den Knöpfen „Tickets" und
// „Zur Vereinsseite" und dem Block „Kontaktdaten" (Adresse, E-Mail, Spielort).
async function stufe0Gfl(q) {
  listeUrl = q.url;
  const liste = await holen(listeUrl);
  if (!liste.ok) {
    console.error(`GFL-Seite nicht abrufbar (${liste.grund}): ${listeUrl}`);
    throw new Error('quelle');
  }
  const urls = [...new Set(liste.roh.match(/https:\/\/gfl\.info\/(?:gfl2\/)?teams\/[a-z0-9-]+\//g) ?? [])];
  const teams = [];
  for (const url of urls) {
    const s = await holen(url);
    const t = { verband_name: null, team_id: url.split('/teams/')[1].replace(/\/$/, ''), homepage: null, ticketlink: null, verband_team_url: url, verband_kontakt_url: url, verband_kontakte: [], verband_emails: [] };
    // Seiten, die auf einen alten Artikel umleiten, liefern nichts: Homepage sucht dann das Modell.
    if (!s.ok || s.url.replace(/\/$/, '') !== url.replace(/\/$/, '')) {
      t.verband_name = t.team_id.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
      t.verband_hinweis = 'GFL-Teamseite leitet um oder fehlt';
      teams.push(t);
      continue;
    }
    t.verband_name = text(s.roh.match(/<title>([^<|–-]+)/)?.[1] ?? '').trim() || t.team_id;
    for (const m of s.roh.matchAll(/<a class="elementor-button[^"]*" href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
      const knopf = text(m[2]);
      if (/^tickets$/i.test(knopf)) t.ticketlink = m[1];
      if (/vereinsseite/i.test(knopf)) t.homepage = m[1];
    }
    const block = s.text.match(/Kontaktdaten Adresse (.*?) (?:Team News|Teams? |News |$)/)?.[1] ?? '';
    const spielort = block.match(/Spielort (.*)$/)?.[1]?.trim();
    const adresse = block.replace(/Spielort .*$/, '');
    const plz = [...adresse.matchAll(/\b(\d{5}) ([A-ZÄÖÜ][\wäöüß.-]+(?: [A-ZÄÖÜ(][\wäöüß.()-]+)?)/g)].pop();
    if (plz) { t.plz = plz[1]; t.ort = plz[2]; }
    if (spielort) t.hallen = [spielort.replace(/\s*(Telefon|E-Mail).*$/, '')];
    const mail = block.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/)?.[0];
    if (mail) t.verband_kontakte.push({ rolle: 'Vereinskontakt', name: adresse.split(/ \d| Postfach| c\/o/)[0].trim().slice(0, 80), email: mail });
    t.verband_emails = mail ? [mail] : [];
    teams.push(t);
  }
  if (teams.length === 0) {
    console.error('Keine Teams auf der GFL-Seite gefunden; hat sich der Aufbau geändert?');
    throw new Error('quelle');
  }
  return teams;
}

// ---------------------------------------------------------------------------
// Zuordnung VBL-Name → Verein aus vereine.json (Sponsornamen weichen ab: „Pink Crew München" = DJK SB München-Ost)

const FUELL = new Set(['volleys', 'volley', 'volleyball', 'tv', 'sv', 'sc', 'tsv', 'tg', 'vc', 'ssc', 'djk', 'sb', 'sg', 'ev', 'e', 'v', 'fc', 'usc', 'vfl', 'ii', 'team']);
const woerter = (s) => s.toLowerCase().replace(/[^a-zäöüß0-9]+/g, ' ').split(' ').filter((w) => w.length > 1 && !FUELL.has(w));
// Ligen ohne Vereinsliste in vereine.json übernehmen die Teams der Quelle; Land aus der PLZ.
if (liga.vereine.length === 0) {
  for (const t of teams) { t.verein = t.verband_name; t.land = landAusPlz(t.plz); t.land_aus_plz = true; }
}
const offen = new Set(liga.vereine.filter((v) => !v.pilot).map((v) => v.name));
const pilot = liga.vereine.filter((v) => v.pilot).map((v) => v.name);
for (const t of teams) {
  let best = null, bestPunkte = 0;
  if (t.verein) continue;
  for (const v of liga.vereine) {
    if (!offen.has(v.name) && !pilot.includes(v.name)) continue;
    const a = new Set(woerter(t.verband_name));
    const b = woerter(`${v.name} ${v.ort}`);
    let p = b.filter((w) => a.has(w)).length;
    // Namen ohne verwertbares Wort („L.E. Volleys") über den ganzen Namen vergleichen.
    const kurz = (x) => x.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (kurz(t.verband_name) === kurz(v.name)) p += 10;
    if (/\bII\b/.test(t.verband_name) !== /\bII\b/.test(v.name)) p -= 0.5;
    if (p > bestPunkte) { best = v; bestPunkte = p; }
  }
  if (best) {
    t.verein = best.name; t.ort = best.ort; t.land = best.land; t.pilot = !!best.pilot;
    offen.delete(best.name);
  }
}

// Zweitteams und Nachwuchs-/Stützpunktteams verkaufen fast nie selbst: nicht recherchieren.
for (const t of teams) {
  const n = `${t.verband_name} ${t.verein ?? ''}`;
  t.typ = /\bII\b|\b2\b/.test(n) ? 'zweitteam'
    : /\bBSP\b|\bVCO\b|stützpunkt|akademie|internat|youngstars|junior/i.test(n) ? 'nachwuchs'
    : 'verein';
  if (t.pilot) t.typ = 'pilot';
}

// ---------------------------------------------------------------------------
// Stufe 1: Vereinsseiten lesen

for (const t of teams) {
  t.gelesen = [];
  t.nicht_lesbar = [];
  t.funde = {};
  t.instagram = [];
  t.emails = [];
  t.preise = [];
  t.anbieter = null;
  if (t.typ !== 'verein') continue;

  const vblAnb = anbieterAus(t.ticketlink);
  if (vblAnb) t.anbieter = { name: vblAnb, beleg: t.ticketlink, wie: `${QUELLE.name}-Ticketlink` };

  const seiten = [t.homepage];
  if (t.ticketlink && !vblAnb) seiten.push(t.ticketlink);
  const gesehen = new Set();
  for (let i = 0; i < seiten.length && t.gelesen.length < 6; i++) {
    const url = seiten[i];
    if (!url || gesehen.has(url)) continue;
    gesehen.add(url);
    const s = await holen(url);
    if (!s.ok) { t.nicht_lesbar.push(`${url} (${s.grund})`); continue; }
    t.gelesen.push(s.url);
    auswerten(t, s);
    // Von der Startseite (und der Ticketseite) aus die Seiten zu Tickets/Eintritt mitnehmen.
    if (i <= 1) {
      const host = new URL(s.url).host.replace(/^www\./, '');
      for (const [href, txt] of links(s.roh, s.url)) {
        if (seiten.length >= 7) break;
        const h = new URL(href).host.replace(/^www\./, '');
        if (h === host && /ticket|karten|eintritt|heimspiel|zuschauer|spieltag|preise/i.test(`${href} ${txt}`) && !/\.(pdf|jpe?g|png)$/i.test(href)) seiten.push(href);
      }
    }
  }
  t.gelesen = [...new Set(t.gelesen)];
  t.instagram = [...new Set(t.instagram)];
  t.emails = [...new Set(t.emails)];
}

// ---------------------------------------------------------------------------
// Vorschlag je Team

for (const t of teams) {
  t.vorschlag = vorschlag(t);
  t.braucht_modell = t.typ === 'verein' && ['keiner', 'manuell', 'keine_angabe', 'unbekannt'].includes(t.vorschlag);
}

await fs.mkdir(path.join(HERE, 'vorlauf'), { recursive: true });
const ausgabe = { liga: ligaId, stand: heute, quelle: listeUrl, abrufe, teams };
await fs.writeFile(path.join(HERE, 'vorlauf', `${ligaId}.json`), JSON.stringify(ausgabe, null, 2) + '\n');

// ---------------------------------------------------------------------------
// Ausgabe und (mit --schreibe) Ergebnisse für Vereine, die ohne Modell klar sind

const inDir = path.join(HERE, 'ergebnisse', ligaId);
await fs.mkdir(inDir, { recursive: true });
let geschrieben = 0;
console.log(`\n${liga.name}: ${teams.length} Teams, ${abrufe} Abrufe, 0 Tokens\n`);
for (const t of teams) {
  const slug = t.verein ? slugOf(t.verein) : null;
  const vorhanden = slug ? await fs.readFile(path.join(inDir, `${slug}.json`), 'utf8').then(JSON.parse).catch(() => null) : null;
  const bisher = vorhanden ? ` | bisher: ${vorhanden.ergebnis.vorverkauf}` : '';
  const ziel = t.typ !== 'verein' ? `übersprungen (${t.typ})` : t.braucht_modell ? `→ Modell (${t.vorschlag})` : `fertig: ${t.vorschlag}${t.anbieter ? ` (${t.anbieter.name})` : ''}`;
  console.log(`  ${(t.verein ?? `?? ${t.verband_name}`).padEnd(34)} ${ziel}${bisher}`);
  if (args.schreibe && t.typ === 'verein' && !t.braucht_modell && slug && (!vorhanden || args.neu)) {
    await fs.writeFile(path.join(inDir, `${slug}.json`), JSON.stringify(ergebnisAus(t), null, 2) + '\n');
    geschrieben++;
  }
}
// Kurzaufträge für die Modell-Stufe: nur was dieser eine Verein braucht (statt CLAUDE.md,
// Schema, Vorlage und der ganzen Vorlauf-Datei; das waren rund 20.000 Tokens pro Agent).
const auftragDir = path.join(HERE, 'vorlauf', `${ligaId}-auftrag`);
await fs.rm(auftragDir, { recursive: true, force: true });
await fs.mkdir(auftragDir, { recursive: true });
for (const t of teams.filter((x) => x.braucht_modell && x.verein)) {
  await fs.writeFile(path.join(auftragDir, `${slugOf(t.verein)}.md`), auftrag(t));
}
const unzugeordnet = [...offen];
if (unzugeordnet.length) console.log(`\n  Nicht in der Quelle gefunden: ${unzugeordnet.join(', ')}`);
const modell = teams.filter((t) => t.braucht_modell);
console.log(`\n  → vorlauf/${ligaId}.json`);
console.log(`  ${teams.filter((t) => t.typ === 'verein' && !t.braucht_modell).length} ohne Modell geklärt, ${modell.length} brauchen das Modell, ${teams.filter((t) => t.typ !== 'verein').length} übersprungen`);
if (args.schreibe) console.log(`  ${geschrieben} Ergebnisse geschrieben (vorhandene bleiben, außer mit --neu)`);

// ---------------------------------------------------------------------------

function anbieterAus(url) {
  if (!url) return null;
  for (const [re, name] of ANBIETER) if (re.test(url.toLowerCase())) return name;
  return null;
}

function auswerten(t, s) {
  const roh = s.roh;
  // Wix Events: Ticketverkauf im Baukasten der Vereinsseite, ohne fremde Adresse (TSV Grafing, 2026-11-13).
  if (!t.anbieter && /wix-?events|events\.wix/i.test(roh) && /event-details/i.test(roh) && /ticket/i.test(roh)) {
    t.anbieter = { name: 'Wix Events', beleg: s.url, wie: `Wix-Events-Shop auf ${s.url}` };
  }
  // Shops werden oft per Skript oder iframe eingebunden (leoticket: backend.leoticket.de/…/bridge.js).
  for (const u of roh.match(/(?:https?:)?\/\/[a-z0-9.-]+\.[a-z]{2,}[^"'\s<>)]*/gi) ?? []) {
    const a = anbieterAus(u);
    if (a && a !== 'Passly' && !t.anbieter) t.anbieter = { name: a, beleg: s.url, wie: `eingebunden auf ${s.url}` };
  }
  for (const [href] of links(roh, s.url)) {
    const a = anbieterAus(href);
    if (a && a !== 'Passly' && !t.anbieter) t.anbieter = { name: a, beleg: s.url, wie: `Link auf ${s.url}` };
    const ig = href.match(/instagram\.com\/([A-Za-z0-9_.]{2,30})\/?(?:[?#]|$)/i)?.[1];
    if (ig && !/^(p|reel|reels|explore|stories|accounts|sharer|share)$/i.test(ig)) t.instagram.push(ig.toLowerCase());
    const mail = href.match(/^mailto:([^?]+)/i)?.[1];
    if (mail) t.emails.push(decodeURIComponent(mail).trim().toLowerCase());
  }
  for (const m of s.text.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)*\.[a-z]{2,}/g) ?? []) if (!/\.(png|jpe?g|gif|webp|svg)$|sentry|wixpress|example/.test(m)) t.emails.push(m);
  for (const [name, re] of Object.entries(SIGNALE)) {
    const m = s.klein.match(re);
    if (m && !t.funde[name]) t.funde[name] = { url: s.url, stelle: s.text.slice(Math.max(0, m.index - 70), m.index + m[0].length + 70).trim() };
  }
  for (const m of s.klein.matchAll(/(?:erwachsen\w*|eintritt|tageskarte|vollzahler|normal|ticket\w*)[^€\d]{0,30}(\d{1,2}(?:[,.]\d{2})?)\s*(?:€|euro)/g)) {
    if (t.preise.length < 5) t.preise.push({ eur: Number(m[1].replace(',', '.')), url: s.url, stelle: m[0].slice(0, 90) });
  }
}

function vorschlag(t) {
  if (t.typ !== 'verein') return null;
  if (t.anbieter) return 'anbieter';
  if (t.funde.nur_abendkasse) return 'keiner';
  if (t.funde.eintritt_frei) return 'eintritt_frei';
  if (t.funde.abendkasse && !t.funde.vorverkauf) return 'keiner';
  if (t.funde.von_hand && /karte|ticket/i.test(t.funde.von_hand.stelle)) return 'manuell';
  if (t.gelesen.length) return 'keine_angabe';
  return 'unbekannt';
}

function ergebnisAus(t) {
  const anbieterBeleg = t.anbieter?.wie?.endsWith('-Ticketlink') ? t.verband_team_url : t.anbieter?.beleg;
  // Die Startseite trägt meist den Instagram-Link; ohne sie ist der Handle unbelegt.
  const quellen = [...new Set([anbieterBeleg, t.funde.eintritt_frei?.url, t.instagram.length === 1 ? t.gelesen[0] : null, t.verband_kontakt_url].filter(Boolean))];
  const kontakt = (t.verband_kontakte ?? []).find((k) => k.email);
  const preis = t.preise.length === 1 || (t.preise.length && t.preise.every((p) => p.eur === t.preise[0].eur)) ? t.preise[0] : null;
  if (preis) quellen.push(preis.url);
  const beobachtung = t.vorschlag === 'anbieter' && t.anbieter
    ? `Verkauft Tickets online über ${t.anbieter.name} (${t.anbieter.wie}: ${t.anbieter.beleg}).`
    : t.funde.eintritt_frei ? `Laut Vereinsseite Eintritt frei: „${t.funde.eintritt_frei.stelle}“.` : '';
  return {
    verein: { name: t.verein, ort: t.ort, land: t.land, liga: ligaId, liga_name: liga.name, sport: liga.sport },
    ergebnis: {
      website: t.homepage,
      vorverkauf: t.vorschlag,
      anbieter: t.anbieter?.name ?? null,
      eintritt_frei: t.vorschlag === 'eintritt_frei' ? true : null,
      ticketpreis_eur: preis?.eur ?? null,
      halle: t.hallen?.[0] ?? null,
      kapazitaet: null,
      instagram: t.instagram.length === 1 ? t.instagram[0] : null,
      ansprechperson: kontakt ? { name: kontakt.name, rolle: `${kontakt.rolle} (laut ${QUELLE.name})`, kontakt: kontakt.email } : null,
      naechstes_heimspiel: null,
      beobachtung,
      quellen: [...new Set(quellen)],
      sicherheit: t.anbieter ? 'hoch' : 'mittel',
    },
    meta: {
      recherchiert_am: heute,
      modell: 'vorlauf.mjs (ohne Modell)',
      schritte: t.gelesen.length + 1,
      quellen_belegt: [...new Set(quellen)],
      quellen_nur_suchtreffer: [],
      quellen_nicht_nachvollziehbar: [],
      notiz: `Ohne Modell geklärt. ${QUELLE.name}-Name „${t.verband_name}“. ${t.instagram.length > 1 ? `Mehrere Instagram-Konten verlinkt: ${t.instagram.join(', ')}. ` : ''}Gelesen: ${t.gelesen.join(', ') || 'nichts'}.`,
      kosten_usd: 0,
    },
  };
}

function auftrag(t) {
  const vor = ergebnisAus({ ...t, vorschlag: t.vorschlag, anbieter: t.anbieter ?? null, funde: t.funde });
  vor.ergebnis.vorverkauf = t.vorschlag;
  vor.ergebnis.beobachtung = 'TODO';
  vor.ergebnis.quellen = [];
  vor.ergebnis.sicherheit = 'TODO';
  vor.meta.modell = 'claude-opus-5-5 (Claude Code Sitzung, mit Vorlauf)';
  vor.meta.schritte = 0;
  vor.meta.quellen_belegt = [];
  vor.meta.notiz = 'TODO';
  const funde = Object.entries(t.funde).map(([k, v]) => `- ${k}: „${v.stelle}“ (${v.url})`).join('\n') || '- keine';
  return `# Auftrag: ${t.verein} (${liga.name})

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/${ligaId}/${slugOf(t.verein)}.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: ${t.homepage ?? 'keine'}
- Ticketlink (${QUELLE.name}): ${t.ticketlink ?? 'keiner'}
- Schon gelesen: ${t.gelesen.join(', ') || 'nichts'}${t.nicht_lesbar.length ? `\n- Nicht lesbar: ${t.nicht_lesbar.join(', ')}` : ''}
- ${QUELLE.name}-Seite des Teams: ${t.verband_kontakt_url}
- Kontakte laut ${QUELLE.name}: ${(t.verband_kontakte ?? []).map((k) => `${k.rolle} ${k.name}${k.email ? ` <${k.email}>` : ''}`).join('; ') || 'keine'}
- E-Mails auf der Vereinsseite: ${t.emails.join(', ') || 'keine'}
- Instagram auf der Vereinsseite: ${t.instagram.join(', ') || 'keins'}
- Preise gefunden: ${t.preise.map((p) => `${p.eur} € („${p.stelle}“)`).join('; ') || 'keine'}

## Funde (Fundstelle, Seite)
${funde}

## Ergebnis (vorausgefüllt)
\`\`\`json
${JSON.stringify(vor, null, 2)}
\`\`\`
`;
}

function links(roh, basis) {
  const out = [];
  for (const m of roh.matchAll(/<a\b[^>]*href=["']([^"'#]+)["'][^>]*>([\s\S]{0,200}?)<\/a>/gi)) {
    try { out.push([new URL(m[1].replace(/&amp;/g, '&'), basis).href, text(m[2]).toLowerCase()]); } catch {}
  }
  return out;
}

function text(html) {
  return html
    .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ').replace(/&euro;|&#8364;/g, '€').replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"').replace(/&#39;|&#039;/g, "'").replace(/&auml;/g, 'ä').replace(/&ouml;/g, 'ö').replace(/&uuml;/g, 'ü').replace(/&szlig;/g, 'ß')
    .replace(/\s+/g, ' ').trim();
}

async function holen(url) {
  abrufe++;
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
      headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36', 'accept-language': 'de-DE,de;q=0.9' },
    });
    if (!res.ok) return { ok: false, grund: `HTTP ${res.status}` };
    const roh = await res.text();
    const t = text(roh);
    if (t.length < 300) return { ok: false, grund: 'leer, lädt per JavaScript' };
    // text: Originalschreibung für Zitate, klein: für die Suche (gleiche Länge, gleiche Stellen)
    return { ok: true, url: res.url, roh, text: t, klein: t.toLowerCase() };
  } catch (e) {
    return { ok: false, grund: e.cause?.code ?? e.name };
  }
}

// Bundesland aus den ersten zwei PLZ-Ziffern. Näherung: an Grenzen (63, 68, 89, 19, 21, 27) kann sie danebenliegen.
function landAusPlz(plz) {
  if (!plz) return null;
  const z = Number(plz.slice(0, 2)), d = Number(plz.slice(0, 3));
  if (z === 63 && d >= 637) return 'BY';
  if (z === 89 && d >= 892 && d <= 893) return 'BY';
  if (z === 88 && d === 881) return 'BY';
  const tab = [[1, 2, 'SN'], [3, 3, 'BB'], [4, 4, 'SN'], [6, 6, 'ST'], [7, 7, 'TH'], [8, 9, 'SN'], [10, 13, 'BE'], [14, 16, 'BB'], [17, 19, 'MV'], [20, 20, 'HH'], [21, 21, 'NI'], [22, 22, 'HH'], [23, 25, 'SH'], [26, 27, 'NI'], [28, 28, 'HB'], [29, 31, 'NI'], [32, 33, 'NW'], [34, 36, 'HE'], [37, 38, 'NI'], [39, 39, 'ST'], [40, 48, 'NW'], [49, 49, 'NI'], [50, 53, 'NW'], [54, 56, 'RP'], [57, 59, 'NW'], [60, 65, 'HE'], [66, 66, 'SL'], [67, 67, 'RP'], [68, 79, 'BW'], [80, 87, 'BY'], [88, 89, 'BW'], [90, 97, 'BY'], [98, 99, 'TH']];
  return tab.find(([a, b]) => z >= a && z <= b)?.[2] ?? null;
}

function slugOf(name) {
  return name.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const next = argv[i + 1];
    if (next && !next.startsWith('--')) { out[a.slice(2)] = next; i++; } else out[a.slice(2)] = true;
  }
  return out;
}
