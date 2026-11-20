# Auftrag: Admira Wacker (2. Liga (Fußball, AT, 2. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-2liga/admira-wacker.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://admirawacker.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://admirawacker.at/, https://admirawacker.at/spieltagsangebote/, https://admirawacker.at/fans/tickets/, https://admirawacker.at/business/business-tickets/, https://admirawacker.at/alle-infos-zum-heimspiel-gegen-den-fc-wacker-innsbruck/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: office@admirawacker.at, fanshop@flyeralarmadmira.at
- Instagram auf der Vereinsseite: admirawacker
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „fahrer ist kostenlos. Auf Grund begrenzter Kapazitäten muss jedoch im Vorverkauf eine Zutrittsberechtigung abgeholt werden. Einer Begleitperson wird f“ (https://admirawacker.at/fans/tickets/)
- von_hand: „nschaft in der DATENPOL ARENA . Kontakt Für weitere Informationen zur Ticketbestellung steht Ihnen unser Office gerne per Mail zur Verfügung: office@admirawacker.at Informationen für Menschen mit“ (https://admirawacker.at/fans/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Admira Wacker",
    "ort": "Mödling",
    "land": null,
    "liga": "at-2liga",
    "liga_name": "2. Liga (Fußball, AT, 2. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://admirawacker.at/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "admirawacker",
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
