# Auftrag: EHV Aue (3. Liga Männer Handball Nord-Ost)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-nordost/ehv-aue.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://ehv-aue.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://ehv-aue.de/, https://ehv-aue.de/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: kontakt@ehv-aue.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 18 € („ticket vollzahler 18€“); 16 € („ticket ermäßigt 16€“); 13 € („ticket kind / jugendlicher 13€“); 7 € („ticket 7€“); 16 € („ticket vollzahler 16€“)

## Funde (Fundstelle, Seite)
- abendkasse: „inder gelten. Ticketkauf Tickets können sowohl online als auch an der Tageskasse erworben werden. Beim Online-Kauf wird eine zusätzliche Vorverkaufsge“ (https://ehv-aue.de/tickets)
- vorverkauf: „er Tageskasse erworben werden. Beim Online-Kauf wird eine zusätzliche Vorverkaufsgebühr von 10% erhoben. An der Tageskasse fällt eine Gebühr von 2 € p“ (https://ehv-aue.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "EHV Aue",
    "land": null,
    "liga": "hb3-nordost",
    "liga_name": "3. Liga Männer Handball Nord-Ost",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://ehv-aue.de/",
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
