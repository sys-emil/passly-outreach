# CLAUDE.md

Anleitung für eine Claude-Code-Sitzung (lokal oder in der Cloud auf claude.ai/code),
die **selbst** der Recherche-Agent ist. Du erledigst hier, was `recherche.mjs` über die
Anthropic-API tut, nur mit deinen eigenen Werkzeugen WebSearch und WebFetch. So läuft die
Recherche über Claude-Code-Kontingent statt über API-Guthaben.

**Wo die Ergebnisse stehen:** `uebersicht.html` (alle Staffeln, nach Kategorien,
Punkte mit Begründung, E-Mail, Entwürfe; Reiter „Daten“ mit Statistiken über alle Staffeln). Öffnen mit `npm run uebersicht`; sie baut
sich bei jedem `npm run bericht` neu. `bericht/<liga>.md` und `.csv` bleiben daneben.

**Verschickt wird nichts.** Keine Mail, keine DM, kein Formular. Du lieferst Fakten,
Rangfolge und Entwürfe; Emil nimmt den Kontakt selbst auf (§ 7 UWG, siehe README).

## Auftrag

Der Auftrag nennt eine Staffel aus `vereine.json` (z. B. `vbl-frauen-sued`), optional einen
einzelnen Verein, optional eine freigegebene Referenz. Ohne Angabe: `vbl-pro`.

## Ablauf

0. **Vorlauf (Pflicht, ohne Modell):** `npm run vorlauf -- --liga <liga> --schreibe`.
   Holt von der VBL Homepage, Ticketlink, Halle und Ansprechpersonen aller Teams, liest
   die Vereinsseiten und erkennt Anbieter an ihren Adressen (auch eingebundene Skripte).
   Vereine mit erkanntem Anbieter oder freiem Eintritt schreibt es selbst als Ergebnis;
   Zweit- und Nachwuchsteams überspringt es. Übrig bleiben die Vereine mit
   `"braucht_modell": true` in `vorlauf/<liga>.json`.

