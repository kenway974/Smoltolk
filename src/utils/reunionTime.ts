export function reunionNow(): Date {
  // UTC+4
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  return new Date(utc + 4 * 3600000)
}

export function futureOrClause(column: string): string {
  const now = reunionNow().toISOString()
  return `${column}.gte.${now}`
}
