# Auftrag: VFC Plauen (NOFV-Oberliga Süd (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/nofv-sued/vfc-plauen.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://vfc-plauen.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://vfc-plauen.de/, https://vfc-plauen.de/stadion-eintrittspreise/, https://vfc-plauen.de/eintrittspreise/, https://vfc-plauen.de/spieltagsplakate/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: vfc@vfc-plauen.de
- Instagram auf der Vereinsseite: vfc_plauen
- Preise gefunden: 11 € („tageskarte vollzahler tribüne a/b 11,00 euro“); 8 € („tageskarte ermäßigt tribüne a/b* 8,00 euro“); 8 € („tageskarte mitglied tribüne a/b* 8,00 euro“); 8 € („tageskarte vollzahler stehplatz 8,00 euro“)

## Funde (Fundstelle, Seite)
- vorverkauf: „im Reichenbacher FC am 15.11. sind eingetroffen! Exklusiv beginnt der Vorverkauf am Donnerstag, 18 Uhr zum VFC-Stammtisch in der Stadionklause. Zu Gas“ (https://vfc-plauen.de/)
- bar: „11:30 Uhr * Bezahlung: Im gesamten Stadionbereich ist ausschließlich Barzahlung möglich. [&hellip;] Kleines Vogtlandderby im Achtelfinale &#8211; Fan“ (https://vfc-plauen.de/)
- dauerkarte: „ung mit einem entsprechenden Nachweis &#8211; Mitglieder erhalten die Dauerkarte gegen Vorlage ihres Mitgliederausweises &#8211; Kinder unter sechs Ja“ (https://vfc-plauen.de/eintrittspreise/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "VFC Plauen",
    "ort": "Plauen",
    "land": "SN",
    "liga": "nofv-sued",
    "liga_name": "NOFV-Oberliga Süd (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://vfc-plauen.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "vfc_plauen",
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
