# Auftrag: SV Wallern (Regionalliga Nord (Fußball, AT, 3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-rl-nord/sv-wallern.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.sv-wallern.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.sv-wallern.at/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „ader KM 24/25 Spielplan 24/25 Nachwuchs Tennis News Die Sektion Platz-Reservierung Platzregeln &#038; Tarife Bogenschießen News Bogensport SV Wallern“ (https://www.sv-wallern.at/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Wallern",
    "ort": "Wallern an der Trattnach",
    "land": null,
    "liga": "at-rl-nord",
    "liga_name": "Regionalliga Nord (Fußball, AT, 3. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.sv-wallern.at/",
    "vorverkauf": "keine_angabe",
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
