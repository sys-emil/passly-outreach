// Belegprüfung ohne Modell: ruft jede Quelle eines Ergebnisses erneut auf und
// sucht die Kernfakten im Seitentext.
//
//   npm run pruefe                          Standard-Liga (vbl-pro)
//   npm run pruefe -- --liga vbl-frauen-sued
//   npm run pruefe -- --alle                auch schon geprüfte Ergebnisse erneut prüfen
//
// Wozu: recherche.mjs sieht von außen, welche Seiten das Modell wirklich abgerufen
// hat. Eine Claude-Code-Sitzung (siehe CLAUDE.md) gibt ihre Quellen dagegen selbst
// an. Dieses Skript ersetzt den fehlenden Beobachter, und zwar strenger: Es zählt
// nicht, ob eine Seite abgerufen wurde, sondern ob die Fakten darauf stehen.
//
// Was es schreibt (in meta, das ergebnis bleibt unangetastet außer `sicherheit`):
//   quellen_selbst_angegeben   die Quellen, wie die Sitzung sie genannt hat
//   quellen_belegt             erreichbar UND mindestens ein Fakt im Text gefunden
//   quellen_nicht_pruefbar     leer, per JavaScript nachgeladen oder gesperrt (403/429)
//   quellen_nicht_nachvollziehbar  erreichbar, aber kein einziger Fakt darauf, oder 404
//   pruefung                   je Fakt: gefunden auf welcher Quelle
// Ohne belegte Quelle fällt `sicherheit` auf „niedrig" (wie in recherche.mjs).
//
// Ergebnisse aus recherche.mjs (meta.abgerufene_seiten vorhanden) werden
// übersprungen: Dort ist der Beleg schon von außen beobachtet.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const args = parseArgs(process.argv.slice(2));
const ligaId = args.liga ?? 'vbl-pro';
const inDir = path.join(HERE, 'ergebnisse', ligaId);

const files = (await fs.readdir(inDir).catch(() => [])).filter((f) => f.endsWith('.json'));
if (files.length === 0) {
  console.error(`Keine Ergebnisse in ${inDir}.`);
  process.exit(1);
}

// Handgeschriebene Ergebnisse (Claude-Code-Sitzung) zuerst gegen das Schema
// prüfen: ein Tippfehler in `vorverkauf` würde sonst stillschweigend 0 Punkte geben.
const SCHEMA = JSON.parse(await fs.readFile(path.join(HERE, 'anleitung', 'ergebnis.schema.json'), 'utf8'));
const formfehler = [];

const todo = [];
for (const f of files) {
  const file = path.join(inDir, f);
  let r;
  try {
    r = JSON.parse(await fs.readFile(file, 'utf8'));
  } catch (err) {
    formfehler.push(`${f}: kein gültiges JSON (${err.message})`);
    continue;
  }
  const fehler = formPruefen(r);
  if (fehler.length) {
    formfehler.push(...fehler.map((x) => `${f}: ${x}`));
    continue;
  }
  if (r.meta?.abgerufene_seiten) continue; // von recherche.mjs, schon beobachtet
  if (r.meta?.pruefung && !args.alle) continue;
  todo.push({ file, r });
}
if (formfehler.length) {
  console.error(`Formfehler, bitte korrigieren und neu starten:\n  ${formfehler.join('\n  ')}`);
  process.exit(1);
}
if (todo.length === 0) {
  console.log('Nichts zu prüfen (--alle prüft auch bereits geprüfte Ergebnisse erneut).');
  process.exit(0);
}

// Alle Seiten zuerst abrufen, dann entscheiden. Scheitert fast alles am Netz,
// ist die Umgebung gesperrt (z. B. Cloud-Sitzung mit eingeschränktem Netzzugang),
// nicht die Quelle falsch; dann wird nichts geschrieben.
const urls = [...new Set(todo.flatMap(({ r }) => quellenVon(r)))];
const seiten = new Map();
await Promise.all(
  urls.map(async (u) => seiten.set(u, await abrufen(u))),
);
const netzfehler = [...seiten.values()].filter((s) => s.art === 'netz').length;
if (urls.length >= 3 && netzfehler / urls.length > 0.8) {
  console.error(
    `${netzfehler} von ${urls.length} Quellen nicht erreichbar. Das sieht nach gesperrtem Netz aus, nicht nach falschen Quellen.\n` +
      'In der Cloud-Umgebung den Netzzugang auf „Voll" stellen. Es wurde nichts geändert.',
  );
  process.exit(2);
}

