# Auftrag: Hofspielhaus (Privattheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-privattheater/hofspielhaus.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.hofspielhaus.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.hofspielhaus.de/, https://www.hofspielhaus.de/theater-fuer-alle/, https://www.hofspielhaus.de/karten/
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: info@hofspielhaus.de, karten@hofspielhaus.de
- Instagram auf der Vereinsseite: hofspielhaus
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- eintritt_frei: „füllt mit viel Musik, Theater und Gelächter! Das Programm am Kosttor: Eintritt frei für alle! Jazz am Kosttor mit der Haberjazzband Am Mittwoch, 15.07.,“ (https://www.hofspielhaus.de/theater-fuer-alle/)
- abendkasse: „MS Kreissparkasse München Nach der Bezahlung liegen die Karten an der Abendkasse auf Ihren Namen bereit. Sie müssen NICHT vorab ins Theater kommen. So“ (https://www.hofspielhaus.de/karten/)
- von_hand: „kt Hofspielhaus Newsletter Karten Buchen Sie Karten direkt hier Kartenreservierung Im HOFSPIELHAUS gibt es verschiedene Wege, Karten zu reservieren.“ (https://www.hofspielhaus.de/karten/)
- bar: „ollten Sie spontan an die Abendkasse oder im Theater vorbeikommen ist nur Barzahlung möglich. Dies gilt auch für unser gastronomisches Angebot. Per“ (https://www.hofspielhaus.de/karten/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Hofspielhaus",
    "land": null,
    "liga": "kultur-muc-privattheater",
    "liga_name": "Privattheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.hofspielhaus.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "hofspielhaus",
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
