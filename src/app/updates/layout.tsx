import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Official Dispatches & Circulars Gazette | Bardhaman Chhatra Kalyan Samiti',
  description: 'Chronicle of notices, scholarship awardee notifications, health camp schedules, and downloadable circular PDFs.',
};

export default function UpdatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
