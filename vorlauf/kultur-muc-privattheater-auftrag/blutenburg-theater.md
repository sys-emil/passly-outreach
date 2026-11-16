# Auftrag: Blutenburg-Theater (Privattheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-privattheater/blutenburg-theater.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.blutenburg-theater.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.blutenburg-theater.de/willkommen.html, https://www.blutenburg-theater.de/karten/kartenbestellung.html, https://www.blutenburg-theater.de/karten/sitzplan.html, https://www.blutenburg-theater.de/karten/eintrittspreise.html, https://www.blutenburg-theater.de/karten/krimi-im-abo.html
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: blutenburgtheater
- Preise gefunden: 5 € („normalpreis jeweils 5 euro“)

## Funde (Fundstelle, Seite)
- bar: „R 26,00 Zahlung Eintrittskarten, Abonnements und Gutscheine nur gegen Barzahlung. EC- bzw. Kreditkartenzahlung oder Überweisung ist nicht möglich, wir“ (https://www.blutenburg-theater.de/karten/eintrittspreise.html)
- abendkasse: „Platz für einen Dienstag, Mittwoch oder Donnerstag Ihrer Wahl. An der Abendkasse am jeweiligen Vorstellungstag erhalten Sie Ihre reservierte Platzkart“ (https://www.blutenburg-theater.de/karten/krimi-im-abo.html)
- von_hand: „se ist nur Barzahlung möglich. Wenn Sie Ihr Abo einlösen wollen, dann reservieren einfach - telefonisch, online oder vor Ort an der Kasse - Ihren Pla“ (https://www.blutenburg-theater.de/karten/krimi-im-abo.html)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Blutenburg-Theater",
    "land": null,
    "liga": "kultur-muc-privattheater",
    "liga_name": "Privattheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.blutenburg-theater.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "blutenburgtheater",
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
