import Link from 'next/link';
import { Wordmark } from './Wordmark';

export function Nav({ currentPath }: { currentPath?: string }) {
  const linkClasses =
    'text-[12px] tracking-[0.22em] uppercase text-ink-muted hover:text-ink transition-colors duration-500 no-underline';

  const currentMark =
    'relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[1px] after:bg-accent text-ink';

  return (
    <nav className="flex justify-between items-center py-9 border-b border-[var(--line)]">
      <Wordmark />
      <div className="flex gap-10">
        <Link
          href="/"
          className={`${linkClasses} ${currentPath === '/' ? currentMark : ''}`}
        >
          Worlds
        </Link>
        <Link href="#" className={linkClasses}>
          Journal
        </Link>
        <Link href="#" className={linkClasses}>
          About
        </Link>
      </div>
    </nav>
  );
}
