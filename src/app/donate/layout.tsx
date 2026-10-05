import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate / Join',
  description: 'New membership Rs 2,000, annual renewal Rs 500, and donations from Rs 200. Payment details and tax status await verification.',
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
