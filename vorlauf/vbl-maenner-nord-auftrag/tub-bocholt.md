# Auftrag: TuB Bocholt (2. Bundesliga Männer Nord)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-maenner-nord/tub-bocholt.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.tub-bocholt-volleyball.de/
- Ticketlink (VBL): https://www.tub-bocholt.de/zuschaueranmeldung_volleyball/
- Schon gelesen: https://www.tub-bocholt-volleyball.de/, https://www.tub-bocholt-volleyball.de/news/news-detail?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=82&cHash=3e10ecdf09b9319ce441a908d1286550
- Nicht lesbar: https://www.tub-bocholt.de/zuschaueranmeldung_volleyball/ (HTTP 404)
- VBL-Seite des Teams: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_maenner/2_bundesliga_maenner_nord/mannschaften.xhtml?c.teamId=781344133&c.view=contact
- Kontakte laut VBL: Mannschaftsverantwortlicher Jonas Kubo
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: tub_bocholt_volleyball
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- keine

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TuB Bocholt",
    "ort": "Bocholt",
    "land": "NRW",
    "liga": "vbl-maenner-nord",
    "liga_name": "2. Bundesliga Männer Nord",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "https://www.tub-bocholt-volleyball.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Sporthalle West Werther Str. 24, 46395 Bocholt",
    "kapazitaet": null,
    "instagram": "tub_bocholt_volleyball",
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
