# Auftrag: SV Horn (Regionalliga Ost (Fußball, AT, 3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-rl-ost/sv-horn.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.svhorn.at
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.svhorn.at/, https://www.svhorn.at/tickets/tageskarten, https://www.svhorn.at/tickets/saisonkarten, https://www.svhorn.at/profis/spielvorschau/letztes-saisonheimspiel-gegen-den-wiener-sportclub
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: office@svhorn.at
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- dauerkarte: „Nachwuchs U14 U13 U12 U11 U10 U9 U7 U6 Spielpläne Tickets Tageskarten Saisonkarten Online-Tickets Partner VIP Club Freundeskreis Freunde des SV Horn Pr“ (https://www.svhorn.at/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Horn",
    "ort": "Horn",
    "land": null,
    "liga": "at-rl-ost",
    "liga_name": "Regionalliga Ost (Fußball, AT, 3. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.svhorn.at",
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
