# Auftrag: SG 09 Kirchhof (2. Handball-Bundesliga Frauen)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hbf2/sg-09-kirchhof.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.sg09-kirchhof.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.sg09-kirchhof.de/, https://www.sg09-kirchhof.de/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/2._Handball-Bundesliga_(Frauen)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@sg09-kirchhof.de
- Instagram auf der Vereinsseite: sg09kirchhof
- Preise gefunden: 15 € („erwachsene (15€“)

## Funde (Fundstelle, Seite)
- vorverkauf: „n der Oberliga Hessen Nord und die C1-Jugend in der Regionalliga. Der Vorverkauf der Jahreskarten geht nun in den Endpsurt. Sei live dabei, sicher dir“ (https://www.sg09-kirchhof.de/tickets)
- von_hand: „r dir deinen Platz auf der Tribüne, der Höhle der Löwinnen. Durch die Reservierung der Goldkarte wird der Mädchen- und Frauenhandball besonders geför“ (https://www.sg09-kirchhof.de/tickets)
- dauerkarte: „SG 09 Kirchhof Name: E-Mail: Telefon: Straße & Nr. Postleitzahl Stadt Dauerkarte Alsco Bundeliga 0 1 2 3 4 5 6 7 8 9 10 Dauerkarte Oberliga 0 1 2 3 4“ (https://www.sg09-kirchhof.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SG 09 Kirchhof",
    "land": null,
    "liga": "hbf2",
    "liga_name": "2. Handball-Bundesliga Frauen",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.sg09-kirchhof.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 15,
    "halle": null,
    "kapazitaet": null,
    "instagram": "sg09kirchhof",
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
