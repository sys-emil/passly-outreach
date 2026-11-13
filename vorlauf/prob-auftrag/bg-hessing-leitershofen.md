# Auftrag: BG Hessing Leitershofen (ProB (2. Basketball-Bundesliga, Nord und Süd))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/prob/bg-hessing-leitershofen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.hessing-kangaroos.de
- Ticketlink (2. Basketball-Bundesliga): https://www.hessing-kangaroos.de/tickets
- Kapazität laut 2. Basketball-Bundesliga: 1500
- Schon gelesen: https://hessing-kangaroos.de/, https://hessing-kangaroos.de/tickets/, https://hessing-kangaroos.de/spielplan/
- 2. Basketball-Bundesliga-Seite des Teams: https://www.2basketballbundesliga.de/kader/573
- Kontakte laut 2. Basketball-Bundesliga: Verantwortlicher Wayne Chicho Pittman <pittman@hessing-kangaroos.de>; Fanbeauftragter Mark Prinz <fanbeauftragter@hessing-kangaroos.de>
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: kangaroos_official
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "BG Hessing Leitershofen",
    "ort": "Augsburg",
    "land": "BY",
    "liga": "prob",
    "liga_name": "ProB (2. Basketball-Bundesliga, Nord und Süd)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.hessing-kangaroos.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Mehrzweckhalle Stadtbergen Am Sportpark 1 86391 Stadtbergen",
    "kapazitaet": 1500,
    "instagram": "kangaroos_official",
    "ansprechperson": {
      "name": "Wayne Chicho Pittman",
      "rolle": "Verantwortlicher (laut 2. Basketball-Bundesliga)",
      "kontakt": "pittman@hessing-kangaroos.de"
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
