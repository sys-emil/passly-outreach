# Auftrag: SGS Essen (2. Frauen-Bundesliga (Fußball))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/fbl2-frauen/sgs-essen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.sgs-essen.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.sgs-essen.de/, https://www.sgs-essen.de/pages/eintrittskarten, https://www.sgs-essen.de/pages/dauerkarten
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/2._Frauen-Bundesliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: tickets@sgs-essen.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 14 € („vollzahler:innen 14,00 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „gazin Sportinternat Vereinskooperationen Kontakt Fans Fanshop Tickets Dauerkarten Mitgliedschaft Unterkunft Fanhinweise goJana Rechtliche Infos Versan“ (https://www.sgs-essen.de/)
- abendkasse: „Am Spieltag selbst können keine VIP-Tickets mehr gekauft werden. Die Tageskasse öffnet in der Regel 90 Minuten vor Spielbeginn. Hier gibt es nur ein“ (https://www.sgs-essen.de/pages/eintrittskarten)
- vorverkauf: „rforderlich. Im Ticket ist kein Fahrpreis für den ÖPNV enthalten. Der Vorverkauf über den Online-Shop läuft bis zum Beginn des jeweiligen Spiels. Das“ (https://www.sgs-essen.de/pages/eintrittskarten)
- von_hand: „ontingent (Restkarten, ggf. keine zusammenhängenden Plätze). Rollstuhltickets müssen vorab bis zum Montag vor dem Spieltag per E-Mail an tickets@sgs-essen.de bestellt werden (begrenzte Kapazitäten). Dabe“ (https://www.sgs-essen.de/pages/eintrittskarten)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SGS Essen",
    "ort": "Essen",
    "land": "NW",
    "liga": "fbl2-frauen",
    "liga_name": "2. Frauen-Bundesliga (Fußball)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.sgs-essen.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 14,
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
