# Auftrag: SpVgg SV Weiden (Bayernliga Nord (Fußball, 5. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/bayernliga-nord/spvgg-sv-weiden.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.spvgg-weiden.de/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.spvgg-weiden.de/, https://www.spvgg-weiden.de/tickets, https://www.spvgg-weiden.de/tickets/allgemeine-ticketbedingungen
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bayernliga_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: kmv_kurzzeitpflege
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- von_hand: „NEU - Schnell und einfach die neuen SpVgg SV Weiden Kunstrasenplätze reservieren und buchen: Jetzt Termine auswählen und buchen . Bitte beachten, da“ (https://www.spvgg-weiden.de/)
- dauerkarte: „tspreise Bayernligasaison 2026/2027 Juli 2025, Irrtum vorbehalten VIP-Dauerkarte (incl. Verpflegung & Parkplatz im Stadion) 1.000,00 € Premium-Karte (“ (https://www.spvgg-weiden.de/tickets)
- eintritt_frei: „elten, ergibt sich aus dem Angebot für das jeweilige Spiel. Ein kostenfreier Eintritt begründet für sich genommen keinen Anspruch auf einen bestimmten Sitz“ (https://www.spvgg-weiden.de/tickets/allgemeine-ticketbedingungen)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "SpVgg SV Weiden",
    "ort": "Weiden in der Oberpfalz",
    "land": "BY",
    "liga": "bayernliga-nord",
    "liga_name": "Bayernliga Nord (Fußball, 5. Liga)",
    "sport": "Fußball"
  },
  "ergebnis": {
    "website": "https://www.spvgg-weiden.de/",
    "vorverkauf": "eintritt_frei",
    "anbieter": null,
    "eintritt_frei": true,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "kmv_kurzzeitpflege",
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
