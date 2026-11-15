# Auftrag: BSV Ostbevern (2. Bundesliga Frauen Nord)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-frauen-nord/bsv-ostbevern.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.volleyball.bsv-ostbevern.de
- Ticketlink (VBL): keiner
- Schon gelesen: nichts
- Nicht lesbar: http://www.volleyball.bsv-ostbevern.de (HTTP 503)
- VBL-Seite des Teams: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_nord/mannschaften.xhtml?c.teamId=781344913&c.view=contact
- Kontakte laut VBL: Mannschaftsverantwortlicher Andreas Schneider; teammanager_volleyball@bsv-ostbevern.de Dominik PR-Verantwortlicher Münch
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "BSV Ostbevern",
    "ort": "Ostbevern",
    "land": "NRW",
    "liga": "vbl-frauen-nord",
    "liga_name": "2. Bundesliga Frauen Nord",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "http://www.volleyball.bsv-ostbevern.de",
    "vorverkauf": "unbekannt",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Beverhalle Schulstr. 17, 48346 Ostbevern",
    "kapazitaet": null,
    "instagram": null,
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
