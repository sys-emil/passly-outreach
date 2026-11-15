# Auftrag: SV Wacker Burghausen (Ringer-Bundesliga)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/ringen-bl/sv-wacker-burghausen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.sv-wacker.de/de/sportangebot/abteilungen/ringen/
- Ticketlink (Verband): keiner
- Schon gelesen: https://www.sv-wacker.de/de/sportangebot/abteilungen/ringen/, https://www.sv-wacker.de/de/sportangebot/abteilungen/ringen/1-Bundesliga/eintrittspreise/
- Verband-Seite des Teams: https://www.ringen.de/bundesliga/
- Kontakte laut Verband: keine
- E-Mails auf der Vereinsseite: juergen.loeblein@sv-wacker.de, matthias.maasch@sv-wacker.de, am2604am@gmail.com, info@sv-wacker.de, service@sv-wacker.de
- Instagram auf der Vereinsseite: burghausen_ringen
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „er regulären Bundesliga-Saison (also vor den Play Offs) keinen Ticket-Vorverkauf gibt und auch keine Ticktes reserviert werden können. Es gilt in der“ (https://www.sv-wacker.de/de/sportangebot/abteilungen/ringen/1-Bundesliga/eintrittspreise/)
- von_hand: „r den Play Offs) keinen Ticket-Vorverkauf gibt und auch keine Ticktes reserviert werden können. Es gilt in der Sportparkhalle freie Platzwahl. *= Die“ (https://www.sv-wacker.de/de/sportangebot/abteilungen/ringen/1-Bundesliga/eintrittspreise/)
- dauerkarte: „re Tickets Rückblick Eintrittspreise - Bundesliga 2026/27 Einzelkarte Saisonkarte* Einzelkarte Nichtmitglieder 15 € 70 € Einzelkarte Mitglieder** 10 €“ (https://www.sv-wacker.de/de/sportangebot/abteilungen/ringen/1-Bundesliga/eintrittspreise/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Wacker Burghausen",
    "land": null,
    "liga": "ringen-bl",
    "liga_name": "Ringer-Bundesliga",
    "sport": "Ringen"
  },
  "ergebnis": {
    "website": "https://www.sv-wacker.de/de/sportangebot/abteilungen/ringen/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "burghausen_ringen",
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
