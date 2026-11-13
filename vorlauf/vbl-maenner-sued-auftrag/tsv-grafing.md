# Auftrag: TSV Grafing (2. Bundesliga Männer Süd)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-maenner-sued/tsv-grafing.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website. Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.fightingbayrisch.org/
- Ticketlink (VBL): https://www.fightingbayrisch.org/tickets
- Schon gelesen: https://www.fightingbayrisch.org/, https://www.fightingbayrisch.org/tickets, https://www.fightingbayrisch.org/fanshop, https://www.fightingbayrisch.org/event-details/heimspiel-vs-keiler-volleys-stuttgart, https://www.fightingbayrisch.org/event-details/heimspiel-vs-tus-kriftel, https://www.fightingbayrisch.org/event-details/heimspiel-vs-tv-1895-momlingen
- VBL-Kontaktseite: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_maenner/2_bundesliga_maenner_sued/mannschaften.xhtml?c.teamId=781344562&c.view=contact
- VBL-Kontakte: Mannschaftsverantwortlicher Marcus Bohle
- E-Mails auf der Vereinsseite: mail@fightingbayrisch.org
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 8 € („tickets tickettyp erwachsene preis 8,00 €“); 8 € („tickets tickettyp erwachsene preis 8,00 €“); 8 € („tickets tickettyp erwachsene preis 8,00 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „kumente Förderverein Philosophie & Geschichte Saisonhefte Shop&#x27;s Saisonkarten & Merch Teamwear Grafing FINN - Das Grafinger Fanauto Partner More U“ (https://www.fightingbayrisch.org/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSV Grafing",
    "ort": "Grafing",
    "land": "BY",
    "liga": "vbl-maenner-sued",
    "liga_name": "2. Bundesliga Männer Süd",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "https://www.fightingbayrisch.org/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": 8,
    "halle": "Jahnsporthalle Grafing Kapellenstraße 17, 85567 Grafing",
    "kapazitaet": null,
    "instagram": null,
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-13",
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
