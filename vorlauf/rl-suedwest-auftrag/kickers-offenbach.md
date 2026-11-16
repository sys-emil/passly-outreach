# Auftrag: Kickers Offenbach (Regionalliga Südwest (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-suedwest/kickers-offenbach.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.ofc.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://ofc.de/, https://ofc.de/tickets/tageskarten/, https://ofc.de/mannschaften/spieltag-tabelle/, https://ofc.de/tickets/dauerkarten/, https://ofc.de/tickets/vip-tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_S%C3%BCdwest_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: tickets@ofc.de, business@ofc.de
- Instagram auf der Vereinsseite: ofc_offiziell
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „erer Kickers in der Übersicht Tickets Ticketinformationen Tageskarten Dauerkarten VIP-Tickets AGB Plutos Stadion am Bieberer Berg Dauerkarte 26/27 Hie“ (https://ofc.de/)
- von_hand: „Kasse 4 unseres Stadions. Tickets online bestellen! Hier geht es zum Ticketshop Tickets per Telefon bestellen! Unsere Tickethotline: 01803 019010 Tickets im Fanshop am S“ (https://ofc.de/tickets/tageskarten/)
- abendkasse: „e Liga &#8211; Heimspiele bis zum 30.06.2027 Keine Wartezeiten an den Tageskassen Ermäßigung für Mitglieder, Rentner, Jugendliche (14 &#8211; 17 Jahre“ (https://ofc.de/tickets/dauerkarten/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Kickers Offenbach",
    "ort": "Offenbach am Main",
    "land": "HE",
    "liga": "rl-suedwest",
    "liga_name": "Regionalliga Südwest (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.ofc.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "ofc_offiziell",
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
