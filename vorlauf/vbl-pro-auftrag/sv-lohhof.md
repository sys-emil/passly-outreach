# Auftrag: SV Lohhof (Sparda 2. Liga Pro (Frauen))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/vbl-pro/sv-lohhof.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website. Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.lohhof-volleyball.de
- Ticketlink (VBL): keiner
- Schon gelesen: https://lohhof-volleyball.de/, https://lohhof-volleyball.de/tickets/
- VBL-Kontaktseite: https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=781345807&c.view=contact
- VBL-Kontakte: Mannschaftsverantwortlicher Martina Banse; PR-Verantwortlicher Martina Banse
- E-Mails auf der Vereinsseite: verwaltung@svlohhof.de
- Instagram auf der Vereinsseite: lohhofvolleyball
- Preise gefunden: 9 € („erwachsene 9,00 €“); 25 € („eintritt familienkarte** 25,00 €“)

## Funde (Fundstelle, Seite)
- nur_abendkasse: „INTRITTSPREISE – SV LOHHOF E.V. VOLLEYBALL – 2. LIGA PRO Tickets sind ausschließlich an der Abendkasse erhältlich. Bei unseren Heimspielen in der 2. Liga Pro gilt freie Pla“ (https://lohhof-volleyball.de/tickets/)
- abendkasse: „HHOF E.V. VOLLEYBALL – 2. LIGA PRO Tickets sind ausschließlich an der Abendkasse erhältlich. Bei unseren Heimspielen in der 2. Liga Pro gilt freie Pla“ (https://lohhof-volleyball.de/tickets/)
- dauerkarte: „ein kostenpflichtiges Abonnement erforderlich. KATEGORIE EINZELPREIS SAISONKARTE Erwachsene 9,00 € 100,00 € Ermäßigt* 6,00 € 65,00 € Kinder bis 12 Jah“ (https://lohhof-volleyball.de/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Lohhof",
    "ort": "Unterschleißheim",
    "land": "BY",
    "liga": "vbl-pro",
    "liga_name": "Sparda 2. Liga Pro (Frauen)",
    "sport": "Volleyball"
  },
  "ergebnis": {
    "website": "http://www.lohhof-volleyball.de",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": "Sporthalle der FOS/BOS Unterschleißheim Südliche Ingolstädter Str. 1, 85716 Unterschleißheim",
    "kapazitaet": null,
    "instagram": "lohhofvolleyball",
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
