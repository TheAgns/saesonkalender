"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Item, Season } from "@/content/types";
import { ReadAloud } from "./ReadAloud";

/** Det store kort, der vises, når en låge er åbnet */
export function OpenCard({ season, item, onClose }: { season: Season; item: Item; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="open-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="open-card-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="open-card-top">
          <Link href={`/${season.id}/${item.slug}`} className="btn btn-primary btn-lg">
            📖 Læs mere
          </Link>
          <button ref={closeRef} type="button" className="btn btn-round" onClick={onClose} aria-label="Luk">
            ✕
          </button>
        </div>

        <div className="open-card-body">
          <span className="open-card-label">{item.label}</span>
          {item.image ? (
            <div className="open-card-image">
              <Image src={item.image} alt="" fill sizes="(max-width: 768px) 80vw, 400px" />
            </div>
          ) : (
            <div className="open-card-emoji" aria-hidden>
              {item.emoji}
            </div>
          )}
          <h2 id="open-card-title" className="open-card-title">
            {item.title}
          </h2>
          <p className="open-card-fact">{item.fact}</p>
          <ReadAloud text={`${item.title}. ${item.fact}`} className="btn-lg" />
        </div>
      </div>
    </div>
  );
}
