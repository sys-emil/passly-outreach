# Auftrag: Stuttgarter Kickers (Regionalliga Südwest (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-suedwest/stuttgarter-kickers.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.stuttgarter-kickers.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.stuttgarter-kickers.de/, https://www.stuttgarter-kickers.de/spieltag, https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/eintrittspreise, https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/dauerkarten, https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/business-vip-tickets, https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/stadionplan-infos
- Nicht lesbar: https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/oeffnungszeiten (leer, lädt per JavaScript)
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_S%C3%BCdwest_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: tickets@stuttgarter-kickers.de, info@rauschenberger-gastro.de, nb@rauschenberger-catering.de, info@rauschenberger-catering.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „ieltagsseite Fanshop- und Ticket-Infos Öffnungszeiten Eintrittspreise Dauerkarten Business- / VIP-Tickets Stadionplan und Infos Tickets Auswärtsspiele“ (https://www.stuttgarter-kickers.de/)
- abendkasse: „kers-Fanshop im ADM-Sportpark (Bar, EC oder Kreditkarten) oder an den Tageskassen am Stadion (ab ca. 120 Minuten vor Spielbeginn, Bar, EC oder Kreditk“ (https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/eintrittspreise)
- vorverkauf: „LSW, kein Rabatt bei Pokalspielen); * Sponsoren & Partner erhalten im Vorverkauf über den Kickers-Fanshop / Ticketshop den Sponsoren-Preis, wenn der F“ (https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/eintrittspreise)
- von_hand: „ngeschrieben und erhielten am Montag, 22. Juni 2026 eine automatische Reservierungs-Bestätigung per E-Mail von unserem Partner vivenu (Absender der E“ (https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/dauerkarten)
- nur_abendkasse: „erfolgt ab ca. 120 Minuten vor Spielbeginn. An allen Tageskassen kann nur in Bar bezahlt werden (kein Tageskassenaufschlag), an der Servicekasse zusätzlich mit EC-Karte / Kreditkarte“ (https://www.stuttgarter-kickers.de/aktuelles/fanshop-ticket-infos/stadionplan-infos)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Stuttgarter Kickers",
    "ort": "Stuttgart",
    "land": "BW",
    "liga": "rl-suedwest",
    "liga_name": "Regionalliga Südwest (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.stuttgarter-kickers.de",
    "vorverkauf": "keiner",
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
