# Auftrag: BFC Preussen (Regionalliga Nordost (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-nordost/bfc-preussen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.bfc-preussen-fussball.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://bfc-preussen.de/, https://bfc-preussen.de/anreise-stadion-und-ticketinfos/, https://bfc-preussen.de/erstes-heimspiel-der-saison-26-27/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@bfc-preussen.de
- Instagram auf der Vereinsseite: bfc_preussen_official
- Preise gefunden: 10 € („vollzahler, 10 euro“)

## Funde (Fundstelle, Seite)
- abendkasse: „Tickets: Für unsere Preussenfans und unsere Gäste sind Tickets an der Tageskasse erhältlich. Preise: 13 Euro Vollzahler, 10 Euro ermäßigt**, 18 € – Üb“ (https://bfc-preussen.de/anreise-stadion-und-ticketinfos/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "BFC Preussen",
    "ort": "Deutschland",
    "land": null,
    "liga": "rl-nordost",
    "liga_name": "Regionalliga Nordost (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.bfc-preussen-fussball.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 10,
    "halle": null,
    "kapazitaet": null,
    "instagram": "bfc_preussen_official",
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
