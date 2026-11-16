# Auftrag: Greifswalder FC (Regionalliga Nordost (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-nordost/greifswalder-fc.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://greifswalder-fc.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://greifswalder-fc.de/, https://greifswalder-fc.de/profis/spieltag.html, https://greifswalder-fc.de/unser-gfc/stadion-tickets.html
- Nicht lesbar: https://greifswalder-fc.de/profis/unser-gfc/stadion-tickets.html (HTTP 404)
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „€ Stehplatz ermäßigt** – 8 € Stehplatz Kids*** - 5 € Eintrittspreise Tageskasse: Sitzplatz – 18 € Sitzplatz ermäßigt** – 16 € Sitzplatz Kids*** - 9 €“ (https://greifswalder-fc.de/unser-gfc/stadion-tickets.html)
- vorverkauf: „Jahren, die nicht aktive Mitglieder beim Greifswalder FC sind Unsere Vorverkaufsstellen: Autocenter Grimmen, An den Bäckerwiesen 8, 17489 Greifswald“ (https://greifswalder-fc.de/unser-gfc/stadion-tickets.html)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Greifswalder FC",
    "ort": "Greifswald",
    "land": "MV",
    "liga": "rl-nordost",
    "liga_name": "Regionalliga Nordost (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://greifswalder-fc.de/",
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
