// Übersicht: alle Staffeln auf einer Seite, gruppiert danach, wie der Verein heute verkauft.
//   uebersicht.html   im Repo-Ordner; öffnen mit `npm run uebersicht` oder `open uebersicht.html`
//
// Läuft automatisch am Ende von `npm run bericht`. Liest nur ergebnisse/*/*.json,
// keine API, kein Netz. Die Punkte kommen aus bewertung.mjs, wie im Bericht.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { bewerte } from './bewertung.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ZIEL = path.join(HERE, 'uebersicht.html');

export async function schreibeUebersicht() {
  const vereineJson = JSON.parse(await fs.readFile(path.join(HERE, 'vereine.json'), 'utf8'));
  const ligen = Object.keys(vereineJson.ligen);
  const zeilen = [];
  for (const liga of ligen) {
    const dir = path.join(HERE, 'ergebnisse', liga);
    const files = (await fs.readdir(dir).catch(() => [])).filter((f) => f.endsWith('.json'));
    for (const f of files) {
      const r = JSON.parse(await fs.readFile(path.join(dir, f), 'utf8'));
      zeilen.push(zeile(r, f.replace(/\.json$/, '')));
    }
  }
  zeilen.sort((a, b) => b.punkte - a.punkte);
  const staffeln = ligen
    .map((id) => ({ id, name: vereineJson.ligen[id].name, sport: vereineJson.ligen[id].sport, anzahl: zeilen.filter((z) => z.liga === id).length, gesamt: vereineJson.ligen[id].vereine.length }));
  const datenReiter = await fs.readFile(path.join(HERE, 'vorlage', 'daten.html'), 'utf8');
  await fs.writeFile(ZIEL, html({ zeilen, staffeln, stand: new Date().toISOString().slice(0, 10) }).replace('<!--DATEN-REITER-->', () => datenReiter));
  return ZIEL;
}

function zeile(r, slug) {
  const e = r.ergebnis;
  const b = bewerte(r);
  const kontakt = e.ansprechperson?.kontakt ?? '';
  const mails = [...new Set(kontakt.match(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g) ?? [])];
  const telefon = kontakt.replace(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g, '').replace(/^[\s,;]+|[\s,;]+$/g, '').trim();
  const fakten = r.meta.pruefung?.fakten;
  // Kontakt gilt als belegt, wenn pruefe.mjs ihn auf einer Quelle gefunden hat (oder nie geprüft wurde).
  const kontaktBelegt = !fakten || !('ansprechperson' in fakten) || fakten.ansprechperson.length > 0;
  const ohneBeleg = fakten ? Object.entries(fakten).filter(([, v]) => v.length === 0).map(([k]) => k) : [];
  return {
    slug,
    liga: r.verein.liga,
    ligaName: r.verein.liga_name,
    sport: r.verein.sport ?? 'unbekannt',
    name: r.verein.name,
    ort: r.verein.ort,
    land: r.verein.land,
    punkte: b.punkte,
    gruende: b.gruende,
    vorverkauf: e.vorverkauf,
    anbieter: e.anbieter,
    preis: e.ticketpreis_eur,
    halle: e.halle,
    kapazitaet: e.kapazitaet,
    instagram: e.instagram,
    person: [e.ansprechperson?.name, e.ansprechperson?.rolle].filter(Boolean).join(', '),
    mails,
    telefon,
    kontaktBelegt,
    heimspiel: e.naechstes_heimspiel,
    beobachtung: e.beobachtung,
    sicherheit: e.sicherheit,
    website: e.website,
    quellen: r.meta.quellen_belegt ?? [],
    ohneBeleg,
    notiz: r.meta.notiz,
    recherchiert: r.meta.recherchiert_am,
    entwurf: r.entwurf ?? null,
    mail: r.mail ?? null,
  };
}

