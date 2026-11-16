# Auftrag: TSV Peißenberg (Eishockey-Bayernliga (4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/eh-bayernliga/tsv-peissenberg.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.fuasballer.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://fuasballer.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Eishockey-Regionalliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: fuasballer_nachwuchs, fuasballer, hauptverein_tsvpeissenberg_ev
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „Form – erweitert, verschönert und perfekt für gesellige Runden. Eine Reservierung ist über den Reservier&shy;ungs&shy;kalender auf der Vereinsstüber“ (https://fuasballer.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSV Peißenberg",
    "ort": "Bayern",
    "land": null,
    "liga": "eh-bayernliga",
    "liga_name": "Eishockey-Bayernliga (4. Liga)",
    "sport": "Eishockey"
  },
  "ergebnis": {
    "website": "https://www.fuasballer.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": null,
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-16",
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
