import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { seasons } from "@/content";

export default function Home() {
  return (
    <main className="home">
      <div className="home-hero">
        <h1>Hvad skal vi lære om i dag?</h1>
        <p>Vælg en sæson og åbn lågerne sammen med klassen.</p>
      </div>
      <div className="home-grid">
        {seasons.map((s) => (
          <Link key={s.id} href={`/${s.id}`} className="home-tile" data-season={s.id}>
            <span className="home-tile-emoji" aria-hidden>
              {s.emoji}
            </span>
            <span className="home-tile-name">{s.name}</span>
            <span className="home-tile-tagline">{s.tagline}</span>
            <Countdown season={s.id} label={s.countdownLabel} />
          </Link>
        ))}
      </div>
    </main>
  );
}
