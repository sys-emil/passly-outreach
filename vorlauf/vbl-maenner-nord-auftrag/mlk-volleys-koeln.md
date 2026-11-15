# Auftrag: MLK Volleys Köln (2. Bundesliga Männer Nord)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-maenner-nord/mlk-volleys-koeln.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.mlk-volleys.de
- Ticketlink (VBL): keiner
- Schon gelesen: https://mlk-volleys.de/, https://mlk-volleys.de/heimspielhallen/, https://mlk-volleys.de/ticketing/
- VBL-Seite des Teams: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_maenner/2_bundesliga_maenner_nord/mannschaften.xhtml?c.teamId=781344280&c.view=contact
- Kontakte laut VBL: Mannschaftsverantwortlicher Florian Beckmann; PR-Verantwortlicher Eike Hansen; PR-Verantwortlicher Jonas Winterscheidt
- E-Mails auf der Vereinsseite: d.puetter@fcjunkersdorf.de, sponsoring@mlk-volleys.de
- Instagram auf der Vereinsseite: mlkvolleys, carlundcarla.de, klaraa.hff, miguel__tav, linusputter, mada_cologne, joko724, niklasbach_, eike_hns, fbecks4, fredrik.adams, coachtimburwitz, luis.henrichs, till.korreck, laslo.koenig, valters89, saeggl
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- nur_abendkasse: „ets Live Tickets Ticketbedingungen Tickets für die Heimspiele gibt es ausschließlich an der Abendkasse direkt vor Ort in der neuen Halle am Georg Büchner Gymnasium. Insgesa“ (https://mlk-volleys.de/ticketing/)
- abendkasse: „tbedingungen Tickets für die Heimspiele gibt es ausschließlich an der Abendkasse direkt vor Ort in der neuen Halle am Georg Büchner Gymnasium. Insgesa“ (https://mlk-volleys.de/ticketing/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "MLK Volleys Köln",
    "ort": "Köln",
    "land": "NRW",
    "liga": "vbl-maenner-nord",
    "liga_name": "2. Bundesliga Männer Nord",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "http://www.mlk-volleys.de",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Dreifachhalle Georg Büchner Gymnasium Leipziger Str.1, 50858 Köln",
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
