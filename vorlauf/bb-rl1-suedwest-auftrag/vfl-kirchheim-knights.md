# Auftrag: VfL Kirchheim Knights (1. Regionalliga Südwest (Basketball, Herren))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bb-rl1-suedwest/vfl-kirchheim-knights.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.kirchheim-knights.de
- Ticketlink (DBB): keiner
- Schon gelesen: https://kirchheim-knights.de/, https://kirchheim-knights.de/tickets, https://kirchheim-knights.de/attacke, https://kirchheim-knights.de/derby-doppelspieltag-vor-der-brust
- DBB-Seite des Teams: https://www.basketball-bund.net/static/#/liga/53088
- Kontakte laut DBB: keine
- E-Mails auf der Vereinsseite: info@kirchheim-knights.de, info@kirchheim-knight.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „Auf Instagram folgen adressE Knights-Office / Geschäftsstelle / Kartenvorverkauf: Kreisbau Kirchheim Knights Kirchheimer Straße 28 73230 Kirchheim/Tec“ (https://kirchheim-knights.de/)
- abendkasse: „über den Ticketshop. FAQ Ticketing Kann ich meine Tickets auch an der Abendkasse erwerben? Restkarten sind an der Abendkasse ab 1 Stunde vor Spielbegi“ (https://kirchheim-knights.de/tickets)
- von_hand: „ber alle Zugänge zu erreichen. Besteht die Möglichkeit, ein Ticket zu reservieren? Reservierungen werden nicht angenommen. Dies gilt für die Knights-“ (https://kirchheim-knights.de/tickets)
- dauerkarte: „alle? Jedes Ticket wird am Halleneingang gescannt. Dies gilt auch für Dauerkarten sowie VIP-Tickets. Bitte halten Sie Ihr im Vorfeld erworbenes Ticket“ (https://kirchheim-knights.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "VfL Kirchheim Knights",
    "ort": "Kirchheim unter Teck",
    "land": "BW",
    "liga": "bb-rl1-suedwest",
    "liga_name": "1. Regionalliga Südwest (Basketball, Herren)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "http://www.kirchheim-knights.de",
    "vorverkauf": "manuell",
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
