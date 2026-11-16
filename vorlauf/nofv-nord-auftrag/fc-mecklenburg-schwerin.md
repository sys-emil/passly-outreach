# Auftrag: FC Mecklenburg Schwerin (NOFV-Oberliga Nord (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/nofv-nord/fc-mecklenburg-schwerin.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://fcm-schwerin.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://fcm-schwerin.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@fcm-schwerin.de
- Instagram auf der Vereinsseite: fcmecklenburgschwerin
- Preise gefunden: 10 € („ticketpreise tageskarte: tageskarte: 10€“); 49 € („tageskarte: 49€“)

## Funde (Fundstelle, Seite)
- dauerkarte: „erliga in Schwerin FC Mecklenburg Schwerin vs. 1 FC Lok Stendal Jetzt Dauerkarte sichern! Ticketpreise Tageskarte: Tageskarte: 10€ VIP-Tageskarte: 49€“ (https://fcm-schwerin.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC Mecklenburg Schwerin",
    "ort": "Schwerin",
    "land": "MV",
    "liga": "nofv-nord",
    "liga_name": "NOFV-Oberliga Nord (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://fcm-schwerin.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "fcmecklenburgschwerin",
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-16",
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
