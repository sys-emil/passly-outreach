# Auftrag: Volksbühne Dachau (Laienbühnen Region München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-umland-muc/volksbuehne-dachau.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.volksbuehne-dachau.de/
- Ticketlink (DATEI): keiner
- Schon gelesen: https://www.volksbuehne-dachau.de/, https://www.volksbuehne-dachau.de/karten, https://www.volksbuehne-dachau.de/kartenvorverkauf
- DATEI-Seite des Teams: https://www.amateur-theatre-wiki.gwi.uni-muenchen.de/index.php/Volksb%C3%BChne_Dachau
- Kontakte laut DATEI: keine
- E-Mails auf der Vereinsseite: mail@volksbuehne-dachau.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „rat reicht. Wer auf Nummer sicher gehen möchte, kann diese auch gerne vorbestellen . Außerdem halten wir eine kleine Auswahl an Snacks (Schokoriegel,“ (https://www.volksbuehne-dachau.de/)
- abendkasse: „g-Thoma-Haus (1. Stock) in Dachau Hier geht es zum Saalplan Einlass & Abendkasse Jeweils eine Stunde vor Aufführungsbeginn Kartenvorverkauf Der offizi“ (https://www.volksbuehne-dachau.de/karten)
- vorverkauf: „Einlass & Abendkasse Jeweils eine Stunde vor Aufführungsbeginn Kartenvorverkauf Der offizielle Kartenvorverkauf beginnt ca. 6 Wochen vor der Premiere“ (https://www.volksbuehne-dachau.de/karten)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Volksbühne Dachau",
    "ort": "Karlsfeld",
    "land": "BY",
    "liga": "kultur-umland-muc",
    "liga_name": "Laienbühnen Region München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.volksbuehne-dachau.de/",
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
