// Recherche-Agent: pro Verein eine Agentenschleife (Claude + Websuche + Seitenabruf),
// die herausfindet, wie der Verein Tickets für Heimspiele verkauft.
//
//   npm run recherche                       alle Vereine der Standard-Liga (vbl-pro)
//   npm run recherche -- --liga vbl-frauen-sued
//   npm run recherche -- --verein "SV Lohhof"
//   npm run recherche -- --neu              vorhandene Ergebnisse überschreiben
//   npm run recherche -- --parallel 2       gleichzeitige Vereine (Standard 3)
//
// Ergebnis: ergebnisse/<liga>/<slug>.json, ein Datensatz pro Verein.
// Danach: npm run bericht

import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const MODEL = 'claude-opus-5';
const MAX_SCHRITTE = 14; // Modellaufrufe pro Verein, danach wird das Ergebnis erzwungen

// Auftrag und Schema liegen in anleitung/, damit eine Claude-Code-Sitzung
// (siehe CLAUDE.md) nach exakt denselben Regeln recherchiert wie dieses Skript.
const SYSTEM = await fs.readFile(path.join(HERE, 'anleitung', 'recherche.md'), 'utf8');

const SCHEMA = JSON.parse(await fs.readFile(path.join(HERE, 'anleitung', 'ergebnis.schema.json'), 'utf8'));

const TOOLS = [
  {
    type: 'web_search_20260209',
    name: 'web_search',
    max_uses: 8,
    user_location: { type: 'approximate', country: 'DE' },
  },
  {
    type: 'web_fetch_20260209',
    name: 'web_fetch',
    max_uses: 12,
    max_content_tokens: 25000,
  },
  {
    name: 'ergebnis',
    description: 'Liefert das Rechercheergebnis für den Verein ab. Genau einmal aufrufen, wenn die Recherche abgeschlossen ist.',
    strict: true,
    input_schema: SCHEMA,
  },
];

const args = parseArgs(process.argv.slice(2));
const ligaId = args.liga ?? 'vbl-pro';
const parallel = Number(args.parallel ?? 3);

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY fehlt. In .env eintragen (siehe .env.example) oder exportieren.');
  process.exit(1);
}

const client = new Anthropic();
const seed = JSON.parse(await fs.readFile(path.join(HERE, 'vereine.json'), 'utf8'));
const liga = seed.ligen[ligaId];
if (!liga) {
  console.error(`Unbekannte Liga "${ligaId}". Bekannt: ${Object.keys(seed.ligen).join(', ')}`);
  process.exit(1);
}

let vereine = liga.vereine.filter((v) => !v.pilot);
if (args.verein) {
  const wanted = args.verein.toLowerCase();
  vereine = liga.vereine.filter((v) => v.name.toLowerCase().includes(wanted));
  if (vereine.length === 0) {
    console.error(`Kein Verein passt auf "${args.verein}".`);
    process.exit(1);
  }
}

const outDir = path.join(HERE, 'ergebnisse', ligaId);
await fs.mkdir(outDir, { recursive: true });

console.log(`Liga: ${liga.name} (${vereine.length} Vereine, ${parallel} parallel)\n`);

const queue = [...vereine];
const summary = [];
await Promise.all(
  Array.from({ length: Math.min(parallel, queue.length) }, async () => {
    while (queue.length) {
      const verein = queue.shift();
      const file = path.join(outDir, `${slug(verein.name)}.json`);
      if (!args.neu && (await exists(file))) {
        console.log(`  ⏭  ${verein.name} (vorhanden, --neu zum Überschreiben)`);
        continue;
      }
      try {
        const t0 = Date.now();
        const result = await recherchiere(verein);
        result.meta.dauer_s = Math.round((Date.now() - t0) / 1000);
        await fs.writeFile(file, JSON.stringify(result, null, 2));
        summary.push(result);
        console.log(
          `  ✓  ${verein.name}: ${result.ergebnis.vorverkauf}${result.ergebnis.anbieter ? ` (${result.ergebnis.anbieter})` : ''}, ` +
            `${result.meta.quellen_belegt.length} belegte Quellen, ${result.meta.dauer_s}s, ~${result.meta.kosten_usd.toFixed(2)} $`,
        );
      } catch (err) {
        console.error(`  ✗  ${verein.name}: ${err instanceof Anthropic.APIError ? `${err.status} ${err.message}` : err.message}`);
      }
    }
  }),
);

