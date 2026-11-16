# Auftrag: FC Erzgebirge Aue (Regionalliga Nordost (Fußball, 4. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/rl-nordost/fc-erzgebirge-aue.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.fc-erzgebirge.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.fc-erzgebirge.de/, https://www.fc-erzgebirge.de/tickets/ticketinfos, https://www.fc-erzgebirge.de/saison/spieltage, https://www.fc-erzgebirge.de/tickets/vorverkaufsstellen
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Regionalliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: ticket@fc-erzgebirge.de
- Instagram auf der Vereinsseite: fcerzgebirgeaue
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „efans Grüße auf der Videowand KidsClub TICKETS OnlineShop Ticketinfos Vorverkaufsstellen Stadionführungen FANSHOP Regionalliga Nordost 2026/2027 - 17.“ (https://www.fc-erzgebirge.de/)
- von_hand: „Soziales Jahr Fans mit Handicap Fans mit Handicap richten bitte ihre Ticketanfragen an Mail . Weitere Infos findet ihr auf der Seite unseres Team-Barrierefrei .“ (https://www.fc-erzgebirge.de/tickets/ticketinfos)
- dauerkarte: „33030 E-Mail ticket@fc-erzgebirge.de Blockplan eins-Erzgebirgsstadion Dauerkarten Tagespreise Ermäßigung Kinder 0-5 Jahre freier Eintritt, aber keinen“ (https://www.fc-erzgebirge.de/tickets/ticketinfos)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC Erzgebirge Aue",
    "ort": "Aue",
    "land": "SN",
    "liga": "rl-nordost",
    "liga_name": "Regionalliga Nordost (Fußball, 4. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.fc-erzgebirge.de/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "fcerzgebirgeaue",
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
