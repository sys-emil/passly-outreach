// Briefe als Erstkontakt (seit 2026-11-19, nach der Rechtsprüfung):
// E-Mail, Instagram-DM, WhatsApp und Kontaktformulare sind „elektronische Post“ und
// brauchen vorher eine Einwilligung (§ 7 Abs. 2 Nr. 2 UWG, in Österreich § 174 TKG).
// Ein Brief ist ohne Einwilligung erlaubt. Dieses Skript schreibt für jeden Kandidaten
// (Lücke ab 45 Punkten, Wechsel ab 50) einen Brief nach `brief = {anschrift, text}` (oberste Ebene der Ergebnisdatei):
//
//   npm run briefe               alle Kandidaten ohne Brief
//   npm run briefe -- --neu      vorhandene Briefe neu schreiben
//   npm run briefe -- --liga X   nur eine Liga
//   npm run briefe -- --mit-at   auch Österreich (erst, wenn die Umsatzsteuer dort geklärt ist:
//                                EU-Kleinunternehmerverfahren nach § 19a UStG oder Registrierung in AT)
//
// Anschrift: aus dem Impressum der Vereinsseite (Straße + PLZ Ort), sonst null
// (dann im Admin von Hand nachsehen). Aufhänger: der erste Satz des geprüften
// Entwurfs, enthält also nur Fakten, die pruefe.mjs belegt hat.
// Absender: Platzhalter in eckigen Klammern; mit BRIEF_ABSENDER (mehrzeilig, \n),
// BRIEF_MAIL, BRIEF_TELEFON, BRIEF_NAME in .env werden sie ersetzt.
// Verschickt wird nichts: Emil druckt und sendet selbst.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { bewerte, wechselwert } from './bewertung.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const neu = args.includes('--neu');
const mitAt = args.includes('--mit-at');
const nurLiga = args.includes('--liga') ? args[args.indexOf('--liga') + 1] : null;
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36';
const ABS = (process.env.BRIEF_ABSENDER ?? '[Dein Name]\\n[Anschrift laut Impressum von getpassly.de]').replace(/\\n/g, '\n');
const MAIL = process.env.BRIEF_MAIL ?? '[E-Mail]';
const TEL = process.env.BRIEF_TELEFON ?? '[Telefon]';
const NAME = process.env.BRIEF_NAME ?? '[Dein Name]';

