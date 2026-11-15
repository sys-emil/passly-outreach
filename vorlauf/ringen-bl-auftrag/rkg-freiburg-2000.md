# Auftrag: RKG Freiburg 2000 (Ringer-Bundesliga)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/ringen-bl/rkg-freiburg-2000.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.rkg-freiburg-2000.de/
- Ticketlink (Verband): keiner
- Schon gelesen: https://www.rkg-freiburg-2000.de/, https://www.rkg-freiburg-2000.de/tickets/
- Verband-Seite des Teams: https://www.ringen.de/bundesliga/
- Kontakte laut Verband: keine
- E-Mails auf der Vereinsseite: tickets@rkg-freiburg-2000.de
- Instagram auf der Vereinsseite: lars_schaefle, lars_sophia_schaefle
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- eintritt_frei: „nten, Schwerbehinderte, Schüler 4 € Ermäßigung mit gültigem Ausweis. *Freier Eintritt für alle DRB und SBRV Kaderringer, die am OSP Freiburg trainieren. 20“ (https://www.rkg-freiburg-2000.de/tickets/)
- dauerkarte: „aison 2026: Eintrittspreise Stehplatz &#128; 12 Einzelkarte Stehplatz Dauerkarte Stehplatz: 6 Heimkämpfe (HK): 60 Euro (ermäßigt 40€) / ein HK ist gra“ (https://www.rkg-freiburg-2000.de/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "RKG Freiburg 2000",
    "land": null,
    "liga": "ringen-bl",
    "liga_name": "Ringer-Bundesliga",
    "sport": "Ringen"
  },
  "ergebnis": {
    "website": "https://www.rkg-freiburg-2000.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
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
