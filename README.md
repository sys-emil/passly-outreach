# Passly Outreach

Recherche-Agent für die Kundensuche: findet heraus, wie Vereine ihre Heimspiel-Tickets verkaufen, bewertet, wer für Passly am ehesten passt, und bereitet den Erstkontakt vor. **Verschickt wird nichts.** Das Skript liefert Fakten, Rangfolge und Entwurf; DM, Anruf oder Brief machst du.

```
passly-outreach/
  vereine.json      Ligen und Vereine (Staffeleinteilung 2026/27 von volleyballer.de)
  recherche.mjs     der Agent über die API: pro Verein Websuche + Seitenabruf, Ergebnis als JSON
  pruefe.mjs        Belegprüfung ohne Modell: ruft Quellen erneut ab, sucht die Fakten im Text
  anleitung/        Auftrag, Entwurfsregeln, Schema; von Skript UND Claude-Code-Sitzung gelesen
  CLAUDE.md         derselbe Agent als Claude-Code-Sitzung (lokal oder Cloud, ohne API-Key)
  bericht.mjs       Bewertung, CSV, Markdown-Rangliste, Nachrichtenentwürfe
  ergebnisse/<liga>/<verein>.json   ein Datensatz pro Verein (wird nicht überschrieben)
  bericht/<liga>.csv, <liga>.md     das, womit du arbeitest
```

## Einrichten

```
cp .env.example .env     # ANTHROPIC_API_KEY eintragen (console.anthropic.com)
npm install
```

## Ablauf

```
npm run recherche                              # Sparda 2. Liga Pro, 12 Vereine, ca. 3 bis 5 $
npm run bericht                                # bewerten + Entwürfe für alles ab 45 Punkten
open bericht/vbl-pro.md
```

Andere Staffeln: `--liga vbl-frauen-sued`, `vbl-maenner-sued`, `vbl-frauen-nord`, `vbl-maenner-nord`. Ein einzelner Verein: `npm run recherche -- --verein "SV Lohhof"`. Neu recherchieren: `--neu`.

Sobald der Pilotkunde als Referenz genannt werden darf: `npm run bericht -- --referenz "TV Planegg-Krailling" --neu`.

## In der Cloud, ohne API-Guthaben

Statt `npm run recherche` kann eine Claude-Code-Sitzung auf claude.ai/code selbst recherchieren; sie folgt `CLAUDE.md` und läuft über das Claude-Code-Kontingent. Einmalig: dieses Repo auf GitHub (privat), in claude.ai/code verbinden, **Netzzugang der Umgebung auf „Voll"** (sonst kann `pruefe.mjs` die Vereinsseiten nicht abrufen und bricht bewusst ab). Dann als Auftrag z. B.:

```
Recherchiere die Staffel vbl-frauen-sued nach CLAUDE.md.
```

Danach lokal `git pull` und `open bericht/vbl-frauen-sued.md`. Wiederkehrend geht dasselbe als Routine (`/schedule` in Claude Code).

Unterschied zum Skript: Das Skript beobachtet von außen, welche Seiten wirklich abgerufen wurden. Die Sitzung gibt ihre Quellen selbst an, deshalb prüft `pruefe.mjs` hinterher jede Quelle nach und setzt die Sicherheit auf „niedrig", wenn keine die Fakten trägt. Seiten, die ihren Inhalt per JavaScript laden, gelten dabei als „nicht prüfbar", nicht als widerlegt.

## Wie der Agent arbeitet

Pro Verein läuft eine Schleife: Claude bekommt den Auftrag („wie verkauft dieser Verein Tickets für Heimspiele?") und drei Werkzeuge: Websuche, Seitenabruf (beide laufen bei Anthropic, kein eigener Such-Key nötig) und `ergebnis`, das die Antwort in einem festen Schema abliefert. Das Modell entscheidet selbst, welche Seiten es liest, und liefert nach höchstens 14 Runden ab.

Zwei Sicherungen:

- **Belege.** Das Skript merkt sich jede Seite, die wirklich abgerufen wurde. Quellen, die das Modell nennt, ohne die Seite gelesen zu haben, landen unter `quellen_nicht_nachvollziehbar`, und ohne belegte Quelle fällt die Sicherheit auf „niedrig". Im Bericht steht das mit dabei.
- **Bewertung ohne Modell.** Die Punkte (0 bis 100) rechnet `bericht.mjs` deterministisch aus den Feldern: Vorverkaufslücke, Hallengröße, Preis, Instagram, Ansprechperson, Bayern, Sicherheit. Die Gründe stehen je Verein im Bericht, damit die Rangfolge nachvollziehbar ist.

Der Entwurf (DM plus Telefonleitfaden) ist der einzige Schritt, in dem das Modell formuliert. Er darf nur Fakten aus dem Ergebnis verwenden, keine Gedankenstriche, keine Vergleiche mit anderen Anbietern, keine Referenz ohne Freigabe.

## Rechtliches, kurz

Unverlangte Werbe-E-Mails sind nach § 7 Abs. 2 UWG auch an Vereine und Unternehmen unzulässig (Abmahnrisiko). Deshalb erzeugt das Skript keine Mails und sendet nichts. Zulässig und wirksamer: persönliche Instagram-DM, Anruf bei einem Verein, dessen Kerngeschäft das Thema ist (mutmaßliche Einwilligung im B2B), Postkarte, Empfehlung über Verband oder Pilotkunden.

## Nächste Ausbaustufen

- Weitere Ligen in `vereine.json` (Handball 3. Liga, Basketball ProB, Eishockey Landesliga), gleiches Schema.
- Kultur- und Partyveranstalter: Quelle wäre Google Places nach Kategorie plus Website-Check; Instagram lässt sich nicht sauber automatisiert durchsuchen.
- Demo-Eventseite je Kandidat aus den recherchierten Daten anlegen und in der DM verlinken.
