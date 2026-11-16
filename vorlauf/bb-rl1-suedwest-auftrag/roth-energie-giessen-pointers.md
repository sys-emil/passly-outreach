# Auftrag: ROTH Energie Gießen Pointers (1. Regionalliga Südwest (Basketball, Herren))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bb-rl1-suedwest/roth-energie-giessen-pointers.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.giessen-pointers.de
- Ticketlink (DBB): keiner
- Schon gelesen: https://www.giessen-pointers.de/
- DBB-Seite des Teams: https://www.basketball-bund.net/static/#/liga/53088
- Kontakte laut DBB: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: giessenpointers
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „asketball 07. November || 18:30 Uhr || Osthalle Gießen TICKETS AN DER ABENDKASSE - OK!“ (https://www.giessen-pointers.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "ROTH Energie Gießen Pointers",
    "land": null,
    "liga": "bb-rl1-suedwest",
    "liga_name": "1. Regionalliga Südwest (Basketball, Herren)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.giessen-pointers.de",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "giessenpointers",
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
