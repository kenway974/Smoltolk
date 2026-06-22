export type ActivityCategory =
  | "soirees"
  | "concerts"
  | "expositions"
  | "restaurants"
  | "bars"
  | "sport"
  | "culture"
  | "famille"
  | "etudiants"
  | "networking"
  | "loisirs"
  | "salons"
  // Catégories spécifiques La Réunion
  | "open-air-plage"
  | "marches-forains"
  | "rando-sport"
  | "outdoor";

export type Bassin = "nord" | "ouest" | "sud" | "est";

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  date_start: string;
  date_end?: string | null;
  time_start?: string | null;
  time_end?: string | null;
  location?: string | null;
  address?: string | null;
  bassin?: Bassin | null;
  lat?: number | null;
  lng?: number | null;
  price_type: "free" | "paid" | "suggested";
  price_detail?: string | null;
  is_outdoor?: boolean | null;
  image_url?: string | null;
  external_url?: string | null;
  creator_id?: string | null;
  source?: string | null;
  external_id?: string | null;
  status: "pending" | "approved" | "rejected";
  moderation_note?: string | null;
  going_count?: number;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  username?: string | null;
  full_name?: string | null;
  avatar_url?: string | null;
  bio?: string | null;
  website?: string | null;
  interests?: ActivityCategory[] | null;
  preferred_bassins?: Bassin[] | null;
  created_at: string;
  updated_at: string;
}

export interface Favorite {
  id: string;
  user_id: string;
  activity_id: string;
  created_at: string;
}

export interface Collection {
  id: string;
  user_id: string;
  name: string;
  description?: string | null;
  activity_ids: string[];
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  user_id: string;
  activity_id: string;
  rating: number;
  body?: string | null;
  created_at: string;
  profiles?: Pick<Profile, "username" | "avatar_url">;
}

export interface Notification {
  id: string;
  user_id: string;
  type: string;
  payload: Record<string, unknown>;
  read: boolean;
  created_at: string;
}

export type ContentType = "activity" | "review" | "story";
export type ReportReason = "spam" | "inappropriate" | "misleading" | "other";

export interface Report {
  id: string;
  reporter_id: string;
  content_type: ContentType;
  content_id: string;
  reason: ReportReason;
  detail?: string | null;
  status: "pending" | "reviewed" | "dismissed";
  created_at: string;
}

export interface ActivityFilters {
  category?: ActivityCategory | "all";
  bassin?: Bassin | "all";
  price?: "free" | "paid" | "all";
  date?: "today" | "this_week" | "this_weekend" | "this_month" | "all";
  is_outdoor?: boolean | null;
  query?: string;
}
