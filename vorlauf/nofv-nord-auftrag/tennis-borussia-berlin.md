# Auftrag: Tennis Borussia Berlin (NOFV-Oberliga Nord (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/nofv-nord/tennis-borussia-berlin.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.tebe.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.tebe.de/, https://www.tebe.de/tickets/, https://www.tebe.de/shop/tickets/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: TBAF@tebe.de, shop@tebe.de
- Instagram auf der Vereinsseite: tennisborussia
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „tebe@youtube --> Tickets Tagestickets gibt’s hier digital oder an der Tageskasse – zum gleichen Preis. Zur Bestellung Zur Bestellung Ermäßigung Ermäßi“ (https://www.tebe.de/tickets/)
- eintritt_frei: „Ermäßigung. Wir bitten darum, einen gültigen Nachweis bereitzuhalten. Freier Eintritt – TeBe für Umme Junge Menschen bis 12 Jahre, aktive Spieler*innen uns“ (https://www.tebe.de/tickets/)
- dauerkarte: „Preis. Zur Bestellung Zur Bestellung Ermäßigung Ermäßigte Tages- und Dauerkarten können von Mitgliedern und Menschen mit geringem Einkommen genutzt w“ (https://www.tebe.de/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Tennis Borussia Berlin",
    "ort": "Berlin",
    "land": "BE",
    "liga": "nofv-nord",
    "liga_name": "NOFV-Oberliga Nord (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.tebe.de",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "tennisborussia",
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
