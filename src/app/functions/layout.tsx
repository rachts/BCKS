import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Functions & Photographic Monographs | Bardhaman Chhatra Kalyan Samiti',
  description: 'Archival photographic documentation of annual conclaves, Vidyasagar birth anniversaries, and cultural memorials in Purba Bardhaman.',
};

export default function FunctionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
