# Auftrag: HL Buchholz 08-Rosengarten (2. Handball-Bundesliga Frauen)

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/hbf2/hl-buchholz-08-rosengarten.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.handball-luchse.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.handball-luchse.de/, https://www.handball-luchse.de/bundesliga-team/die-bl-spieltags-orga, https://www.handball-luchse.de/spieltag/spielplan-saison, https://www.handball-luchse.de/spieltag/hbf-tabelle, https://www.handball-luchse.de/spieltag/digitales-hallenheft, https://www.handball-luchse.de/spieltag/nordheidehalle
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/2._Handball-Bundesliga_(Frauen)_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: geschaeftsstelle@handball-luchse.de, detlef.kortstegge@handball-luchse.de
- Instagram auf der Vereinsseite: luchse_team
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- abendkasse: „rverkauf im Online- Ticketshop Familentickets zu Vorzugspreisen . Die Abendkasse öffnet 90min vor Spielbeginn. Bitte beachtet, dass wir ab dieser Sais“ (https://www.handball-luchse.de/spieltag/nordheidehalle)
- vorverkauf: „roß und Klein. Im " Langenese Famlienblock " gibt es auschließlich im Vorverkauf im Online- Ticketshop Familentickets zu Vorzugspreisen . Die Abendkas“ (https://www.handball-luchse.de/spieltag/nordheidehalle)
- bar: „t) Ebenfalls nicht zugelassen sind Trinkflaschen (gleich welcher Art) Bargeldloses Bezahlen. Ab Oktober 2026 werden nur noch digitale Zahlungsmitte“ (https://www.handball-luchse.de/spieltag/nordheidehalle)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "HL Buchholz 08-Rosengarten",
    "land": null,
    "liga": "hbf2",
    "liga_name": "2. Handball-Bundesliga Frauen",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "http://www.handball-luchse.de/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "luchse_team",
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
