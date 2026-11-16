# Auftrag: Kleines Münchner Theater (Laienbühnen Region München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-umland-muc/kleines-muenchner-theater.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.kleines-muenchner-theater.de/
- Ticketlink (DATEI): keiner
- Schon gelesen: https://www.kleines-muenchner-theater.de/, https://www.kleines-muenchner-theater.de/kartenvorverkauf/, https://www.kleines-muenchner-theater.de/kartenvorverkauf/preise-und-anfahrt/, https://www.kleines-muenchner-theater.de/kartenvorverkauf/ihr-theaterabend/
- DATEI-Seite des Teams: https://www.amateur-theatre-wiki.gwi.uni-muenchen.de/index.php/Kleines_M%C3%BCnchner_Theater
- Kontakte laut DATEI: keine
- E-Mails auf der Vereinsseite: kleines-muenchner-theater@gmx.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „glieder Gastspieler Vorstandschaft Theaterstücke & Spieltermine Kartenvorverkauf Preise und Anfahrt Ihr Theaterabend Fotogalerie Vergangene Stücke Lie“ (https://www.kleines-muenchner-theater.de/)
- abendkasse: „0 - 18:00 Uhr Tel.: (089) 3006740 Alternativ können Sie Karten an der Abendkasse erwerben. Wichtiger Hinweis Bitte holen Sie Ihre bestellten Karten am“ (https://www.kleines-muenchner-theater.de/kartenvorverkauf/)
- von_hand: „ihnachts-G´schichten Kontakt Kleines Münchner Theater Die Karten sind reserviert? Jetzt liegt es bei Ihnen, Sie können den Abend nach Ihren Vorstellu“ (https://www.kleines-muenchner-theater.de/kartenvorverkauf/ihr-theaterabend/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Kleines Münchner Theater",
    "ort": "Zorneding",
    "land": "BY",
    "liga": "kultur-umland-muc",
    "liga_name": "Laienbühnen Region München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.kleines-muenchner-theater.de/",
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
