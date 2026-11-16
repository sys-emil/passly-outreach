# Auftrag: Palais Club (Clubs München (klein und neu))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/club-muc/palais-club.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://palaisclub.de/
- Ticketlink (Verband): keiner
- Schon gelesen: https://palaisclub.de/
- Verband-Seite des Teams: https://www.muenchen.de/veranstaltungen/nachtleben
- Kontakte laut Verband: keine
- E-Mails auf der Vereinsseite: privateparty@palaisclub.de
- Instagram auf der Vereinsseite: palaisclub_
- Preise gefunden: 15 € („eintritt 15€“)

## Funde (Fundstelle, Seite)
- eintritt_frei: „N Jeden Freitag, Samstag und vor Feiertagen 21:00 – 24:00h PALAIS BAR Eintritt frei 00:00 – 11:00h PALAIS CLUB Eintritt 15€ bar Zum Programm PALAIS Fotos“ (https://palaisclub.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Palais Club",
    "land": null,
    "liga": "club-muc",
    "liga_name": "Clubs München (klein und neu)",
    "sport": "Club"
  },
  "ergebnis": {
    "website": "https://palaisclub.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "palaisclub_",
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
