# Auftrag: SSVg Velbert (Oberliga Niederrhein (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-niederrhein/ssvg-velbert.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.ssvg.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.ssvg.de/, https://www.ssvg.de/fans/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Niederrhein_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: ssvg02
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „ts Jobbörse Presse Jobbörse Impressum Datenschutz Cookies Kontakt Die Tageskassen öffnen für Heimspiele der 1. Mannschaft in der Oberliga Niederrhein“ (https://www.ssvg.de/fans/tickets)
- dauerkarte: „Eintrittspreise für die SSVg Heimspiele in der Oberliga Niederrhein: Dauerkarten Saison 2026/27 VIP-Dauerkarte 1.300,- € Dauerkarte Sitzplatz Tribüne“ (https://www.ssvg.de/fans/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SSVg Velbert",
    "ort": "Velbert",
    "land": "NW",
    "liga": "oberliga-niederrhein",
    "liga_name": "Oberliga Niederrhein (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.ssvg.de",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "ssvg02",
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
