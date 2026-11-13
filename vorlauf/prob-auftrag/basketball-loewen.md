# Auftrag: Basketball Löwen (ProB (2. Basketball-Bundesliga, Nord und Süd))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/prob/basketball-loewen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.basketball-loewen.com/
- Ticketlink (2. Basketball-Bundesliga): https://Tickets@basketball-loewen.com
- Kapazität laut 2. Basketball-Bundesliga: 1500
- Schon gelesen: https://basketball-loewen.com/, https://basketball-loewen.com/saison/profis/gameday/, https://basketball-loewen.com/tickets/dauerkarte.html
- Nicht lesbar: https://Tickets@basketball-loewen.com (TypeError)
- 2. Basketball-Bundesliga-Seite des Teams: https://www.2basketballbundesliga.de/kader/563
- Kontakte laut 2. Basketball-Bundesliga: Verantwortlicher Florian Gut <florian.gut@googlemail.com>
- E-Mails auf der Vereinsseite: info@basketball-loewen.com, tickets@basketball-loewen.com
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 0 € („ticketshop auf 0,00 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „Titans Fr, 13.11., 18:30 Uhr , Riethsporthalle Zum Livestream Tickets Dauerkarte Auswärts mit Gebrüll SKYLINERS Juniors – Basketball Löwen So, 15.11.,“ (https://basketball-loewen.com/)
- von_hand: „ätze wählen, fertig. Dein Platz steht auf dem Ticket und ist für dich reserviert. In allen anderen Blöcken wählst du frei innerhalb deines gebuchten“ (https://basketball-loewen.com/saison/profis/gameday/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Basketball Löwen",
    "ort": "Erfurt",
    "land": "TH",
    "liga": "prob",
    "liga_name": "ProB (2. Basketball-Bundesliga, Nord und Süd)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.basketball-loewen.com/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Riethsporthalle Essener Straße 20 99089 Erfurt",
    "kapazitaet": 1500,
    "instagram": null,
    "ansprechperson": {
      "name": "Florian Gut",
      "rolle": "Verantwortlicher (laut 2. Basketball-Bundesliga)",
      "kontakt": "florian.gut@googlemail.com"
    },
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-13",
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
