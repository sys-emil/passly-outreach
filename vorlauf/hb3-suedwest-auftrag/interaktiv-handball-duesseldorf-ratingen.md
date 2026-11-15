# Auftrag: Interaktiv.Handball Düsseldorf-Ratingen (3. Liga Männer Handball Süd-West)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-suedwest/interaktiv-handball-duesseldorf-ratingen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.sgratingen.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://interaktiv-handball.de/, https://interaktiv-handball.de/ticketshop/, https://interaktiv-handball.de/produkt-kategorie/tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: alexander.schm@interaktiv-perspektiven.de
- Instagram auf der Vereinsseite: interaktiv.handball
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „üSSELDORF Datenquelle: handball.net Tickets & Shop Direkt zu Tickets, Dauerkarten, Camps und Fanartikeln Hier findest du alles rund um Heimspiele, Dau“ (https://interaktiv-handball.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Interaktiv.Handball Düsseldorf-Ratingen",
    "land": null,
    "liga": "hb3-suedwest",
    "liga_name": "3. Liga Männer Handball Süd-West",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.sgratingen.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "interaktiv.handball",
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
