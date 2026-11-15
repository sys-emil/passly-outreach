# Auftrag: VfV 06 Hildesheim (Oberliga Niedersachsen (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-niedersachsen/vfv-06-hildesheim.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.vfv06.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.vfv06.de/, https://www.vfv06.de/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Niedersachsen_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: ticketing@vfv06.de
- Instagram auf der Vereinsseite: diedomstadtelf
- Preise gefunden: 12 € („ticketpreise tribüne: erwachsene 12 €“); 9 € („erwachsene 9 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „6 - Statistik Downloads Stadionzeitung Archiv Tickets Tickets Tickets Dauerkarten Stadion Stadion Friedrich-Ebert-Stadion (F-E-S) Cafe Engelke Lounge“ (https://www.vfv06.de/)
- vorverkauf: „aison 26/27 sind aktuell keine Onlinetickets über die HI App buchbar. Vorverkauf nur im Telco Shop, Hindenburg Platz 1, Hildesheim. Weitere Infos folg“ (https://www.vfv06.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "VfV 06 Hildesheim",
    "ort": "Hildesheim",
    "land": "NI",
    "liga": "oberliga-niedersachsen",
    "liga_name": "Oberliga Niedersachsen (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.vfv06.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "diedomstadtelf",
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
