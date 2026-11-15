# Auftrag: SV Wilhelmshaven (Oberliga Niedersachsen (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-niedersachsen/sv-wilhelmshaven.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.svwilhelmshaven.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.sv-wilhelmshaven.de/, https://www.sv-wilhelmshaven.de/Preise.php
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Niedersachsen_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: verein@svwilhelmshaven.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 12 € („eintrittspreise heimspiel-ticket 12,00 €“); 8 € („ticket mit ermäßigung* 8,00 €“); 8 € („ticket mit truppenausweis 8,00 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „cket mit Truppenausweis 8,00 € VIP-Ticket (ab dem 01.01.2027) 16,00 € Dauerkarte 120,00 € Dauerkarte mit Ermäßigung* 80,00 € VIP-Dauerkarte (ab dem 01“ (https://www.sv-wilhelmshaven.de/Preise.php)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Wilhelmshaven",
    "ort": "Wilhelmshaven",
    "land": "NI",
    "liga": "oberliga-niedersachsen",
    "liga_name": "Oberliga Niedersachsen (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.svwilhelmshaven.de/",
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
