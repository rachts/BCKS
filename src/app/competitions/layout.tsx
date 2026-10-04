import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annual Inter-School Competitions & Laureates | Bardhaman Chhatra Kalyan Samiti',
  description: 'Inter-school quiz, drawing, sit-and-draw, and Bengali recitation meets uniting 45+ secondary schools across Purba Bardhaman.',
};

export default function CompetitionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
