import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scholarship applications',
  description: 'Read the supplied scholarship eligibility criteria for classes 9–12. The application notice and submission arrangements await confirmation.',
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
