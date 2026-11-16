# Auftrag: VfL Halle 1896 (NOFV-Oberliga Süd (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/nofv-sued/vfl-halle-1896.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.vflhalle96.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.vflhalle96.de/, https://www.vflhalle96.de/stadion-am-zoo/tickets/, https://www.vflhalle96.de/vfl-dreht-spiel-und-holt-zweiten-saisonsieg-im-zweiten-heimspiel/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Oberliga_Nordost_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: verein@vflhalle96.de
- Instagram auf der Vereinsseite: vflhalle1896.official, vflhalle1896.nachwuchs, vflhalle1896
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- nur_abendkasse: „alle 1896 e.V. &#183; Stadion am Zoo Tickets & Einlass Karten gibt es nur an der Tageskasse im Stadion &#8211; kein Vorverkauf, kein Online-Verkauf. Einfach vorb“ (https://www.vflhalle96.de/stadion-am-zoo/tickets/)
- abendkasse: „.V. &#183; Stadion am Zoo Tickets & Einlass Karten gibt es nur an der Tageskasse im Stadion &#8211; kein Vorverkauf, kein Online-Verkauf. Einfach vorb“ (https://www.vflhalle96.de/stadion-am-zoo/tickets/)
- vorverkauf: „Einlass Karten gibt es nur an der Tageskasse im Stadion &#8211; kein Vorverkauf, kein Online-Verkauf. Einfach vorbeikommen. Anfahrt & Parken &#8594;“ (https://www.vflhalle96.de/stadion-am-zoo/tickets/)
- dauerkarte: „d Freie Platzwahl 10,00 € Freie Platzwahl, erm&#228;&#223;igt* 7,00 € Dauerkarten Freie Platzwahl 110,00 € Freie Platzwahl, erm&#228;&#223;igt* 90,00“ (https://www.vflhalle96.de/stadion-am-zoo/tickets/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "VfL Halle 1896",
    "ort": "Halle (Saale)",
    "land": "ST",
    "liga": "nofv-sued",
    "liga_name": "NOFV-Oberliga Süd (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.vflhalle96.de/",
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
