import Link from 'next/link';

export function Wordmark() {
  return (
    <Link
      href="/"
      className="font-serif italic text-[28px] tracking-[-0.02em] text-ink leading-none flex items-center gap-2 no-underline"
    >
      Cinemasplit
      <span
        className="inline-block w-[7px] h-[7px] rounded-full mb-1"
        style={{
          background: 'var(--accent)',
          boxShadow: '0 0 14px var(--accent)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
    </Link>
  );
}
