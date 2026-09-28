// Bericht: bewertet die Rechercheergebnisse, sortiert sie und schreibt
//   bericht/<liga>.csv          Tabelle (Excel-tauglich, Semikolon, UTF-8 BOM)
//   bericht/<liga>.md           Rangliste mit Beobachtung, Quellen und Nachrichtenentwurf
//
//   npm run bericht                          Standard-Liga (vbl-pro)
//   npm run bericht -- --liga vbl-frauen-sued
//   npm run bericht -- --ohne-entwuerfe      nur bewerten, keine API-Aufrufe
//   npm run bericht -- --ab 50               Entwürfe nur ab dieser Punktzahl (Standard 45)
//   npm run bericht -- --referenz "TV Planegg-Krailling"
//                                            Pilotkunde darf als Referenz genannt werden
//                                            (erst, wenn er das erlaubt hat)
//
// Der Entwurf wird von dir verschickt, nicht vom Skript. Bewusst: unverlangte
// Werbe-E-Mails sind nach § 7 UWG auch an Vereine unzulässig; persönliche
// Instagram-DM, Anruf und Brief sind die Wege.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const MODEL = 'claude-opus-5';

// Liegt in anleitung/, damit eine Claude-Code-Sitzung Entwürfe nach denselben Regeln schreibt.
const ENTWURF_SYSTEM = await fs.readFile(path.join(HERE, 'anleitung', 'entwurf.md'), 'utf8');

const args = parseArgs(process.argv.slice(2));
const ligaId = args.liga ?? 'vbl-pro';
const schwelle = Number(args.ab ?? 45);
const mitEntwuerfen = !args['ohne-entwuerfe'];

const inDir = path.join(HERE, 'ergebnisse', ligaId);
const outDir = path.join(HERE, 'bericht');
await fs.mkdir(outDir, { recursive: true });

const files = (await fs.readdir(inDir).catch(() => [])).filter((f) => f.endsWith('.json'));
if (files.length === 0) {
  console.error(`Keine Ergebnisse in ${inDir}. Erst: npm run recherche -- --liga ${ligaId}`);
  process.exit(1);
}

const rows = [];
for (const f of files) {
  const r = JSON.parse(await fs.readFile(path.join(inDir, f), 'utf8'));
  r.bewertung = bewerte(r);
  rows.push(r);
}
rows.sort((a, b) => b.bewertung.punkte - a.bewertung.punkte);

if (mitEntwuerfen) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY fehlt; mit --ohne-entwuerfe geht es ohne.');
    process.exit(1);
  }
  // Erst hier laden: mit --ohne-entwuerfe braucht der Bericht weder SDK noch npm install.
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  const client = new Anthropic();
  for (const r of rows) {
    if (r.bewertung.punkte < schwelle) continue;
    if (r.entwurf && !args.neu) continue;
    process.stdout.write(`  Entwurf: ${r.verein.name} … `);
    r.entwurf = await entwurf(client, r);
    await fs.writeFile(path.join(inDir, `${slugOf(r)}.json`), JSON.stringify(stripBewertung(r), null, 2));
    console.log('ok');
  }
}

await fs.writeFile(path.join(outDir, `${ligaId}.csv`), csv(rows));
await fs.writeFile(path.join(outDir, `${ligaId}.md`), markdown(rows));
console.log(`\n${rows.length} Vereine bewertet → bericht/${ligaId}.csv, bericht/${ligaId}.md`);
console.log('\nRangliste:');
for (const r of rows) {
  console.log(`  ${String(r.bewertung.punkte).padStart(3)}  ${r.verein.name.padEnd(36)} ${r.ergebnis.vorverkauf}${r.ergebnis.anbieter ? ` (${r.ergebnis.anbieter})` : ''}`);
}

// ---------------------------------------------------------------------------
// Bewertung: deterministisch, damit die Rangfolge nachvollziehbar bleibt.

