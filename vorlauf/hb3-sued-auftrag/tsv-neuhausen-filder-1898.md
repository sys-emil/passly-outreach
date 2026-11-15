# Auftrag: TSV Neuhausen/Filder 1898 (3. Liga Männer Handball Süd)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hb3-sued/tsv-neuhausen-filder-1898.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.tsv-n.de
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://tsv-n.de/, https://tsv-n.de/abteilung/ticketshop, https://tsv-n.de/abteilung/heimspielhefte-archiv
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/3._Liga_M%C3%A4nner_(Handball)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: info@tsvneuhausen-handball.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 16 € („ticket für 16€“); 8 € („eintritt 8€“); 13 € („ticketpreis von 13 euro“)

## Funde (Fundstelle, Seite)
- nur_abendkasse: „tattet. Tickets für die Heimspiele der MadDogs Aktuell können Tickets ausschließlich an der Tageskasse erworben werden. Tickets für Fans der Gastmannschaft können über den“ (https://tsv-n.de/abteilung/ticketshop)
- abendkasse: „bar vor den MadDogs muss ein Kombiticket für 16€, ermäßigt 11€ an der Tageskasse erworben werden. Bei Verlassen der Halle vor Anpfiff des Spiels in de“ (https://tsv-n.de/abteilung/ticketshop)
- vorverkauf: „erwerben möchte, kann dies ebenfalls bei der Bestellung angeben. Der Vorverkauf endet am 28.08.2026. Danach sind die Dauerkarten nur noch an der Tage“ (https://tsv-n.de/abteilung/ticketshop)
- von_hand: „echenden Paarung gesammelt bei uns über info@tsvneuhausen-handball.de reserviert werden. In der Regel sind ca. 60 Tickets im Gästeblock (Block C) vor“ (https://tsv-n.de/abteilung/ticketshop)
- dauerkarte: „vorhanden. Es gibt keine Sitzplatzkarten an der Tageskasse zu kaufen. Dauerkarten-Sitzplätze sind entsprechend gekennzeichnet und für Dauerkartenbesit“ (https://tsv-n.de/abteilung/ticketshop)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSV Neuhausen/Filder 1898",
    "land": null,
    "liga": "hb3-sued",
    "liga_name": "3. Liga Männer Handball Süd",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.tsv-n.de",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
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
