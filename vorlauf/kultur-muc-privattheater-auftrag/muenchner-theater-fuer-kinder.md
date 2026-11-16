# Auftrag: Münchner Theater für Kinder (Privattheater München)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/kultur-muc-privattheater/muenchner-theater-fuer-kinder.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.mtfk.de/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.mtfk.de/, https://www.mtfk.de/spielplan/details/gastproduktion-die-ewige-zweitbesetzung
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Liste_der_Theater_in_M%C3%BCnchen
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: kasse@mtfk.de
- Instagram auf der Vereinsseite: mtfk_theaterkanal
- Preise gefunden: 18 € („ticket à 18 €“)

## Funde (Fundstelle, Seite)
- von_hand: „30 Uhr im Haus, dafür benötigen Sie keine zusätzliche Eintrittskarte! Karten gibt es nur über unsere Theaterkasse: Bestellung per E-Mail an kasse@mtfk.de. Für Kinder-, Schul- und Hortgruppen ist eine Beglei“ (https://www.mtfk.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Münchner Theater für Kinder",
    "land": null,
    "liga": "kultur-muc-privattheater",
    "liga_name": "Privattheater München",
    "sport": "Kultur"
  },
  "ergebnis": {
    "website": "https://www.mtfk.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "mtfk_theaterkanal",
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
