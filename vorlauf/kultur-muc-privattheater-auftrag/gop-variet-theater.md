# Auftrag: GOP Varieté-Theater (Privattheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-privattheater/gop-variet-theater.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.variete.de/muenchen
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.variete.de/muenchen, https://www.variete.de/muenchen/saalplan-preise
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: gopmuenchen
- Preise gefunden: 64 € („ticket-preise 64 euro“); 64 € („ticket-preise 64 euro“)

## Funde (Fundstelle, Seite)
- vorverkauf: „en Sie so keine Neuigkeiten mehr. Wir informieren Sie regelmäßig über Vorverkaufstarts, neue Sonderveranstaltungen und Kooperationen. Hier eintragen V“ (https://www.variete.de/muenchen)
- von_hand: „dem limitierten Premieren-Abo prickelnde Showpremieren an Ihren fest reservierten Plätzen und spüren Sie die besondere Premierenstimmung hautnah! Me“ (https://www.variete.de/muenchen)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "GOP Varieté-Theater",
    "land": null,
    "liga": "kultur-muc-privattheater",
    "liga_name": "Privattheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "https://www.variete.de/muenchen",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "gopmuenchen",
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