for (const { file, r } of todo) {
  const quellen = quellenVon(r);
  const fakten = faktenVon(r.ergebnis);
  const pruefung = {};
  const belegt = [];
  const nichtPruefbar = [];
  const nichtNachvollziehbar = [];

  for (const u of quellen) {
    const s = seiten.get(u);
    if (s.art !== 'ok') {
      (s.art === 'fehlt' ? nichtNachvollziehbar : nichtPruefbar).push(u);
      continue;
    }
    // „vorverkauf: unbekannt" ohne Preis, Anbieter usw.: Es gibt nichts zu finden,
    // also auch nichts zu widerlegen.
    if (fakten.length === 0) {
      nichtPruefbar.push(u);
      continue;
    }
    let treffer = 0;
    for (const f of fakten) {
      // Der Anbieter steht oft nur im Link (href) oder in der URL selbst, nicht im Text.
      const heuhaufen = f.imRohtext ? `${u.toLowerCase()} ${s.roh}` : s.text;
      if (f.muster.some((m) => m.test(heuhaufen))) {
        (pruefung[f.name] ??= []).push(u);
        treffer++;
      }
    }
    (treffer > 0 ? belegt : nichtNachvollziehbar).push(u);
  }
  for (const f of fakten) pruefung[f.name] ??= [];

  r.meta.quellen_selbst_angegeben ??= r.meta.quellen_belegt ?? quellen;
  r.meta.quellen_belegt = belegt;
  r.meta.quellen_nicht_pruefbar = nichtPruefbar;
  r.meta.quellen_nicht_nachvollziehbar = nichtNachvollziehbar;
  r.meta.pruefung = { am: new Date().toISOString().slice(0, 10), fakten: pruefung };
  if (belegt.length === 0 && r.ergebnis.sicherheit !== 'niedrig') {
    r.meta.pruefung.sicherheit_vorher = r.ergebnis.sicherheit;
    r.ergebnis.sicherheit = 'niedrig';
  }
  await fs.writeFile(file, JSON.stringify(r, null, 2) + '\n');

  const offen = Object.entries(pruefung).filter(([, v]) => v.length === 0).map(([k]) => k);
  console.log(
    `  ${belegt.length ? '✓' : '✗'}  ${r.verein.name}: ${belegt.length}/${quellen.length} Quellen belegt` +
      (nichtPruefbar.length ? `, ${nichtPruefbar.length} nicht prüfbar` : '') +
      (offen.length ? `; ohne Beleg: ${offen.join(', ')}` : ''),
  );
}

// ---------------------------------------------------------------------------

// Nur so viel JSON-Schema, wie ergebnis.schema.json benutzt: type (auch als
// Liste mit null), enum, required, additionalProperties, items.
function formPruefen(r) {
  const fehler = [];
  if (!r.verein?.name || !r.verein?.liga) fehler.push('verein.name oder verein.liga fehlt');
  if (!r.meta?.recherchiert_am) fehler.push('meta.recherchiert_am fehlt');
  if (!Array.isArray(r.meta?.quellen_belegt)) fehler.push('meta.quellen_belegt fehlt (Liste, darf leer sein)');
  if (!Array.isArray(r.meta?.quellen_nicht_nachvollziehbar)) fehler.push('meta.quellen_nicht_nachvollziehbar fehlt (Liste, darf leer sein)');
  if (r.entwurf != null && typeof r.entwurf !== 'string') fehler.push('entwurf muss Text sein');
  pruefeWert(r.ergebnis, SCHEMA, 'ergebnis', fehler);
  return fehler;
}

function pruefeWert(v, s, pfad, fehler) {
  const typen = [].concat(s.type ?? []);
  const typ = v === null ? 'null' : Array.isArray(v) ? 'array' : Number.isInteger(v) ? 'integer' : typeof v;
  const passt = typen.length === 0 || typen.includes(typ) || (typ === 'integer' && typen.includes('number'));
  if (!passt) return fehler.push(`${pfad}: ${typ} statt ${typen.join('|')}`);
  if (s.enum && !s.enum.includes(v)) return fehler.push(`${pfad}: "${v}" ist keiner von ${s.enum.join(', ')}`);
  if (typ === 'object') {
    for (const k of s.required ?? []) if (!(k in v)) fehler.push(`${pfad}.${k} fehlt`);
    for (const [k, w] of Object.entries(v)) {
      if (s.properties?.[k]) pruefeWert(w, s.properties[k], `${pfad}.${k}`, fehler);
      else if (s.additionalProperties === false) fehler.push(`${pfad}.${k} ist kein Feld des Schemas`);
    }
  }
  if (typ === 'array' && s.items) v.forEach((w, i) => pruefeWert(w, s.items, `${pfad}[${i}]`, fehler));
}

