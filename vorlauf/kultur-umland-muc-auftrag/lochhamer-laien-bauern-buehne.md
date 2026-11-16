# Auftrag: Lochhamer Laien-Bauern-Bühne (Laienbühnen Region München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-umland-muc/lochhamer-laien-bauern-buehne.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.llbb.de/
- Ticketlink (DATEI): keiner
- Schon gelesen: https://llbb.de/, https://llbb.de/eintrittskarten.php, https://llbb.de/karten-theater.php
- DATEI-Seite des Teams: https://www.amateur-theatre-wiki.gwi.uni-muenchen.de/index.php/Lochhamer_Laien-Bauern-B%C3%BChne
- Kontakte laut DATEI: keine
- E-Mails auf der Vereinsseite: info@LLBB.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 13 € („eintrittspreis 13,00 euro“)

## Funde (Fundstelle, Seite)
- vorverkauf: „0 Uhr Samstag 21.11.2026 19.30 Uhr Sonntag 22.11.2026 15.30 Uhr Kartenvorverkauf unter der Rubrik Eintrittskarten oder telefonisch unter 089/87 57 96“ (https://llbb.de/)
- von_hand: „trittskarten oder telefonisch unter 089/87 57 96 06 Direkt zur Karten-Reservierungsseite (hier tippen) 🎭 Werden Sie Teil unseres Vereins! Sie haben“ (https://llbb.de/)
- abendkasse: „ie Karten werden auf den angegeben Namen reserviert und können an der Abendkasse bezahlt und abgeholt werden. Eintrittspreis 13,00 Euro Saalplan Theat“ (https://llbb.de/karten-theater.php)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Lochhamer Laien-Bauern-Bühne",
    "ort": "Gräfelfing",
    "land": "BY",
    "liga": "kultur-umland-muc",
    "liga_name": "Laienbühnen Region München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.llbb.de/",
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
