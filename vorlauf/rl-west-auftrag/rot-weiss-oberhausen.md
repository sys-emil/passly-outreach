# Auftrag: Rot-Weiß Oberhausen (Regionalliga West (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-west/rot-weiss-oberhausen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.rwo1904.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.rwo1904.de/, https://www.rwo1904.de/stadion/tickets/tageskarten, https://www.rwo1904.de/stadion/tickets/dauerkarten, https://www.rwo1904.de/stadion/tickets/gruppenbestellungen, https://www.rwo1904.de/stadion/tickets/vorverkauf, https://www.rwo1904.de/stadion/spieltags-crew
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_West_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: nachweise@rwo-online.de, groth@rwo-online.de, shop@rwo-online.de, tourist-info@oberhausen.de, info@ebertbad.de, ratzlaff@rwo-online.de
- Instagram auf der Vereinsseite: rwo1904
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „dnung Stadionplan Tickets Tageskarten Dauerkarten Gruppenbestellungen Vorverkauf Anreise Parkplätze Presse Akkreditierungen Interviews Medieninformati“ (https://www.rwo1904.de/)
- dauerkarte: „on Stadion Niederrhein Stadionordnung Stadionplan Tickets Tageskarten Dauerkarten Gruppenbestellungen Vorverkauf Anreise Parkplätze Presse Akkreditier“ (https://www.rwo1904.de/)
- abendkasse: „itzplatz - Gast) Vollzahler 25 EUR Ermäßigt 21 EUR Kind 11 EUR An den Tageskassen wird ein Aufschlag in Höhe von 2 EUR auf alle Tickets erhoben. Hinwe“ (https://www.rwo1904.de/stadion/tickets/tageskarten)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Rot-Weiß Oberhausen",
    "ort": "Oberhausen",
    "land": "NW",
    "liga": "rl-west",
    "liga_name": "Regionalliga West (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.rwo1904.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "rwo1904",
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
