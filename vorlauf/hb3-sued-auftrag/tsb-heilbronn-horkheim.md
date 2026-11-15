# Auftrag: TSB Heilbronn-Horkheim (3. Liga Männer Handball Süd)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-sued/tsb-heilbronn-horkheim.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.tsb-horkheim.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://tsb-horkheim-hunters.de/, https://tsb-horkheim-hunters.de/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: geschaeftsstelle@tsb-horkheim.de
- Instagram auf der Vereinsseite: tsbhorkheim
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- nur_abendkasse: „mit Behinderung (10€ Sitzplatz, 7€ Stehplatz). Ermäßigte Tickets sind nur gegen Vorlage eines Nachweises an der Abendkasse erhältlich. 0€ bis 14 Jahre 7€ Schüler, Studenten, Auszubildende 15€“ (https://tsb-horkheim-hunters.de/tickets)
- abendkasse: „tz). Ermäßigte Tickets sind nur gegen Vorlage eines Nachweises an der Abendkasse erhältlich. 0€ bis 14 Jahre 7€ Schüler, Studenten, Auszubildende 15€“ (https://tsb-horkheim-hunters.de/tickets)
- vorverkauf: „esse Fanshop Sponsoren Partnerschaften Kontakt Tickets Die aktuell im Vorverkauf verfügbaren Spiele findest du unten. Weitere Begegnungen sind derzeit“ (https://tsb-horkheim-hunters.de/tickets)
- dauerkarte: „jeweils erst nach der offiziellen Spielansetzung. Lade Heimspiele... Dauerkarten und VIP-Tickets Dauerkarten und VIP-Tickets sind über unsere Geschäf“ (https://tsb-horkheim-hunters.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSB Heilbronn-Horkheim",
    "land": null,
    "liga": "hb3-sued",
    "liga_name": "3. Liga Männer Handball Süd",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "http://www.tsb-horkheim.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "tsbhorkheim",
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
