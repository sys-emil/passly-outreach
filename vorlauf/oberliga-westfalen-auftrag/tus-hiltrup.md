# Auftrag: TuS Hiltrup (Oberliga Westfalen (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-westfalen/tus-hiltrup.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.tus-hiltrup.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.tus-hiltrup.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Westfalen_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: passwesen@tushiltrup.de, geschaeftsstelle@tushiltrup.de, fussball@tushiltrup.de
- Instagram auf der Vereinsseite: tushiltrup1930ev
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „Ansprechpartner*innen Aktuelles Termine Spielbetrieb Speckbrett Teams Saisonkarte speckbrettliga.de Stepptanz Wer wir sind Ansprechpartner*innen Aktuel“ (https://www.tus-hiltrup.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TuS Hiltrup",
    "ort": "Münster",
    "land": "NW",
    "liga": "oberliga-westfalen",
    "liga_name": "Oberliga Westfalen (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.tus-hiltrup.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "tushiltrup1930ev",
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
