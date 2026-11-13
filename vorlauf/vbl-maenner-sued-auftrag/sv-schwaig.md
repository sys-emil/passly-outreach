# Auftrag: SV Schwaig (2. Bundesliga Männer Süd)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-maenner-sued/sv-schwaig.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website. Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.sv-schwaig-volleyball.de
- Ticketlink (VBL): http://www.sv-schwaig-volleyball.de/index.php/2-liga/eintritt-fancard.html
- Schon gelesen: https://sv-schwaig-volleyball.de/, https://sv-schwaig-volleyball.de/tickets/, https://sv-schwaig-volleyball.de/tickets/regulaer/, https://sv-schwaig-volleyball.de/tickets/vip/
- Nicht lesbar: http://www.sv-schwaig-volleyball.de/index.php/2-liga/eintritt-fancard.html (HTTP 404)
- VBL-Kontaktseite: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_maenner/2_bundesliga_maenner_sued/mannschaften.xhtml?c.teamId=781344482&c.view=contact
- VBL-Kontakte: Mannschaftsverantwortlicher Felix Reschke <reschkefelix@live.de>; PR-Verantwortlicher Hans-Peter Ehrbar
- E-Mails auf der Vereinsseite: kontakt@sv-schwaig-volleyball.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 6 € („normalpreis ermäßigt einzelticket 6,00€“); 4 € („normalpreis ermäßigt einzelticket 4,00€“)

## Funde (Fundstelle, Seite)
- nur_abendkasse: „euen uns über eine Spende! Mit Ausnahme der FanCard sind alle Tickets nur an der Abendkasse erhältlich. Bitte beachtet unsere Hallenordnung ! 2. Bundesliga Männe“ (https://sv-schwaig-volleyball.de/tickets/regulaer/)
- abendkasse: „er eine Spende! Mit Ausnahme der FanCard sind alle Tickets nur an der Abendkasse erhältlich. Bitte beachtet unsere Hallenordnung ! 2. Bundesliga Männe“ (https://sv-schwaig-volleyball.de/tickets/regulaer/)
- vorverkauf: „iele) 34,00€ 23,00€ FanCard (Saisonticket) 3 97,00€ 64,00€ FanCard im Vorverkauf (bis 6. Sept. 2026) 89,00€ 59,00€ 3. Liga Männer Normalpreis Ermäßigt“ (https://sv-schwaig-volleyball.de/tickets/regulaer/)
- von_hand: „Spitzenvolleyball der 2. Bundesliga in ganz besonderer Atmosphäre: ✨ Reservierter Tisch mit Namensschild – direkt am Spielfeldrand 🍽️ Persönliche B“ (https://sv-schwaig-volleyball.de/tickets/vip/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Schwaig",
    "ort": "Schwaig bei Nürnberg",
    "land": "BY",
    "liga": "vbl-maenner-sued",
    "liga_name": "2. Bundesliga Männer Süd",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "http://www.sv-schwaig-volleyball.de",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Hans-Simon-Halle Mittelbügweg 11, 90571 Schwaig",
    "kapazitaet": null,
    "instagram": null,
    "ansprechperson": {
      "name": "Felix Reschke",
      "rolle": "Mannschaftsverantwortlicher (laut VBL)",
      "kontakt": "reschkefelix@live.de"
    },
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
