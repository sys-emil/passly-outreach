# Auftrag: Eintracht Norderstedt (Regionalliga Nord (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-nord/eintracht-norderstedt.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.eintrachtnorderstedt.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.eintrachtnorderstedt.de/, https://www.eintrachtnorderstedt.de/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_Nord_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: fceintrachtnorderstedt
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „Preis von einem! Um diesen Vorteil zu genießen, muss lediglich an der Tageskasse die goldene VR-MeinPlus vorgezeigt werden. Weitere Informationen zu "“ (https://www.eintrachtnorderstedt.de/tickets)
- eintritt_frei: „190 Euro (ermäßigt: 160 Euro) Stehplatz: 125 Euro (ermäßigt: 95 Euro) Freier Eintritt für Kinder: Der Familiengedanke liegt uns sehr am Herzen. Damit sich“ (https://www.eintrachtnorderstedt.de/tickets)
- dauerkarte: „Die Tickets sind online bis Spielbeginn erhältlich. Eintrittspreise / Dauerkarten – Saison 2024/2025: Dauerkarten könnt ihr online bestellen ( hier en“ (https://www.eintrachtnorderstedt.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Eintracht Norderstedt",
    "ort": "Norderstedt",
    "land": "HH",
    "liga": "rl-nord",
    "liga_name": "Regionalliga Nord (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.eintrachtnorderstedt.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "fceintrachtnorderstedt",
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
