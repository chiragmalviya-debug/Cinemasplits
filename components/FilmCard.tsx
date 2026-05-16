import { Film } from '@/lib/types';

export function FilmCard({ film, index, total }: { film: Film; index: number; total: number }) {
  const num = String(index + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');

  return (
    <article className="film grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-14 py-14 border-t border-[var(--line)] items-start last:border-b last:border-[var(--line)]">
      {/* Atmospheric poster placeholder */}
      <div
        className="relative aspect-[3/4] overflow-hidden flex items-end p-7 transition-transform duration-700 ease-out hover:-translate-y-1 cursor-pointer max-w-[220px] md:max-w-none"
        style={{ background: film.posterStill }}
      >
        <span
          aria-hidden
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 100%)' }}
        />
        <span
          aria-hidden
          className="absolute inset-0 z-[2] opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.85  0 0 0 0 0.78  0 0 0 0.65 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
          }}
        />
        <span className="relative z-[3] font-serif italic text-[72px] leading-[0.9] text-ink tracking-[-0.03em]">
          {film.year}
        </span>
      </div>

      <div className="pt-2">
        <div className="text-[11px] tracking-[0.35em] uppercase text-ink-muted mb-5">
          Film {num} of {totalStr}
        </div>
        <h3 className="font-serif text-[28px] md:text-[36px] xl:text-[42px] leading-[1.08] tracking-[-0.02em] text-ink mb-3.5">
          {film.title}
        </h3>
        <p className="text-[12px] tracking-[0.18em] uppercase text-ink-muted mb-7">
          <span className="font-serif italic normal-case tracking-normal text-[14px] text-ink">
            {film.director}
          </span>
          &nbsp;&middot;&nbsp; {film.year} &nbsp;&middot;&nbsp; {film.runtime} min &nbsp;&middot;&nbsp; {film.genre}
        </p>
        <p
          className="text-[10px] tracking-[0.42em] uppercase mb-3.5 font-medium"
          style={{ color: 'var(--accent)' }}
        >
          Why this film
        </p>
        <p className="text-[16px] leading-[1.7] text-ink mb-8 max-w-[620px] font-light">
          {film.why}
        </p>
        <p className="border-t border-[var(--line)] pt-5 text-[13px] tracking-[0.16em] uppercase text-ink-muted flex items-baseline flex-wrap gap-3">
          After the credits &mdash;{' '}
          <em className="font-serif italic text-[19px] normal-case tracking-[-0.005em] text-ink">
            {film.after}
          </em>
        </p>
      </div>
    </article>
  );
}
