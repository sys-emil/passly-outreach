# Auftrag: SC Sand (2. Frauen-Bundesliga (Fußball))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/fbl2-frauen/sc-sand.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.scsand-frauen.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.sc-sand.de/, https://www.sc-sand.de/ticketing
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/2._Frauen-Bundesliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: lukas.kelp@scsand.de
- Instagram auf der Vereinsseite: scsandfrauen
- Preise gefunden: 12 € („eintrittskarte (vollzahler): 12,00 €“)

## Funde (Fundstelle, Seite)
- abendkasse: „rkarten kosten nur jeweils die Hälfte. Dauerkarten können auch an der Tageskasse erworben werden. Bei Fragen zu Ihrer Dauerkarte wenden Sie sich bitte“ (https://www.sc-sand.de/ticketing)
- vorverkauf: „en zu Ihrer Dauerkarte wenden Sie sich bitte an: info scsand.de TICKETVORVERKAUF Der Vorverkauf erfolgt per Mail an: lukas.kelp@scsand.de WEITERE INFO“ (https://www.sc-sand.de/ticketing)
- von_hand: „i Fragen zu Ihrer Dauerkarte wenden Sie sich bitte an: info scsand.de TICKETVORVERKAUF Der Vorverkauf erfolgt per Mail an: lukas.kelp@scsand.de WEITERE INFOS ZUM TICKETING Eintrittskarten“ (https://www.sc-sand.de/ticketing)
- dauerkarte: „r Kinder und Jugendliche bis einschließlich 12 Jahre frei. PREISE FÜR DAUERKARTEN Dauerkarte (Normal): 130,00 € Dauerkarte (Ermäßigt): 110,00 € Rückru“ (https://www.sc-sand.de/ticketing)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SC Sand",
    "ort": "Essen",
    "land": "NW",
    "liga": "fbl2-frauen",
    "liga_name": "2. Frauen-Bundesliga (Fußball)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.scsand-frauen.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 12,
    "halle": null,
    "kapazitaet": null,
    "instagram": "scsandfrauen",
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
