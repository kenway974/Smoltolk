/**
 * Schéma normalisé commun à tous les connecteurs SortiesRéunion.
 *
 * Chaque connecteur transforme les données d'une source externe vers ce format,
 * qui correspond directement à la table `activities` Supabase.
 * La déduplication est assurée par (source, external_id).
 */

export interface NormalizedEvent {
  /** Identifiant unique côté source (utilisé pour l'upsert idempotent). */
  external_id: string;

  /** Slug du connecteur source (ex: "ville-saint-denis", "reun-events"). */
  source: string;

  title: string;
  description: string;

  /** Doit correspondre à l'enum `ActivityCategory` dans src/types/index.ts */
  category: string;

  date_start: string;    // YYYY-MM-DD
  date_end?: string;     // YYYY-MM-DD
  time_start?: string;   // HH:MM
  time_end?: string;     // HH:MM

  location?: string;     // Nom du lieu
  address?: string;      // Adresse complète
  bassin?: "nord" | "ouest" | "sud" | "est";
  lat?: number;
  lng?: number;

  price_type: "free" | "paid" | "suggested";
  price_detail?: string;

  is_outdoor?: boolean;

  image_url?: string;
  external_url?: string;
}

/**
 * Interface que chaque connecteur doit implémenter.
 */
export interface Connector {
  /** Identifiant unique du connecteur (= valeur de `source` dans la DB). */
  readonly slug: string;

  /** Récupère et normalise les événements depuis la source. */
  fetchEvents(): Promise<NormalizedEvent[]>;
}
