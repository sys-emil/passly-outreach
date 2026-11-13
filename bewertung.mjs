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
    case 'anbieter': add(0, `verkauft bereits online (${e.anbieter ?? 'Anbieter unbekannt'})`); break;
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
  if (/\bII\b|\bBSP\b|\bVCO\b|YoungStars|Junior/i.test(r.verein.name)) add(-25, 'Zweit- oder Nachwuchsteam');

  return { punkte: Math.max(0, Math.min(100, p)), gruende };
}
