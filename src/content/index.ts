import { fastelavn } from "./fastelavn";
import { halloween } from "./halloween";
import { jul } from "./jul";
import { paaske } from "./paaske";
import { sommer } from "./sommer";
import type { Season } from "./types";

/** Sæsonerne i skoleårets rækkefølge – det er også rækkefølgen i menuen */
export const seasons: Season[] = [halloween, jul, fastelavn, paaske, sommer];

export function getSeason(id: string) {
  return seasons.find((s) => s.id === id);
}

export function getItem(seasonId: string, slug: string) {
  const season = getSeason(seasonId);
  const index = season?.items.findIndex((i) => i.slug === slug) ?? -1;
  if (!season || index === -1) return undefined;
  return {
    season,
    item: season.items[index],
    prev: season.items[index - 1],
    next: season.items[index + 1],
  };
}
