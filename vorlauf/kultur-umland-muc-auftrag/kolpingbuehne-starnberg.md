# Auftrag: Kolpingbühne Starnberg (Laienbühnen Region München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-umland-muc/kolpingbuehne-starnberg.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.kolpingbuehne.de/
- Ticketlink (DATEI): keiner
- Schon gelesen: https://www.kolpingbuehne.de/, https://www.kolpingbuehne.de/start-der-kartenreservierung-fuer-das-dschungelbuch/
- Nicht lesbar: https://www.kolpingbuehne.de/kartenvorverkauf/index.php (leer, lädt per JavaScript), https://www.kolpingbuehne.de/kartenvorverkauf/ (leer, lädt per JavaScript)
- DATEI-Seite des Teams: https://www.amateur-theatre-wiki.gwi.uni-muenchen.de/index.php/Kolpingb%C3%BChne_Starnberg
- Kontakte laut DATEI: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: kolpingbuehne_starnberg
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „0 Uhr Samstag 07.11.2026 20:00 Uhr Sonntag 08.11.2026 15:00 Uhr Kartenvorverkauf Zur Onlinebestellung geht es hier https://www.kolpingbuehne.de/karten“ (https://www.kolpingbuehne.de/)
- von_hand: „pingbühne! Starnberger Merkur lobt unsere Jugendbühne Start der Kartenreservierung für das Dschungelbuch Herzlichen Dank und gesegnete Weihnachten! „“ (https://www.kolpingbuehne.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Kolpingbühne Starnberg",
    "ort": "Starnberg",
    "land": "BY",
    "liga": "kultur-umland-muc",
    "liga_name": "Laienbühnen Region München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.kolpingbuehne.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "kolpingbuehne_starnberg",
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
