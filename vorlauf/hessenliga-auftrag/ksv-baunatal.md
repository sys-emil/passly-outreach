# Auftrag: KSV Baunatal (Hessenliga (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hessenliga/ksv-baunatal.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.ksv-baunatal-fussball.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://ksv-baunatal-fussball.de/, https://ksv-baunatal-fussball.de/zuschauerrichtlinien/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Hessenliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: fussball@ksv-baunatal.de
- Instagram auf der Vereinsseite: ksvbaunatal_fussball
- Preise gefunden: 12 € („normal 12€“); 18 € („normal 18€“); 12 € („normal 12€“); 18 € („normal 18€“); 12 € („normal 12€“)

## Funde (Fundstelle, Seite)
- abendkasse: „sball Okt. 28 Einlass-Infos! Einlass ab 16:30 Uhr Ticketpreise an den Abendkassen: Stehplatz Normal 12€ Stehplatz Ermäßigt 10€ Sitzplatz Normal 18€ Si“ (https://ksv-baunatal-fussball.de/)
- dauerkarte: „croll down News (Allgemein) Fair Play Hessen 1. Mannschaft (Senioren) Dauerkarten Saison 2025/2026 U15 (C-Jugend) | U15 entführt verdient einen Punkt“ (https://ksv-baunatal-fussball.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "KSV Baunatal",
    "ort": "Baunatal",
    "land": "HE",
    "liga": "hessenliga",
    "liga_name": "Hessenliga (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.ksv-baunatal-fussball.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "ksvbaunatal_fussball",
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
