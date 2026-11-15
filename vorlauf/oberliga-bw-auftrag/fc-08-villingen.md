# Auftrag: FC 08 Villingen (Oberliga Baden-Württemberg (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-bw/fc-08-villingen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://fcvillingen.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://fcvillingen.de/, https://fcvillingen.de/spieltag/schiedsrichter/, https://fcvillingen.de/spieltag/einlaufkind/, https://fcvillingen.de/spieltag/presse-akkreditierung/, https://fcvillingen.de/tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Baden-W%C3%BCrttemberg_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@fcvillingen.de
- Instagram auf der Vereinsseite: fc_1908_villingen
- Preise gefunden: 10 € („ticket – stehplatz 10 euro“); 15 € („ticket – sitzplatz 15 euro“); 5 € („ticket – steh- oder sitzplatz 5 euro“)

## Funde (Fundstelle, Seite)
- dauerkarte: „Tickets Fanshop Startseite Tickets Tickets Tagesticket 1. Mannschaft Dauerkarte 1. Mannschaft VIP-Tickets 1. Mannschaft Tagesticket 2. Mannschaft Tic“ (https://fcvillingen.de/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC 08 Villingen",
    "ort": "Villingen-Schwenningen",
    "land": "BW",
    "liga": "oberliga-bw",
    "liga_name": "Oberliga Baden-Württemberg (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://fcvillingen.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "fc_1908_villingen",
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
