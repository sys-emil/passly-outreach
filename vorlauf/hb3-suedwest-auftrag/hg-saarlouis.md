# Auftrag: HG Saarlouis (3. Liga Männer Handball Süd-West)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-suedwest/hg-saarlouis.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.hg-saarlouis.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://hg-saarlouis.de/, https://hg-saarlouis.de/tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: buero@hg-saarlouis.de
- Instagram auf der Vereinsseite: hgsaarlouis
- Preise gefunden: 15 € („erwachsene 15,00 €“)

## Funde (Fundstelle, Seite)
- vorverkauf: „SPONSOREN LIVE-TICKER TICKETS KONTAKT TICKETS SAISON 2026/ 2027 Kartenvorverkauf online über unser Ticket-System oder direkt in der Geschäftsstelle. G“ (https://hg-saarlouis.de/tickets/)
- dauerkarte: „goldstube 50,00 € 45,00 € VIP Pinard de Picard 95,00 € 90,00 € Preise Dauerkarten Kategorie Sitzplatz Stehplatz Erwachsene Regulär 205,00 € 165,00 € V“ (https://hg-saarlouis.de/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "HG Saarlouis",
    "land": null,
    "liga": "hb3-suedwest",
    "liga_name": "3. Liga Männer Handball Süd-West",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.hg-saarlouis.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 15,
    "halle": null,
    "kapazitaet": null,
    "instagram": "hgsaarlouis",
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-15",
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
