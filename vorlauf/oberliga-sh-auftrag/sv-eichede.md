# Auftrag: SV Eichede (Oberliga Schleswig-Holstein (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-sh/sv-eichede.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.sveichede.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://sveichede.de/, https://sveichede.de/pages/stadion-und-mehr
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Schleswig-Holstein_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@sveichede.de
- Instagram auf der Vereinsseite: sveichede
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „Heimspieltagen ausgeschildert. Komm ins Stadion Karten gibt es an der Tageskasse – geöffnet eine Stunde vor Anstoß. Sportverein Eichede von 1947 e.V.“ (https://sveichede.de/pages/stadion-und-mehr)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SV Eichede",
    "ort": "Steinburg",
    "land": "HH",
    "liga": "oberliga-sh",
    "liga_name": "Oberliga Schleswig-Holstein (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.sveichede.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "sveichede",
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
