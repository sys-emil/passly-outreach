# Auftrag: Krefeld Ravens (GFL2 (2. Bundesliga American Football))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/gfl2/krefeld-ravens.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.krefeld-ravens.de/
- Ticketlink (GFL): https://tickets.krefeld-ravens.de/
- Schon gelesen: https://www.krefeld-ravens.de/
- Nicht lesbar: https://tickets.krefeld-ravens.de/ (leer, lädt per JavaScript)
- GFL-Seite des Teams: https://gfl.info/gfl2/teams/krefeld-ravens/
- Kontakte laut GFL: Vereinskontakt Krefeld Ravens e.V. Ritzhütte <info@krefeld-ravens.de>
- E-Mails auf der Vereinsseite: info@krefeld-ravens.de
- Instagram auf der Vereinsseite: krefeld_ravens_football
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Krefeld Ravens",
    "ort": "Krefeld E-Mail",
    "land": "NW",
    "liga": "gfl2",
    "liga_name": "GFL2 (2. Bundesliga American Football)",
    "sport": "American Football"
  },
  "ergebnis": {
    "website": "https://www.krefeld-ravens.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Grotenburg-Stadion Tiergartenstraße 165 47800 Krefeld",
    "kapazitaet": null,
    "instagram": "krefeld_ravens_football",
    "ansprechperson": {
      "name": "Krefeld Ravens e.V. Ritzhütte",
      "rolle": "Vereinskontakt (laut GFL)",
      "kontakt": "info@krefeld-ravens.de"
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
