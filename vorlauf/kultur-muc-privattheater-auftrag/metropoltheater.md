# Auftrag: Metropoltheater (Privattheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-privattheater/metropoltheater.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.metropoltheater.com/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.metropoltheater.com/, https://www.metropoltheater.com/karten/kartenverkauf/, https://www.metropoltheater.com/karten/gutscheine/, https://www.metropoltheater.com/karten/metropol-flatrate/, https://www.metropoltheater.com/karten/junior-flat/
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „T-Shirts Neue Farben, Bio-Baumwolle, erhältlich im Vorverkauf, an der Abendkasse oder per Email-Bestellung Der Youtube-Kanal des Metropoltheaters Viel“ (https://www.metropoltheater.com/)
- vorverkauf: „Mitglied Metropol T-Shirts Neue Farben, Bio-Baumwolle, erhältlich im Vorverkauf, an der Abendkasse oder per Email-Bestellung Der Youtube-Kanal des Me“ (https://www.metropoltheater.com/)
- von_hand: „ungen Pressestimmen Unterstützen Freundeskreis Spenden Förderer Kartenreservierung Tel: 089 32 19 55 33 Fax: 089 32 19 55 44 E-Mail: info _at_ metrop“ (https://www.metropoltheater.com/karten/kartenverkauf/)
- bar: „von Eintrittskarten/Gutscheinen/Flatratekarten vor Ort ausschließlich Barzahlung möglich ist. Bankverbindung für die Zahlung von Eintrittskarten und G“ (https://www.metropoltheater.com/karten/kartenverkauf/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Metropoltheater",
    "land": null,
    "liga": "kultur-muc-privattheater",
    "liga_name": "Privattheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "https://www.metropoltheater.com/",
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
