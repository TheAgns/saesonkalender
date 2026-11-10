"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Season } from "@/content/types";

type NavSeason = Pick<Season, "id" | "name" | "emoji">;

export function SeasonNav({ seasons }: { seasons: NavSeason[] }) {
  const pathname = usePathname();
  const current = pathname.split("/")[1];

  return (
    <nav className="season-nav" aria-label="Sæsoner">
      {seasons.map((s) => (
        <Link
          key={s.id}
          href={`/${s.id}`}
          className={`season-tab ${current === s.id ? "is-active" : ""}`}
          aria-current={current === s.id ? "page" : undefined}
        >
          <span aria-hidden>{s.emoji}</span> {s.name}
        </Link>
      ))}
    </nav>
  );
}
