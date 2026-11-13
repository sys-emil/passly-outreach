# Auftrag: Straubing Spiders (GFL (1. Bundesliga American Football))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/gfl/straubing-spiders.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://straubing-spiders.de/
- Ticketlink (GFL): https://straubing-spiders.de/tickets/
- Schon gelesen: https://straubing-spiders.de/, https://straubing-spiders.de/tickets/
- GFL-Seite des Teams: https://gfl.info/teams/straubing-spiders/
- Kontakte laut GFL: Vereinskontakt Straubing Spiders Hofmarkstr <info@straubing-spiders.de>
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Straubing Spiders",
    "ort": "Aholfing Telefon",
    "land": "BY",
    "liga": "gfl",
    "liga_name": "GFL (1. Bundesliga American Football)",
    "sport": "American Football"
  },
  "ergebnis": {
    "website": "https://straubing-spiders.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Donausportzentrum Peterswöhrd Am Peterswöhrd 12 94315 Straubing",
    "kapazitaet": null,
    "instagram": null,
    "ansprechperson": {
      "name": "Straubing Spiders Hofmarkstr",
      "rolle": "Vereinskontakt (laut GFL)",
      "kontakt": "info@straubing-spiders.de"
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
