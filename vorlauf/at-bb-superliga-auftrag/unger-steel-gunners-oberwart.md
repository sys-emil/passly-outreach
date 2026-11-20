# Auftrag: UNGER STEEL Gunners Oberwart (Basketball Superliga (AT, 1. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-bb-superliga/unger-steel-gunners-oberwart.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.gunners.at/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.gunners.at/, https://www.gunners.at/tickets, https://www.gunners.at/tickets/tageskarten, https://www.gunners.at/tickets/blue-white-card-dauerkarte, https://www.gunners.at/tickets/silver-card-unterstuetzerkarte, https://www.gunners.at/tickets/gold-card-/-cremesso-gold-lounge
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Basketball_Superliga
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: office@gunners.at
- Instagram auf der Vereinsseite: oberwart.gunners
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „White-Card Der Klassiker mehr Informationen Silver-Card ALL INCLUSIVE Dauerkarte mehr Informationen Gold-Card Die VIP-Karte für den den exklusiven Gen“ (https://www.gunners.at/tickets)
- abendkasse: „- € 15,- Preise inkl. Mehrwertsteuer. Kein Online-Tageskartenverkauf. Abendkasse: Sporthalle Oberwart Tickets sind ab einer Stunde vor Spielbeginn dir“ (https://www.gunners.at/tickets/tageskarten)
- von_hand: „bezahlen Sie bequem per Kreditkarte oder eps-Überweisung! Online-Dauerkartenbestellung Bestellung per E-Mail PDF-Formular downloaden, ausfüllen und bitte per E-Mail an office(at)gunners.at senden. Sie erhalten Ihre Dauerkarte nach Zah“ (https://www.gunners.at/tickets/blue-white-card-dauerkarte)
- eintritt_frei: „ang & Platzierungsgruppe), OHNE PLAY OFF, OHNE Basketball Austria Cup Freier Eintritt bei allen Vorbereitungsspielen in der Sporthalle Oberwart 2x bring yo“ (https://www.gunners.at/tickets/blue-white-card-dauerkarte)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "UNGER STEEL Gunners Oberwart",
    "ort": "Oberwart",
    "land": null,
    "liga": "at-bb-superliga",
    "liga_name": "Basketball Superliga (AT, 1. Liga)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "https://www.gunners.at/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "oberwart.gunners",
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-20",
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
