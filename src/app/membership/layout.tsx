import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership & Patron District Roll | Bardhaman Chhatra Kalyan Samiti',
  description: 'Join the Samiti as a Life, Ordinary, or Student member. Review member rights, duties, and search the verified active roll.',
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