const holen = async (u) => {
  try {
    const r = await fetch(u, { headers: { 'user-agent': UA, 'accept-language': 'de' }, redirect: 'follow', signal: AbortSignal.timeout(15000) });
    return r.ok ? { url: r.url, html: await r.text() } : null;
  } catch { return null; }
};
const zeilen = (h) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<br\s*\/?>|<\/(p|div|li|h\d|tr|td|span|strong|address)>/gi, '\n').replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&auml;/g, 'ä').replace(/&ouml;/g, 'ö').replace(/&uuml;/g, 'ü').replace(/&szlig;/g, 'ß')
  .replace(/&Auml;/g, 'Ä').replace(/&Ouml;/g, 'Ö').replace(/&Uuml;/g, 'Ü').replace(/&#\d+;|&[a-z]+;/g, ' ')
  .split('\n').map((z) => z.replace(/\s+/g, ' ').trim()).filter(Boolean);
const STRASSE = /^[A-ZÄÖÜa-zäöüß][\wäöüßÄÖÜ .\-'/]{2,50}?\s\d{1,4}\s?[a-zA-Z]?(?:\s?[-–/]\s?\d{1,4}[a-z]?)?$/;
const PLZORT = /^(?:(?:D|A|AT)-?\s?)?(\d{4,5})\s+([A-ZÄÖÜ][\wäöüßÄÖÜ .\-/()]{1,50})$/;

// Impressum finden und die erste Folge „Straße Nr“ + „PLZ Ort“ lesen.
async function anschrift(name, website) {
  if (!website) return null;
  const start = await holen(website);
  if (!start) return null;
  const base = new URL(start.url);
  const link = [...start.html.matchAll(/<a[^>]+href="([^"#]+)"[^>]*>([\s\S]*?)<\/a>/gi)]
    .map((m) => { try { return [new URL(m[1].replace(/&amp;/g, '&'), base).href, m[2]]; } catch { return null; } })
    .filter(Boolean).find(([h, t]) => /impressum|imprint/i.test(h + ' ' + t));
  const seiten = link ? [await holen(link[0]), start] : [start];
  for (const s of seiten.filter(Boolean)) {
    const z = zeilen(s.html);
    for (let i = 1; i < z.length; i++) {
      // Straße und PLZ in einer Zeile („Hauptstr. 5, 12345 Ort“) oder in zwei Zeilen.
      const eins = z[i].match(/^(.{3,60}?\d{1,4}\s?[a-z]?),\s*(?:(?:D|A|AT)-?\s?)?(\d{4,5})\s+(.{2,50})$/);
      if (eins && STRASSE.test(eins[1])) return { text: `${name}\n${eins[1]}\n${eins[2]} ${eins[3]}`, quelle: s.url };
      const plz = z[i].match(PLZORT);
      if (plz && STRASSE.test(z[i - 1])) return { text: `${name}\n${z[i - 1]}\n${plz[1]} ${plz[2]}`, quelle: s.url };
    }
  }
  return null;
}

// Erster Satz der geprüften Nachricht als Einstieg (ohne Anrede, „hab“ → „habe“).
// Satzende nur an einem Punkt, dem kein Ziffer vorausgeht und auf den ein Großbuchstabe
// folgt, damit „3. Liga“ oder „21.11.“ den Satz nicht abschneiden.
function aufhaenger(entwurf) {
  if (!entwurf) return null;
  const dm = entwurf.replace(/^\*\*[^*]+\*\*\s*/, '').split(/\n\s*\*\*/)[0].trim().replace(/^(?:Hi|Hallo),?\s*/, '');
  const satzRe = /^([\s\S]+?(?<!\d)[.?!])(?=\s+[A-ZÄÖÜ„]|\s*$)/;
  const m = dm.match(satzRe);
  if (!m) return null;
  // Endet der erste Satz mit „!“ (Glückwunsch o. ä.), trägt meist der zweite den Befund.
  const zwei = m[1].endsWith('!') ? dm.slice(m[1].length).trim().match(satzRe)?.[1] : null;
  const satz = (zwei ? `${m[1]} ${zwei}` : m[1]).replace(/\bhab\b/g, 'habe').replace(/\s+/g, ' ').trim();
  return satz.charAt(0).toUpperCase() + satz.slice(1);
}

function brieftext(r, w, anschriftQuelle) {
  const e = r.ergebnis;
  const verein = r.verein.name.replace(/\s*[—–]\s*/g, ' - ');
  const kultur = r.verein.sport === 'Kultur';
  const club = r.verein.sport === 'Club';
  const quelle = anschriftQuelle ?? e.website ?? 'eurer Website';
  const termin = kultur ? 'eure nächste Vorstellung' : club ? 'eure nächste Clubnacht' : 'euer nächstes Heimspiel';
  const seite = kultur ? 'getpassly.de' : club ? 'getpassly.de/clubs' : 'getpassly.de/sportvereine';
  const kasse = r.verein.land === 'AT' ? 'Abendkassa' : 'Abendkasse';
  const passly = `Passly ist eine Ticketplattform für Vereine und Veranstalter. Gäste kaufen vorab per Karte oder Apple Pay, an der Tür scannt euer Team einen wechselnden QR-Code mit dem Handy, und ${kultur ? `die ${kasse} läuft` : `${kasse} und Dauerkarten laufen`} im selben System.`;
  let betreff, absatz1, angebot;
  if (w) {
    const an = (e.anbieter ?? 'einen Ticketanbieter').replace(/\s*\(.*$/, '').replace(/^eigener? /i, 'euren eigenen ');
    betreff = `Ticketing für ${kultur ? 'eure Vorstellungen' : 'eure Heimspiele'}: ein Vorschlag`;
    absatz1 = `ihr verkauft eure Tickets schon online über ${an}. Deshalb nur eine kurze Frage: Seid ihr damit rundum zufrieden?`;
    angebot = `Mein Vorschlag: Ihr probiert Passly bei einem einzelnen Spiel aus, etwa einem Derby oder einem Sonderspiel, parallel zu eurem jetzigen System und ohne Verpflichtung, sofern euer Vertrag das zulässt.`;
  } else {
    // Ohne Entwurf: ein belegtes Zitat aus der Beobachtung, wenn der Verkaufsweg belegt ist.
    const zitat = (e.beobachtung ?? '').match(/„([^“]{20,200})“/)?.[1];
    const belegt = !(r.meta?.pruefung?.fakten?.vorverkauf?.length === 0);
    const a = aufhaenger(r.entwurf) ?? (zitat && belegt ? `Auf eurer Website steht: „${zitat.replace(/\s+/g, ' ').trim()}“.` : null);
    betreff = kultur ? 'Kartenverkauf für eure Vorstellungen' : club ? 'Tickets für eure Clubnächte' : 'Ticketverkauf für eure Heimspiele';
    absatz1 = a ?? 'Auf eurer Website habe ich keinen Online-Kartenverkauf gefunden.';
    angebot = `Mein Vorschlag: Wir richten ${termin} gemeinsam ein, als Testlauf ohne Verpflichtung.`;
  }
  const kosten = 'Für euch ist das kostenlos: Die Servicegebühr zahlt der Gast mit dem Ticket, der Ticketpreis kommt vollständig bei euch an.';
  const platz = kultur ? ' Passly eignet sich für Vorstellungen mit freier Platzwahl.' : '';
  return [
    ABS,
    '',
    '[Ort], [Datum]',
    '',
    betreff,
    '',
    `Liebe Verantwortliche von ${verein},`,
    '',
    absatz1.charAt(0).toUpperCase() + absatz1.slice(1),
    '',
    `${passly} ${kosten}${platz}`,
    '',
    `${angebot} Wenn ihr Lust habt, meldet euch einfach per Mail an ${MAIL} oder unter ${TEL}. Mehr dazu unter ${seite}.`,
    '',
    'Viele Grüße',
    NAME,
    '',
    `Datenschutz: Eure Anschrift stammt von der öffentlichen Website ${quelle}. Wir nutzen sie nur für dieses Schreiben. Wenn ihr keine weitere Post von uns möchtet, genügt eine kurze Nachricht, dann löschen wir eure Daten. Mehr unter getpassly.de/datenschutz.`,
  ].join('\n');
}

let geschrieben = 0, mitAnschrift = 0;
const ligen = (await fs.readdir(path.join(HERE, 'ergebnisse'), { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name).filter((l) => !nurLiga || l === nurLiga);
for (const liga of ligen) {
  for (const f of (await fs.readdir(path.join(HERE, 'ergebnisse', liga))).filter((x) => x.endsWith('.json'))) {
    const p = path.join(HERE, 'ergebnisse', liga, f);
    const r = JSON.parse(await fs.readFile(p, 'utf8'));
    if (r.brief && !neu) continue;
    if (r.verein.land === 'AT' && !mitAt) continue;
    const w = wechselwert(r);
    const kandidat = w ? w.punkte >= 50 : bewerte(r).punkte >= 45;
    if (!kandidat) continue;
    const a = await anschrift(r.verein.name.replace(/\s*[—–]\s*/g, ' - '), r.ergebnis.website);
    const text = brieftext(r, w, a?.quelle);
    if (/[—–]/.test(text)) throw new Error(`Gedankenstrich im Brief ${liga}/${f}`);
    r.brief = { anschrift: a?.text ?? null, text };
    await fs.writeFile(p, JSON.stringify(r, null, 2) + '\n');
    geschrieben++; if (a) mitAnschrift++;
    console.log(`${a ? '✓' : '·'} ${liga}/${f.replace('.json', '')}`);
  }
}
console.log(`\n${geschrieben} Briefe, ${mitAnschrift} mit Anschrift aus dem Impressum, ${geschrieben - mitAnschrift} ohne (im Admin nachsehen).`);
