# Auftrag: BFC Dynamo (Regionalliga Nordost (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-nordost/bfc-dynamo.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.bfc.com/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.bfc.com/, https://www.bfc.com/club1966_tagesticket.php, https://www.bfc.com/club1966_aftermatch.php, https://www.bfc.com/vip_players_lounge_tagesticket.php, https://www.bfc.com/socialmedia_partner.php, https://www.bfc.com/tickets_rl.php
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: polte@bfc.com
- Instagram auf der Vereinsseite: bfcdynamo_official
- Preise gefunden: 15 € („ticket) 15,00 €“); 15 € („vollzahlers) • vip-parkplatz: 15,00 €“); 15 € („ticket) 15,00 €“); 0 € („eintritt: 0,00 €“)

## Funde (Fundstelle, Seite)
- abendkasse: „bei diesem Topspiel der Regionalliga Nordost lange Wartezeiten an der Abendkasse ersparen möchte ... lesen &#8594; Nachwuchszentrum: U19 kann Aufstieg“ (https://www.bfc.com/)
- vorverkauf: „Kurt Brüggemann feiert 100. Geburtstag (14-11-2026) ... | Heimspiel: Vorverkauf für die Partie gegen den Halleschen FC startet heute (14-11-2026) ...“ (https://www.bfc.com/)
- von_hand: „nungen. Deine Vorteile im VIP-CLUB 1966: ✓ Freie Sitzplatzwahl (außer reservierte Plätze) auf der teilüberdachten Haupttribüne ✓ Zutritt ab 1,5 Stund“ (https://www.bfc.com/club1966_tagesticket.php)
- eintritt_frei: „affee (außer Spirituosen) bis mind. 15 Min. nach Abpfiff des Spiels • freier Eintritt in den VIP-Club1966 ab 15 Min. nach Abpfiff des Spiels, inklusive all“ (https://www.bfc.com/vip_players_lounge_tagesticket.php)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "BFC Dynamo",
    "ort": "Berlin",
    "land": "BE",
    "liga": "rl-nordost",
    "liga_name": "Regionalliga Nordost (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.bfc.com/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": 15,
    "halle": null,
    "kapazitaet": null,
    "instagram": "bfcdynamo_official",
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
