# Auftrag: TSG Schöller SI Ravens Reutlingen (ProB (2. Basketball-Bundesliga, Nord und Süd))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/prob/tsg-schoeller-si-ravens-reutlingen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.ravens-reutlingen.net
- Ticketlink (2. Basketball-Bundesliga): keiner
- Schon gelesen: https://www.ravens-reutlingen.net/, https://www.ravens-reutlingen.net/tickets/
- 2. Basketball-Bundesliga-Seite des Teams: https://www.2basketballbundesliga.de/kader/591
- Kontakte laut 2. Basketball-Bundesliga: Verantwortlicher Georgios Tsouknidis <jorgo.tsuknidis@tsg-reutlingen.de>
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: youandmestudio.reutlingen
- Preise gefunden: 14 € („tickets sichern vollzahler online 14,00 €“); 14 € („tickets sichern vollzahler online 14,00 €“); 14 € („tickets sichern vollzahler online 14,00 €“); 14 € („vollzahler 14,00 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „üdwest 25/26 ⬆️ @barmer2basketballbundesliga ProB 26/27 🎟️ TICKETS & DAUERKARTEN 👇 🧡 STUDENT & FAMILY GAMEDAY! 🖤 Diesen Sonntag wird 7-0. THE STRE“ (https://www.ravens-reutlingen.net/)
- abendkasse: „lle. Karten gibt es online bei unserem Ticketpartner ditix und an der Abendkasse. 14 Heimspiele bis 1.400 Plätze frei Kinder bis 6 Alle Heimspiele Pre“ (https://www.ravens-reutlingen.net/tickets/)
- vorverkauf: „Kinder bis 6 Alle Heimspiele Preise Dauerkarte Nächstes Heimspiel Im Vorverkauf Ravens vs Weimar Sa 03.10. · 19:00 Uhr Einlass 18:00 Uhr · Oskar-Kalb“ (https://www.ravens-reutlingen.net/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSG Schöller SI Ravens Reutlingen",
    "ort": "Reutlingen",
    "land": "BW",
    "liga": "prob",
    "liga_name": "ProB (2. Basketball-Bundesliga, Nord und Süd)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.ravens-reutlingen.net",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 14,
    "halle": "Oskar-Kalbfell-Sporthalle Kanzleistraße 30 72764 Reutlingen",
    "kapazitaet": null,
    "instagram": "youandmestudio.reutlingen",
    "ansprechperson": {
      "name": "Georgios Tsouknidis",
      "rolle": "Verantwortlicher (laut 2. Basketball-Bundesliga)",
      "kontakt": "jorgo.tsuknidis@tsg-reutlingen.de"
    },
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-13",
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
