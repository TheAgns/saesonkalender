"use client";

import { useCallback, useState } from "react";
import type { Season } from "@/content/types";
import { useStoredState } from "@/lib/storage";
import { Countdown } from "./Countdown";
import { OpenCard } from "./OpenCard";
import { Toolbar } from "./Toolbar";

const NO_SLUGS: string[] = [];
const EGG_COLORS = [
  ["#f9a8d4", "#db2777"],
  ["#93c5fd", "#1d4ed8"],
  ["#fde047", "#ca8a04"],
  ["#86efac", "#15803d"],
  ["#c4b5fd", "#6d28d9"],
  ["#fdba74", "#c2410c"],
];

function Egg({ index }: { index: number }) {
  const [fill, accent] = EGG_COLORS[index % EGG_COLORS.length];
  const clip = `egg-clip-${index}`;
  return (
    <svg viewBox="0 0 100 120" className="egg-svg" aria-hidden>
      <defs>
        <clipPath id={clip}>
          <path d="M50 4C78 4 95 52 95 76c0 25-20 40-45 40S5 101 5 76C5 52 22 4 50 4Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="100" height="120" fill={fill} />
        {index % 2 === 0 ? (
          <path d="M0 62 12 50 24 62 36 50 48 62 60 50 72 62 84 50 96 62 108 50V74L96 86 84 74 72 86 60 74 48 86 36 74 24 86 12 74 0 86Z" fill={accent} />
        ) : (
          <>
            <rect y="44" width="100" height="10" fill={accent} />
            <rect y="84" width="100" height="10" fill={accent} />
          </>
        )}
        {[20, 50, 80].map((x) => (
          <circle key={x} cx={x} cy={index % 2 === 0 ? 30 : 70} r="6" fill="#fff" opacity=".85" />
        ))}
      </g>
      <path
        d="M50 4C78 4 95 52 95 76c0 25-20 40-45 40S5 101 5 76C5 52 22 4 50 4Z"
        fill="none"
        stroke="rgba(0,0,0,.25)"
        strokeWidth="3"
      />
    </svg>
  );
}

export function EggHunt({ season }: { season: Season }) {
  const [found, setFound] = useStoredState(`opened:${season.id}`, NO_SLUGS);
  const [active, setActive] = useState<string | null>(null);
  const activeItem = season.items.find((i) => i.slug === active);
  const closeCard = useCallback(() => setActive(null), []);
  const total = season.items.length;

  function open(slug: string) {
    setFound((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
    setActive(slug);
  }

  function reset() {
    if (!window.confirm("Vil du gemme alle æggene igen?")) return;
    setFound([]);
  }

  return (
    <>
      <Toolbar>
        <Countdown season={season.id} label={season.countdownLabel} />
        <span className="chip chip-strong">
          🧺 {found.length} af {total} æg fundet
        </span>
        <button type="button" className="btn" onClick={reset}>
          ↺ Gem æggene igen
        </button>
      </Toolbar>

      <div className="garden">
        <div className="garden-sun" aria-hidden />
        <div className="garden-cloud c1" aria-hidden />
        <div className="garden-cloud c2" aria-hidden />
        <div className="garden-hill h1" aria-hidden />
        <div className="garden-hill h2" aria-hidden />
        <span className="garden-deco" style={{ left: "3%", top: "28%" }} aria-hidden>🌳</span>
        <span className="garden-deco" style={{ left: "84%", top: "26%" }} aria-hidden>🌳</span>
        <span className="garden-deco small" style={{ left: "46%", top: "38%" }} aria-hidden>🐇</span>

        {season.items.map((item, i) => {
          const isFound = found.includes(item.slug);
          const pos = item.position ?? { x: 10 + ((i * 17) % 80), y: 55 + ((i * 13) % 35) };
          return (
            <button
              key={item.slug}
              type="button"
              className={`egg ${isFound ? "is-found" : ""}`}
              style={{ left: `${pos.x}%`, top: `${pos.y}%`, animationDelay: `${(i * 0.7) % 5}s` }}
              onClick={() => open(item.slug)}
              aria-label={isFound ? `${item.label}: ${item.title}` : `Find ${item.label}`}
            >
              <Egg index={i} />
              {isFound && <span className="egg-check">✓</span>}
              {!isFound && <span className="egg-grass" aria-hidden />}
            </button>
          );
        })}
      </div>

      <div className="basket" aria-label="Fundne æg">
        <span className="basket-label">Kurven:</span>
        {found.length === 0 && <span className="basket-empty">Ingen æg endnu – kan I finde dem?</span>}
        {season.items
          .filter((i) => found.includes(i.slug))
          .map((i) => (
            <button key={i.slug} type="button" className="basket-item" onClick={() => setActive(i.slug)}>
              <span aria-hidden>{i.emoji}</span> {i.title}
            </button>
          ))}
        {found.length === total && <span className="basket-done">🎉 Alle æg er fundet!</span>}
      </div>

      {activeItem && <OpenCard season={season} item={activeItem} onClose={closeCard} />}
    </>
  );
}
