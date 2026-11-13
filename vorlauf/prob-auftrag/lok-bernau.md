# Auftrag: LOK BERNAU (ProB (2. Basketball-Bundesliga, Nord und Süd))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/prob/lok-bernau.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.ssv-lok-bernau.de
- Ticketlink (2. Basketball-Bundesliga): https://www.ssv-lok-bernau.de/tickets/
- Kapazität laut 2. Basketball-Bundesliga: 2500
- Schon gelesen: https://www.ssv-lok-bernau.de/, https://www.ssv-lok-bernau.de/tickets/
- 2. Basketball-Bundesliga-Seite des Teams: https://www.2basketballbundesliga.de/kader/513
- Kontakte laut 2. Basketball-Bundesliga: Verantwortlicher Mike Marschke <mike.marschke@bernau-basketball.gmbh>; Fanbeauftragter Mike Marschke <lok@bernau-basketball.gmbh>
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „chen. Die Plastikkarte kann voraussichtlich am ersten Spieltag an der Abendkasse abgeholt werden – alle Details dazu erhaltet ihr vorab per E-Mail. Ei“ (https://www.ssv-lok-bernau.de/tickets/)
- dauerkarte: „ProB Nord Willkommen in der Sparkassen-Arena direkt zum Ticket-Shop > Dauerkarten Heimspiele - Hauptrunde 2026/27 PK 1 € 169,00* 1 x Dauerkarte Online“ (https://www.ssv-lok-bernau.de/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "LOK BERNAU",
    "ort": "Bernau",
    "land": "BB",
    "liga": "prob",
    "liga_name": "ProB (2. Basketball-Bundesliga, Nord und Süd)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.ssv-lok-bernau.de",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Sparkassen-Arena Bernau Ladeburger Chaussee 2 16321 Bernau",
    "kapazitaet": 2500,
    "instagram": null,
    "ansprechperson": {
      "name": "Mike Marschke",
      "rolle": "Verantwortlicher (laut 2. Basketball-Bundesliga)",
      "kontakt": "mike.marschke@bernau-basketball.gmbh"
    },
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-13",
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
