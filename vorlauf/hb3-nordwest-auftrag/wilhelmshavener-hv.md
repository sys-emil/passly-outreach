# Auftrag: Wilhelmshavener HV (3. Liga Männer Handball Nord-West)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-nordwest/wilhelmshavener-hv.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.whvhandball.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.whvhandball.de/, https://www.whvhandball.de/tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@whvhandball.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 16 € („tageskarte 16€“); 10 € („erwachsene ermäßigt 10€“)

## Funde (Fundstelle, Seite)
- vorverkauf: „anze Familie. Hier findest du alle Informationen zu Ticketpreisen und Vorverkaufsstellen für den Wilhelmshavener HV. Tageskarte 16€ Voller Preis für E“ (https://www.whvhandball.de/tickets/)
- dauerkarte: „-17 J.), Studenten, Schwerbehinderung (50%+) Kinder frei Bis 12 Jahre Dauerkarte 189€ Für die komplette Saison VOrverkaufsstellen GeschäftsstelIe Göke“ (https://www.whvhandball.de/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Wilhelmshavener HV",
    "land": null,
    "liga": "hb3-nordwest",
    "liga_name": "3. Liga Männer Handball Nord-West",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "http://www.whvhandball.de/",
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
    "recherchiert_am": "2026-11-15",
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
