# Auftrag: TV Kirchzell (3. Liga Männer Handball Süd-West)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-suedwest/tv-kirchzell.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.tv-kirchzell.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.tv-kirchzell.de/, https://www.tv-kirchzell.de/?page_id=10762, https://www.tv-kirchzell.de/?page_id=10764, https://www.tv-kirchzell.de/?p=14573, https://www.tv-kirchzell.de/?p=14520
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: tvk_odenwaldexpress
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „g Sportliche Erfolge Unsere Hauptsponsoren Club der 100er Freikarte / Dauerkarte Galerie Bilder TREFFER 1. Mannschaft Aktuell Tabelle Liveticker Teami“ (https://www.tv-kirchzell.de/)
- abendkasse: „ahlung per Email an den Käufer geschickt. Eintrittskarten Online Shop Abendkasse Erwachsene ab 18 Jahren 11,00 € 11,00 € Jugendliche von 14 &#8211; 17“ (https://www.tv-kirchzell.de/?page_id=10762)
- von_hand: „15 Heimspielen. Online Shop Tickets sind immer digitale Tickets. Das Ticket wird nach erfolgreicher Bezahlung per Email an den Käufer geschickt. Eintrittskarten Online Shop Abendkasse Erwac“ (https://www.tv-kirchzell.de/?page_id=10762)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TV Kirchzell",
    "land": null,
    "liga": "hb3-suedwest",
    "liga_name": "3. Liga Männer Handball Süd-West",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.tv-kirchzell.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "tvk_odenwaldexpress",
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-15",
    "modell": "claude-opus-5-5 (Claude Code Sitzung, mit Vorlauf)",
    "schritte": 0,
    "quellen_belegt": [],
    "quellen_nur_suchtreffer": [],
    "quellen_nicht_nachvollziehbar": [],
    "notiz": "TODO",
    "kosten_usd": 0
  }
}
```
