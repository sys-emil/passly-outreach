# Auftrag: SV Grödig (Regionalliga Nord (Fußball, AT, 3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-rl-nord/sv-groedig.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.sv-groedig.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://sv-groedig.at/, https://sv-groedig.at/tickets/, https://sv-groedig.at/tickets/fanclub/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: office@sv-groedig.at, tickets@sv-groedig.at
- Instagram auf der Vereinsseite: svgroedig1948
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „nsjahr) haben freien Zutritt (ohne Sitzplatz). Gerne nehmen wir Deine Ticket-Bestellung per mail über tickets@sv-groedig.at entgegen. VEREINSANSCHRIFT SV GRÖDIG Pröts“ (https://sv-groedig.at/tickets/)
- dauerkarte: „/ Impressum ÜBERSICHT TICKETPREISE Regional Liga – Saison 2026/27 ABO DAUERKARTE – SAISON 2026/27 ABO DAUERKARTE – VOLLPREIS € 140 Kein Topspiel-Zusch“ (https://sv-groedig.at/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Grödig",
    "ort": "Grödig",
    "land": null,
    "liga": "at-rl-nord",
    "liga_name": "Regionalliga Nord (Fußball, AT, 3. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.sv-groedig.at/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "svgroedig1948",
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-20",
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
