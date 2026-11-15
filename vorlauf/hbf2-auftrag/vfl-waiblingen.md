# Auftrag: VfL Waiblingen (2. Handball-Bundesliga Frauen)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hbf2/vfl-waiblingen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.waiblingen-tigers.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://waiblingen-tigers.de/, https://waiblingen-tigers.de/tickets/frauen-2/, https://waiblingen-tigers.de/ueber-uns/frauen/, https://waiblingen-tigers.de/ueber-uns/maenner/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/2._Handball-Bundesliga_(Frauen)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „verein Jugend Sponsoring Tickets unserer Frauen 2 erhaltet ihr an der Tageskasse Wir freuen uns auf euren Besuch bei uns in Waiblingen in unserer Rund“ (https://waiblingen-tigers.de/tickets/frauen-2/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "VfL Waiblingen",
    "land": null,
    "liga": "hbf2",
    "liga_name": "2. Handball-Bundesliga Frauen",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.waiblingen-tigers.de/",
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