1. **Vereine bestimmen.** Nur Vereine mit `braucht_modell: true` im Vorlauf.
   Existiert `ergebnisse/<liga>/<slug>.json` schon, überspringen (außer der Auftrag sagt „neu").
   Slug: klein, ä→ae, ö→oe, ü→ue, ß→ss, alles andere als `-`, Ränder ohne `-`
   („SV Lohhof" → `sv-lohhof`, „DSHS SnowTrex Köln" → `dshs-snowtrex-koeln`).

2. **Je Verein recherchieren**, genau nach `anleitung/recherche.md`. Das ist wörtlich der
   Systemprompt des Skripts; lies ihn vor dem ersten Verein. Der Vorlauf schreibt je Verein
   einen Kurzauftrag `vorlauf/<liga>-auftrag/<slug>.md` mit Startpunkten, Funden und einem
   vorausgefüllten Ergebnis. **Ein Subagent bekommt nur `anleitung/recherche.md` und seine
   Kurzaufträge**, nicht diese Datei, das Schema oder die ganze Vorlauf-Datei (spart rund
   20.000 Tokens je Agent). Alle Modell-Vereine einer Staffel gehören in einen Agenten,
   außer es sind mehr als sechs. Übersetzt auf deine Werkzeuge:
   `web_search` = WebSearch, `web_fetch` = WebFetch, das Werkzeug `ergebnis` = die JSON-Datei
   aus Schritt 3. Mit Startpunkten höchstens etwa vier Abrufe pro Verein, lieber
   `keine_angabe`/`unbekannt` als raten. Was danach offen ist, gehört auf die Anrufliste
   (ein Anruf), nicht in weitere Suchen.
   Bei vielen Vereinen darfst du bis zu drei Vereine parallel an Subagenten geben; jeder
   schreibt nur seine eigene Datei.

3. **Ergebnis schreiben** nach `ergebnisse/<liga>/<slug>.json`:

   ```json
   {
     "verein": { "name": "…", "ort": "…", "land": "BY", "liga": "<liga>", "liga_name": "<ligen.<liga>.name>", "sport": "<ligen.<liga>.sport>" },
     "ergebnis": { … genau nach anleitung/ergebnis.schema.json, alle Pflichtfelder, null wo unbekannt … },
     "meta": {
       "recherchiert_am": "YYYY-MM-DD",
       "modell": "<dein Modell> (Claude Code Sitzung)",
       "schritte": <Anzahl deiner Suchen + Abrufe für diesen Verein>,
       "quellen_belegt": [ … dieselben URLs wie ergebnis.quellen … ],
       "quellen_nur_suchtreffer": [ … URLs, die du nur als Suchtreffer gesehen, aber nicht abgerufen hast … ],
       "quellen_nicht_nachvollziehbar": [],
       "notiz": "was unsicher ist und warum, z. B. welche Angabe nur aus einem Suchtreffer stammt",
       "kosten_usd": 0
     }
   }
   ```

   `ergebnis.quellen` enthält **nur URLs, die du mit WebFetch wirklich gelesen hast**, genau
   in der Form, in der du sie abgerufen hast. `pruefe.mjs` ruft jede davon erneut auf und
   sucht dort Preis, Kapazität, Anbieter, Instagram-Handle, Kontakt und Vorverkaufsweg.
   Eine Angabe, die nur in einem Suchtreffer-Schnipsel stand, gehört in die `notiz`, nicht in
   ein Feld, das dadurch belegt aussieht. Instagram-Handle genau so, wie die Vereinsseite ihn
   verlinkt (ohne @), nicht aus dem Gedächtnis ergänzt.

4. **Prüfen:** `npm run pruefe -- --liga <liga>`.
   - Exit 1 mit „Formfehler": Datei korrigieren, erneut starten.
   - Exit 2 „sieht nach gesperrtem Netz aus": Die Umgebung darf keine beliebigen Websites
     abrufen. **Nicht umgehen und keine Prüfung vortäuschen.** Abbrechen und im Abschluss
     sagen, dass der Netzzugang der Umgebung auf „Voll" gestellt werden muss.
   - Das Skript kann `sicherheit` auf `niedrig` setzen. Das ist gewollt; nicht zurückdrehen.

5. **Bewerten:** `npm run bericht -- --liga <liga> --ohne-entwuerfe` (keine API, kein
   `npm install` nötig). Die Punkte rechnet das Skript (`bewertung.mjs`), nicht du.
   Schreibt auch `uebersicht.html` neu.

6. **Entwürfe** für jeden Verein ab 45 Punkten ohne vorhandenen `entwurf`: genau nach
   `anleitung/entwurf.md` schreiben und als Markdown-Text im Feld `entwurf` (oberste Ebene der
   JSON-Datei, neben `verein`/`ergebnis`/`meta`) speichern. Zusätzlich zu den Regeln dort:
   - Verwende keine Angabe, die `meta.pruefung.fakten` als leer (ohne Beleg) ausweist.
   - Referenz nur, wenn der Auftrag sie ausdrücklich freigibt; dann den Satz aus
     `bericht.mjs` sinngemäß: „<Verein> aus derselben Liga nutzt Passly bereits."
   Danach Schritt 5 wiederholen, damit die Entwürfe im Bericht stehen.

7. **Abschließen:** `ergebnisse/<liga>/`, `bericht/<liga>.*` und `uebersicht.html` committen
   („Recherche <liga>: N Vereine") und pushen. Im Abschluss: Rangliste der oberen fünf,
   welche Vereine `pruefe` auf `niedrig` gesetzt hat, und was offen blieb.

## Auftrag: Mail für einen Verein

Emil sagt z. B. „Mail für TV SUSPA Altdorf vorbereiten".

1. Datei finden: `ergebnisse/*/<slug>.json` (Slug-Regel oben; ungenaue Namen wie
   „Altdorf" per `grep -il` über die Dateien auflösen, bei mehreren Treffern fragen).
2. `anleitung/mail.md` lesen und genau danach schreiben. Produktfakten aus
   `~/Developer/tokn-on-sol/scripts/blog/fakten.md`, in der Cloud aus
   `anleitung/passly-fakten.md`.
3. Als `mail` in die Vereinsdatei schreiben (Form in `mail.md`), eine vorhandene Mail
   nur ersetzen, wenn Emil „neu" sagt. Dann `npm run uebersicht -- --ohne-oeffnen`.
4. Im Chat zeigen: Betreff, Text, Empfänger, und welche Fakten aus der Recherche
   die Vorschläge tragen. Fehlt eine belegte E-Mail-Adresse, das sagen und den Weg
   nennen (Website, Kontaktseite), statt eine Adresse zu raten.
5. Committen („Mail: <Verein>"). Verschickt wird nichts; auch keinen Gmail-Entwurf
   anlegen, außer Emil sagt es ausdrücklich.

## Nicht ändern

`recherche.mjs`, `vorlauf.mjs`, `pruefe.mjs`, `bericht.mjs`, `bewertung.mjs`, `anleitung/` und `vereine.json` sind während
eines Rechercheauftrags tabu. Scheint eine Regel falsch, sag es im Abschluss, statt sie
anzupassen. Die Bewertung soll über Läufe hinweg vergleichbar bleiben.
