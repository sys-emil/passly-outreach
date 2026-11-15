# Auftrag: KFC Uerdingen 05 (Oberliga Niederrhein (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/oberliga-niederrhein/kfc-uerdingen-05.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.kfc-uerdingen.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.kfc-uerdingen.de/, https://www.kfc-uerdingen.de/grotenburg/tickets/, https://www.kfc-uerdingen.de/grotenburg/tickets/tageskarten/, https://www.kfc-uerdingen.de/grotenburg/tickets/dauerkarten/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Niederrhein_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: simon.berger@kfc05.de
- Instagram auf der Vereinsseite: keins
- Preise gefunden: 23 € („vollzahler m 23,00 €“); 20 € („vollzahler l / n / b / c 20,00 €“); 17 € („vollzahler o / d 17,00 €“); 14 € („vollzahler k 14,00 €“); 12 € („vollzahler p / q 12,00 €“)

## Funde (Fundstelle, Seite)
- dauerkarte: „reiheit Medien Gästefans Groundhopper Tickets Ticketinfos Tageskarten Dauerkarten Historie Der Grotifant Fans Fanshop ☍ JAKO Teamshop ☍ Fanclubs Fanfo“ (https://www.kfc-uerdingen.de/)
- abendkasse: „Geschäftsstelle , eine der offiziellen Vorverkaufsstellen oder an der Tageskasse am Spieltag selbst. Per Anruf über die Ticket-Hotline 01803-019050 (0“ (https://www.kfc-uerdingen.de/grotenburg/tickets/)
- vorverkauf: „nline bestellen Vor-Ort in der Geschäftsstelle , eine der offiziellen Vorverkaufsstellen oder an der Tageskasse am Spieltag selbst. Per Anruf über die“ (https://www.kfc-uerdingen.de/grotenburg/tickets/)
- von_hand: „iedsrichterbeauftragten anmelden und erhalten dann ihre Schiedsrichterkarten per Mail zugeschickt. Falls eine Tageskasse angeboten wird, sind Schiedsrichte“ (https://www.kfc-uerdingen.de/grotenburg/tickets/tageskarten/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "KFC Uerdingen 05",
    "ort": "Uerdingen",
    "land": "NW",
    "liga": "oberliga-niederrhein",
    "liga_name": "Oberliga Niederrhein (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.kfc-uerdingen.de/",
    "vorverkauf": "manuell",
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
