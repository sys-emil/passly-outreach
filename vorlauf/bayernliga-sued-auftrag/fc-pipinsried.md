# Auftrag: FC Pipinsried (Bayernliga Süd (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bayernliga-sued/fc-pipinsried.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.fcpipinsried.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.fcpipinsried.de/, https://www.fcpipinsried.de/fans/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bayernliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: fcpipinsried67
- Preise gefunden: 10 € („tageskarte vollzahler: 10 €“)

## Funde (Fundstelle, Seite)
- nur_abendkasse: „et: auf Anfrage VIP-Jahreskarte: 500 € Infos & Verkauf Tickets können ausschließlich an der Tageskasse erworben werden. Eine Kartenzahlung ist leider nicht möglich . EIN DO“ (https://www.fcpipinsried.de/fans/tickets)
- abendkasse: „hreskarte: 500 € Infos & Verkauf Tickets können ausschließlich an der Tageskasse erworben werden. Eine Kartenzahlung ist leider nicht möglich . EIN DO“ (https://www.fcpipinsried.de/fans/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC Pipinsried",
    "ort": "Altomünster",
    "land": "BY",
    "liga": "bayernliga-sued",
    "liga_name": "Bayernliga Süd (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.fcpipinsried.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 10,
    "halle": null,
    "kapazitaet": null,
    "instagram": "fcpipinsried67",
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
