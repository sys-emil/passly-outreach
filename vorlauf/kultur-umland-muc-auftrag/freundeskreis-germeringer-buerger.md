# Auftrag: Freundeskreis Germeringer Bürger (Laienbühnen Region München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-umland-muc/freundeskreis-germeringer-buerger.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.germeringer-rossstall.de/
- Ticketlink (DATEI): keiner
- Schon gelesen: https://germeringer-rossstall.de/, https://germeringer-rossstall.de/kartenbestellung/
- DATEI-Seite des Teams: https://www.amateur-theatre-wiki.gwi.uni-muenchen.de/index.php/Freundeskreis_Germeringer_B%C3%BCrger
- Kontakte laut DATEI: keine
- E-Mails auf der Vereinsseite: info@germeringer-rossstall.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 21 € („eintritt: 21€“)

## Funde (Fundstelle, Seite)
- vorverkauf: „cina Maisach Alle aktuellen Termine, Infos zum Ensemble und den Kartenvorverkauf findet ihr wie gewohnt hier auf unserer Webseite. Wir freuen uns dara“ (https://germeringer-rossstall.de/)
- eintritt_frei: „fekte Ort für einen entspannten Sonntag mit kulturellem Glanz. ☕️ Der Eintritt ist frei – aber die Plätze sind heiß begehrt. Früh da sein lohnt sich! Kommend“ (https://germeringer-rossstall.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Freundeskreis Germeringer Bürger",
    "ort": "Germering",
    "land": "BY",
    "liga": "kultur-umland-muc",
    "liga_name": "Laienbühnen Region München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "http://www.germeringer-rossstall.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
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
