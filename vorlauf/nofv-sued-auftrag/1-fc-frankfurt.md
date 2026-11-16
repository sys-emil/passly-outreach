# Auftrag: 1. FC Frankfurt (NOFV-Oberliga Süd (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/nofv-sued/1-fc-frankfurt.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.fcfrankfurt.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.fcfrankfurt.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@fcfrankfurt.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „und ihrer F 16. Juni 1 Min. Lesezeit Sichere dir dein Ticket! - Ticketvorverkauf fürs Fußballfest am 01.08.2026 Vorverkaufsbeginn ab Donnerstag, den 3“ (https://www.fcfrankfurt.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "1. FC Frankfurt",
    "ort": "Frankfurt (Oder)",
    "land": "BB",
    "liga": "nofv-sued",
    "liga_name": "NOFV-Oberliga Süd (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.fcfrankfurt.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
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
