# Auftrag: HSG Hanau (3. Liga Männer Handball Süd-West)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-suedwest/hsg-hanau.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.hsghanau.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.hsghanau.de/, https://www.hsghanau.de/zuschauer_liga3/index.php, https://www.hsghanau.de/tickets/index.php
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: hsghanau
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „Ticketshop – HSG Hanau | Einzel- & Dauerkarten kaufen HSG HANAU Start Aktive Männer 1 Team Kader Staff News-Center“ (https://www.hsghanau.de/tickets/index.php)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "HSG Hanau",
    "land": null,
    "liga": "hb3-suedwest",
    "liga_name": "3. Liga Männer Handball Süd-West",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.hsghanau.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "hsghanau",
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
