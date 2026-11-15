# Auftrag: FC Büderich (Oberliga Niederrhein (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-niederrhein/fc-buederich.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.fcbuederich.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://fcbuederich.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Niederrhein_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: fcbuederich
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „ch wieder geöffnet. Hier finden Sie alle Informationen zu Angebot und Reservierungsmöglich-keiten. Setzen Sie sich gerne mit uns in Verbindung. Mehr“ (https://fcbuederich.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC Büderich",
    "ort": "Meerbusch",
    "land": "NW",
    "liga": "oberliga-niederrhein",
    "liga_name": "Oberliga Niederrhein (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.fcbuederich.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "fcbuederich",
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
