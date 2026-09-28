# CLAUDE.md

Anleitung für eine Claude-Code-Sitzung (lokal oder in der Cloud auf claude.ai/code),
die **selbst** der Recherche-Agent ist. Du erledigst hier, was `recherche.mjs` über die
Anthropic-API tut, nur mit deinen eigenen Werkzeugen WebSearch und WebFetch. So läuft die
Recherche über Claude-Code-Kontingent statt über API-Guthaben.

**Verschickt wird nichts.** Keine Mail, keine DM, kein Formular. Du lieferst Fakten,
Rangfolge und Entwürfe; Emil nimmt den Kontakt selbst auf (§ 7 UWG, siehe README).

## Auftrag

Der Auftrag nennt eine Staffel aus `vereine.json` (z. B. `vbl-frauen-sued`), optional einen
einzelnen Verein, optional eine freigegebene Referenz. Ohne Angabe: `vbl-pro`.

## Ablauf

1. **Vereine bestimmen.** Alle Vereine der Staffel aus `vereine.json`, außer `"pilot": true`.
   Existiert `ergebnisse/<liga>/<slug>.json` schon, überspringen (außer der Auftrag sagt „neu").
   Slug: klein, ä→ae, ö→oe, ü→ue, ß→ss, alles andere als `-`, Ränder ohne `-`
   („SV Lohhof" → `sv-lohhof`, „DSHS SnowTrex Köln" → `dshs-snowtrex-koeln`).

2. **Je Verein recherchieren**, genau nach `anleitung/recherche.md`. Das ist wörtlich der
   Systemprompt des Skripts; lies ihn vor dem ersten Verein. Übersetzt auf deine Werkzeuge:
   `web_search` = WebSearch, `web_fetch` = WebFetch, das Werkzeug `ergebnis` = die JSON-Datei
   aus Schritt 3. Höchstens etwa zehn Suchen und Abrufe pro Verein, lieber `unbekannt` als raten.
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
   `npm install` nötig). Die Punkte rechnet das Skript, nicht du.

6. **Entwürfe** für jeden Verein ab 45 Punkten ohne vorhandenen `entwurf`: genau nach
   `anleitung/entwurf.md` schreiben und als Markdown-Text im Feld `entwurf` (oberste Ebene der
   JSON-Datei, neben `verein`/`ergebnis`/`meta`) speichern. Zusätzlich zu den Regeln dort:
   - Verwende keine Angabe, die `meta.pruefung.fakten` als leer (ohne Beleg) ausweist.
   - Referenz nur, wenn der Auftrag sie ausdrücklich freigibt; dann den Satz aus
     `bericht.mjs` sinngemäß: „<Verein> aus derselben Liga nutzt Passly bereits."
   Danach Schritt 5 wiederholen, damit die Entwürfe im Bericht stehen.

7. **Abschließen:** `ergebnisse/<liga>/` und `bericht/<liga>.*` committen
   („Recherche <liga>: N Vereine") und pushen. Im Abschluss: Rangliste der oberen fünf,
   welche Vereine `pruefe` auf `niedrig` gesetzt hat, und was offen blieb.

## Nicht ändern

`recherche.mjs`, `pruefe.mjs`, `bericht.mjs`, `anleitung/` und `vereine.json` sind während
eines Rechercheauftrags tabu. Scheint eine Regel falsch, sag es im Abschluss, statt sie
anzupassen. Die Bewertung soll über Läufe hinweg vergleichbar bleiben.
