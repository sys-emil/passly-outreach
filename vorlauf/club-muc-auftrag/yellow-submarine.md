# Auftrag: Yellow Submarine (Clubs München (klein und neu))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/club-muc/yellow-submarine.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.yellowsubmarine.de/
- Ticketlink (Verband): keiner
- Schon gelesen: nichts
- Nicht lesbar: https://www.yellowsubmarine.de/ (leer, lädt per JavaScript)
- Verband-Seite des Teams: https://www.muenchen.de/veranstaltungen/nachtleben
- Kontakte laut Verband: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Yellow Submarine",
    "land": null,
    "liga": "club-muc",
    "liga_name": "Clubs München (klein und neu)",
    "sport": "Club"
  },
  "ergebnis": {
    "website": "https://www.yellowsubmarine.de/",
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
