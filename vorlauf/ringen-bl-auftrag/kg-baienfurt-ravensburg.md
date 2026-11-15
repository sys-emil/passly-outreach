# Auftrag: KG Baienfurt/Ravensburg (Ringer-Bundesliga)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/ringen-bl/kg-baienfurt-ravensburg.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://kg-baienfurt.de/
- Ticketlink (Verband): keiner
- Schon gelesen: https://kg-baienfurt.de/, https://kg-baienfurt.de/verein/eintrittspreise/
- Verband-Seite des Teams: https://www.ringen.de/bundesliga/
- Kontakte laut Verband: keine
- E-Mails auf der Vereinsseite: info@kg-baienfurt.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 14 € („erwachsene 14€“); 6 € („erwachsene 6€“); 70 € („erwachsene 70€“)

## Funde (Fundstelle, Seite)
- dauerkarte: „b 18 Jahren, Renter & Behinderte (50%) 4€ Jugendliche ab 14 jahren 3€ Dauerkarten ERWACHSENE 70€ Mitglieder 60€ Studenten ab 18 Jahren, Renter & Behin“ (https://kg-baienfurt.de/verein/eintrittspreise/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "KG Baienfurt/Ravensburg",
    "land": null,
    "liga": "ringen-bl",
    "liga_name": "Ringer-Bundesliga",
    "sport": "Ringen"
  },
  "ergebnis": {
    "website": "https://kg-baienfurt.de/",
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
