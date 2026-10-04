import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate & 80G Tax Exemption | Bardhaman Chhatra Kalyan Samiti',
  description: 'Support indigent scholars with direct UPI and Bank transfers. Zero overhead deductions, 50% tax exemption under Section 80G.',
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
