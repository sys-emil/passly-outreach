# Auftrag: SG Wattenscheid 09 (Regionalliga West (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-west/sg-wattenscheid-09.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://sgwattenscheid09.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.sgwattenscheid09.de/, https://www.sgwattenscheid09.de/spieltag/lohrheidestadion, https://www.sgwattenscheid09.de/spieltag/ticketpreise, https://www.sgwattenscheid09.de/spieltag/pressehinweise
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_West_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: //presse@sgwattenscheid09.de, boccarius@sgwattenscheid09.de, biberich@sgwattenscheid09.de, presse@sgwattenscheid09.de
- Instagram auf der Vereinsseite: sgwat09
- Preise gefunden: 1 € („tickets an der tageskasse kosten 1 €“); 15 € („vollzahler 15 €“); 26 € („vollzahler 26 €“); 11 € („vollzahler 11 €“); 11 € („vollzahler 11 €“)

## Funde (Fundstelle, Seite)
- vorverkauf: „ie Hollandstr. Online-Tickets zum Ticketshop Preise Preise im Stadion Vorverkaufsstellen Connys Büdchen Weststr. 110, Wattenscheid-Leithe Öffnungszeit“ (https://www.sgwattenscheid09.de/spieltag/lohrheidestadion)
- von_hand: „eidestr. zu entlasten. Der Parkplatz Ost am Stadion ist für VIP-Gäste reserviert. Der Parkplatz Nord ist bei Sicherheitsspielen für Gästefans vorgese“ (https://www.sgwattenscheid09.de/spieltag/lohrheidestadion)
- nur_abendkasse: „inder- und Schiedsrichtertickets. Schiedsrichtertickets Diese gibt es nur an der Tageskasse gegen Vorlage eines gültigen Schiedsrichterausweises. Sie gelten für“ (https://www.sgwattenscheid09.de/spieltag/ticketpreise)
- abendkasse: „shop, an unseren Vorverkaufsstellen oder – solange verfügbar – an der Tageskasse. Wir freuen uns auf Euch! Tickets zum Online-Ticketshop Wichtiger Hin“ (https://www.sgwattenscheid09.de/spieltag/ticketpreise)
- bar: „rem Shop. Ein Hinweis vorab: An unseren Kiosken und Grillständen wird bargeldlos mit der Henkelmann-Wertkarte bezahlt. Diese bekommt Ihr am Klaus-S“ (https://www.sgwattenscheid09.de/spieltag/ticketpreise)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SG Wattenscheid 09",
    "ort": "Bochum",
    "land": "NW",
    "liga": "rl-west",
    "liga_name": "Regionalliga West (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://sgwattenscheid09.de/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "sgwat09",
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
