# Auftrag: Raiffeisen Swans Gmunden (Basketball Superliga (AT, 1. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-bb-superliga/raiffeisen-swans-gmunden.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.basketswans.at/
- Ticketlink (WIKILISTE): keiner
- Schon gelesen: https://www.basketswans.at/, https://www.basketswans.at/bsl/tickets, https://www.basketswans.at/b2l/tickets
- WIKILISTE-Seite des Teams: https://de.wikipedia.org/wiki/Basketball_Superliga
- Kontakte laut WIKILISTE: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: swansgmunden
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „Vorbereitungs- und Freundschaftsspiele (ausgenommen Cup-Finalturnier) reservierter Sitzplatz (Sektor F/G/L/M/A) 265,00 inkl 20% Ust. (165,00 inkl. 20“ (https://www.basketswans.at/bsl/tickets)
- dauerkarte: „Pensionisten, Präsenz- bzw. Zivildiener gegen Vorlage eines Ausweises SAISONKARTEN (Der Kauf von Saisonkarten ist nur bis 31.10.2026 möglich!) Preislis“ (https://www.basketswans.at/bsl/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Raiffeisen Swans Gmunden",
    "ort": "Gmunden",
    "land": null,
    "liga": "at-bb-superliga",
    "liga_name": "Basketball Superliga (AT, 1. Liga)",
    "sport": "Basketball"
  },
  "ergebnis": {
    "website": "http://www.basketswans.at/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "swansgmunden",
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
