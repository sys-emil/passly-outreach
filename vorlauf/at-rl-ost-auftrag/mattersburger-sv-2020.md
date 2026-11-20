# Auftrag: Mattersburger SV 2020 (Regionalliga Ost (Fußball, AT, 3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-rl-ost/mattersburger-sv-2020.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.msv2020.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.msv2020.at/, https://www.msv2020.at/tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: buchhaltung@msv2020.at
- Instagram auf der Vereinsseite: msv__2020
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „f zahlreiche Unterstützung bei den Heimspielen! Dauerkarte: Sitzplatz reservieren Wenn Sie im Besitz einer Dauerkarte sind, können Sie für € 35,&#821“ (https://www.msv2020.at/tickets/)
- dauerkarte: „MSV 2020 freut sich auf zahlreiche Unterstützung bei den Heimspielen! Dauerkarte: Sitzplatz reservieren Wenn Sie im Besitz einer Dauerkarte sind, könn“ (https://www.msv2020.at/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Mattersburger SV 2020",
    "ort": "Mattersburg",
    "land": null,
    "liga": "at-rl-ost",
    "liga_name": "Regionalliga Ost (Fußball, AT, 3. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.msv2020.at/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "msv__2020",
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
