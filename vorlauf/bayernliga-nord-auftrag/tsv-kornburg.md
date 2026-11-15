# Auftrag: TSV Kornburg (Bayernliga Nord (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bayernliga-nord/tsv-kornburg.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://tsv-kornburg.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.tsv-kornburg.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bayernliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: tsv.kornburg
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „ahrt Willkommen auf der Internetseite des TSV Kornburg 1932 e.V. Platzreservierung Padel Court Infos zu Padel findet ihr auf der Padel Seite . ACTION“ (https://www.tsv-kornburg.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSV Kornburg",
    "ort": "Bayern",
    "land": null,
    "liga": "bayernliga-nord",
    "liga_name": "Bayernliga Nord (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://tsv-kornburg.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "tsv.kornburg",
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
