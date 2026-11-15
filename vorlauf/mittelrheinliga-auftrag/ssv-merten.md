# Auftrag: SSV Merten (Mittelrheinliga (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/mittelrheinliga/ssv-merten.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.ssv-merten1925.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.ssv-merten.de/, https://www.ssv-merten.de/de/fussball/1-mannschaft/termine---tabelle/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Mittelrheinliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: mail@ssv-merten.de, loedelchen@aol.com
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 8 € („erwachsene 8,00 €“); 8 € („erwachsene 8,00 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „hüler, Studenten 6,00 € - Jugendliche bis 16 Jahre: frei Hol' Dir die Dauerkarte für die Saison 2026/2027 ! Spare mit der Dauerkarte 25 % vom reguläre“ (https://www.ssv-merten.de/de/fussball/1-mannschaft/termine---tabelle/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SSV Merten",
    "ort": "Bornheim",
    "land": "NW",
    "liga": "mittelrheinliga",
    "liga_name": "Mittelrheinliga (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.ssv-merten1925.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 8,
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
