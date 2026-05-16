import Link from 'next/link';
import { MoodWorld } from '@/lib/types';

export function EmotionPicker({
  world,
  activeEmotion,
}: {
  world: MoodWorld;
  activeEmotion: string;
}) {
  return (
    <section className="py-14 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start border-b border-[var(--line)]">
      <div className="text-[11px] tracking-[0.42em] uppercase text-ink-muted pt-3.5">
        Choose your emotion
        <span className="block font-serif italic text-[28px] text-ink normal-case tracking-[-0.02em] mt-2.5 leading-none">
          0{world.emotions.length}
        </span>
      </div>
      <div className="flex flex-wrap">
        {world.emotions.map((e) => {
          const isActive = e.slug === activeEmotion;
          return (
            <Link
              key={e.slug}
              href={`/${world.slug}/${e.slug}`}
              className={`font-serif italic text-[22px] md:text-[30px] xl:text-[36px] py-2 mr-9 tracking-[-0.015em] relative transition-colors duration-500 ${
                isActive ? 'text-ink' : 'text-ink-faint hover:text-ink-muted'
              }`}
            >
              {e.name}
              {isActive && (
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: 'var(--accent)' }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
