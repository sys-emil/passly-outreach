# Auftrag: VfR Mannheim (Regionalliga Südwest (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-suedwest/vfr-mannheim.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://vfr-mannheim.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://vfr-mannheim.de/, https://vfr-mannheim.de/dauerkartenbestellung/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_S%C3%BCdwest_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: vfrmannheim1896
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „2026 Tanis Cup PROBAU Cup 125 Jahre VfR Sepp-Herberger-Awards Service Dauerkartenbestellung Downloads Stadionmagazin Newsletter Akkreditierung Probetr“ (https://vfr-mannheim.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "VfR Mannheim",
    "ort": "Mannheim",
    "land": "BW",
    "liga": "rl-suedwest",
    "liga_name": "Regionalliga Südwest (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://vfr-mannheim.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "vfrmannheim1896",
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
