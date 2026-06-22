import type { Connector, NormalizedEvent } from './types'

export class ExampleSourceConnector implements Connector {
  name = 'example-source'

  async fetchEvents(): Promise<NormalizedEvent[]> {
    // TODO: implement actual data fetching from external source
    // Example: fetch from an API, parse RSS feed, scrape website, etc.
    return []
  }
}
