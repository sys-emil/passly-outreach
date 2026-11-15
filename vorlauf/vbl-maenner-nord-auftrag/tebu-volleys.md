# Auftrag: Tebu Volleys (2. Bundesliga Männer Nord)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-maenner-nord/tebu-volleys.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.tebu-volleys.de/
- Ticketlink (VBL): keiner
- Schon gelesen: https://www.tebu-volleys.de/, https://www.tebu-volleys.de/2-bundesliga/tickets
- VBL-Seite des Teams: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_maenner/2_bundesliga_maenner_nord/mannschaften.xhtml?c.teamId=781346154&c.view=contact
- Kontakte laut VBL: Mannschaftsverantwortlicher Karl-Ludwig Keller; PR-Verantwortlicher Lars Fischer; PR-Verantwortlicher Annette Flören
- E-Mails auf der Vereinsseite: info@tebu-volleys.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 6 € („vollzahler 6,00 €“); 60 € („vollzahler 60,00 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „mit gültigem Nachweis. ** Mitglieder des SV Cheruskia Laggenbeck e.V. Dauerkarten Mit der Saisonkarte habt ihr Eintritt zu allen Heimspielen der Saiso“ (https://www.tebu-volleys.de/2-bundesliga/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Tebu Volleys",
    "ort": "Berlin",
    "land": "BE",
    "liga": "vbl-maenner-nord",
    "liga_name": "2. Bundesliga Männer Nord",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "https://www.tebu-volleys.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Kardinal von Galen GS Burgweg 1, 49479 Ibbenbüren",
    "kapazitaet": null,
    "instagram": null,
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
