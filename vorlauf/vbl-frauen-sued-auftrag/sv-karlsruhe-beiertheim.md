# Auftrag: SV Karlsruhe-Beiertheim (2. Bundesliga Frauen Süd)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-frauen-sued/sv-karlsruhe-beiertheim.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://sv-karlsruhe-beiertheim.de/category/volleyball/
- Ticketlink (VBL): keiner
- Schon gelesen: https://sv-karlsruhe-beiertheim.de/category/volleyball/, https://sv-karlsruhe-beiertheim.de/tennis/abteilung-tennis/gaestekarten/, https://sv-karlsruhe-beiertheim.de/volleyball/zweite-bundesliga/spielplan/
- VBL-Seite des Teams: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_sued/mannschaften.xhtml?c.teamId=781345690&c.view=contact
- Kontakte laut VBL: Mannschaftsverantwortlicher Lena Hoffmann; PR-Verantwortlicher Ann-Christina Schmitz
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: svk.beiertheim.1884_98.e.v, badener_greifs, red_flames_cheerleader
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „in der 2. Bundesliga findet ihr hier . Tickets Tickets gibt es an der Abendkasse. Streaming Alle Spiele der 2. Bundesliga Frauen werden kostenlos auf“ (https://sv-karlsruhe-beiertheim.de/volleyball/zweite-bundesliga/spielplan/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Karlsruhe-Beiertheim",
    "ort": "Karlsruhe",
    "land": "BW",
    "liga": "vbl-frauen-sued",
    "liga_name": "2. Bundesliga Frauen Süd",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "https://sv-karlsruhe-beiertheim.de/category/volleyball/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Sporthalle Oberreut Joachim-Kurzaj-Weg 4, 76189 Karlsruhe",
    "kapazitaet": null,
    "instagram": null,
    "ansprechperson": null,
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
