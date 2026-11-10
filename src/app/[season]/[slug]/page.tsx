import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "@/components/PrintButton";
import { ReadAloud } from "@/components/ReadAloud";
import { getItem, seasons } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return seasons.flatMap((s) => s.items.map((i) => ({ season: s.id, slug: i.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[season]/[slug]">): Promise<Metadata> {
  const { season, slug } = await params;
  const found = getItem(season, slug);
  return { title: found ? `${found.item.title} – ${found.season.name}` : undefined };
}

/** Laver et YouTube-link om til et indlejret link */
function youtubeEmbed(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
}

export default async function ItemPage({ params }: PageProps<"/[season]/[slug]">) {
  const { season: seasonId, slug } = await params;
  const found = getItem(seasonId, slug);
  if (!found) notFound();
  const { season, item, prev, next } = found;
  const more = item.more ?? {};
  const coloring = more.coloring ?? season.coloring;
  const videos = more.videos ?? [];
  const readText = [item.title, item.fact, ...(more.text ?? [])].join(" ");

  return (
    <main className="detail">
      <Link href={`/${season.id}`} className="btn back-link">
        ← Tilbage til {season.backLabel}
      </Link>

      <section className="detail-hero">
        {item.image ? (
          <div className="detail-image">
            <Image src={item.image} alt="" fill sizes="(max-width: 768px) 90vw, 360px" />
          </div>
        ) : (
          <div className="detail-emoji" aria-hidden>
            {item.emoji}
          </div>
        )}
        <div className="detail-hero-text">
          <span className="chip">{item.label}</span>
          <h1>{item.title}</h1>
          <p className="detail-fact">{item.fact}</p>
          {more.text?.map((p) => (
            <p key={p} className="detail-text">
              {p}
            </p>
          ))}
          <ReadAloud text={readText} className="btn-lg" />
        </div>
      </section>

      <div className="detail-grid">
        {more.talk && more.talk.length > 0 && (
          <section className="panel">
            <h2>💬 Snak om det</h2>
            <ul className="talk-list">
              {more.talk.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </section>
        )}

        {more.tasks && more.tasks.length > 0 && (
          <section className="panel">
            <h2>✏️ Opgaver</h2>
            <ol className="task-list">
              {more.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          </section>
        )}

        {videos.length > 0 && (
          <section className="panel panel-wide">
            <h2>🎬 {videos.length > 1 ? "Videoer" : "Video"}</h2>
            <div className="video-list">
              {videos.map((url, i) => {
                const embed = youtubeEmbed(url);
                const title = videos.length > 1 ? `Video ${i + 1}: ${item.title}` : `Video: ${item.title}`;
                return embed ? (
                  <div key={url} className="video">
                    <iframe
                      src={embed}
                      title={title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="btn">
                    ▶️ Se video {videos.length > 1 ? i + 1 : ""}
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {more.links && more.links.length > 0 && (
          <section className="panel">
            <h2>🔗 Links</h2>
            <ul className="link-list">
              {more.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {coloring && (
          <section className="panel panel-wide print-area">
            <div className="panel-head">
              <h2>🖍️ Malebillede</h2>
              <PrintButton />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG-malebilleder skal ikke optimeres */}
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${coloring}`} alt={`Malebillede til ${season.name}`} className="coloring" />
          </section>
        )}
      </div>

      <nav className="detail-nav" aria-label="Forrige og næste">
        {prev ? (
          <Link href={`/${season.id}/${prev.slug}`} className="btn btn-lg">
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/${season.id}/${next.slug}`} className="btn btn-lg">
            {next.label} →
          </Link>
        )}
      </nav>
    </main>
  );
}
