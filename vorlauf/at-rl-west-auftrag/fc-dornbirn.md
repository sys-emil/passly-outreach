# Auftrag: FC Dornbirn (Regionalliga West (Fußball, AT, 3. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-rl-west/fc-dornbirn.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.fc-dornbirn.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://fc-dornbirn.at/, https://fc-dornbirn.at/tickets/, https://fc-dornbirn.at/2026/11/05/heimspiel-gegen-reichenau-rothosen-spielen-fuer-licht-ins-dunkel/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Fu%C3%9Fballmeisterschaft_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: office@fc-dornbirn.at
- Instagram auf der Vereinsseite: fcdornbirn1913
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „ttsgeldregelung mit dem Gegnerverein. Saisonkarten können auch an der Tageskasse gekauft werden. Tageskarten - Regionalliga West Herren €12 Damen €9 E“ (https://fc-dornbirn.at/tickets/)
- von_hand: „Präsenzdiener, Studenten, Jugendliche (14-18 Jahre) Bestellung Saisonkarten Saisonkarten können per E-Mail an office@fc-dornbirn.at bestellt werden. Alle Karten, die bis zum 1.“ (https://fc-dornbirn.at/tickets/)
- dauerkarte: „t die Ticketpreise für die kommende Saison nicht verändert. Mit einer Saisonkarte genießen Sie Eintritt zu den Spielen der Kampfmannschaft und den Juni“ (https://fc-dornbirn.at/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "FC Dornbirn",
    "ort": "Dornbirn",
    "land": null,
    "liga": "at-rl-west",
    "liga_name": "Regionalliga West (Fußball, AT, 3. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "http://www.fc-dornbirn.at/",
    "vorverkauf": "keiner",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "fcdornbirn1913",
    "ansprechperson": null,
    "naechstes_heimspiel": null,
    "beobachtung": "TODO",
    "quellen": [],
    "sicherheit": "TODO"
  },
  "meta": {
    "recherchiert_am": "2026-11-20",
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
