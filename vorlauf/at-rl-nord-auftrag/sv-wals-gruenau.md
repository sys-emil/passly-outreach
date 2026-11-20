# Auftrag: SV Wals-Grünau (Regionalliga Nord (Fußball, AT, 3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-rl-nord/sv-wals-gruenau.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.sv-gruenau.com/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: http://www.sv-gruenau.com/, http://www.sv-gruenau.com/eintritsspreise.html
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: svgruenau
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „dliche ab dem 15. Lebensjahr bis zur Volljährigkeit (18. Geburtstag). TAGESKASSE | Regionalliga Nord Erwachsene Frauen/Männer € 12,0 0 Ermäßigt* € 10,“ (http://www.sv-gruenau.com/eintritsspreise.html)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Wals-Grünau",
    "land": null,
    "liga": "at-rl-nord",
    "liga_name": "Regionalliga Nord (Fußball, AT, 3. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.sv-gruenau.com/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "svgruenau",
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
