import { notFound } from "next/navigation";
import { getSeason, seasons } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return seasons.map((s) => ({ season: s.id }));
}

/** Diskret sne i baggrunden på julesiderne */
function Snow() {
  return (
    <div className="snow" aria-hidden>
      {Array.from({ length: 28 }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i * 1.3) % 12}s`,
            animationDuration: `${10 + ((i * 7) % 9)}s`,
            fontSize: `${0.7 + ((i * 3) % 5) * 0.2}rem`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

export default async function SeasonLayout({ children, params }: LayoutProps<"/[season]">) {
  const { season: id } = await params;
  const season = getSeason(id);
  if (!season) notFound();

  return (
    <div className="season-page" data-season={season.id}>
      {season.id === "jul" && <Snow />}
      {children}
    </div>
  );
}
