# Auftrag: FC Gundelfingen (Bayernliga Süd (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bayernliga-sued/fc-gundelfingen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.fcgundelfingen.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://fcgundelfingen.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bayernliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „Team-Kollektion Herren 1 und U23 U19 Jugendmannschaften NLZ KuRa Platzreservierung Reservierunganfrage Preisliste Kunstrasen-Vermietung AGB Vermietun“ (https://fcgundelfingen.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC Gundelfingen",
    "ort": "Gundelfingen an der Donau",
    "land": "BW",
    "liga": "bayernliga-sued",
    "liga_name": "Bayernliga Süd (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.fcgundelfingen.de/",
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
