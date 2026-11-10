import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CardBoard } from "@/components/CardBoard";
import { Countdown } from "@/components/Countdown";
import { EggHunt } from "@/components/EggHunt";
import { getSeason } from "@/content";

export async function generateMetadata({ params }: PageProps<"/[season]">): Promise<Metadata> {
  const { season: id } = await params;
  return { title: getSeason(id)?.name };
}

export default async function SeasonPage({ params }: PageProps<"/[season]">) {
  const { season: id } = await params;
  const season = getSeason(id);
  if (!season) notFound();

  return (
    <main className="season-main">
      <div className="season-heading">
        <h1>
          <span aria-hidden>{season.emoji}</span> {season.name}
        </h1>
        <p>{season.tagline}</p>
      </div>

      {season.bigCountdown && <Countdown season={season.id} label={season.countdownLabel} size="big" />}

      {season.layout === "eggHunt" ? <EggHunt season={season} /> : <CardBoard season={season} />}
    </main>
  );
}
