# Auftrag: Tölzer Löwen (Eishockey-Oberliga Süd (3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/eh-oberliga-sued/toelzer-loewen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://toelzer-eissport.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: nichts
- Nicht lesbar: https://toelzer-eissport.de/ (leer, lädt per JavaScript)
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Eishockey-Oberliga_2026/27
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
    "name": "Tölzer Löwen",
    "ort": "Bad Tölz",
    "land": "BY",
    "liga": "eh-oberliga-sued",
    "liga_name": "Eishockey-Oberliga Süd (3. Liga)",
    "sport": "Eishockey"
  },
  "ergebnis": {
    "website": "https://toelzer-eissport.de/",
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
