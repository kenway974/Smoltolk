// La Réunion est UTC+4 sans heure d'été.
// Les activités stockent la date/heure locale Réunion ; toutes les comparaisons
// "est-ce passé ?" doivent utiliser l'heure locale Réunion (Vercel tourne en UTC).
export function reunionNow(): { date: string; time: string } {
  const now = new Date();
  const date = now.toLocaleDateString("en-CA", { timeZone: "Indian/Reunion" }); // YYYY-MM-DD
  const time = now.toLocaleTimeString("en-GB", { timeZone: "Indian/Reunion", hour12: false }); // HH:MM:SS
  return { date, time };
}

export function futureOrClause(dateCol = "date_start", timeCol = "time_start") {
  const { date, time } = reunionNow();
  return `${dateCol}.gt.${date},and(${dateCol}.eq.${date},${timeCol}.gte.${time})`;
}
