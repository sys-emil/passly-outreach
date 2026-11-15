# Auftrag: SV Erlbach (Bayernliga Süd (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bayernliga-sued/sv-erlbach.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.sv-erlbach.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.sv-erlbach.de/, https://www.sv-erlbach.de/tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bayernliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: vorstand@sv-erlbach.de
- Instagram auf der Vereinsseite: sv.erlbach
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „hpartner Vermarktung Kontakt Fanshop % Sport - NUR DER SVE- JETZT SVE DAUERKARTE 26/27 BESTELLEN Erlebe alle Bayernliga-Highlights hautnah! Jetzt best“ (https://www.sv-erlbach.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Erlbach",
    "ort": "Erlbach",
    "land": "BY",
    "liga": "bayernliga-sued",
    "liga_name": "Bayernliga Süd (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.sv-erlbach.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "sv.erlbach",
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
