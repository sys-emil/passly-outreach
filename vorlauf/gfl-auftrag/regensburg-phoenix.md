# Auftrag: Regensburg Phoenix (GFL (1. Bundesliga American Football))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/gfl/regensburg-phoenix.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://regensburg-phoenix.com/
- Ticketlink (GFL): https://www.regensburg-phoenix.com/gameday/online-tickets/
- Schon gelesen: https://www.regensburg-phoenix.com/, https://www.regensburg-phoenix.com/gameday/online-tickets/, https://www.regensburg-phoenix.com/faq/wo-finden-die-spiele-statt/
- Nicht lesbar: https://www.regensburg-phoenix.com/gameday/online-tickets/--%3E%3C!-- (HTTP 404)
- GFL-Seite des Teams: https://gfl.info/teams/regensburg-phoenix/
- Kontakte laut GFL: Vereinskontakt Regensburg Phoenix e.V. Dieselstraße <info@regensburg-phoenix.com>
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: regensburg_phoenix, regensburg_phoenix_ladies, regensburg_phoenix_juniors, regensburg_phoenix_flag, regensburg_phoenix_cheerleader
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Regensburg Phoenix",
    "ort": "Regensburg E-Mail",
    "land": "BY",
    "liga": "gfl",
    "liga_name": "GFL (1. Bundesliga American Football)",
    "sport": "American Football"
  },
  "ergebnis": {
    "website": "https://regensburg-phoenix.com/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Städtische Sportanlage am Weinweg Weinweg 32 93049 Regensburg",
    "kapazitaet": null,
    "instagram": null,
    "ansprechperson": {
      "name": "Regensburg Phoenix e.V. Dieselstraße",
      "rolle": "Vereinskontakt (laut GFL)",
      "kontakt": "info@regensburg-phoenix.com"
    },
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-13",
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
