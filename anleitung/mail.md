# Mail an einen Verein

Du schreibst für Emil, den Gründer von Passly (getpassly.de), eine E-Mail an einen
Sportverein. Kurz und konkret: Je länger die Mail, desto seltener die Antwort.

**Wann eine Mail:** nach einem ersten Kontakt (Antwort auf den Brief, Gespräch vor Ort, Anruf mit Anlass, „schickt mir
das mal") oder wenn der Verein um Infos gebeten hat. Unverlangte Werbe-Mails sind
nach § 7 Abs. 2 UWG auch an Vereine unzulässig. Ob Emil die Mail so verschickt,
entscheidet er; du verschickst nie etwas.

## Quellen

1. **Der Verein**: `ergebnisse/<liga>/<slug>.json`. Nur Angaben verwenden, die
   `meta.pruefung.fakten` nicht als leer (ohne Beleg) ausweist. `meta.notiz` ist
   Kontext, kein Beleg; was nur dort steht, kommt nicht in die Mail.
2. **Passly**: `~/Developer/tokn-on-sol/scripts/blog/fakten.md` (fehlt das Hauptrepo,
   z. B. in der Cloud: `anleitung/passly-fakten.md`). Jede Aussage über Passly muss
   dort stehen. Was dort unter „Was es NICHT gibt" steht, nie behaupten.

## Aufbau

**Betreff:** höchstens 6 Wörter, mit Vereinsname oder Ort, sagt, worum es geht.
Keine Frage, kein Clickbait, kein „Kooperation", kein „Partnerschaft".
Gut: „Vorverkauf für eure Heimspiele in Altdorf". Schlecht: „Revolutionieren Sie Ihr Ticketing!"

**Text:** höchstens 110 Wörter ohne Gruß und Signatur.

1. **Ein Satz Beobachtung**, konkret und prüfbar: was du auf ihrer Seite gesehen hast.
2. **Zwei bis drei Vorschläge als Stichpunkte**, jeder beginnt mit einem Verb und
   löst genau ein Problem aus der Beobachtung mit einer Passly-Funktion. Keine
   Funktionsliste, nur was zu diesem Verein passt.
3. **Ein Angebot** in einem Satz: Emil richtet das nächste Heimspiel (oder die
   Dauerkarte) kostenlos mit ihnen ein.
4. **Eine leichte Frage** zum Schluss, die sich mit einem Satz beantworten lässt.
5. Gruß: „Viele Grüße\nEmil\nPassly · getpassly.de"

## Was zu welcher Lage passt

| Lage beim Verein | Vorschlag (nur aus fakten.md) |
|---|---|
| nur Abendkasse | Vorverkauf über einen Link für Website und Instagram, Abendkasse bleibt im selben System (Barverkauf), ihr wisst vorher, wie viele kommen |
| keine Ticketangabe online | „Auf eurer Seite finde ich nichts zu Tickets": Vorverkauf über einen Link, Abendkasse im selben System; nicht behaupten, es gebe nur eine Abendkasse |
| nur Barzahlung | Gäste zahlen vorab per Karte, Apple Pay oder Google Pay; weniger Bargeld an der Kasse |
| Dauerkarte von Hand / Geschäftsstelle | Dauerkarte als Pass online, an der Tür pro Spiel einmal gescannt; Preis kann mit jedem vergangenen Spiel sinken |
| Gruppen per Mail | Gruppen bestellen selbst bis 10 Tickets pro Bestellung, Gruppenpreis per Rabattcode |
| Spielplan steht | ganze Saison auf einmal anlegen (Vorlage, Spielplan einfügen) |
| eigene Website | Ticketkarte zum Einbinden, QR-Code für Plakate |
| Einlass | Handy im Browser scannt, auch ohne Empfang, mehrere Geräte, Türlink fürs Personal |
| Anbieter vorhanden | nur die Lücke ansprechen (Dauerkarte, Abendkasse), nie den Anbieter nennen oder bewerten; Mail noch kürzer |

Kosten, wenn erwähnt, genau so: „Für den Verein kostenlos, die Servicegebühr pro
Ticket trägt standardmäßig der Gast." Keine Zahlen außer „ab 0,99 €".
Nie sagen, der Barpreis an der Abendkasse bleibe gleich (er enthält die Gebühr,
wenn der Gast sie trägt), und nie, die Abendkasse sei günstiger oder teurer.

## Regeln

- Anrede: „Hallo zusammen," oder, wenn ein Name belegt ist, „Hallo <Vorname>,". du/ihr-Form.
- Keine Gedankenstriche (—, –), höchstens ein Ausrufezeichen, keine Superlative,
  kein „revolutionär", „innovativ", „einfach mal", „unverbindlich".
- Kein Krypto-, Blockchain- oder NFT-Wort, kein „fälschungssicher"; wenn Schutz, dann
  „der QR-Code wechselt jede Minute, ein Screenshot kommt nicht rein".
- Kein PayPal, keine Wettbewerber, keine Kundenzahlen, keine Referenz ohne Freigabe.
- Keine Links außer getpassly.de/sportvereine (höchstens einer).
- Datum des nächsten Heimspiels nur, wenn es noch in der Zukunft liegt.

## Ablage

In der Vereinsdatei auf oberster Ebene:

```json
"mail": {
  "betreff": "…",
  "text": "Hallo zusammen,\n\n…\n\nViele Grüße\nEmil\nPassly · getpassly.de",
  "an": "<E-Mail aus ergebnis.ansprechperson.kontakt oder null>",
  "erstellt_am": "YYYY-MM-DD"
}
```
