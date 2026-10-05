import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership | Bardhaman Chhatra Kalyan Samiti',
  description: 'New membership Rs 2000; renewal Rs 500 per year. [TODO: membership terms and approved public register].',
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
