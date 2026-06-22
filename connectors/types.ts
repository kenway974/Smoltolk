export interface NormalizedEvent {
  externalId: string
  source: string
  title: string
  description: string
  category: string
  bassin: string
  startDate: string
  endDate?: string
  startTime?: string
  endTime?: string
  location?: string
  price?: number
  isFree: boolean
  isOutdoor: boolean
  imageUrl?: string
  sourceUrl?: string
}

export interface Connector {
  name: string
  fetchEvents(): Promise<NormalizedEvent[]>
}
