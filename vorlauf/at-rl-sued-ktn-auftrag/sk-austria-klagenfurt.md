# Auftrag: SK Austria Klagenfurt (Regionalliga Süd, Kärnten (Fußball, AT, 3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-rl-sued-ktn/sk-austria-klagenfurt.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.skaustriaklagenfurt.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://austriaklagenfurt.at/, https://austriaklagenfurt.at/tickets/veranstaltung/e1793614668745, https://austriaklagenfurt.at/tickets, https://austriaklagenfurt.at/tickets/dauerkarten
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: support@austriaklagenfurt.at
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „der Website steht. Spielberichte und Highlights noch am selben Abend Vorverkaufs-Start und Ticket-Aktionen vor allen anderen Gewinnspiele und Fan-Akt“ (https://austriaklagenfurt.at/)
- dauerkarte: „uf einen Blick. Jetzt anmelden Newsletter Zurück Veranstaltung Spiele Dauerkarten Veranstaltung Kärntner Weihnachtssingen Kärnten singt Weihnachtslied“ (https://austriaklagenfurt.at/tickets/veranstaltung/e1793614668745)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SK Austria Klagenfurt",
    "ort": "Kärnten",
    "land": null,
    "liga": "at-rl-sued-ktn",
    "liga_name": "Regionalliga Süd, Kärnten (Fußball, AT, 3. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.skaustriaklagenfurt.at/",
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
