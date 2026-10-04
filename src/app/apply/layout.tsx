import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Statutory Application Forms & Dispatches | Bardhaman Chhatra Kalyan Samiti',
  description: 'Download or submit official application forms for scholarships, membership, Vidyanidhi scheme, and inter-school competition entries.',
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
