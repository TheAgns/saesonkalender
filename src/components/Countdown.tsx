"use client";

import type { SeasonId } from "@/content/types";
import { daysUntil } from "@/lib/dates";
import { useToday } from "@/lib/storage";

type Props = {
  season: SeasonId;
  label: string;
  size?: "chip" | "big";
};

export function Countdown({ season, label, size = "chip" }: Props) {
  const today = useToday();
  const days = today ? daysUntil(season, today) : null;

  if (size === "big") {
    return (
      <div className="countdown-big" aria-live="polite">
        {days === null ? (
          <span className="countdown-number">&nbsp;</span>
        ) : days === 0 ? (
          <span className="countdown-number">🎉 I dag! 🎉</span>
        ) : (
          <>
            <span className="countdown-number">{days}</span>
            <span className="countdown-label">
              {days === 1 ? "dag" : "dage"} {label}
            </span>
            <span className="countdown-sleep">
              Kun {days} {days === 1 ? "nat" : "nætter"} at sove 😴
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <span className="chip">
      ⏳{" "}
      {days === null
        ? "…"
        : days === 0
          ? "I dag! 🎉"
          : `${days} ${days === 1 ? "dag" : "dage"} ${label}`}
    </span>
  );
}
