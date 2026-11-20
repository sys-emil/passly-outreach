# Auftrag: ASK Voitsberg (2. Liga (Fußball, AT, 2. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-2liga/ask-voitsberg.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://ask-voitsberg.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: nichts
- Nicht lesbar: https://vereine.fussballoesterreich.at/AskSparkasseStadtwerkeVoitsberg/News/ (HTTP 503)
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "ASK Voitsberg",
    "ort": "Voitsberg",
    "land": null,
    "liga": "at-2liga",
    "liga_name": "2. Liga (Fußball, AT, 2. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://vereine.fussballoesterreich.at/AskSparkasseStadtwerkeVoitsberg/News/",
    "vorverkauf": "unbekannt",
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
    "recherchiert_am": "2026-11-20",
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
