const REUNION_LOCALE = 'fr-RE'
const REUNION_TZ = 'Indian/Reunion'

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(REUNION_LOCALE, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: REUNION_TZ,
  })
}

export function formatDateShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(REUNION_LOCALE, {
    day: 'numeric',
    month: 'short',
    timeZone: REUNION_TZ,
  })
}

export function formatTime(timeStr: string): string {
  const [h, m] = timeStr.split(':')
  return `${h}h${m}`
}

export function formatPrice(price: number | null | undefined): string {
  if (!price || price === 0) return 'Gratuit'
  return new Intl.NumberFormat(REUNION_LOCALE, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)
}
