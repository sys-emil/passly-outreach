# Auftrag: Münchner Marionettentheater (Privattheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-privattheater/muenchner-marionettentheater.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.muema-theater.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.muema-theater.de/, https://www.muema-theater.de/karten-shop/, https://www.muema-theater.de/tickets-und-preise/
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: kontakt@muenchner-marionettentheater.de
- Instagram auf der Vereinsseite: muenchner_marionettentheater
- Preise gefunden: 20 € („ticket: 20,00 euro“); 16 € („erwachsene: 16,00 euro“); 30 € („erwachsenenprogramm unterst&#xfc;tzerticket: 30,00 euro“); 25 € („erwachsene: 25,00 euro“); 20 € („ticket: 20,00 euro“)

## Funde (Fundstelle, Seite)
- abendkasse: „ts Vorverkauf Mi-So von 10 bis 13 Uhr seitlich am Geb&#xE4;ude Tages-/Abendkasse &#xD6;ffnet jeweils 45 Minuten vor Vorstellungsbeginn Social Media Fo“ (https://www.muema-theater.de/)
- vorverkauf: „eich der &#x201E;Oidn Wiesn&#x201C;. W&#xE4;hrend dieser Zeit ist die Vorverkaufskasse Mo-Fr von 10-13 Uhr ge&#xF6;ffnet. Tickets k&#xF6;nnen auch onl“ (https://www.muema-theater.de/)
- von_hand: „sand statt. Ticketbuchung Online: Karten Shop/Gutscheine Telefonische Reservierung: ACHTUNG: Reservierte Karten m&#xFC;ssen bis sp&#xE4;testens 7 Tag“ (https://www.muema-theater.de/karten-shop/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Münchner Marionettentheater",
    "land": null,
    "liga": "kultur-muc-privattheater",
    "liga_name": "Privattheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "https://www.muema-theater.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "muenchner_marionettentheater",
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
