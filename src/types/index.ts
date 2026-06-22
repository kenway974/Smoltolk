export type ActivityCategory =
  | 'nature'
  | 'culture'
  | 'sport'
  | 'gastronomie'
  | 'musique'
  | 'famille'
  | 'plage'
  | 'randonnee'
  | 'plongee'
  | 'marche'

export type Bassin = 'nord' | 'ouest' | 'sud' | 'est'

export interface Activity {
  id: string
  title: string
  description: string
  category: ActivityCategory
  bassin: Bassin
  start_date: string
  end_date?: string
  start_time?: string
  end_time?: string
  location?: string
  price?: number
  is_free: boolean
  is_outdoor: boolean
  image_url?: string
  source_url?: string
  status: 'pending' | 'approved' | 'rejected'
  user_id: string
  created_at: string
  updated_at: string
}

export interface Profile {
  id: string
  email: string
  display_name?: string
  avatar_url?: string
  role: 'user' | 'admin'
  bassin_preference?: Bassin
  category_interests?: ActivityCategory[]
  onboarding_completed: boolean
  created_at: string
}

export interface Favorite {
  id: string
  user_id: string
  activity_id: string
  created_at: string
}

export interface Collection {
  id: string
  user_id: string
  name: string
  description?: string
  is_public: boolean
  created_at: string
}

export interface Review {
  id: string
  user_id: string
  activity_id: string
  rating: number
  comment?: string
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  message: string
  type: 'reminder' | 'new_activity' | 'moderation' | 'system'
  read: boolean
  created_at: string
}

export type ContentType = 'activity' | 'review' | 'story'
export type ReportReason = 'spam' | 'inappropriate' | 'misleading' | 'other'

export interface Report {
  id: string
  reporter_id: string
  content_id: string
  content_type: ContentType
  reason: ReportReason
  details?: string
  created_at: string
}

export interface ActivityFilters {
  category?: string
  bassin?: string
  price?: 'free' | 'paid'
  date?: string
  outdoor?: boolean
  q?: string
}
