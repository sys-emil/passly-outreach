# Auftrag: Handballclub Fivers Margareten (HLA Meisterliga (Handball, AT, 1. Liga))

Regeln: anleitung/recherche.md. Datei schreiben nach ergebnisse/at-hla/handballclub-fivers-margareten.json.
Höchstens vier WebFetch-Abrufe, keine Websuche nach der Website (außer die Homepage fehlt unten). Nur mit WebFetch gelesene
Seiten in ergebnis.quellen und meta.quellen_belegt (gleiche Liste); meta.schritte = deine Abrufe.
Vorausgefüllte Felder stammen aus dem Vorlauf: behalten, wenn du sie bestätigst, sonst
korrigieren; „TODO" ersetzen. vorverkauf ist der Vorschlag des Vorlaufs, prüfe ihn.

## Startpunkte
- Homepage: https://www.fivers.at/
- Ticketlink (Wikipedia): keiner
- Schon gelesen: https://www.fivers.at/, https://www.fivers.at/tickets-und-heimhalle/, https://www.fivers.at/2026/11/heimspiel-gegen-linz-fivers-wollen-wieder-ihr-wahres-gesicht-zeigen/
- Wikipedia-Seite des Teams: https://de.wikipedia.org/wiki/%C3%96sterreichische_Handballmeisterschaft_%28M%C3%A4nner%29_2026/27
- Kontakte laut Wikipedia: keine
- E-Mails auf der Vereinsseite: office@fivers.at
- Instagram auf der Vereinsseite: fivers_handball_team
- Preise gefunden: keine

## Funde (Fundstelle, Seite)
- vorverkauf: „e 3 1050 Wien Tel.: +43/1/4000-51262 TICKETS SAISON 2025/26 Der Kartenvorverkauf über ticketmaster die beste Möglichkeit, um sicher an ein Ticket zu g“ (https://www.fivers.at/tickets-und-heimhalle/)
- von_hand: „Einlass vorzuweisen! &#8211; FIVERS LOUNGE – VIP-Tagesticket: € 75.- Reservierter Sitzplatz auf der VIP-Tribüne Zutritt zur klimatisierten FIVERS LO“ (https://www.fivers.at/tickets-und-heimhalle/)
- bar: „Spieltag noch Tickets verfügbar sein, können diese an der Tageskassa (nur Barzahlung möglich!) erworben werden. KARTENPREISE HLA MEISTERLIGA ÖHB CU“ (https://www.fivers.at/tickets-und-heimhalle/)

## Ergebnis (vorausgefüllt)
```json
{
  "verein": {
    "name": "Handballclub Fivers Margareten",
    "ort": "Wien",
    "land": null,
    "liga": "at-hla",
    "liga_name": "HLA Meisterliga (Handball, AT, 1. Liga)",
    "sport": "Handball"
  },
  "ergebnis": {
    "website": "https://www.fivers.at/",
    "vorverkauf": "manuell",
    "anbieter": null,
    "eintritt_frei": null,
    "ticketpreis_eur": null,
    "halle": null,
    "kapazitaet": null,
    "instagram": "fivers_handball_team",
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
