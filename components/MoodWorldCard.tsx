'use client';

import Link from 'next/link';
import { useRef, type CSSProperties, type MouseEvent } from 'react';
import { MoodWorld } from '@/lib/types';

export function MoodWorldCard({ world }: { world: MoodWorld }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
  };

  // Link to the first emotion of this world
  const firstEmotion = world.emotions[0]?.slug;
  const href = firstEmotion ? `/${world.slug}/${firstEmotion}` : '/';

  return (
    <Link
      href={href}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="world group relative bg-bg overflow-hidden no-underline text-inherit flex flex-col justify-between p-10 px-[34px] min-h-[420px] isolate"
      style={
        {
          // CSS custom properties consumed by ::before / ::after
          ['--still' as string]: world.still,
        } as CSSProperties
      }
    >
      {/* Atmospheric still — always visible, deepens on hover */}
      <span
        aria-hidden
        className="absolute inset-0 -z-20 transition-[opacity,transform] duration-700 ease-out opacity-[0.55] group-hover:opacity-[0.95] group-hover:scale-[1.04]"
        style={{ background: world.still }}
      />
      {/* Cyan spotlight that follows cursor on hover */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle 220px at var(--mx, 50%) var(--my, 50%), rgba(19,237,255,0.10), transparent 70%)',
        }}
      />

      <div className="relative z-10 text-[11px] tracking-[0.3em] uppercase text-ink-muted font-normal group-hover:text-ink transition-colors duration-500 flex items-center gap-[14px]">
        <span className="inline-block w-5 h-px bg-ink-faint group-hover:bg-ink group-hover:w-8 transition-all duration-500" />
        {world.number} &mdash; {world.name}
      </div>

      <div className="relative z-10">
        <h3 className="font-serif text-[32px] leading-[1.08] tracking-[-0.015em] mt-14 mb-6 text-ink transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
          <em className="font-serif italic">{world.tagline}</em>
        </h3>
        <div className="text-[13px] leading-[1.95] text-ink-muted group-hover:text-ink transition-colors duration-700">
          {world.emotions.map((e) => (
            <span key={e.slug} className="block">
              {e.name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-center mt-8 text-[11px] tracking-[0.28em] uppercase text-ink-muted group-hover:text-ink transition-colors duration-700">
        <span>4 emotions</span>
        <span className="font-serif italic text-[16px] normal-case tracking-normal inline-flex items-center gap-2 group-hover:gap-[14px] transition-all duration-500" style={{ color: 'var(--accent)' }}>
          Enter <span aria-hidden>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
