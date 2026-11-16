# Auftrag: FC Ingolstadt 04 (2. Frauen-Bundesliga (Fußball))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/fbl2-frauen/fc-ingolstadt-04.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.fcingolstadt.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.fcingolstadt.de/, https://www.fcingolstadt.de/heimspielinfos/, https://www.fcingolstadt.de/vip-tagestickets/, https://www.fcingolstadt.de/tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/2._Frauen-Bundesliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: fan@fcingolstadt.de, tb@fcingolstadt.de, ticketing@fcingolstadt.de, atgb@fcingolstadt.de
- Instagram auf der Vereinsseite: dieschanzer
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- bar: „rk folgen. Bitte beachtet, dass die Parkgebühr für PKWs auf P1 und P2 nur bargeldlos bezahlt werden kann. Anfahrt zum Audi Sportpark als PDF-Datei“ (https://www.fcingolstadt.de/heimspielinfos/)
- abendkasse: „Verbindung mit einer Sitzplatzkarte in den beiden Fanshops und an der Tageskasse für 1 Euro. Das Zahlen an den Imbiss- und Getränke-Kiosken ist mit Kr“ (https://www.fcingolstadt.de/tickets/)
- vorverkauf: „artien der Schanzer vor Ort dabei! Tageskarten Allgemeines Dauerkarte Vorverkauf Gruppentickets und Aktionen Schwarzmarkt 1. Spieltag : 08.08.2026, 14“ (https://www.fcingolstadt.de/tickets/)
- von_hand: „se öffnet circa eineinhalb Stunden vor Spielbeginn. Das Kontingent an reservierten Karten ist begrenzt. Wo erhalte ich Tickets für Schwerbehinderte/R“ (https://www.fcingolstadt.de/tickets/)
- dauerkarte: „i bei den Partien der Schanzer vor Ort dabei! Tageskarten Allgemeines Dauerkarte Vorverkauf Gruppentickets und Aktionen Schwarzmarkt 1. Spieltag : 08.“ (https://www.fcingolstadt.de/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC Ingolstadt 04",
    "ort": "Bayern",
    "land": null,
    "liga": "fbl2-frauen",
    "liga_name": "2. Frauen-Bundesliga (Fußball)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.fcingolstadt.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "dieschanzer",
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
