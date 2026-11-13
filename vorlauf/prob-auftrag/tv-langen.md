# Auftrag: TV Langen (ProB (2. Basketball-Bundesliga, Nord und Süd))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/prob/tv-langen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.langen-basketball.de
- Ticketlink (2. Basketball-Bundesliga): keiner
- Kapazität laut 2. Basketball-Bundesliga: 504
- Schon gelesen: https://langen-basketball.de/, https://langen-basketball.de/giraffen-mit-doppelspieltag-freitag-u-sonntag/, https://langen-basketball.de/giraffen-mit-doppelspieltag-freitag-u-sonntag/?s=
- 2. Basketball-Bundesliga-Seite des Teams: https://www.2basketballbundesliga.de/kader/482
- Kontakte laut 2. Basketball-Bundesliga: Verantwortlicher Jürgen Barth <jogibarth5@gmail.com>; Fanbeauftragter Jürgen Barth <jogibarth5@gmail.com>
- E-Mails auf der Vereinsseite: jogibarth5@gmail.com
- Instagram auf der Vereinsseite: tvlangenbasketball
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TV Langen",
    "ort": "Langen",
    "land": "HE",
    "liga": "prob",
    "liga_name": "ProB (2. Basketball-Bundesliga, Nord und Süd)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.langen-basketball.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Sportpark Oberlinden Berliner Straße 85 63225 Langen",
    "kapazitaet": 504,
    "instagram": "tvlangenbasketball",
    "ansprechperson": {
      "name": "Jürgen Barth",
      "rolle": "Verantwortlicher (laut 2. Basketball-Bundesliga)",
      "kontakt": "jogibarth5@gmail.com"
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
