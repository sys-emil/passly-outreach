# Auftrag: TSG A-H Bielefeld (3. Liga Männer Handball Nord-West)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-nordwest/tsg-a-h-bielefeld.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.tsg-ah.de/index.php
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.tsg-ah.de/index.php, https://www.tsg-ah.de/index.php?content=hallen&show=preise, https://www.tsg-ah.de/index.php?content=saison&show=spielplan&sid=12
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: tsgahbielefeld
- Preise gefunden: 15 € („erwachsene 15 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „12 € Jugendliche (8-17 Jahre) 6 € Kinder (bis 7 Jahre) Eintritt frei Dauerkarten Erwachsene 195 € Ermäßigte* 156 € Jugendliche (8-17 Jahre) 78 € * (M“ (https://www.tsg-ah.de/index.php?content=hallen&show=preise)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSG A-H Bielefeld",
    "land": null,
    "liga": "hb3-nordwest",
    "liga_name": "3. Liga Männer Handball Nord-West",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.tsg-ah.de/index.php",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 15,
    "halle": null,
    "kapazitaet": null,
    "instagram": "tsgahbielefeld",
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
