# Auftrag: TSV Mühldorf (2. Bundesliga Männer Süd)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-maenner-sued/tsv-muehldorf.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website. Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.tsv-muehldorf.de/volleyball-bundesliga/
- Ticketlink (VBL): keiner
- Schon gelesen: https://www.tsv-muehldorf.de/volleyball-bundesliga/, https://www.tsv-muehldorf.de/volleyball-bundesliga/tickets/
- VBL-Kontaktseite: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_maenner/2_bundesliga_maenner_sued/mannschaften.xhtml?c.teamId=781344436&c.view=contact
- VBL-Kontakte: Mannschaftsverantwortlicher Thomas Gailer; PR-Verantwortlicher Fabian Bartsch <fabian.bartsch@volleyball-muehldorf.de>; PR-Verantwortlicher Marvin Domalewski; PR-Verantwortlicher Josef Enzinger; PR-Verantwortlicher Josef Enzinger; PR-Verantwortlicher David Geisberger
- E-Mails auf der Vereinsseite: anmeldung@volleyball-muehldorf.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 8 € („tageskarte: 8 euro“)

## Funde (Fundstelle, Seite)
- abendkasse: „stagram Twitch Tiktok Tickets Tickets sind bei jedem Heimspiel an der Abendkasse erhältlich. NUTZ-Ar ena an der Mittelschule Europastr. 3 84453 Mühldo“ (https://www.tsv-muehldorf.de/volleyball-bundesliga/tickets/)
- von_hand: „ilungsmitglieder unter 21 Jahren: kostenlos Dauerkarte: 69 Euro (Dauerkarten können per Email bestellt werden über anmeldung@volleyball-muehldorf.de und dann an de“ (https://www.tsv-muehldorf.de/volleyball-bundesliga/tickets/)
- dauerkarte: „12 Jahren: kostenlos Abteilungsmitglieder unter 21 Jahren: kostenlos Dauerkarte: 69 Euro (Dauerkarten können per Email bestellt werden über anmeldung“ (https://www.tsv-muehldorf.de/volleyball-bundesliga/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSV Mühldorf",
    "ort": "Mühldorf am Inn",
    "land": "BY",
    "liga": "vbl-maenner-sued",
    "liga_name": "2. Bundesliga Männer Süd",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "https://www.tsv-muehldorf.de/volleyball-bundesliga/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 8,
    "halle": "NUTZ-Arena an der Mittelschule Europastr. 3, 84453 Mühldorf",
    "kapazitaet": null,
    "instagram": null,
    "ansprechperson": {
      "name": "Fabian Bartsch",
      "rolle": "PR-Verantwortlicher (laut VBL)",
      "kontakt": "fabian.bartsch@volleyball-muehldorf.de"
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
