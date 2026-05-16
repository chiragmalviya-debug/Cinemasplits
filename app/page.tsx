import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MoodWorldCard } from '@/components/MoodWorldCard';
import { moodWorlds } from '@/lib/data/taxonomy';

export default function HomePage() {
  return (
    <>
      <div className="glow cyan" />
      <div className="glow amber" />
      <div className="glow rose" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-14 relative z-[1]">
        <Nav currentPath="/" />

        {/* HERO */}
        <section className="py-20 md:py-36">
          <div className="text-[11px] tracking-[0.42em] uppercase text-ink-muted mb-12 flex items-center gap-4">
            <span className="w-12 h-px bg-ink-faint" />
            An emotional atlas of cinema
          </div>
          <h1 className="font-serif text-[60px] sm:text-[80px] md:text-[110px] lg:text-[140px] leading-[0.96] tracking-[-0.025em] mb-14 text-ink max-w-[1180px]">
            Cinema, <em className="font-serif italic" style={{ color: 'var(--accent)' }}>split</em> by the way you feel.
          </h1>
          <p className="text-[19px] leading-[1.65] text-ink-muted max-w-[580px] mb-[72px] font-light">
            Not happy. Not sad. The exact emotional weight you&apos;re carrying right now. We&apos;ve
            curated cinema around 36 emotional truths &mdash; so the right film can find you when you
            need it most.
          </p>
          <Link
            href="#worlds"
            className="scroll-cue inline-flex items-center gap-3.5 text-[12px] tracking-[0.22em] uppercase text-ink no-underline py-4 border-b border-[var(--line-strong)] transition-all duration-500 hover:gap-[22px]"
            style={{ borderBottomColor: 'var(--line-strong)' }}
          >
            Choose a feeling{' '}
            <span className="font-serif italic text-[22px] normal-case tracking-normal" style={{ color: 'var(--accent)' }}>
              &rarr;
            </span>
          </Link>
        </section>

        {/* WORLDS */}
        <section id="worlds" className="py-16 pb-36">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-end pb-20 border-b border-[var(--line)]">
            <div className="text-[11px] tracking-[0.4em] uppercase text-ink-muted">
              Nine emotional worlds
              <span className="block font-serif italic text-[72px] text-ink mt-3.5 tracking-[-0.03em] normal-case leading-none">
                36
              </span>
              curated states
            </div>
            <h2 className="font-serif text-[34px] md:text-[52px] lg:text-[64px] leading-[1.06] tracking-[-0.018em] text-ink">
              Pick the world{' '}
              <em className="italic text-ink-muted">that matches your weight.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border-b border-[var(--line)]">
            {moodWorlds.map((world) => (
              <MoodWorldCard key={world.slug} world={world} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
