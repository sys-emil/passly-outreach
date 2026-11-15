# Auftrag: TSV Gau-Odernheim (Oberliga Rheinland-Pfalz/Saar (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-rps/tsv-gau-odernheim.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://tsv1881.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://tsv1881.de/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Rheinland-Pfalz/Saar_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: geschaeftsstelle@tsv1881.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „agwörter Rheinhessen Sparkasse , Spende , Tischtennis , WirWunder Der Vorverkauf hat begonnen – Jetzt Dauerkarte sichern! 12. Juli 2026 von Benedikt P“ (https://tsv1881.de/)
- dauerkarte: „Spende , Tischtennis , WirWunder Der Vorverkauf hat begonnen – Jetzt Dauerkarte sichern! 12. Juli 2026 von Benedikt Plass-Fleßenkämper Die Vorfreude“ (https://tsv1881.de/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "TSV Gau-Odernheim",
    "ort": "Gau-Odernheim",
    "land": "RP",
    "liga": "oberliga-rps",
    "liga_name": "Oberliga Rheinland-Pfalz/Saar (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://tsv1881.de/",
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