function bewerte(r) {
  const e = r.ergebnis;
  const gruende = [];
  let p = 0;
  const add = (n, grund) => { p += n; gruende.push(`${n > 0 ? '+' : ''}${n} ${grund}`); };

  switch (e.vorverkauf) {
    case 'keiner': add(40, 'nur Abendkasse'); break;
    case 'manuell': add(35, 'Vorverkauf per Mail/Telefon/Liste'); break;
    case 'unbekannt': add(15, 'Vorverkauf nicht feststellbar'); break;
    case 'anbieter': add(0, `verkauft bereits online (${e.anbieter ?? 'Anbieter unbekannt'})`); break;
    case 'eintritt_frei': add(-20, 'Eintritt frei, nichts zu verkaufen'); break;
  }
  if (e.eintritt_frei === true && e.vorverkauf !== 'eintritt_frei') add(-20, 'Eintritt frei');

  if (e.kapazitaet == null) add(8, 'Kapazität unbekannt');
  else if (e.kapazitaet >= 150 && e.kapazitaet <= 1500) add(15, `Halle passt (${e.kapazitaet})`);
  else if (e.kapazitaet > 1500) add(5, `große Halle (${e.kapazitaet})`);
  else add(3, `kleine Halle (${e.kapazitaet})`);

  if (e.ticketpreis_eur != null && e.ticketpreis_eur >= 4 && e.ticketpreis_eur <= 30) add(8, `Preis ${e.ticketpreis_eur} €`);
  if (e.instagram) add(8, 'Instagram vorhanden (DM möglich)');
  if (e.ansprechperson?.name || e.ansprechperson?.kontakt) add(8, 'Ansprechperson bekannt');
  if (e.naechstes_heimspiel) add(4, 'nächstes Heimspiel bekannt');
  if (r.verein.land === 'BY') add(10, 'Bayern, Besuch möglich');
  if (e.sicherheit === 'hoch') add(7, 'Einordnung sicher');
  else if (e.sicherheit === 'niedrig') add(-10, 'Einordnung unsicher');
  if (r.meta.quellen_belegt.length === 0) add(-10, 'keine belegte Quelle');

  return { punkte: Math.max(0, Math.min(100, p)), gruende };
}

// ---------------------------------------------------------------------------
// Entwurf: eine kurze DM und ein Telefonleitfaden, nur aus den belegten Fakten.

async function entwurf(client, r) {
  const fakten = JSON.stringify({ verein: r.verein, ergebnis: r.ergebnis, quellen_belegt: r.meta.quellen_belegt }, null, 2);
  const referenz = args.referenz
    ? `Du darfst erwähnen, dass ${args.referenz} aus derselben Liga Passly bereits nutzt.`
    : 'Nenne keinen anderen Verein als Referenz; es gibt noch keine freigegebene.';

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 4000,
    output_config: { effort: 'medium' },
    system: ENTWURF_SYSTEM,
    messages: [{ role: 'user', content: `${referenz}\n\nRecherchierte Fakten:\n${fakten}` }],
  });
  return response.content.filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
}



// ---------------------------------------------------------------------------

function csv(rows) {
  const head = ['Punkte', 'Verein', 'Ort', 'Land', 'Vorverkauf', 'Anbieter', 'Preis €', 'Halle', 'Kapazität', 'Instagram', 'Ansprechperson', 'Kontakt', 'Nächstes Heimspiel', 'Beobachtung', 'Sicherheit', 'Website', 'Belegte Quellen', 'Recherchiert am'];
  const lines = rows.map((r) => {
    const e = r.ergebnis;
    return [
      r.bewertung.punkte, r.verein.name, r.verein.ort, r.verein.land, e.vorverkauf, e.anbieter ?? '',
      e.ticketpreis_eur != null ? String(e.ticketpreis_eur).replace('.', ',') : '', e.halle ?? '', e.kapazitaet ?? '',
      e.instagram ? `@${e.instagram}` : '', [e.ansprechperson?.name, e.ansprechperson?.rolle].filter(Boolean).join(', '),
      e.ansprechperson?.kontakt ?? '', e.naechstes_heimspiel ?? '', e.beobachtung, e.sicherheit, e.website ?? '',
      r.meta.quellen_belegt.join(' '), r.meta.recherchiert_am,
    ].map(feld).join(';');
  });
  return '﻿' + [head.join(';'), ...lines].join('\r\n') + '\r\n';
}

