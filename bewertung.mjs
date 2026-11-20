// Bewertung: deterministisch, damit die Rangfolge nachvollziehbar bleibt.
// Genutzt von bericht.mjs (Rangliste je Staffel) und uebersicht.mjs (alle Staffeln).
// Geändert 2026-11-13 (Audit): keine_angabe +30, Kapazität unbekannt 0 statt +8,
// Zweit-/Nachwuchsteam -25. Alle Staffeln danach neu bewertet; die Formel gilt für alle gleich.

export function bewerte(r) {
  const e = r.ergebnis;
  const gruende = [];
  let p = 0;
  const add = (n, grund) => { p += n; gruende.push(`${n > 0 ? '+' : ''}${n} ${grund}`); };

  switch (e.vorverkauf) {
    case 'keiner': add(40, 'nur Abendkasse'); break;
    case 'manuell': add(35, 'Vorverkauf per Mail/Telefon/Liste'); break;
    // Wer einen Shop hat, verlinkt ihn; eine Vereinsseite ohne jedes Wort zu Tickets ist fast immer Abendkasse.
    case 'keine_angabe': add(30, 'Website ohne Ticketangabe, kein Shop verlinkt'); break;
    case 'unbekannt': add(15, 'Vorverkauf nicht feststellbar'); break;
    // −15 statt 0 (2026-11-13, ProB): mit bekannter Kapazität kam ein Verein mit Shop sonst über die Entwurfsschwelle.
    case 'anbieter': add(-15, `verkauft bereits online (${e.anbieter ?? 'Anbieter unbekannt'})`); break;
    case 'eintritt_frei': add(-20, 'Eintritt frei, nichts zu verkaufen'); break;
  }
  if (e.eintritt_frei === true && e.vorverkauf !== 'eintritt_frei') add(-20, 'Eintritt frei');

  // Unbekannte Kapazität gibt keine Punkte (bis 2026-11-13: +8, mehr als eine bekannte kleine Halle).
  if (e.kapazitaet == null) { /* nichts */ }
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
  // Zweit- und Nachwuchsteams verkaufen fast nie selbst (Shop und Konto gehören der ersten Mannschaft).
  if (/\bII\b|\bBSP\b|\bVCO\b|\bBBA\b|YoungStars|Junior|Academy|Akademie|Amateure|Young Violets|Liefering|Junge Wikinger/i.test(r.verein.name)) add(-25, 'Zweit- oder Nachwuchsteam');

  return { punkte: Math.max(0, Math.min(100, p)), gruende };
}

// Wechselwert (seit 2026-11-19, Emils „Wechsel-Spur“): nur für Vereine, die schon online
// verkaufen. Misst nicht die Lücke, sondern wie lohnend und erreichbar ein Wechsel ist:
// Größe (Liga, Halle), Anlass (Anbieter, Teil-Lücken), Kontakt. Ansatz im Gespräch:
// „Seid ihr zufrieden? Ein Event kostenlos mit Passly testen, parallel zum jetzigen System.“
// Eigene Skala neben `bewerte`, damit sich beide Ranglisten nicht verdrängen.
const LIGA_GROESSE = [
  // Österreich (seit 2026-11-20): Land etwa ein Zehntel so groß, die erste und zweite Liga dort zählen als groß.
  [/^(rl-|eh-oberliga|gfl$|prob$|at-hla|at-bb-superliga|at-2liga)/, 20, 'große Liga'],
  [/^(oberliga|bayernliga|hessenliga|mittelrheinliga|bremen-liga|nofv-|hb3-|vbl-pro|gfl2|eh-|hbf2|fbl2|ringen|at-rl-)/, 12, 'mittlere Liga'],
  [/^(vbl-|bb-rl1|kultur-muc-privattheater|kultur-muc-kleinkunst)/, 8, 'kleinere Liga oder Bühne'],
];
const ANBIETER_ANLASS = [
  [/reservix|eventim|ticketmaster|ticket-onlineshop|etix|adticket|rodrigue|regiondo|eventbrite/i, 20, 'Marktplatz- oder Großanbieter (Gebühren, Kontrolle)'],
  [/eigen|wix|jotform|formular|clubity|app/i, 15, 'Eigenbau-Shop (Pflegeaufwand)'],
  [/vbo|ditix|leoticket|ticketleo|ticket\.io|eventix|snapticket|okticket|ticket-regional|tickethome|regy|kulturkurier|yesticket|ticketino|nordsee|münchen ticket|rausgegangen/i, 10, 'Ticketdienst'],
  [/vereinsticket|pretix|vivenu/i, 5, 'Ticketdienst mit ähnlichem Umfang'],
];
const TEIL_LUECKE = /nur bar|barzahlung|keine kartenzahlung|nur in bar|telefonisch|per mail|e-mail-adresse|formular|abholung|abholbereit|geschäftsstelle|nicht möglich|vor ort|getränke|teil-lücke/i;
const KEIN_ZIEL = /profiklub|kein zielkunde|kein zielmarkt|kette|dublette|vermieter|spielstätte, verkauf durch/i;

export function wechselwert(r) {
  const e = r.ergebnis;
  if (e.vorverkauf !== 'anbieter') return null;
  const gruende = [];
  let p = 0;
  const add = (n, grund) => { p += n; gruende.push(`${n > 0 ? '+' : ''}${n} ${grund}`); };
  const liga = r.verein.liga ?? '';
  const g = LIGA_GROESSE.find(([re]) => re.test(liga));
  if (g) add(g[1], g[2]);
  if (e.kapazitaet >= 1000) add(15, `Halle/Stadion ${e.kapazitaet}`);
  else if (e.kapazitaet >= 300) add(10, `Halle ${e.kapazitaet}`);
  const a = ANBIETER_ANLASS.find(([re]) => re.test(e.anbieter ?? ''));
  if (a) add(a[1], a[2]);
  const text = `${e.beobachtung ?? ''} ${r.meta?.notiz ?? ''}`;
  if (TEIL_LUECKE.test(text)) add(20, 'Teil-Lücke (bar, Telefon, Formular oder Abholung)');
  if (e.ticketpreis_eur >= 10) add(5, `Preis ${e.ticketpreis_eur} €`);
  if (e.instagram) add(8, 'Instagram vorhanden');
  if (e.ansprechperson?.name || e.ansprechperson?.kontakt) add(8, 'Ansprechperson bekannt');
  if (r.verein.land === 'BY') add(10, 'Bayern, Besuch möglich');
  if (e.sicherheit === 'niedrig') add(-10, 'Einordnung unsicher');
  if (KEIN_ZIEL.test(text)) add(-40, 'kein Zielkunde (Profiklub, Kette, Ausland oder Dublette)');
  if (/\bII\b|\bIII\b|\bBSP\b|YoungStars|Junior|Academy|Akademie|Talents|Amateure|Young Violets|Liefering|Junge Wikinger/i.test(r.verein.name)) add(-30, 'Zweit- oder Nachwuchsteam');
  return { punkte: Math.max(0, Math.min(100, p)), gruende };
}
