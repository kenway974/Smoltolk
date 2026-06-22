export function formatDate(dateStr: string, locale = "fr"): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Indian/Reunion",
  });
}

export function formatDateShort(dateStr: string, locale = "fr"): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString(locale, {
    month: "short",
    day: "numeric",
    timeZone: "Indian/Reunion",
  });
}

export function formatTime(timeStr?: string | null): string {
  if (!timeStr) return "";
  return timeStr.slice(0, 5);
}

export function formatPrice(
  priceType: "free" | "paid" | "suggested",
  priceDetail?: string | null
): string {
  if (priceType === "free") return "Gratuit";
  if (priceType === "suggested") return priceDetail ? `Participation libre · ${priceDetail}` : "Participation libre";
  return priceDetail || "Payant";
}
