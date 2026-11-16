# Auftrag: Feldkirchner Theaterverein (Laienbühnen Region München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-umland-muc/feldkirchner-theaterverein.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.theater-feldkirchen.de/
- Ticketlink (DATEI): keiner
- Schon gelesen: http://www.theater-feldkirchen.de/
- DATEI-Seite des Teams: https://www.amateur-theatre-wiki.gwi.uni-muenchen.de/index.php/Feldkirchner_Theaterverein
- Kontakte laut DATEI: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „isch, beim Getränke Haußmann oder (sofern dann noch verfügbar) an der Abendkasse. Für die Vorstellungen im Kleinen Theater Haar bestellen Sie Eintritt“ (http://www.theater-feldkirchen.de/)
- von_hand: „Feldkirchen sind bereits weitgehend ausverkauft. Daher haben wir die Reservierung über unsere Homepage bereits eingestellt. Restkarten verkaufen wir“ (http://www.theater-feldkirchen.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Feldkirchner Theaterverein",
    "ort": "Haar",
    "land": "BY",
    "liga": "kultur-umland-muc",
    "liga_name": "Laienbühnen Region München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.theater-feldkirchen.de/",
    "vorverkauf": "keiner",
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