function feld(v) {
  const s = String(v ?? '');
  return /[;"\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function markdown(rows) {
  const out = [`# Kandidaten ${rows[0].verein.liga_name}`, '', `Stand ${new Date().toISOString().slice(0, 10)}. Punkte 0 bis 100, Schwelle für Entwürfe ${schwelle}.`, ''];
  out.push('| Punkte | Verein | Vorverkauf | Kapazität | Preis | Instagram |', '|---:|---|---|---:|---:|---|');
  for (const r of rows) {
    const e = r.ergebnis;
    out.push(`| ${r.bewertung.punkte} | ${r.verein.name} | ${e.vorverkauf}${e.anbieter ? ` (${e.anbieter})` : ''} | ${e.kapazitaet ?? ''} | ${e.ticketpreis_eur != null ? `${e.ticketpreis_eur} €` : ''} | ${e.instagram ? `@${e.instagram}` : ''} |`);
  }
  for (const r of rows) {
    const e = r.ergebnis;
    out.push('', `## ${r.verein.name} · ${r.bewertung.punkte} Punkte`, '');
    out.push(`**Beobachtung:** ${e.beobachtung}`, '');
    out.push(`- Vorverkauf: ${e.vorverkauf}${e.anbieter ? ` (${e.anbieter})` : ''}, Sicherheit ${e.sicherheit}`);
    if (e.halle || e.kapazitaet) out.push(`- Halle: ${e.halle ?? '?'}${e.kapazitaet ? `, ${e.kapazitaet} Plätze` : ''}`);
    if (e.ticketpreis_eur != null) out.push(`- Preis: ${e.ticketpreis_eur} €`);
    if (e.naechstes_heimspiel) out.push(`- Nächstes Heimspiel: ${e.naechstes_heimspiel}`);
    if (e.instagram) out.push(`- Instagram: https://instagram.com/${e.instagram}`);
    if (e.ansprechperson) out.push(`- Ansprechperson: ${[e.ansprechperson.name, e.ansprechperson.rolle, e.ansprechperson.kontakt].filter(Boolean).join(', ')}`);
    if (e.website) out.push(`- Website: ${e.website}`);
    out.push(`- Bewertung: ${r.bewertung.gruende.join('; ')}`);
    out.push(`- Belegte Quellen: ${r.meta.quellen_belegt.length ? r.meta.quellen_belegt.map((u) => `<${u}>`).join(', ') : 'keine'}`);
    if (r.meta.quellen_nicht_nachvollziehbar.length) out.push(`- ⚠ Nicht nachvollziehbare Quellen: ${r.meta.quellen_nicht_nachvollziehbar.join(', ')}`);
    if (r.meta.quellen_nicht_pruefbar?.length) out.push(`- Nicht prüfbar (JavaScript, gesperrt oder nichts zu prüfen): ${r.meta.quellen_nicht_pruefbar.join(', ')}`);
    if (r.meta.pruefung) {
      const ohne = Object.entries(r.meta.pruefung.fakten).filter(([, v]) => v.length === 0).map(([k]) => k);
      if (ohne.length) out.push(`- ⚠ Ohne Beleg auf den Quellen (pruefe.mjs, ${r.meta.pruefung.am}): ${ohne.join(', ')}`);
      if (r.meta.pruefung.sicherheit_vorher) out.push(`- Sicherheit von „${r.meta.pruefung.sicherheit_vorher}" auf „niedrig" gesetzt, keine Quelle belegt`);
    }
    if (r.entwurf) out.push('', r.entwurf);
  }
  return out.join('\n') + '\n';
}

function stripBewertung(r) {
  const { bewertung, ...rest } = r;
  return rest;
}

function slugOf(r) {
  return r.verein.name
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith('--')) {
      out[key] = next;
      i++;
    } else out[key] = true;
  }
  return out;
}
