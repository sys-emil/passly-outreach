# Auftrag: BSW Sixers (ProB (2. Basketball-Bundesliga, Nord und Süd))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/prob/bsw-sixers.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.bsw-sixers.de
- Ticketlink (2. Basketball-Bundesliga): https://bsw-sixers.online-ticket.de/index.php
- Kapazität laut 2. Basketball-Bundesliga: 950
- Schon gelesen: https://www.bsw-sixers.de/, https://bsw-sixers.online-ticket.de/index.php, https://bsw-sixers.de/index.php/news/barmer-2-basketball-bundesliga/spielbericht-spieltag-14-deutliche-niederlage-wedel, https://bsw-sixers.de/index.php/news/barmer-2-basketball-bundesliga/spieltag-14-sc-rist-wdel-bsw-sixers, https://bsw-sixers.de/index.php/news/barmer-2-basketball-bundesliga/spielbericht-spieltag-13-grossartige-kulisse-beim-christmas-game, https://bsw-sixers.de/index.php/news/barmer-2-basketball-bundesliga/spieltag-13-bsw-sixers-lok-bernau
- 2. Basketball-Bundesliga-Seite des Teams: https://www.2basketballbundesliga.de/kader/545
- Kontakte laut 2. Basketball-Bundesliga: Verantwortlicher Maik Leuschner <maik.leuschner@bsw-sixers.de>; Fanbeauftragter Frieder Diestelhorst <frieder.diestelhorst@bsw-sixers.de>
- E-Mails auf der Vereinsseite: info@bsw-sixers.de
- Instagram auf der Vereinsseite: bswsixers_official
- Preise gefunden: 12 € („tickets ab 12,00 €“); 12 € („tickets ab 12,00 €“); 12 € („tickets ab 12,00 €“); 12 € („tickets ab 12,00 €“)

## Funde (Fundstelle, Seite)
- vorverkauf: „im Interview vor dem Saisonstart Moritz Schneider neuer Kapitän Ticketvorverkauf ist gestartet PARTNER-News: Zängler GmbH verlängert Partnerschaft Ver“ (https://www.bsw-sixers.de/)
- dauerkarte: „bei den BSW Sixers BSW Sixers verabschieden Yassin Mahfouz Start des Dauerkartenverkaufs für die Saison 2024/25 Danke Fabian BSW Sixers verpflichten“ (https://www.bsw-sixers.de/)
- von_hand: „eimspiele der BSW Sixers hier kaufen | BSW Sixers Zum Inhalt springen Reservierungszeit: Warenkorb () Suche Spielplan Anmelden Tickets & Eintrittskar“ (https://bsw-sixers.online-ticket.de/index.php)
- abendkasse: „das Christmas Game voraus. Tickets Tickets können online oder an der Abendkasse erworben werden. Livestream Das Spiel kann kostenfrei im Livestream a“ (https://bsw-sixers.de/index.php/news/barmer-2-basketball-bundesliga/spieltag-13-bsw-sixers-lok-bernau)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "BSW Sixers",
    "ort": "Sandersdorf-Brehna",
    "land": "ST",
    "liga": "prob",
    "liga_name": "ProB (2. Basketball-Bundesliga, Nord und Süd)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.bsw-sixers.de",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Ballsporthalle in Sandersdorf Am Sportzentrum 25 06792 Sandersdorf-Brehna",
    "kapazitaet": 950,
    "instagram": "bswsixers_official",
    "ansprechperson": {
      "name": "Maik Leuschner",
      "rolle": "Verantwortlicher (laut 2. Basketball-Bundesliga)",
      "kontakt": "maik.leuschner@bsw-sixers.de"
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
