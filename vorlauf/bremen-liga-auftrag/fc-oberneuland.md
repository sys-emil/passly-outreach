# Auftrag: FC Oberneuland (Bremen-Liga (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bremen-liga/fc-oberneuland.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.fcoberneuland.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: nichts
- Nicht lesbar: https://www.fcoberneuland.de (ERR_SSL_TLSV1_ALERT_INTERNAL_ERROR)
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bremen-Liga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC Oberneuland",
    "ort": "Bremen",
    "land": "HB",
    "liga": "bremen-liga",
    "liga_name": "Bremen-Liga (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.fcoberneuland.de",
    "vorverkauf": "unbekannt",
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
