export function Footer() {
  return (
    <footer className="pt-24 pb-14 border-t border-[var(--line)] mt-20 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-end">
      <p className="font-serif italic text-[26px] md:text-[30px] leading-[1.4] text-ink max-w-[560px] tracking-[-0.012em]">
        Films don&apos;t just entertain. They quietly confirm you were seen &mdash; long before
        anyone in your real life knew how to.
      </p>
      <div className="md:text-right text-[11px] tracking-[0.25em] uppercase text-ink-muted leading-[2.4]">
        <span className="block">
          <a href="#" className="hover:text-ink transition-colors duration-500">Instagram</a>
        </span>
        <span className="block">
          <a href="#" className="hover:text-ink transition-colors duration-500">Twitter</a>
        </span>
        <span className="block">
          <a href="#" className="hover:text-ink transition-colors duration-500">Letterboxd</a>
        </span>
        <span className="block mt-6 font-serif italic text-[13px] tracking-[0.02em] normal-case text-ink-faint">
          Cinemasplit &middot; 2026
        </span>
      </div>
    </footer>
  );
}
