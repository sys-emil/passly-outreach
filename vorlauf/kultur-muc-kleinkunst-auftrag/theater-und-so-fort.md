# Auftrag: theater ... und so fort (Kleinkunstbühnen München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-kleinkunst/theater-und-so-fort.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.undsofort.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.undsofort.de/, https://www.undsofort.de/spielplan, https://www.undsofort.de/kartenbestellung/von-wegen-weihnachten,7366, https://www.undsofort.de/kartenbestellung/meine-weste-weiss,7324, https://www.undsofort.de/kartenbestellung/unsinn-macht-sinn,7237
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Kleinkunstb%C3%BChnen_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „tsche Zeitung Alle Jahre wieder! Tickets sichern! 20.12.2026 So 15:00 Reservieren Conny Krause & Heiko Dietz Von wegen Weihnachten Eine grenzüberschr“ (https://www.undsofort.de/)
- abendkasse: „eider rückwirkend in Rechnung stellen. (dass da Menschenmassen an der Abendkasse auftauchen, die unbedingt ein Tiicket ergattern wollen, ist eine Utop“ (https://www.undsofort.de/kartenbestellung/von-wegen-weihnachten,7366)
- vorverkauf: „ieren je nach Produktion. Sonstige Ermäßigungen werden nicht gewährt. Vorverkauf Für die Zauberer sowie Dr. Döblingers Kasperltheater gilt der Vorverk“ (https://www.undsofort.de/kartenbestellung/von-wegen-weihnachten,7366)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "theater ... und so fort",
    "land": null,
    "liga": "kultur-muc-kleinkunst",
    "liga_name": "Kleinkunstbühnen München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.undsofort.de/",
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
