export type SeasonId = "halloween" | "jul" | "fastelavn" | "paaske" | "sommer";

export type ResourceLink = {
  label: string;
  url: string;
};

export type Item = {
  /** Bruges i URL'en, fx "1" giver /jul/1 */
  slug: string;
  /** Teksten på forsiden af lågen, fx "1. december" */
  label: string;
  emoji: string;
  title: string;
  /** Kort fact på bagsiden af lågen – bliver også læst højt */
  fact: string;
  /** Valgfrit billede fra /public, fx "/billeder/nisse.jpg" */
  image?: string;
  /** "MM-DD" – lågen kan låses til denne dato */
  date?: string;
  /** Placering i æggejagten, i procent af scenen */
  position?: { x: number; y: number };
  /** Indhold til "Læs mere"-siden */
  more?: {
    text?: string[];
    talk?: string[];
    tasks?: string[];
    links?: ResourceLink[];
    /** YouTube-links, fx "https://www.youtube.com/watch?v=..." – vises i rækkefølge */
    videos?: string[];
    /** Malebillede fra /public – ellers bruges sæsonens standard */
    coloring?: string;
  };
};

export type FrontStyle = "door" | "egg" | "sun" | "pumpkin" | "barrel";

export type Season = {
  id: SeasonId;
  name: string;
  /** Navn i "Tilbage til ..." */
  backLabel: string;
  emoji: string;
  tagline: string;
  layout: "cards" | "eggHunt";
  frontStyle: FrontStyle;
  /** Antal slag før kortet åbner (fastelavnstønder) */
  hitsToOpen?: number;
  /** Bland lågerne, så tallene ikke står i rækkefølge (som en rigtig julekalender) */
  shuffle?: boolean;
  countdownLabel: string;
  /** Vis en stor nedtælling øverst i stedet for den lille */
  bigCountdown?: boolean;
  /** Standard-malebillede fra /public – udelades for at skjule malebillede-sektionen */
  coloring?: string;
  items: Item[];
};