function html({ zeilen, staffeln, stand }) {
  const daten = JSON.stringify({ zeilen, staffeln, stand }).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Outreach Übersicht</title>
<style>
:root {
  --bg: #f7f3ec; --karte: #fffdf9; --ink: #1b1815; --ink2: #5c554d; --ink3: #8a8279;
  --linie: #e6dfd3; --akzent: #7a1a5e; --akzent-bg: #f4e7f0;
  --gut: #1f6b45; --gut-bg: #e3f1e8; --mittel: #8a5a00; --mittel-bg: #f8eed9; --schwach: #6f6860; --schwach-bg: #eeeae4;
  --warn: #9b2c1f;
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #171513; --karte: #201d1a; --ink: #f2ede6; --ink2: #b8b0a6; --ink3: #8a8279;
    --linie: #36312b; --akzent: #e08ac4; --akzent-bg: #3a2232;
    --gut: #7fd0a1; --gut-bg: #1d3328; --mittel: #e7bf6a; --mittel-bg: #3a2f17; --schwach: #b8b0a6; --schwach-bg: #2b2723;
    --warn: #f0937f;
    color-scheme: dark;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); font: 15px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif; }
main { max-width: 1180px; margin: 0 auto; padding: 32px 16px 80px; }
h1 { font-size: 1.7rem; margin: 0 0 4px; letter-spacing: -0.01em; }
.sub { color: var(--ink2); margin: 0 0 20px; }
.hinweis { background: var(--karte); border: 1px solid var(--linie); border-left: 3px solid var(--akzent); border-radius: 8px; padding: 10px 14px; color: var(--ink2); font-size: 0.88rem; margin-bottom: 20px; }
.leiste { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 24px; }
.leiste button { font: inherit; font-size: 0.88rem; border: 1px solid var(--linie); background: var(--karte); color: var(--ink); padding: 6px 11px; border-radius: 7px; cursor: pointer; }
.leiste button[aria-pressed="true"] { background: var(--ink); color: var(--bg); border-color: var(--ink); }
.leiste button:disabled { opacity: 0.45; cursor: default; }
.leiste input { font: inherit; font-size: 0.88rem; border: 1px solid var(--linie); background: var(--karte); color: var(--ink); padding: 6px 10px; border-radius: 7px; min-width: 0; flex: 1 1 180px; max-width: 280px; }
.leiste label { font-size: 0.88rem; color: var(--ink2); display: flex; gap: 6px; align-items: center; }
section { margin-bottom: 34px; }
section h2 { font-size: 1.05rem; margin: 0 0 2px; display: flex; gap: 10px; align-items: baseline; }
section h2 .n { color: var(--ink3); font-weight: 500; font-size: 0.9rem; }
section .was { color: var(--ink2); font-size: 0.88rem; margin: 0 0 10px; }
.tabelle { background: var(--karte); border: 1px solid var(--linie); border-radius: 10px; overflow: hidden; }
table { width: 100%; border-collapse: collapse; }
th { text-align: left; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink3); font-weight: 600; padding: 9px 12px; border-bottom: 1px solid var(--linie); }
td { padding: 11px 12px; border-bottom: 1px solid var(--linie); vertical-align: top; }
tr.verein { cursor: pointer; }
tr.verein:hover td { background: color-mix(in srgb, var(--akzent-bg) 45%, transparent); }
tr.verein:focus-visible { outline: 2px solid var(--akzent); outline-offset: -2px; }
tr:last-child td { border-bottom: 0; }
.punkte { font-variant-numeric: tabular-nums; font-weight: 700; font-size: 1.05rem; display: inline-block; min-width: 2.6em; text-align: center; padding: 2px 6px; border-radius: 6px; }
.p-gut { background: var(--gut-bg); color: var(--gut); }
.p-mittel { background: var(--mittel-bg); color: var(--mittel); }
.p-schwach { background: var(--schwach-bg); color: var(--schwach); }
.name { font-weight: 600; }
.klein { font-size: 0.82rem; color: var(--ink2); }
.gruende { margin: 0; padding: 0; list-style: none; font-size: 0.82rem; color: var(--ink2); display: flex; flex-wrap: wrap; gap: 3px 10px; }
.gruende .minus { color: var(--warn); }
.gruende .null { color: var(--ink3); }
a { color: var(--akzent); text-decoration: none; }
a:hover { text-decoration: underline; }
.mail { font-size: 0.86rem; word-break: break-all; }
.unbelegt { font-size: 0.75rem; color: var(--warn); display: block; }
.tag { display: inline-block; font-size: 0.72rem; font-weight: 600; padding: 1px 6px; border-radius: 5px; background: var(--akzent-bg); color: var(--akzent); margin-right: 4px; }
.tag.grau { background: var(--schwach-bg); color: var(--schwach); }
tr.detail td { background: var(--bg); padding: 16px 16px 20px; }
.detail-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 16px; }
.box { background: var(--karte); border: 1px solid var(--linie); border-radius: 8px; padding: 12px 14px; }
.box h3 { margin: 0 0 6px; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink3); }
.box p { margin: 0 0 6px; }
.box dl { margin: 0; display: grid; grid-template-columns: max-content minmax(0, 1fr); gap: 3px 12px; font-size: 0.88rem; }
.box dt { color: var(--ink3); }
.box dd { margin: 0; }
.text { white-space: pre-wrap; font-size: 0.9rem; }
.betreff { font-weight: 700; margin-bottom: 8px; }
.knoepfe { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
.knoepfe button, .knoepfe a { font: inherit; font-size: 0.82rem; border: 1px solid var(--linie); background: var(--karte); color: var(--ink); padding: 5px 10px; border-radius: 6px; cursor: pointer; }
.knoepfe .haupt { background: var(--ink); color: var(--bg); border-color: var(--ink); }
.leer { color: var(--ink3); font-size: 0.88rem; }
.leer code { background: var(--schwach-bg); padding: 1px 5px; border-radius: 4px; }
.voll { grid-column: 1 / -1; }
.reiter { display: flex; gap: 4px; border-bottom: 1px solid var(--linie); margin: 0 0 22px; }
.reiter a { padding: 8px 14px; color: var(--ink2); font-weight: 600; border-bottom: 2px solid transparent; margin-bottom: -1px; text-decoration: none; }
.reiter a[aria-current="page"] { color: var(--ink); border-bottom-color: var(--ink); }
.quellen { font-size: 0.8rem; word-break: break-all; margin: 0; padding-left: 18px; }
@media (max-width: 52em) {
  .spalte-grund, .spalte-insta { display: none; }
  /* Feste Spalten: lange E-Mail-Adressen brechen um, statt die Tabelle zu verbreitern. */
  .tabelle table { table-layout: fixed; }
  .tabelle th:first-child { width: 4.2rem; }
  .tabelle th:nth-child(4) { width: 42%; }
  .mail, .name, .klein { overflow-wrap: anywhere; }
  .detail-grid { grid-template-columns: minmax(0, 1fr); }
}
</style>
</head>
<body>
<main>
  <h1>Outreach Übersicht</h1>
  <p class="sub" id="sub"></p>
  <div class="leiste" id="sportarten" hidden></div>
  <nav class="reiter"><a href="#vereine" id="r-vereine">Vereine</a><a href="#daten" id="r-daten">Daten</a></nav>
  <div id="tab-daten" hidden></div>
  <div id="tab-vereine">
  <div class="hinweis">Klick auf einen Verein öffnet Beobachtung, Kontakt, DM und Mail. Neue Mail: in Claude Code „Mail für &lt;Verein&gt; vorbereiten“. E-Mails nur an Vereine, mit denen schon Kontakt bestand oder die um Infos gebeten haben (§ 7 Abs. 2 UWG); für den Erstkontakt DM oder Anruf.</div>
  <div class="leiste" id="staffeln"></div>
  <div class="leiste">
    <input id="suche" type="search" placeholder="Verein oder Ort suchen" aria-label="Verein oder Ort suchen">
    <label><input type="checkbox" id="nurMail"> nur mit E-Mail</label>
    <label><input type="checkbox" id="nurBayern"> nur Bayern</label>
  </div>
  <div id="liste"></div>
  </div>
</main>
<script>
const D = ${daten};
const KAT = [
  { id: 'keiner', titel: 'Nur Abendkasse', was: 'Kein Vorverkauf. Die beste Lücke für Passly.' },
  { id: 'manuell', titel: 'Vorverkauf von Hand', was: 'Per Mail, Telefon oder Liste. Viel Arbeit für den Verein.' },
  { id: 'keine_angabe', titel: 'Keine Ticketangabe online', was: 'Website gelesen, kein Wort zu Tickets und kein Shop. Meist Abendkasse; ein Anruf bestätigt es.' },
  { id: 'unbekannt', titel: 'Unklar, nachfassen', was: 'Nicht feststellbar. Ein Anruf klärt es oft schneller als eine Suche.' },
  { id: 'anbieter', titel: 'Verkauft schon online', was: 'Hat einen Anbieter. Aufhänger nur Dauerkarte oder Abendkasse, nie ein Vergleich.' },
  { id: 'eintritt_frei', titel: 'Eintritt frei', was: 'Nichts zu verkaufen.' },
];
const zustand = { sport: 'alle', staffel: 'alle', suche: '', nurMail: false, nurBayern: false, offen: new Set() };
try { const s = JSON.parse(localStorage.getItem('outreach-filter') || '{}'); Object.assign(zustand, { sport: s.sport || 'alle', staffel: s.staffel || 'alle', nurMail: !!s.nurMail, nurBayern: !!s.nurBayern }); } catch {}
const merke = () => { try { localStorage.setItem('outreach-filter', JSON.stringify({ sport: zustand.sport, staffel: zustand.staffel, nurMail: zustand.nurMail, nurBayern: zustand.nurBayern })); } catch {} };
// Sportarten mit Ergebnissen; die Leiste erscheint erst ab zwei.
const SPORTARTEN = [...new Set(D.zeilen.map((z) => z.sport))].sort((a, b) => D.zeilen.filter((z) => z.sport === b).length - D.zeilen.filter((z) => z.sport === a).length);
if (!SPORTARTEN.includes(zustand.sport)) zustand.sport = 'alle';
window.imSport = (z) => zustand.sport === 'alle' || z.sport === zustand.sport;
function sportKnoepfe() {
  const el = document.getElementById('sportarten');
  el.hidden = SPORTARTEN.length < 2;
  if (el.hidden) return;
  const k = [['alle', 'Alle Sportarten', D.zeilen.length]].concat(SPORTARTEN.map((s) => [s, s, D.zeilen.filter((z) => z.sport === s).length]));
  el.innerHTML = k.map(([id, name, n]) => '<button data-sp="' + esc(id) + '" aria-pressed="' + (zustand.sport === id) + '">' + esc(name) + ' <span class="klein">' + n + '</span></button>').join('');
  el.querySelectorAll('button').forEach((b) => b.onclick = () => {
    zustand.sport = b.dataset.sp; zustand.staffel = 'alle'; merke();
    sportKnoepfe(); staffelKnoepfe(); zeige();
    datenFertig = false; if (location.hash === '#daten' && window.zeigeDaten) { window.zeigeDaten(); datenFertig = true; }
  });
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const stufe = (p) => (p >= 60 ? 'p-gut' : p >= 40 ? 'p-mittel' : 'p-schwach');

document.getElementById('sub').textContent =
  D.zeilen.length + ' Vereine recherchiert · Stand ' + D.stand + ' · Punkte 0 bis 100, gerechnet aus den Fakten, nicht vom Modell';

function staffelKnoepfe() {
  const el = document.getElementById('staffeln');
  const k = [{ id: 'alle', name: 'Alle Staffeln', anzahl: D.zeilen.filter(imSport).length, gesamt: 0 }, ...D.staffeln.filter((s) => zustand.sport === 'alle' || s.sport === zustand.sport)];
  el.innerHTML = k.map((s) => '<button data-s="' + s.id + '" aria-pressed="' + (zustand.staffel === s.id) + '"' + (s.anzahl === 0 ? ' disabled title="noch nicht recherchiert"' : '') + '>' +
    esc(s.name) + ' <span class="klein">' + (s.id === 'alle' ? s.anzahl : s.anzahl + '/' + s.gesamt) + '</span></button>').join('');
  el.querySelectorAll('button').forEach((b) => b.onclick = () => { zustand.staffel = b.dataset.s; merke(); staffelKnoepfe(); zeige(); });
}

function passt(z) {
  if (!imSport(z)) return false;
  if (zustand.staffel !== 'alle' && z.liga !== zustand.staffel) return false;
  if (zustand.nurMail && z.mails.length === 0) return false;
  if (zustand.nurBayern && z.land !== 'BY') return false;
  const q = zustand.suche.trim().toLowerCase();
  return !q || (z.name + ' ' + z.ort).toLowerCase().includes(q);
}

function gruendeHtml(g) {
  return '<ul class="gruende">' + g.map((t) => '<li class="' + (t.startsWith('-') ? 'minus' : t.startsWith('0') ? 'null' : '') + '">' + esc(t) + '</li>').join('') + '</ul>';
}

function kontaktHtml(z) {
  if (!z.mails.length) return '<span class="leer">keine</span>';
  return z.mails.map((m) => '<a class="mail" href="mailto:' + esc(m) + '">' + esc(m) + '</a>').join('<br>') +
    (z.kontaktBelegt ? '' : '<span class="unbelegt">auf den Quellen nicht bestätigt</span>');
}

function detailHtml(z) {
  const fakten = [
    ['Staffel', z.ligaName], ['Ort', z.ort + ' (' + z.land + ')'],
    ['Vorverkauf', z.vorverkauf + (z.anbieter ? ', ' + z.anbieter : '')],
    ['Preis', z.preis != null ? z.preis.toString().replace('.', ',') + ' €' : null],
    ['Halle', [z.halle, z.kapazitaet ? z.kapazitaet + ' Plätze' : null].filter(Boolean).join(', ') || null],
    ['Heimspiel', z.heimspiel], ['Ansprechperson', z.person || null], ['Telefon', z.telefon || null],
    ['Instagram', z.instagram ? '<a href="https://instagram.com/' + esc(z.instagram) + '" target="_blank" rel="noopener">@' + esc(z.instagram) + '</a>' : null, true],
    ['Website', z.website ? '<a href="' + esc(z.website) + '" target="_blank" rel="noopener">' + esc(z.website.replace(/^https?:\\/\\//, '')) + '</a>' : null, true],
    ['Sicherheit', z.sicherheit + (z.ohneBeleg.length ? ' · ohne Beleg: ' + z.ohneBeleg.join(', ') : '')],
    ['Recherchiert', z.recherchiert],
  ].filter((f) => f[1]);
  const mail = z.mail
    ? '<div class="betreff">' + esc(z.mail.betreff) + '</div><div class="text">' + esc(z.mail.text) + '</div>' +
      '<p class="klein" style="margin-top:8px">An: ' + esc(z.mail.an || 'keine Adresse') + ' · erstellt ' + esc(z.mail.erstellt_am || '') + '</p>' +
      '<div class="knoepfe"><button class="haupt" data-kopiere="mail">Mail kopieren</button>' +
      (z.mail.an ? '<a href="mailto:' + esc(z.mail.an) + '?subject=' + encodeURIComponent(z.mail.betreff) + '&body=' + encodeURIComponent(z.mail.text) + '">In Mail-App öffnen</a>' : '') + '</div>'
    : '<p class="leer">Noch keine Mail. In Claude Code: <code>Mail für ' + esc(z.name) + ' vorbereiten</code></p>';
  const dm = z.entwurf
    ? '<div class="text">' + esc(z.entwurf.replace(/\\*\\*/g, '')) + '</div><div class="knoepfe"><button data-kopiere="dm">DM kopieren</button></div>'
    : '<p class="leer">Kein Entwurf (erst ab 45 Punkten).</p>';
  return '<div class="detail-grid">' +
    '<div class="box voll"><h3>Beobachtung</h3><p>' + esc(z.beobachtung) + '</p>' + (z.notiz ? '<p class="klein">' + esc(z.notiz) + '</p>' : '') + '</div>' +
    '<div class="box"><h3>Fakten</h3><dl>' + fakten.map((f) => '<dt>' + f[0] + '</dt><dd>' + (f[2] ? f[1] : esc(f[1])) + '</dd>').join('') + '</dl></div>' +
    '<div class="box"><h3>Punkte ' + z.punkte + '</h3>' + gruendeHtml(z.gruende) +
      '<h3 style="margin-top:12px">Belegte Quellen</h3>' + (z.quellen.length ? '<ol class="quellen">' + z.quellen.map((u) => '<li><a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(u) + '</a></li>').join('') + '</ol>' : '<p class="leer">keine</p>') + '</div>' +
    '<div class="box"><h3>E-Mail</h3>' + mail + '</div>' +
    '<div class="box"><h3>Instagram-DM und Telefon</h3>' + dm + '</div>' +
  '</div>';
}

function zeige() {
  const liste = document.getElementById('liste');
  const sichtbar = D.zeilen.filter(passt);
  const mehrereStaffeln = zustand.staffel === 'alle';
  liste.innerHTML = KAT.map((k) => {
    const z = sichtbar.filter((x) => x.vorverkauf === k.id);
    if (!z.length) return '';
    return '<section><h2>' + esc(k.titel) + ' <span class="n">' + z.length + '</span></h2><p class="was">' + esc(k.was) + '</p>' +
      '<div class="tabelle"><table><thead><tr><th>Punkte</th><th>Verein</th><th class="spalte-grund">Begründung</th><th>E-Mail</th><th class="spalte-insta">Entwürfe</th></tr></thead><tbody>' +
      z.map((x) => {
        const offen = zustand.offen.has(x.slug + x.liga);
        return '<tr class="verein" tabindex="0" aria-expanded="' + offen + '" data-id="' + esc(x.slug + x.liga) + '">' +
          '<td><span class="punkte ' + stufe(x.punkte) + '">' + x.punkte + '</span></td>' +
          '<td><div class="name">' + esc(x.name) + '</div><div class="klein">' + esc(x.ort) + (mehrereStaffeln ? ' · ' + esc(x.ligaName) : '') +
            (x.anbieter ? '<br>' + esc(x.anbieter) : '') + '</div></td>' +
          '<td class="spalte-grund">' + gruendeHtml(x.gruende) + '</td>' +
          '<td>' + kontaktHtml(x) + '</td>' +
          '<td class="spalte-insta">' + (x.mail ? '<span class="tag">Mail</span>' : '') + (x.entwurf ? '<span class="tag grau">DM</span>' : '') + '</td>' +
        '</tr>' + (offen ? '<tr class="detail"><td colspan="5">' + detailHtml(x) + '</td></tr>' : '');
      }).join('') + '</tbody></table></div></section>';
  }).join('') || '<p class="leer">Nichts gefunden.</p>';

  liste.querySelectorAll('tr.verein').forEach((tr) => {
    const umschalten = (ev) => {
      if (ev.target.closest('a')) return;
      const id = tr.dataset.id;
      zustand.offen.has(id) ? zustand.offen.delete(id) : zustand.offen.add(id);
      zeige();
    };
    tr.onclick = umschalten;
    tr.onkeydown = (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); umschalten(ev); } };
  });
  liste.querySelectorAll('[data-kopiere]').forEach((b) => {
    b.onclick = async () => {
      const id = b.closest('tr.detail').previousElementSibling.dataset.id;
      const z = D.zeilen.find((x) => x.slug + x.liga === id);
      const text = b.dataset.kopiere === 'mail' ? 'Betreff: ' + z.mail.betreff + '\\n\\n' + z.mail.text : z.entwurf.replace(/\\*\\*/g, '');
      try { await navigator.clipboard.writeText(text); b.textContent = 'Kopiert'; } catch { b.textContent = 'Kopieren ging nicht'; }
      setTimeout(() => (b.textContent = b.dataset.kopiere === 'mail' ? 'Mail kopieren' : 'DM kopieren'), 1600);
    };
  });
}

const suche = document.getElementById('suche');
suche.oninput = () => { zustand.suche = suche.value; zeige(); };
for (const id of ['nurMail', 'nurBayern']) {
  const el = document.getElementById(id);
  el.checked = zustand[id];
  el.onchange = () => { zustand[id] = el.checked; merke(); zeige(); };
}
let datenFertig = false;
sportKnoepfe();
staffelKnoepfe();
zeige();

function reiter() {
  const daten = location.hash === '#daten';
  document.getElementById('tab-daten').hidden = !daten;
  document.getElementById('tab-vereine').hidden = daten;
  document.getElementById('r-daten').toggleAttribute('aria-current', daten);
  document.getElementById('r-vereine').toggleAttribute('aria-current', !daten);
  if (daten) document.getElementById('r-daten').setAttribute('aria-current', 'page'); else document.getElementById('r-vereine').setAttribute('aria-current', 'page');
  if (daten && !datenFertig && window.zeigeDaten) { window.zeigeDaten(); datenFertig = true; }
}
window.addEventListener('hashchange', reiter);
window.addEventListener('DOMContentLoaded', reiter);
</script>
<!--DATEN-REITER-->
</body>
</html>
`;
}

// Direkt aufgerufen (npm run uebersicht): schreiben und öffnen.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const ziel = await schreibeUebersicht();
  console.log(`Übersicht → ${path.relative(HERE, ziel)}`);
  if (!process.argv.includes('--ohne-oeffnen') && process.platform === 'darwin') {
    const { spawn } = await import('node:child_process');
    spawn('open', [ziel], { stdio: 'ignore', detached: true }).unref();
  }
}
