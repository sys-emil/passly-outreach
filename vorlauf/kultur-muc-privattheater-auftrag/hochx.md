# Auftrag: HochX (Privattheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-privattheater/hochx.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://theater-hochx.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://theater-hochx.de/, https://theater-hochx.de/besuch/tickets/, https://theater-hochx.de/en/visit/tickets-en/
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: reservierung@theater-hochx.de
- Instagram auf der Vereinsseite: hochx
- Preise gefunden: 30 € („ticket genau das richtige für dich. 30 €“); 20 € („ticketpreis zahlen möchten. 20 €“); 3.06 € („ticket 3,06 €“)

## Funde (Fundstelle, Seite)
- abendkasse: „er Onlineabstimmung mitentscheiden, welche Projekte gefördert werden. Abendkasse Die Kasse öffnet eine Stunde vor Vorstellungsbeginn. An der Abendkass“ (https://theater-hochx.de/besuch/tickets/)
- vorverkauf: „echnik Produzieren am HochX Mieten Medien HochX Magazin Audio Video x Vorverkauf Tickets erhältst Du online in unserem Rausgegangen-Ticketshop. Bitte“ (https://theater-hochx.de/besuch/tickets/)
- von_hand: „u außerdem eine kostenlose Begleitkarte bekommen. Bitte wende Dich an reservierung@theater-hochx.de . 6 € | Vorstellung im Saal | Foyerveranstaltung“ (https://theater-hochx.de/besuch/tickets/)
- bar: „kannst du bar oder mit Karte bezahlen. Achtung: An der Bar kannst Du nur bar zahlen. Gruppenreservierung Für Gruppenreservierungen ab 10 Personen“ (https://theater-hochx.de/besuch/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "HochX",
    "land": null,
    "liga": "kultur-muc-privattheater",
    "liga_name": "Privattheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "https://theater-hochx.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "hochx",
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
