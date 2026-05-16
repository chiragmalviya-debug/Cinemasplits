import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cinemasplit — Cinema, split by the way you feel',
  description:
    'An emotional atlas of cinema. 36 curated emotional states across 9 mood worlds. Find the films that have already understood you.',
  openGraph: {
    title: 'Cinemasplit',
    description: 'Cinema, split by the way you feel.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
