# Auftrag: SG Barockstadt Fulda-Lehnerz (Regionalliga Südwest (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-suedwest/sg-barockstadt-fulda-lehnerz.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://sg-barockstadt.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://sg-barockstadt.de/, https://sg-barockstadt.de/ticketinfos/
- Nicht lesbar: https://sg-barockstadt.de/tickets-heimspiele (HTTP 404)
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_S%C3%BCdwest_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: tickets@sg-barockstadt.de, handicap@sg-barockstadt.de
- Instagram auf der Vereinsseite: sg_barockstadt
- Preise gefunden: 18 € („vollzahler: 18 €“); 12 € („vollzahler: 12 €“); 10 € („vollzahler: 10 €“)

## Funde (Fundstelle, Seite)
- abendkasse: „le der SG Barockstadt werden gesonderte Informationen veröffentlicht. Tageskasse Sofern das Heimspiel nicht ausverkauft ist, öffnen am Spieltag die Ta“ (https://sg-barockstadt.de/ticketinfos/)
- vorverkauf: „Ticketshop #Heimat, Herz und Leidenschaft --> Follow us: Ticketinfos Vorverkauf Tickets für die Heimspiele der SG Barockstadt in der Regionalliga Süd“ (https://sg-barockstadt.de/ticketinfos/)
- dauerkarte: „stadt in der Regionalliga Südwest können entweder zu Saisonbeginn als Dauerkarte oder im Laufe der Saison als Tageskarte für die jeweiligen Spiele erw“ (https://sg-barockstadt.de/ticketinfos/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SG Barockstadt Fulda-Lehnerz",
    "land": null,
    "liga": "rl-suedwest",
    "liga_name": "Regionalliga Südwest (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://sg-barockstadt.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "sg_barockstadt",
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
