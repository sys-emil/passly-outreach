# Auftrag: SV Austria Salzburg (2. Liga (Fußball, AT, 2. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-2liga/sv-austria-salzburg.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.austria-salzburg.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.austria-salzburg.at/, https://www.austria-salzburg.at/news/violetter-das-spieltagsmagazin/, https://www.austria-salzburg.at/svas/tickets-und-abokarte/, https://www.austria-salzburg.at/verein/tickets-und-abokarte/abo/, https://www.austria-salzburg.at/verein/tickets-und-abokarte/tageskarten-2026-27/, https://www.austria-salzburg.at/svas/tickets-und-abokarte/club-33-abo-tageskarten/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „Abokarten 2026/27 Tageskarten 2026/27 CLUB.33 Abo &#038; Tageskarten Vorverkauf Ticket-Shop Fanshop Downloads Fans Austria Salzburg-Stadion Club.33 K“ (https://www.austria-salzburg.at/)
- von_hand: „00,- EUR 1100,- Club.33 Kind EUR 600,- EUR 550,- Aufpreis Förderabo - reservierter Parkplatz EUR 100,- EUR 90,- Vorverkauf Karten für alle Sektoren f“ (https://www.austria-salzburg.at/svas/tickets-und-abokarte/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Austria Salzburg",
    "ort": "Salzburg",
    "land": null,
    "liga": "at-2liga",
    "liga_name": "2. Liga (Fußball, AT, 2. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.austria-salzburg.at/",
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
