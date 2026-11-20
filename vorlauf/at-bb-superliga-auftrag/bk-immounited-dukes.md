# Auftrag: BK IMMOunited Dukes (Basketball Superliga (AT, 1. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-bb-superliga/bk-immounited-dukes.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.bk-klosterneuburg.at
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://bk-klosterneuburg.at/, https://bk-klosterneuburg.at/tickets/
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Basketball_Superliga
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: ticket@bk-klosterneuburg.at
- Instagram auf der Vereinsseite: bk_dukes, bk.duchess, basket.dukes.duchess
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „e 3) ist ausschließlich für Nachwuchsspieler und -spielerinnen des BK reserviert. Tickets für die Spiele der BK Karbon-X Dukes und BK Raiffeisen Duch“ (https://bk-klosterneuburg.at/tickets/)
- dauerkarte: „ickets melden Sie sich bitte per Mail an: ticket@bk-klosterneuburg.at Saisonkarten können auf Anfrage gekauft werden. WIE LÖSE ICH EINEN CODE EIN? Die“ (https://bk-klosterneuburg.at/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "BK IMMOunited Dukes",
    "ort": "Klosterneuburg",
    "land": null,
    "liga": "at-bb-superliga",
    "liga_name": "Basketball Superliga (AT, 1. Liga)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "http://www.bk-klosterneuburg.at",
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
    "recherchiert_am": "2026-11-20",
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
