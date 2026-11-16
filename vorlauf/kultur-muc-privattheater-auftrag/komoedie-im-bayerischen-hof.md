# Auftrag: Komödie im Bayerischen Hof (Privattheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-privattheater/komoedie-im-bayerischen-hof.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.komoedie-muenchen.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.komoedie-muenchen.de/, https://www.komoedie-muenchen.de/spielplan-tickets.html, https://www.komoedie-muenchen.de/spielplan-tickets/programm.html, https://www.komoedie-muenchen.de/spielplan-tickets/sondervorstellungen.html, https://www.komoedie-muenchen.de/spielplan-tickets/abonnement.html, https://www.komoedie-muenchen.de/spielplan-tickets/ticketinformationen.html
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: print@home bequem
- Instagram auf der Vereinsseite: komoedieimbayerischenhof, komoediemuenchen
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „0 – 14:00 Uhr, 15:00 – 18:30 Uhr Sonn- und Feiertag 15:00 – 17:00 Uhr Abendkasse ab eine Stunde vor Vorstellungsbeginn Telefon: +49-(0)89-29 28 10 Fax“ (https://www.komoedie-muenchen.de/spielplan-tickets/ticketinformationen.html)
- vorverkauf: „nserem Webshop, bei unserer Kartenreservierung oder bei den bekannten Vorverkaufsstellen zu kaufen. Wir warnen vor teilweise unseriösen Online-Börsen.“ (https://www.komoedie-muenchen.de/spielplan-tickets/ticketinformationen.html)
- von_hand: „ielplan & Tickets Ticketinformationen Informationen zur Ticketauswahl Karten können online, telefonisch oder an unserer Kasse gebucht werden sowie per Mail an Diese E-Mail-Adresse ist vor Spambots geschützt! Zur Anzeige muss“ (https://www.komoedie-muenchen.de/spielplan-tickets/ticketinformationen.html)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Komödie im Bayerischen Hof",
    "land": null,
    "liga": "kultur-muc-privattheater",
    "liga_name": "Privattheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "https://www.komoedie-muenchen.de/",
    "vorverkauf": "manuell",
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
