import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz, Drawing & Cultural Competitions | Bardhaman Chhatra Kalyan Samiti',
  description: 'Quiz, drawing and cultural competitions are activities of Bardhaman Chhatra Kalyan Samiti, Bardhaman, West Bengal. [TODO: notified competition details]',
};

export default function CompetitionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
