# Auftrag: HSG Konstanz (3. Liga Männer Handball Süd)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-sued/hsg-konstanz.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://hsgkonstanz.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://hsgkonstanz.de/, https://hsgkonstanz.de/shop-tickets/
- Nicht lesbar: https://hsgkonstanz.de/?page_id=37 (HTTP 404)
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@hsgkonstanz.de, tickets@hsgkonstanz.de
- Instagram auf der Vereinsseite: hsgkonstanz
- Preise gefunden: 16.5 € („erwachsene sitzplatz 16,50 euro“); 16.5 € („erwachsene sitzplatz 16,50 euro“)

## Funde (Fundstelle, Seite)
- vorverkauf: „lle. Eine einzigartige Atmosphäre. Sei hautnah dabei. Jetzt Ticket im Vorverkauf sichern und sparen! Tickets kaufen Informationen Livestream Liveticke“ (https://hsgkonstanz.de/)
- abendkasse: „martphone vorzeigen und abscannen lassen. Lange Warteschlangen an der Abendkasse sind damit Geschichte. Hsg Tickets Online Shop jetzt kaufen Ticket Ho“ (https://hsgkonstanz.de/shop-tickets/)
- dauerkarte: „fen Ticket Hotline 07531 / 928080 VVK Stellen anzeigen Hygienekonzept Dauerkarten Gutscheine HSG FAN SHOP! Trikots, Shirts, Hoodies, Schals, Caps, Müt“ (https://hsgkonstanz.de/shop-tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "HSG Konstanz",
    "land": null,
    "liga": "hb3-sued",
    "liga_name": "3. Liga Männer Handball Süd",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://hsgkonstanz.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 16.5,
    "halle": null,
    "kapazitaet": null,
    "instagram": "hsgkonstanz",
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
