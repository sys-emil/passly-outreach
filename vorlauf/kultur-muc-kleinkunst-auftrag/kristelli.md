# Auftrag: Kristelli (Kleinkunstbühnen München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-kleinkunst/kristelli.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://krist-live.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://krist-live.de/, https://krist-live.de/tickets
- Nicht lesbar: https://krist-live.de/$%7Besc(url)%7D (HTTP 404)
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Kleinkunstb%C3%BChnen_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 29 € („tickets ab 29 €“); 29 € („tickets ab 29 €“)

## Funde (Fundstelle, Seite)
- vorverkauf: „sen? Termine & Neuigkeiten direkt ins Postfach — vor dem öffentlichen Vorverkauf. Zum Newsletter Alexander Krist Theater München – Magie live & hautna“ (https://krist-live.de/)
- abendkasse: „— King of Cards dauert 120 Minuten und hat eine Pause. Karten an der Abendkasse gibt es nur, solange eine Vorstellung nicht ausverkauft ist — der Onl“ (https://krist-live.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Kristelli",
    "land": null,
    "liga": "kultur-muc-kleinkunst",
    "liga_name": "Kleinkunstbühnen München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://krist-live.de/",
    "vorverkauf": "keine_angabe",
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
