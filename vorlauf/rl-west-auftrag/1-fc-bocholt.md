# Auftrag: 1. FC Bocholt (Regionalliga West (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-west/1-fc-bocholt.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.1fcbocholt.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.1fcbocholt.de/, https://www.1fcbocholt.de/stadion/praemium-park-am-huenting/eintrittspreise-tickets, https://www.1fcbocholt.de/stadion/praemium-park-am-huenting/ticketzweitmarkt, https://www.1fcbocholt.de/nachrichten/profis/26573/spiel-gedreht-fcb-lost-halbfinal-ticket
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_West_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: paul.remmel@all-about-sports.de, tickets@1fcbocholt.de
- Instagram auf der Vereinsseite: 1fcbocholt
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „on kostenlos Rollstuhlfahrer (unter GdB 100): 9 EUR Bei Käufen an der Tageskasse fällt pro Ticket eine Zusatzgebühr von 2 EUR an. Ausgenommen sind Kin“ (https://www.1fcbocholt.de/stadion/praemium-park-am-huenting/eintrittspreise-tickets)
- vorverkauf: „icketinformationen in der Saison 2026/27 Dauerkartenverkauf Regulärer Vorverkauf Ab dem 1. Juli gelten im regulären Vorverkauf folgende Preise: Allian“ (https://www.1fcbocholt.de/stadion/praemium-park-am-huenting/eintrittspreise-tickets)
- von_hand: „gelegentlich auf unserer Website. VIP-Tickets Solltest du an VIP-Dauerkarten oder auch VIP-Tageskarten interessiert sein, melde dich gerne per Mail bei Paul Remmel: paul.remmel@all-about-sports.de VIP-Tageskartenpreis“ (https://www.1fcbocholt.de/stadion/praemium-park-am-huenting/eintrittspreise-tickets)
- dauerkarte: „Kontakt Eintrittspreise und Ticketinformationen in der Saison 2026/27 Dauerkartenverkauf Regulärer Vorverkauf Ab dem 1. Juli gelten im regulären Vorve“ (https://www.1fcbocholt.de/stadion/praemium-park-am-huenting/eintrittspreise-tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "1. FC Bocholt",
    "ort": "Bocholt",
    "land": "NW",
    "liga": "rl-west",
    "liga_name": "Regionalliga West (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.1fcbocholt.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "1fcbocholt",
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
