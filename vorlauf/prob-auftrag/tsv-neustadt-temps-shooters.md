# Auftrag: TSV Neustadt temps Shooters (ProB (2. Basketball-Bundesliga, Nord und Süd))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/prob/tsv-neustadt-temps-shooters.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.tsvneustadttempsshooters.de
- Ticketlink (2. Basketball-Bundesliga): https://www.tsvneustadttempsshooters.de/tickets
- Kapazität laut 2. Basketball-Bundesliga: 999
- Schon gelesen: https://www.tsvneustadttempsshooters.de/, https://www.tsvneustadttempsshooters.de/tickets
- 2. Basketball-Bundesliga-Seite des Teams: https://www.2basketballbundesliga.de/kader/585
- Kontakte laut 2. Basketball-Bundesliga: Verantwortlicher Jan Gebauer <geschaeftsfuehrung@tsvneustadttempsshooters.de>; Fanbeauftragter Jan Gebauer <jangebauer11@gmx.net>
- E-Mails auf der Vereinsseite: email@tsvneustadttempsshooters.de
- Instagram auf der Vereinsseite: tsvneustadttempsshooters
- Preise gefunden: 18 € („tageskarte u18 €“)

## Funde (Fundstelle, Seite)
- abendkasse: „tung! Nur noch Kartenzahlung möglich. Ab sofort werden Tickets an der Abendkasse nur noch per Kartenzahlung verkauft. Wir bitten um Verständnis. Eintr“ (https://www.tsvneustadttempsshooters.de/tickets)
- vorverkauf: „Tickets für den SHOOTERS-DOME KEIN ANSTEHEN ▪ KEINE WARTEZEIT TICKETS Vorverkauf via EMail an: email@tsvneustadttempsshooters.de Die Tickets sind im V“ (https://www.tsvneustadttempsshooters.de/tickets)
- von_hand: „NER FANZONE ANFAHRT TICKETS CATERING ...... JOBS BALLIN KITAS TICKETS Tickets für den SHOOTERS-DOME KEIN ANSTEHEN ▪ KEINE WARTEZEIT TICKETS Vorverkauf via EMail an: email@tsvneustadttempsshooters.de Die Tickets sind im Vorverkauf“ (https://www.tsvneustadttempsshooters.de/tickets)
- dauerkarte: „Saison 2026/2027: Tageskarte Erwachsene € 16,- Tageskarte U18 € 12,- Dauerkarte Erwachsene € 208,- Dauerkarte U18 € 156,- Dauerkarten Besitzer haben“ (https://www.tsvneustadttempsshooters.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSV Neustadt temps Shooters",
    "ort": "Neustadt",
    "land": "NI",
    "liga": "prob",
    "liga_name": "ProB (2. Basketball-Bundesliga, Nord und Süd)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.tsvneustadttempsshooters.de",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 18,
    "halle": "Gymnasiumsporthalle Neustadt Lindenstr. 52 31535 Neustadt",
    "kapazitaet": 999,
    "instagram": "tsvneustadttempsshooters",
    "ansprechperson": {
      "name": "Jan Gebauer",
      "rolle": "Verantwortlicher (laut 2. Basketball-Bundesliga)",
      "kontakt": "geschaeftsfuehrung@tsvneustadttempsshooters.de"
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