function quellenVon(r) {
  return [...new Set([...(r.ergebnis.quellen ?? []), ...(r.meta?.quellen_selbst_angegeben ?? [])])];
}

// Nur Fakten, die sich als Text wiederfinden lassen. Halle und Beobachtung sind
// dafür zu frei formuliert; die Ansprechperson prüft sich über ihren Kontakt.
function faktenVon(e) {
  const out = [];
  const add = (name, muster, imRohtext = false) => out.push({ name, muster, imRohtext });

  if (e.ticketpreis_eur != null) {
    const euro = Math.trunc(e.ticketpreis_eur);
    const cent = Math.round((e.ticketpreis_eur - euro) * 100);
    const zahl = cent ? `${euro}[,.]${String(cent).padStart(2, '0').replace(/0$/, '0?')}` : `${euro}(?:[,.]00?|,-)?`;
    add('ticketpreis_eur', [
      new RegExp(`(?<![\\d,.])${zahl}\\s*(?:€|euro\\b|eur\\b)`, 'i'),
      new RegExp(`(?:€|eur)\\s*${zahl}(?![\\d])`, 'i'),
      // Preistabellen ohne Währungszeichen: „Erwachsene 10 Studenten 8"
      new RegExp(`(?:erwachsen\\w*|eintritt|vollzahler|tageskarte|preis\\w*)[^\\d]{0,40}(?<![\\d,.])${zahl}(?![\\d])`, 'i'),
    ]);
  }
  if (e.kapazitaet != null) {
    const k = String(e.kapazitaet);
    const mitPunkt = k.replace(/\B(?=(\d{3})+(?!\d))/g, '[.\\s ]?');
    add('kapazitaet', [new RegExp(`(?<![\\d.])${mitPunkt}(?![\\d])`)]);
  }
  if (e.anbieter) {
    // „Vereinsticket (events.vereinsticket.de/…)" → „vereinsticket"
    const wort = e.anbieter.toLowerCase().split(/[\s(/,]+/).find((w) => w.length >= 4);
    if (wort) add('anbieter', [new RegExp(escape(wort), 'i')], true);
  }
  if (e.instagram) add('instagram', [new RegExp(`instagram\\.com/${escape(e.instagram)}\\b`, 'i')], true);
  if (e.ansprechperson?.kontakt) {
    const k = e.ansprechperson.kontakt.trim();
    const muster = k.includes('@')
      ? [new RegExp(escape(k), 'i'), new RegExp(escape(k.replace('@', ' (at) ')), 'i')]
      : [new RegExp(k.replace(/\D/g, '').split('').join('[\\s/()+-]*'))];
    add('ansprechperson', muster, true);
  }
  switch (e.vorverkauf) {
    case 'keiner':
      add('vorverkauf', [/abendkasse|tageskasse|an der kasse|vor ort erh[äa]ltlich/i]);
      break;
    case 'manuell':
      add('vorverkauf', [/(karten|tickets?)[^.]{0,80}(per|via|unter|an)\s+(e-?mail|mail|telefon)|reservier|vorbestell|bestellung/i]);
      break;
    case 'eintritt_frei':
      add('vorverkauf', [/eintritt\s+(ist\s+)?frei|freier eintritt|kostenlos/i]);
      break;
  }
  return out;
}

async function abrufen(url) {
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36',
        'accept-language': 'de-DE,de;q=0.9',
      },
    });
    if (res.status === 404 || res.status === 410) return { art: 'fehlt' };
    if (!res.ok) return { art: 'gesperrt', status: res.status };
    const roh = (await res.text()).toLowerCase();
    const text = roh
      .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;|&#160;/g, ' ')
      .replace(/&euro;|&#8364;/g, '€')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ');
    // Fast leerer Text heißt: Inhalt kommt per JavaScript. Das widerlegt nichts.
    if (text.length < 400) return { art: 'leer' };
    return { art: 'ok', roh, text };
  } catch {
    return { art: 'netz' };
  }
}

function escape(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
