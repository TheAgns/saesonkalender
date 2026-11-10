"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { Item, Season } from "@/content/types";
import { isBeforeDate } from "@/lib/dates";
import { useStoredState, useToday } from "@/lib/storage";
import { Countdown } from "./Countdown";
import { OpenCard } from "./OpenCard";
import { Toolbar } from "./Toolbar";

const NO_SLUGS: string[] = [];
const FLIP_MS = 700;

/** Fast "tilfældig" rækkefølge, så server og browser viser det samme */
function shuffled<T>(items: T[]) {
  const result = [...items];
  let seed = 24;
  for (let i = result.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CardBoard({ season }: { season: Season }) {
  const [opened, setOpened] = useStoredState(`opened:${season.id}`, NO_SLUGS);
  const [lockEnabled, setLockEnabled] = useStoredState(`lock:${season.id}`, false);
  const [active, setActive] = useState<string | null>(null);
  const [shaking, setShaking] = useState<string | null>(null);
  const [hits, setHits] = useState<Record<string, number>>({});
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);
  const today = useToday();

  const items = useMemo(
    () => (season.shuffle ? shuffled(season.items) : season.items),
    [season],
  );
  const hasDates = season.items.some((i) => i.date);
  const activeItem = season.items.find((i) => i.slug === active);
  const closeCard = useCallback(() => setActive(null), []);

  function isLocked(item: Item) {
    return lockEnabled && !!item.date && !!today && isBeforeDate(item.date, today);
  }

  function showToast(message: string) {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2500);
  }

  function shake(slug: string) {
    // Nulstil først, så animationen kan starte forfra
    setShaking(null);
    requestAnimationFrame(() => setShaking(slug));
  }

  function handleClick(item: Item) {
    if (opened.includes(item.slug)) {
      setActive(item.slug);
      return;
    }
    if (isLocked(item)) {
      shake(item.slug);
      showToast(`🔒 Den låge må først åbnes ${item.label} – vent lidt endnu!`);
      return;
    }
    const need = season.hitsToOpen ?? 1;
    const count = (hits[item.slug] ?? 0) + 1;
    if (count < need) {
      setHits((h) => ({ ...h, [item.slug]: count }));
      shake(item.slug);
      return;
    }
    setOpened((prev) => (prev.includes(item.slug) ? prev : [...prev, item.slug]));
    window.setTimeout(() => setActive(item.slug), prefersReducedMotion() ? 0 : FLIP_MS);
  }

  function reset() {
    if (!window.confirm("Vil du lukke alle låger igen?")) return;
    setOpened([]);
    setHits({});
  }

  return (
    <>
      <Toolbar>
        {!season.bigCountdown && <Countdown season={season.id} label={season.countdownLabel} />}
        {hasDates && (
          <label className="btn toggle">
            <input
              type="checkbox"
              checked={lockEnabled}
              onChange={(e) => setLockEnabled(e.target.checked)}
            />
            🔒 Lås låger til datoen
          </label>
        )}
        <button type="button" className="btn" onClick={reset}>
          ↺ Luk alle
        </button>
      </Toolbar>

      <div className={`board board--${season.frontStyle}`}>
        {items.map((item) => {
          const isOpen = opened.includes(item.slug);
          const locked = !isOpen && isLocked(item);
          const hitCount = hits[item.slug] ?? 0;
          return (
            <button
              key={item.slug}
              type="button"
              className={[
                "card",
                `card--${season.frontStyle}`,
                isOpen && "is-open",
                locked && "is-locked",
                shaking === item.slug && "is-shaking",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => handleClick(item)}
              onAnimationEnd={() => setShaking(null)}
              aria-label={isOpen ? `${item.label}: ${item.title}` : `Åbn ${item.label}`}
            >
              <span className="card-inner">
                <span className="card-face card-front" aria-hidden>
                  <CardFront season={season} item={item} locked={locked} hits={hitCount} />
                </span>
                <span className="card-face card-back" aria-hidden>
                  <span className="card-back-emoji">{item.emoji}</span>
                  <span className="card-back-title">{item.title}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
      {activeItem && <OpenCard season={season} item={activeItem} onClose={closeCard} />}
    </>
  );
}

function CardFront({
  season,
  item,
  locked,
  hits,
}: {
  season: Season;
  item: Item;
  locked: boolean;
  hits: number;
}) {
  switch (season.frontStyle) {
    case "door": {
      const [day, month] = item.label.split(". ");
      return (
        <>
          <span className="door-number">{day}</span>
          <span className="door-month">{month}</span>
          {locked && <span className="lock">🔒</span>}
        </>
      );
    }
    case "barrel": {
      const need = season.hitsToOpen ?? 1;
      return (
        <>
          <span className="barrel-cat">🐈‍⬛</span>
          <span className="barrel-number">{item.label}</span>
          <span className="barrel-hits">
            {Array.from({ length: need }, (_, i) => (
              <span key={i} className={i < hits ? "hit" : ""} />
            ))}
          </span>
        </>
      );
    }
    case "pumpkin":
      return (
        <>
          <span className="pumpkin" />
          <span className="pumpkin-number">{item.label}</span>
        </>
      );
    default:
      return (
        <>
          <span className="sun" />
          <span className="sun-number">{item.label.replace(/\D/g, "")}</span>
        </>
      );
  }
}
