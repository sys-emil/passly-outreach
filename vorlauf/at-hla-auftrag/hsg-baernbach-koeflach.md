# Auftrag: HSG Bärnbach/Köflach (HLA Meisterliga (Handball, AT, 1. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-hla/hsg-baernbach-koeflach.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.hsgbk.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.hsgbk.at/, https://www.hsgbk.at/spieltagsvorschau/, https://www.hsgbk.at/tickets-kaufen/, https://www.hsgbk.at/tickets/, https://www.hsgbk.at/saisonkarten/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Handballmeisterschaft_%28M%C3%A4nner%29_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: office@hsgbk.at
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 15 € („tageskarten vollpreis: 15 euro“)

## Funde (Fundstelle, Seite)
- dauerkarte: „hulkooperation Schuljahr 2025 – 26 Tickets Tickets kaufen Ticketinfos Saisonkarten Mitgliedschaft Partner Shop Kontakt Zwischen hellem und dunklem Ersc“ (https://www.hsgbk.at/)
- von_hand: „en. Bei Tageskarten gilt freie Platzwahl — bitte die für Saisonkarten reservierten Plätze frei lassen. Wer bekommt den ermäßigten Preis? Jugendliche“ (https://www.hsgbk.at/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "HSG Bärnbach/Köflach",
    "ort": "Bärnbach",
    "land": null,
    "liga": "at-hla",
    "liga_name": "HLA Meisterliga (Handball, AT, 1. Liga)",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "http://www.hsgbk.at/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 15,
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
