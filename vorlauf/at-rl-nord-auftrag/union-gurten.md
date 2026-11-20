# Auftrag: Union Gurten (Regionalliga Nord (Fußball, AT, 3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-rl-nord/union-gurten.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.union-gurten.at
- Ticketlink (Wikipedia): keiner
- Schon gelesen: http://www.union-gurten.at/, http://www.union-gurten.at/tickets.html, https://www.union-gurten.at/tickets.html
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@union-gurten.at
- Instagram auf der Vereinsseite: uniongurten
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- nur_abendkasse: „s 15 Jahre Karten für die Heimspiele der Union Raiffeisen Gurten sind ausschließlich an der Tageskasse erhältlich. © 2026 Union Raiffeisen Gurten. Designed By Bluesteps IT“ (http://www.union-gurten.at/tickets.html)
- abendkasse: „die Heimspiele der Union Raiffeisen Gurten sind ausschließlich an der Tageskasse erhältlich. © 2026 Union Raiffeisen Gurten. Designed By Bluesteps IT“ (http://www.union-gurten.at/tickets.html)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Union Gurten",
    "ort": "Gurten",
    "land": null,
    "liga": "at-rl-nord",
    "liga_name": "Regionalliga Nord (Fußball, AT, 3. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.union-gurten.at",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "uniongurten",
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
