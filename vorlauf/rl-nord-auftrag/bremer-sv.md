# Auftrag: Bremer SV (Regionalliga Nord (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-nord/bremer-sv.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.bremer-sportverein.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://bremer-sv.de/, https://bremer-sv.de/fans/tickets
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_Nord_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: geschaeftsstelle@bremer-sv.de, kontakt@bremer-sv.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „müssen her Samstag, 24.10.2026 Bremen Vier Weihnachtssingen 2026: Der Vorverkauf ist gestartet Sonntag, 18.10.2026 Freitag, Flutlicht, Düsternort Donn“ (https://bremer-sv.de/)
- abendkasse: „n der Regionalliga Nord für die Saison 2026/2027 können sowohl an der Tageskasse am Spieltag als auch im Online-Shop erworben werden. Tageskarten Regi“ (https://bremer-sv.de/fans/tickets)
- dauerkarte: „t dem Merkzeichen B im Schwerbehindertenausweis 6 EUR + Begleitperson DAUERKARTEN Dauerkartenvorverkauf im Stadion am Panzenberg Am 13.07.2026 findet“ (https://bremer-sv.de/fans/tickets)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Bremer SV",
    "ort": "Bremen",
    "land": "HB",
    "liga": "rl-nord",
    "liga_name": "Regionalliga Nord (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.bremer-sportverein.de/",
    "vorverkauf": "keine_angabe",
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
