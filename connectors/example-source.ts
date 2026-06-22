/**
 * Connecteur exemple — à dupliquer pour chaque nouvelle source.
 *
 * Usage :
 *   1. Copier ce fichier en connectors/nom-de-la-source.ts
 *   2. Remplir les sections marquées TODO
 *   3. Implémenter fetchEvents() pour normaliser les données vers NormalizedEvent
 *   4. Créer une Edge Function supabase/functions/import-nom-de-la-source/index.ts
 *      qui appelle ce connecteur et fait l'upsert en DB
 *   5. Ajouter le cron dans supabase/migrations et dans /api/cron/import-activities/route.ts
 *
 * Ce fichier ne sera JAMAIS appelé directement en production —
 * il sert de documentation et de point de départ.
 */

import type { Connector, NormalizedEvent } from "./types";

// TODO: remplacer par le slug de votre source (ex: "ville-saint-denis", "reunion-events")
const SOURCE_SLUG = "example-source";

// TODO: remplacer par l'URL de l'API ou du flux de la source
const API_BASE_URL = "https://example.com/api/events";

// TODO: si l'API nécessite une clé, utiliser Deno.env.get("EXAMPLE_SOURCE_API_KEY")
// const API_KEY = Deno.env.get("EXAMPLE_SOURCE_API_KEY") ?? "";

interface ExternalEvent {
  // TODO: définir le type des données brutes renvoyées par la source
  id: string;
  name: string;
  description?: string;
  start_date: string;
  location?: string;
  // … autres champs selon l'API
}

/**
 * Mappe un événement brut de la source vers le schéma normalisé SortiesRéunion.
 * C'est ici que se fait tout le travail de transformation.
 */
function normalize(raw: ExternalEvent): NormalizedEvent {
  return {
    external_id: raw.id,
    source: SOURCE_SLUG,
    title: raw.name,
    description: raw.description ?? "",
    category: "loisirs",  // TODO: mapper selon la catégorie de la source
    date_start: raw.start_date.slice(0, 10),
    price_type: "free",   // TODO: adapter selon les données de la source
    location: raw.location,
    // bassin: TODO — déduire depuis la commune ou les coordonnées GPS
    // is_outdoor: TODO
    // image_url: TODO
    // external_url: TODO
  };
}

/**
 * Déduplique les événements sur external_id.
 * Si la même source envoie 2× le même événement (ex: réexécution du cron),
 * seul le dernier sera conservé — l'upsert en DB fera de même.
 */
function deduplicate(events: NormalizedEvent[]): NormalizedEvent[] {
  const seen = new Map<string, NormalizedEvent>();
  for (const e of events) {
    seen.set(e.external_id, e);
  }
  return Array.from(seen.values());
}

export const exampleSourceConnector: Connector = {
  slug: SOURCE_SLUG,

  async fetchEvents(): Promise<NormalizedEvent[]> {
    // TODO: adapter la pagination si l'API la supporte
    const res = await fetch(API_BASE_URL, {
      headers: {
        // "Authorization": `Bearer ${API_KEY}`,
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`[${SOURCE_SLUG}] HTTP ${res.status}: ${await res.text()}`);
    }

    const data: ExternalEvent[] = await res.json();
    // TODO: adapter si la réponse est enveloppée (ex: data.results, data.items…)

    const normalized = data.map(normalize);
    return deduplicate(normalized);
  },
};
