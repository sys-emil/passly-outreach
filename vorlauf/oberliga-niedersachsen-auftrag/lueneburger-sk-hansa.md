# Auftrag: Lüneburger SK Hansa (Oberliga Niedersachsen (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-niedersachsen/lueneburger-sk-hansa.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.lsk-hansa.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.lsk-hansa.de/, https://www.lsk-hansa.de/akkreditierung-fuer-heimspiele
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Niedersachsen_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: juergen.poersch@lsk-hansa
- Instagram auf der Vereinsseite: lskhansa
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „r Stadionordnung Trainingscenter Goseburg Stadionheft Tickets Tickets Vorverkauf Sponsoren Sponsoren Unsere Sponsoren Hauptsponsor BRUNS LSK-Ausrüster“ (https://www.lsk-hansa.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Lüneburger SK Hansa",
    "ort": "Lüneburg",
    "land": "NI",
    "liga": "oberliga-niedersachsen",
    "liga_name": "Oberliga Niedersachsen (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.lsk-hansa.de",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "lskhansa",
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
