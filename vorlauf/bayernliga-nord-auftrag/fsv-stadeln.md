# Auftrag: FSV Stadeln (Bayernliga Nord (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bayernliga-nord/fsv-stadeln.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.fsv-stadeln.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.fsv-stadeln.de/, https://www.fsv-stadeln.de/?page_id=583, https://www.fsv-stadeln.de/?p=8120, https://www.fsv-stadeln.de/?p=8094, https://www.fsv-stadeln.de/?p=8079, https://www.fsv-stadeln.de/?p=8065
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bayernliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: begovic@gmx.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „ntner und Schwerbesch. 8 € Mitglieder 9 € Nichtmitglieder 10 € Saison-Dauerkarte Mitglieder 2025/2026 125 € Saison-Dauerkarte Nichtmitglieder 2025/202“ (https://www.fsv-stadeln.de/?page_id=583)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FSV Stadeln",
    "land": null,
    "liga": "bayernliga-nord",
    "liga_name": "Bayernliga Nord (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.fsv-stadeln.de",
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
