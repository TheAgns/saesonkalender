import type { SeasonId } from "@/content/types";

/**
 * Første dag i sommerferien. Sæt en dato her ("ÅÅÅÅ-MM-DD"), hvis skolen
 * har en fast dato – ellers bruges sidste lørdag i juni.
 */
export const SOMMERFERIE_START: string | null = null;

const DAY_MS = 24 * 60 * 60 * 1000;

function atMidnight(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/** Påskedag (gregoriansk, "anonym" algoritme) */
export function easterSunday(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function lastSaturdayOfJune(year: number) {
  const d = new Date(year, 5, 30);
  d.setDate(30 - ((d.getDay() + 1) % 7));
  return d;
}

function eventDate(season: SeasonId, year: number): Date {
  switch (season) {
    case "halloween":
      return new Date(year, 9, 31);
    case "jul":
      return new Date(year, 11, 24);
    case "fastelavn":
      return new Date(easterSunday(year).getTime() - 49 * DAY_MS);
    case "paaske":
      return easterSunday(year);
    case "sommer":
      if (SOMMERFERIE_START && Number(SOMMERFERIE_START.slice(0, 4)) === year) {
        const [y, m, d] = SOMMERFERIE_START.split("-").map(Number);
        return new Date(y, m - 1, d);
      }
      return lastSaturdayOfJune(year);
  }
}

/** Næste gang sæsonens dag kommer (i dag tæller med) */
export function nextEvent(season: SeasonId, today: Date) {
  const t = atMidnight(today);
  const thisYear = eventDate(season, t.getFullYear());
  return thisYear >= t ? thisYear : eventDate(season, t.getFullYear() + 1);
}

export function daysUntil(season: SeasonId, today: Date) {
  return Math.round(
    (nextEvent(season, today).getTime() - atMidnight(today).getTime()) / DAY_MS,
  );
}

/** "MM-DD" er låst, hvis datoen endnu ikke er nået i år */
export function isBeforeDate(date: string, today: Date) {
  const [m, d] = date.split("-").map(Number);
  const month = today.getMonth() + 1;
  return month < m || (month === m && today.getDate() < d);
}
