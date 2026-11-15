# Auftrag: SC Victoria Hamburg (Oberliga Hamburg (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-hamburg/sc-victoria-hamburg.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://sc-victoria.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://sc-victoria.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Hamburg_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: scvictoria_hamburg
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „HABEN GEWONNEN! 🎉 Allgemein , Fußball , Liga Derby an der Hoheluft: Vorverkauf für Victoria gegen Altona 93 läuft Am Freitag, 13. November, um 19:30“ (https://sc-victoria.de/)
- von_hand: „großen Hockeyfamilie Mehr Informationen Kegeln beim SC Victoria Jetzt reservieren NEU!! - AUFGEPASST - NEU!! Informationen Victoria Klause: Dein Vere“ (https://sc-victoria.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SC Victoria Hamburg",
    "ort": "Hamburg",
    "land": "HH",
    "liga": "oberliga-hamburg",
    "liga_name": "Oberliga Hamburg (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://sc-victoria.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "scvictoria_hamburg",
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
