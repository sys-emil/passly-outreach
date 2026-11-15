# Auftrag: Young Boys Reutlingen (Oberliga Baden-Württemberg (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-bw/young-boys-reutlingen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.youngboys-reutlingen.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.youngboys-reutlingen.de/
- Nicht lesbar: https://www.youngboys-reutlingen.de/tickets (leer, lädt per JavaScript)
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Baden-W%C3%BCrttemberg_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: herren@youngboys-reutlingen.de
- Instagram auf der Vereinsseite: youngboysreutlingen
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Young Boys Reutlingen",
    "ort": "Reutlingen",
    "land": "BW",
    "liga": "oberliga-bw",
    "liga_name": "Oberliga Baden-Württemberg (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.youngboys-reutlingen.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "youngboysreutlingen",
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
