# Auftrag: Theater im Fraunhofer (Kleinkunstbühnen München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-kleinkunst/theater-im-fraunhofer.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.fraunhofertheater.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: http://www.fraunhofertheater.de/, http://www.fraunhofertheater.de/karten_, https://www.fraunhofertheater.de/karten_
- Nicht lesbar: http://www.fraunhofertheater.de/Platzhalter%20f%C3%BCr%20Ticketlink (HTTP 404)
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Kleinkunstb%C3%BChnen_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: reservierung@fraunhoferwirtshaus.de, info@fraunhofertheater.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „wsletter Impressum Links Team Liebe Freund:innen des Fraunhofer! Tischreservierungen fürs Wirtshaus bitte NUR noch über die Mail: reservierung@fraunh“ (http://www.fraunhofertheater.de/)
- nur_abendkasse: „Zu den Bürozeiten haben wir keinen Kartenverkauf! Karten bekommen Sie nur gegen Barzahlung an der Abendkasse und nur für die jeweilige Veranstaltung an diesem Tag. Theater Verans“ (http://www.fraunhofertheater.de/karten_)
- abendkasse: „keinen Kartenverkauf! Karten bekommen Sie nur gegen Barzahlung an der Abendkasse und nur für die jeweilige Veranstaltung an diesem Tag. Theater Verans“ (http://www.fraunhofertheater.de/karten_)
- bar: „ozeiten haben wir keinen Kartenverkauf! Karten bekommen Sie nur gegen Barzahlung an der Abendkasse und nur für die jeweilige Veranstaltung an diesem T“ (http://www.fraunhofertheater.de/karten_)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Theater im Fraunhofer",
    "land": null,
    "liga": "kultur-muc-kleinkunst",
    "liga_name": "Kleinkunstbühnen München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.fraunhofertheater.de/",
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
