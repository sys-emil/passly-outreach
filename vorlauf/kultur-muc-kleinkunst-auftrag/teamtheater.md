# Auftrag: Teamtheater (Kleinkunstbühnen München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-kleinkunst/teamtheater.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.teamtheater.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: http://www.teamtheater.de/, http://www.teamtheater.de/tickets.html
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Kleinkunstb%C3%BChnen_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: tocktock@teamtheater.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „mationen SALON DIE MIRAGE SHOW Travestiekünstler aus ganz Deutschland Reservierungen über Eventim TERMINE: 27. November – Fr – 20 Uhr 28. November –“ (http://www.teamtheater.de/)
- eintritt_frei: „tion: Prof. Dr. Michael von Brück TERMINE: 24. November - Di - 19 Uhr Eintritt frei Mehr Informationen SALON DIE MIRAGE SHOW Travestiekünstler aus ganz D“ (http://www.teamtheater.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Teamtheater",
    "land": null,
    "liga": "kultur-muc-kleinkunst",
    "liga_name": "Kleinkunstbühnen München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.teamtheater.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
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
