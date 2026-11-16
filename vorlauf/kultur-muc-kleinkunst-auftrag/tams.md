# Auftrag: TamS (Kleinkunstbühnen München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-kleinkunst/tams.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.tamstheater.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://tamstheater.de/, https://tamstheater.de/karten
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Kleinkunstb%C3%BChnen_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: tams@tamstheater.de, info@lachundschiess.de
- Instagram auf der Vereinsseite: tamstheater
- Preise gefunden: 30 € („eintrittspreise 30 €“); 10 € („ticket 10 €“)

## Funde (Fundstelle, Seite)
- abendkasse: „89 34 58 90 oder per E-Mail reservieren und am Vorstellungstag an der Abendkasse abholen. Bitte beachten Sie, dass bei uns nur Barzahlung möglich ist“ (https://tamstheater.de/karten)
- von_hand: „en Archiv Presse Grenzgänger Festival Seite wählen Spielplan Karten & Reservierung Reservierung Tickets Lach- und Schießgesellschaft Tickets für die“ (https://tamstheater.de/karten)
- bar: „llungstag an der Abendkasse abholen. Bitte beachten Sie, dass bei uns nur Barzahlung möglich ist (keine Kredit- oder ec-Karten). Außerdem können Si“ (https://tamstheater.de/karten)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TamS",
    "land": null,
    "liga": "kultur-muc-kleinkunst",
    "liga_name": "Kleinkunstbühnen München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.tamstheater.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "tamstheater",
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
