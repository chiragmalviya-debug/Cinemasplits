import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { EmotionPicker } from '@/components/EmotionPicker';
import { FilmCard } from '@/components/FilmCard';
import { getEmotion, moodWorlds } from '@/lib/data/taxonomy';
import { getFilms } from '@/lib/data/films';
import type { Emotion, MoodWorld } from '@/lib/types';

interface PageProps {
  params: { world: string; emotion: string };
}

// Pre-render every world/emotion combination at build time
export function generateStaticParams() {
  return moodWorlds.flatMap((w: MoodWorld) =>
    w.emotions.map((e: Emotion) => ({ world: w.slug, emotion: e.slug }))
  );
}

export function generateMetadata({ params }: PageProps) {
  const data = getEmotion(params.world, params.emotion);
  if (!data) return { title: 'Not found — Cinemasplit' };
  const { world, emotion } = data;
  return {
    title: `${emotion.name} — ${world.name} — Cinemasplit`,
    description: emotion.tagline,
  };
}

export default function EmotionPage({ params }: PageProps) {
  const data = getEmotion(params.world, params.emotion);
  if (!data) notFound();

  const { world, emotion } = data;
  const films = getFilms(world.slug, emotion.slug);

  // Find next emotion for the CTA at the bottom
  const idx = world.emotions.findIndex((e: Emotion) => e.slug === emotion.slug);
  const next = world.emotions[(idx + 1) % world.emotions.length];

  return (
    <>
      {/* Page-level world atmosphere — bleeds the world's mood across the entire viewport */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: world.pageAtmosphere }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-14 relative z-[1]">
        <Nav currentPath="/" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-[12px] tracking-[0.22em] uppercase text-ink-muted pt-14 pb-6">
          <Link href="/" className="hover:text-ink transition-colors duration-500 flex items-center gap-2">
            &larr; All worlds
          </Link>
          <span className="text-ink-faint">/</span>
          <span className="text-ink">World {world.number}</span>
        </div>

        {/* World Hero */}
        <section className="pb-20 border-b border-[var(--line)]">
          <div className="text-[11px] tracking-[0.42em] uppercase mb-8 font-medium flex items-center gap-3.5" style={{ color: 'var(--accent)' }}>
            <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
            World {world.number} &middot; Four emotional states
          </div>
          <h1 className="font-serif text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-[0.92] tracking-[-0.035em] text-ink mb-8">
            {world.name}
          </h1>
          <p className="font-serif italic text-[22px] md:text-[30px] lg:text-[34px] leading-[1.3] text-ink-muted max-w-[720px] tracking-[-0.01em]">
            {world.description}
          </p>
        </section>

        <EmotionPicker world={world} activeEmotion={emotion.slug} />

        {/* Films */}
        <section className="py-20 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-end mb-20">
            <div className="text-[11px] tracking-[0.42em] uppercase text-ink-muted">
              Curated films
              <span className="block font-serif italic text-[48px] text-ink normal-case tracking-[-0.02em] mt-2.5 leading-none">
                {String(films.length).padStart(2, '0')}
              </span>
            </div>
            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] tracking-[-0.018em] text-ink">
              <em className="italic">{emotion.tagline}</em>
            </h2>
          </div>

          {films.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif italic text-[26px] text-ink-muted max-w-[520px] mx-auto leading-[1.4]">
                Curation in progress. This emotion is being written.
              </p>
              <p className="mt-6 text-[12px] tracking-[0.25em] uppercase text-ink-faint">
                Check back soon &mdash; or pick another emotion above.
              </p>
            </div>
          ) : (
            films.map((film, i) => (
              <FilmCard key={film.title} film={film} index={i} total={films.length} />
            ))
          )}
        </section>

        {/* Next emotion CTA */}
        <section className="py-20 border-t border-[var(--line)] grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-6 md:gap-16 items-center">
          <div className="text-[11px] tracking-[0.42em] uppercase text-ink-muted">
            Next emotion in this world
          </div>
          <Link
            href={`/${world.slug}/${next.slug}`}
            className="font-serif italic text-[28px] md:text-[36px] lg:text-[42px] text-ink no-underline tracking-[-0.015em] inline-flex items-center gap-5 hover:gap-[30px] transition-all duration-500"
          >
            {next.name} <span style={{ color: 'var(--accent)' }}>&rarr;</span>
          </Link>
          <Link
            href="/"
            className="text-[11px] tracking-[0.22em] uppercase text-ink-muted hover:text-ink transition-colors duration-400 whitespace-nowrap no-underline"
          >
            &larr; All worlds
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
}
