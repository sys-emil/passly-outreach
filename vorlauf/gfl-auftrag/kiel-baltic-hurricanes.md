# Auftrag: Kiel Baltic Hurricanes (GFL (1. Bundesliga American Football))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/gfl/kiel-baltic-hurricanes.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.baltic-hurricanes.de/
- Ticketlink (GFL): https://www.ticket-onlineshop.com/ols/hurricanes/
- Schon gelesen: https://www.baltic-hurricanes.de/, https://www.baltic-hurricanes.de/tickets.html, https://www.baltic-hurricanes.de/tickets/einzeltickets.html, https://www.baltic-hurricanes.de/tickets/gruppentickets.html, https://www.baltic-hurricanes.de/tickets/vip.html
- Nicht lesbar: https://www.ticket-onlineshop.com/ols/hurricanes/ (leer, lädt per JavaScript)
- GFL-Seite des Teams: https://gfl.info/teams/kiel-baltic-hurricanes/
- Kontakte laut GFL: Vereinskontakt American Sports Club Kiel e.V. Hasseldieksdammer Weg <vorstand@baltic-hurricanes.de>
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 14.6 € („ticket ab 14,60 €“); 13.6 € („ticket für erwachsene ab 13,60 €“); 21.6 € („erwachsener ab 21,60€“); 12.1 € („erwachsener 12,10€“)

## Funde (Fundstelle, Seite)
- von_hand: „insmitglieder des ASC Kiel e.V. erhalten generell 10% Rabatt auf Dauerkarten und wenden sich per Email an tickets (at) baltic-hurricanes.de . Der Vereinsrabatt ist mit ande“ (https://www.baltic-hurricanes.de/tickets.html)
- dauerkarte: „kets Erlebe die Bundesliga Mannschaft live im Stadion. zum Ticketshop Dauerkarten 2026 Verkaufsstart mit Weihnachtsrabatt und VIP-Gewinn-Chance! Am 5.“ (https://www.baltic-hurricanes.de/tickets.html)
- abendkasse: „nweg der Buslinie 31 Dich erwartet: 14:00 Uhr Die Tore öffnen und die Tageskasse für euch bereitsteht. Kühle Getränke und original amerikanisches Esse“ (https://www.baltic-hurricanes.de/tickets/einzeltickets.html)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Kiel Baltic Hurricanes",
    "ort": "Kiel Telefon",
    "land": "SH",
    "liga": "gfl",
    "liga_name": "GFL (1. Bundesliga American Football)",
    "sport": "American Football"
  },
  "ergebnis": {
    "website": "https://www.baltic-hurricanes.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Kilia Stadion Hasseldieksdammer Weg 165 24114 Kiel",
    "kapazitaet": null,
    "instagram": null,
    "ansprechperson": {
      "name": "American Sports Club Kiel e.V. Hasseldieksdammer Weg",
      "rolle": "Vereinskontakt (laut GFL)",
      "kontakt": "vorstand@baltic-hurricanes.de"
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
