# Auftrag: SV Oberachern (Oberliga Baden-Württemberg (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-bw/sv-oberachern.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://svoberachern.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.svoberachern.de/, https://www.svoberachern.de/aktuelles-beim-sv-oberachern/spieltag/, https://www.svoberachern.de/stadion/tickets-jahreskarte/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Baden-W%C3%BCrttemberg_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@svoberachern.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 9 € („erwachsene 9 euro“); 4 € („erwachsene 4 euro“)

## Funde (Fundstelle, Seite)
- eintritt_frei: „Staffel Süd - Team 2 Erwachsene 4 EURO Ermäßigt 3 EURO Frauen &#8211; Eintritt frei Dauerkarte / Jahreskarte Erwachsene 135 EURO Ermäßigt 105 EURO Ermäßi“ (https://www.svoberachern.de/stadion/tickets-jahreskarte/)
- dauerkarte: „Team 2 Erwachsene 4 EURO Ermäßigt 3 EURO Frauen &#8211; Eintritt frei Dauerkarte / Jahreskarte Erwachsene 135 EURO Ermäßigt 105 EURO Ermäßigt: SVO-Mit“ (https://www.svoberachern.de/stadion/tickets-jahreskarte/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Oberachern",
    "ort": "Achern",
    "land": "BW",
    "liga": "oberliga-bw",
    "liga_name": "Oberliga Baden-Württemberg (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://svoberachern.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
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
