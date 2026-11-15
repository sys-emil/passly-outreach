# Auftrag: BBSC Berlin (2. Bundesliga Frauen Nord)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-frauen-nord/bbsc-berlin.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://bbsc.berlin
- Ticketlink (VBL): https://bbsc.berlin/ticketshop/
- Schon gelesen: https://bbsc.berlin/, https://bbsc.berlin/bbsc-mit-vier-punkten-aus-heimspielwochenende/
- Nicht lesbar: https://bbsc.berlin/ticketshop/ (leer, lädt per JavaScript)
- VBL-Seite des Teams: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_nord/mannschaften.xhtml?c.teamId=781345381&c.view=contact
- Kontakte laut VBL: Mannschaftsverantwortlicher Frank Körner; PR-Verantwortlicher Burkhard Kroll
- E-Mails auf der Vereinsseite: info@bbsc.berlin
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "BBSC Berlin",
    "ort": "Berlin",
    "land": "BE",
    "liga": "vbl-frauen-nord",
    "liga_name": "2. Bundesliga Frauen Nord",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "http://bbsc.berlin",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Sporthalle Hämmerlingstraße Friedenstr. 1/Hämmerlingstraße 80, 12555 Berlin",
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
