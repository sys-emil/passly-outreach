// Sync: schickt alle Rechercheergebnisse an den Admin-Tab „Kundensuche“ von Passly.
//
//   npm run sync -- --probe              nur zählen und zeigen, nichts senden
//   npm run sync -- --ausgabe x.json     Nutzlast in eine Datei schreiben, nichts senden
//   npm run sync -- --ziel sandbox        an die Sandbox (Preview) senden
//   npm run sync                          an Produktion (getpassly.de) senden
//
// .env (nicht im Git):
//   ADMIN_SECRET=…            Produktion
//   SANDBOX_ADMIN_SECRET=…    Sandbox (eigenes Secret der Preview-Umgebung)
//   VERCEL_BYPASS=…           optional: Protection-Bypass, falls die Preview geschützt ist
//
// Der Import ersetzt die Rechercheergebnisse in outreach_vereine; den
// Kontaktstatus (outreach_status) fasst er nie an. Die Punkte rechnet
// bewertung.mjs, dieselbe Formel wie Bericht und Übersicht.
//
// Seit 2026-11-16 (Emils Wunsch): Vereine ohne Anbieter unter SCHWELLE Punkten gehen nur
// grob in die Datenbank (Name, Liga, Ort, Verkaufsweg, Anbieter, Punkte) und
// zählen nur in der Statistik. Kontakte, Entwürfe, Quellen und Gründe bleiben
// hier im Repo; die Produktions-DB hält so keine privaten Adressen von
// Vereinen, die Emil nie anschreibt. Ein späterer Sync überschreibt auch alte
// volle Zeilen mit der groben Form.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { bewerte, wechselwert } from './bewertung.mjs';

const SCHWELLE = 30;
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ZIELE = {
  produktion: { url: process.env.APP_URL ?? 'https://getpassly.de', secret: 'ADMIN_SECRET' },
  sandbox: { url: 'https://tokn-on-sol-git-sandbox-tokn-based.vercel.app', secret: 'SANDBOX_ADMIN_SECRET' },
};

const args = process.argv.slice(2);
const zielName = args.includes('--ziel') ? args[args.indexOf('--ziel') + 1] : 'produktion';
const ziel = ZIELE[zielName];
if (!ziel) {
  console.error(`Unbekanntes Ziel ${zielName}. Möglich: ${Object.keys(ZIELE).join(', ')}`);
  process.exit(1);
}

const vereine = [];
const ligen = (await fs.readdir(path.join(HERE, 'ergebnisse'), { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);
for (const liga of ligen) {
  for (const f of (await fs.readdir(path.join(HERE, 'ergebnisse', liga))).filter((x) => x.endsWith('.json'))) {
    const r = JSON.parse(await fs.readFile(path.join(HERE, 'ergebnisse', liga, f), 'utf8'));
    const e = r.ergebnis;
    const b = bewerte(r);
    const fakten = r.meta.pruefung?.fakten;
    const w = wechselwert(r);
    // Seit 2026-11-19: Vereine mit Anbieter gehen immer voll, sie sind die Wechsel-Spur.
    if (b.punkte < SCHWELLE && !w) {
      vereine.push({
        id: `${liga}/${f.replace(/\.json$/, '')}`,
        liga, liga_name: r.verein.liga_name, sport: r.verein.sport, name: r.verein.name,
        ort: r.verein.ort ?? null, land: r.verein.land ?? null,
        vorverkauf: e.vorverkauf, anbieter: e.anbieter ?? null, punkte: b.punkte,
        gruende: [], kontakt_emails: [], daten: { grob: true },
        recherchiert_am: r.meta.recherchiert_am ?? null,
      });
      continue;
    }
    const mails = [...new Set([e.ansprechperson?.kontakt ?? '', r.mail?.an ?? ''].join(' ').match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g) ?? [])];
    vereine.push({
      id: `${liga}/${f.replace(/\.json$/, '')}`,
      liga,
      liga_name: r.verein.liga_name,
      sport: r.verein.sport,
      name: r.verein.name,
      ort: r.verein.ort ?? null,
      land: r.verein.land ?? null,
      vorverkauf: e.vorverkauf,
      anbieter: e.anbieter ?? null,
      punkte: b.punkte,
      gruende: b.gruende,
      kontakt_emails: mails,
      daten: {
        ergebnis: e,
        notiz: r.meta.notiz ?? null,
        quellen: r.meta.quellen_belegt ?? [],
        ohne_beleg: fakten ? Object.entries(fakten).filter(([, v]) => v.length === 0).map(([k]) => k) : [],
        entwurf: r.entwurf ?? null,
        mail: r.mail ?? null,
        wechsel: w,
        brief: r.brief ?? null,
      },
      recherchiert_am: r.meta.recherchiert_am ?? null,
    });
  }
}

const body = JSON.stringify({ vereine, quelle: `passly-outreach sync (${vereine.length} Vereine, ${ligen.length} Ligen)` });
console.log(`${vereine.length} Vereine aus ${ligen.length} Ligen, ${(body.length / 1024).toFixed(0)} KB → ${zielName} (${ziel.url})`);
if (args.includes('--ausgabe')) {
  const datei = args[args.indexOf('--ausgabe') + 1];
  await fs.writeFile(datei, body);
  console.log(`Nutzlast geschrieben: ${datei} (nichts gesendet)`);
  process.exit(0);
}
if (args.includes('--probe')) {
  const sport = {};
  for (const v of vereine) sport[v.sport] = (sport[v.sport] ?? 0) + 1;
  console.log('Sportarten:', sport);
  console.log(`grob (unter ${SCHWELLE}):`, vereine.filter((v) => v.daten.grob).length);
  console.log('Wechsel ab 50:', vereine.filter((v) => (v.daten.wechsel?.punkte ?? 0) >= 50).length);
  console.log('Kandidaten ab 45:', vereine.filter((v) => v.punkte >= 45).length);
  process.exit(0);
}

const secret = process.env[ziel.secret];
if (!secret) {
  console.error(`${ziel.secret} fehlt in .env. Nichts gesendet.`);
  process.exit(1);
}
const headers = { 'content-type': 'application/json', 'x-admin-secret': secret };
if (process.env.VERCEL_BYPASS) headers['x-vercel-protection-bypass'] = process.env.VERCEL_BYPASS;

const res = await fetch(`${ziel.url}/api/admin/outreach/import`, { method: 'POST', headers, body });
const text = await res.text();
let json;
try { json = JSON.parse(text); } catch { json = { error: text.slice(0, 300) }; }
if (!res.ok) {
  console.error(`Fehler ${res.status}: ${json.error ?? text.slice(0, 300)}`);
  if (res.status === 401 && /vercel/i.test(text)) console.error('Die Preview ist geschützt: VERCEL_BYPASS in .env eintragen.');
  process.exit(1);
}
console.log(`Importiert: ${json.importiert}, neu: ${json.neu}, nicht mehr dabei: ${json.nichtMehrDabei}. Im Admin unter Kundensuche.`);
