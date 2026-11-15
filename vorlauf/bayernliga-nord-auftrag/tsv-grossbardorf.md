# Auftrag: TSV Großbardorf (Bayernliga Nord (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bayernliga-nord/tsv-grossbardorf.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.tsv-grossbardorf.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.grabfeld-gallier.de/, https://www.grabfeld-gallier.de/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bayernliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: mail@grabfeld-gallier.de
- Instagram auf der Vereinsseite: grabfeldgallier
- Preise gefunden: 10 € („normal ermäßigt* kind** 10,00 €“)

## Funde (Fundstelle, Seite)
- eintritt_frei: „is 17 Jahre), Wehr- und Zivildienstleistende (Schwerbehinderte ab 80% Eintritt frei). Ermäßigung nur mit gültiger Bestätigung. **Kind = 11 bis 15 Jahre D“ (https://www.grabfeld-gallier.de/tickets)
- dauerkarte: „rten-Preise BAYERNLIGA: Normal Ermäßigt* Kind** 10,00 € 8,00 € 5,00 € Dauerkarten-Preise BAYERNLIGA: Normal Ermäßigt* Kind** 130,00 € 105,00 € 50,00 €“ (https://www.grabfeld-gallier.de/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSV Großbardorf",
    "ort": "Bayern",
    "land": null,
    "liga": "bayernliga-nord",
    "liga_name": "Bayernliga Nord (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.tsv-grossbardorf.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "grabfeldgallier",
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
