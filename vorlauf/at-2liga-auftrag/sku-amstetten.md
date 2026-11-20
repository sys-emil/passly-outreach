# Auftrag: SKU Amstetten (2. Liga (Fußball, AT, 2. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-2liga/sku-amstetten.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.sku-amstetten.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.sku-amstetten.at/, https://www.sku-amstetten.at/fanzone/eintrittspreise
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: bs@skuam.at
- Instagram auf der Vereinsseite: skuamstetten
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- eintritt_frei: „isonkartenbesitzer (2. Bundesliga und/oder 1. Landesliga) inkludiert. Freier Eintritt für Rollstuhlfahrer (inkl. Begleitperson) Der SKU Ertl Glas Amstetten“ (https://www.sku-amstetten.at/fanzone/eintrittspreise)
- dauerkarte: „tsspielen des SKU Ertl Glas Amstetten in der 2. Liga freien Eintritt. Saisonkarten 2. Bundesliga 2026/27 € 185,- Vollpreis € 140,- ermäßigt (Pensionist“ (https://www.sku-amstetten.at/fanzone/eintrittspreise)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SKU Amstetten",
    "ort": "Amstetten",
    "land": null,
    "liga": "at-2liga",
    "liga_name": "2. Liga (Fußball, AT, 2. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.sku-amstetten.at/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "skuamstetten",
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-20",
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
