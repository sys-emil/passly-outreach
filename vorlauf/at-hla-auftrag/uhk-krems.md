# Auftrag: UHK Krems (HLA Meisterliga (Handball, AT, 1. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-hla/uhk-krems.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: http://www.uhk-krems.com/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://uhk-krems.com/, https://uhk-krems.com/ticketinfo/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Handballmeisterschaft_%28M%C3%A4nner%29_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: keine
- Instagram auf der Vereinsseite: uhkkrems
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „den.at (ausgenommen VIP). Für die Fans bedeutet dies, dass ein online Vorverkauf von Tages- und Saisonkarten möglich ist. Die Tageskarten können ausge“ (https://uhk-krems.com/ticketinfo/)
- von_hand: „tritt bei allen Heimspielen , die Nutzung der ACCURATA Lounge und der reservierte Sitzbereich für VIP-Gäste. Der Zutritt ist ausschließlich mit VIP-B“ (https://uhk-krems.com/ticketinfo/)
- dauerkarte: „Für die Fans bedeutet dies, dass ein online Vorverkauf von Tages- und Saisonkarten möglich ist. Die Tageskarten können ausgedruckt oder digital beim Ei“ (https://uhk-krems.com/ticketinfo/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "UHK Krems",
    "ort": "Krems",
    "land": null,
    "liga": "at-hla",
    "liga_name": "HLA Meisterliga (Handball, AT, 1. Liga)",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "http://www.uhk-krems.com/",
    "vorverkauf": "keine_angabe",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "uhkkrems",
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
