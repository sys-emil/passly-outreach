# Auftrag: Dramatischer Club Alpenröserl e. V. (Amateurtheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-amateurtheater/dramatischer-club-alpenroeserl-e-v.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.alpenroeserl.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.fam-greif.de/Alpenroeserl/wp/, https://www.fam-greif.de/Alpenroeserl/wp/kartenvorverkauf/
- Nicht lesbar: https://www.fam-greif.de/Alpenroeserl/wp/wp-login.php?redirect_to=https%3A%2F%2Fwww.fam-greif.de%2FAlpenroeserl%2Fwp%2Fkartenvorverkauf%2F (HTTP 503)
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: mail@alpenroeserl.de, kartenvorverkauf@alpenroeserl.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 15 € („eintrittspreis erwachsene: 15 €“)

## Funde (Fundstelle, Seite)
- vorverkauf: „er den Kulissen Stückgeschichte Dokumente Jubiläum 2022 Kontakt Kartenvorverkauf Umstellung Postversand Newsletter Blog Intern Aktuelles Am 30. Oktobe“ (https://www.fam-greif.de/Alpenroeserl/wp/)
- von_hand: „rstag von 12 – 14 Uhr sowie 18 – 20 Uhr Hier geht es zur Online-Kartenreservierung Stellengesuch Wir suchen Sie! Werden Sie Teil unserer Theatergrupp“ (https://www.fam-greif.de/Alpenroeserl/wp/)
- abendkasse: „eservierung verwendet. Bestellte, nicht genutzte Karten müssen an der Abendkasse bezahlt werden, falls diese nicht mindestens 4 Tage vor der Aufführun“ (https://www.fam-greif.de/Alpenroeserl/wp/kartenvorverkauf/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Dramatischer Club Alpenröserl e. V.",
    "land": null,
    "liga": "kultur-muc-amateurtheater",
    "liga_name": "Amateurtheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.alpenroeserl.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 15,
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
