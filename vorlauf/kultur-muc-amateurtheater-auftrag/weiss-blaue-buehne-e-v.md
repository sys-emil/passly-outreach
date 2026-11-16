# Auftrag: Weiß-Blaue Bühne e. V. (Amateurtheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-amateurtheater/weiss-blaue-buehne-e-v.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.weiss-blaue-buehne.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.weiss-blaue-buehne.de/
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: eintrittskarten@weiss-blaue-buehne.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 15 € („eintritt beträgt für erwachsene 15 euro“)

## Funde (Fundstelle, Seite)
- vorverkauf: „n/Pasing im Prinzregent-Garten Benedikterstr. 35, 81241 München Kartenvorverkauf unter Telefon 089 690 99 87 Dienstag bis Donnerstag von 18.30 bis 21.“ (https://www.weiss-blaue-buehne.de/)
- von_hand: „München/Pasing im Prinzregent-Garten Benedikterstr. 35, 81241 München Kartenvorverkauf unter Telefon 089 690 99 87 Dienstag bis Donnerstag von 18.30 bis 21.00 Uhr oder Be“ (https://www.weiss-blaue-buehne.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Weiß-Blaue Bühne e. V.",
    "land": null,
    "liga": "kultur-muc-amateurtheater",
    "liga_name": "Amateurtheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.weiss-blaue-buehne.de/",
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
