# Auftrag: ASV Schorndorf (Ringer-Bundesliga)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/ringen-bl/asv-schorndorf.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://asvschorndorf.de/
- Ticketlink (Verband): keiner
- Schon gelesen: https://asvschorndorf.de/, https://asvschorndorf.de/ticketing/
- Verband-Seite des Teams: https://www.ringen.de/bundesliga/
- Kontakte laut Verband: keine
- E-Mails auf der Vereinsseite: info@asvschorndorf.de, tickets@asvschorndorf.de
- Instagram auf der Vereinsseite: asvschorndorf
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „artaner live und unterstütze unser Team bei seinen Heimkämpfen. Deine Tickets bestellst du direkt per E-Mail. Tickets anfragen Ticketpreise ansehen DEIN PLATZ BEI DEN SPARTANERN“ (https://asvschorndorf.de/ticketing/)
- dauerkarte: „t auch bei Fragen zu deiner Bestellung die richtige Anlaufstelle. MIT DAUERKARTE DABEI Ein Ticket &#8211; Alle Mannschaften. Dauerkartenbesitzer haben“ (https://asvschorndorf.de/ticketing/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "ASV Schorndorf",
    "land": null,
    "liga": "ringen-bl",
    "liga_name": "Ringer-Bundesliga",
    "sport": "Ringen"
  },
  "ergebnis": {
    "website": "https://asvschorndorf.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "asvschorndorf",
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
