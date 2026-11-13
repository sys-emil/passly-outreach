# Auftrag: TV SUSPA Altdorf (2. Bundesliga Frauen Süd)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-frauen-sued/tv-suspa-altdorf.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website. Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://volleyball-altdorf.de/
- Ticketlink (VBL): keiner
- Schon gelesen: https://volleyball-altdorf.de/, https://volleyball-altdorf.de/damen-1/tickets/, https://volleyball-altdorf.de/2026/11/13/gemeinsam-wieder-auf-die-erfolgspur-heimspiel-des-tv-suspa-altdorf/
- VBL-Kontaktseite: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_sued/mannschaften.xhtml?c.teamId=781345761&c.view=contact
- VBL-Kontakte: Mannschaftsverantwortlicher Annemarie Böhm <annemarie.boehm90@gmail.com>; PR-Verantwortlicher Sophia Botsch; PR-Verantwortlicher Peter Voss
- E-Mails auf der Vereinsseite: info@volleyball-altdorf.de, ticket@volleyball-altdorf.de
- Instagram auf der Vereinsseite: volleyball_altdorf
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „en Heimspiel die Löwinnen unterstützen? Tickets gibt es direkt an der Abendkasse, ab 1h vor Spielbeginn. Nur Barzahlung möglich. Alle Spiele werden au“ (https://volleyball-altdorf.de/damen-1/tickets/)
- von_hand: „endteam-Ticket (10 Personen inklusive Betreuer): 45 € Erwachsenenteam-Ticket (10 Personen): 75 € *nur mit Voranmeldung via E-Mail ( ticket@volleyball-altdorf.de ) bis zum Tag vor dem Spiel Facebook I“ (https://volleyball-altdorf.de/damen-1/tickets/)
- dauerkarte: „hüler & Studenten, Rentner, TVA Mitglieder, Menschen mit Behinderung) Dauerkarte € 96,00* *pro vergangenem Spiel reduziert sich die Dauerkarte um 7€ G“ (https://volleyball-altdorf.de/damen-1/tickets/)
- bar: „zen? Tickets gibt es direkt an der Abendkasse, ab 1h vor Spielbeginn. Nur Barzahlung möglich. Alle Spiele werden auch auf DYN über YouTube im Lives“ (https://volleyball-altdorf.de/damen-1/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TV SUSPA Altdorf",
    "ort": "Altdorf",
    "land": "BY",
    "liga": "vbl-frauen-sued",
    "liga_name": "2. Bundesliga Frauen Süd",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "http://volleyball-altdorf.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "3-fach Halle an der Mittelschule Schulstr. 6, 90518 Altdorf",
    "kapazitaet": null,
    "instagram": "volleyball_altdorf",
    "ansprechperson": {
      "name": "Annemarie Böhm",
      "rolle": "Mannschaftsverantwortlicher (laut VBL)",
      "kontakt": "annemarie.boehm90@gmail.com"
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