const gesamt = summary.reduce((s, r) => s + r.meta.kosten_usd, 0);
console.log(`\nFertig: ${summary.length} Vereine recherchiert, ~${gesamt.toFixed(2)} $ API-Kosten.`);
console.log('Nächster Schritt: npm run bericht');

// ---------------------------------------------------------------------------

async function recherchiere(verein) {
  const messages = [{ role: 'user', content: auftrag(verein) }];
  const usage = { input: 0, output: 0, cache_read: 0, cache_write: 0 };
  const fetched = new Set();
  const searched = new Set();
  let ergebnis = null;
  let schritte = 0;

  while (!ergebnis) {
    schritte += 1;
    const erzwingen = schritte >= MAX_SCHRITTE;
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 16000,
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      output_config: { effort: 'medium' },
      tools: TOOLS,
      // Nach dem Schrittlimit muss das Modell abliefern, was es hat.
      tool_choice: erzwingen ? { type: 'tool', name: 'ergebnis' } : { type: 'auto' },
      messages,
    });

    usage.input += response.usage.input_tokens;
    usage.output += response.usage.output_tokens;
    usage.cache_read += response.usage.cache_read_input_tokens ?? 0;
    usage.cache_write += response.usage.cache_creation_input_tokens ?? 0;

    for (const block of response.content) {
      if (block.type === 'web_fetch_tool_result' && block.content?.type === 'web_fetch_result') {
        fetched.add(block.content.url);
      }
      if (block.type === 'web_search_tool_result' && Array.isArray(block.content)) {
        for (const r of block.content) if (r.type === 'web_search_result') searched.add(r.url);
      }
    }

    messages.push({ role: 'assistant', content: response.content });

    if (response.stop_reason === 'pause_turn') continue; // Server-Tools brauchen noch eine Runde

    const toolUses = response.content.filter((b) => b.type === 'tool_use');
    if (toolUses.length === 0) {
      if (response.stop_reason === 'refusal') throw new Error('Modell hat die Anfrage abgelehnt');
      if (erzwingen) throw new Error('kein Ergebnis nach Schrittlimit');
      // Das Modell hat Text statt eines Werkzeugs geliefert; nachfragen.
      messages.push({ role: 'user', content: 'Bitte liefere jetzt das Ergebnis über das Werkzeug `ergebnis`.' });
      continue;
    }

    const results = [];
    for (const use of toolUses) {
      if (use.name === 'ergebnis') {
        ergebnis = use.input;
        results.push({ type: 'tool_result', tool_use_id: use.id, content: 'gespeichert' });
      } else {
        results.push({ type: 'tool_result', tool_use_id: use.id, content: `unbekanntes Werkzeug ${use.name}`, is_error: true });
      }
    }
    messages.push({ role: 'user', content: results });
  }

  // Halluzinationsbremse: Eine Quelle zählt nur, wenn die Seite wirklich abgerufen wurde.
  const belegt = ergebnis.quellen.filter((u) => fetched.has(u));
  const nurSuche = ergebnis.quellen.filter((u) => !fetched.has(u) && searched.has(u));
  const erfunden = ergebnis.quellen.filter((u) => !fetched.has(u) && !searched.has(u));
  if (belegt.length === 0 && ergebnis.sicherheit !== 'niedrig') ergebnis.sicherheit = 'niedrig';

  const kosten = (usage.input * 5 + usage.output * 25 + usage.cache_read * 0.5 + usage.cache_write * 6.25) / 1e6;

  return {
    verein: { ...verein, liga: ligaId, liga_name: liga.name, sport: liga.sport },
    ergebnis,
    meta: {
      recherchiert_am: new Date().toISOString().slice(0, 10),
      modell: MODEL,
      schritte,
      quellen_belegt: belegt,
      quellen_nur_suchtreffer: nurSuche,
      quellen_nicht_nachvollziehbar: erfunden,
      abgerufene_seiten: [...fetched],
      tokens: usage,
      kosten_usd: kosten,
    },
  };
}

function auftrag(v) {
  return [
    `Verein: ${v.name}`,
    `Ort: ${v.ort} (${v.land})`,
    `Liga: ${liga.name}, ${liga.sport}, Saison 2026/27`,
    v.hinweis ? `Hinweis: ${v.hinweis}` : null,
    '',
    'Finde heraus, wie dieser Verein Eintrittskarten für seine Heimspiele in dieser Liga verkauft, und liefere das Ergebnis über das Werkzeug `ergebnis`.',
  ]
    .filter((l) => l !== null)
    .join('\n');
}



function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith('--')) {
      out[key] = next;
      i++;
    } else out[key] = true;
  }
  return out;
}

function slug(s) {
  return s
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}
