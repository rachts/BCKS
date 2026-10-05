import Link from 'next/link';

export const metadata = { title: 'Refund policy', description: 'Draft refund policy for membership fees and donations.' };

export default function RefundPolicyPage() {
  return <article className="max-w-[900px] mx-auto px-6 py-16 prose prose-slate">
    <p className="font-mono text-xs uppercase tracking-widest text-maroon">Draft for NGO review</p>
    <h1>Refund policy</h1>
    <p>This draft covers donations and membership fees. It is not a final policy until approved by the NGO governing body.</p>
    <h2>Donations</h2><p>[TODO: the governing body must supply whether and when a donation can be refunded, and the approval process.]</p>
    <h2>Membership fees</h2><p>[TODO: the governing body must supply the refund and cancellation rules for new membership and annual renewal.]</p>
    <h2>Contact</h2><p>[TODO: verified finance contact]</p>
    <Link href="/" className="text-maroon underline">Return home</Link>
  </article>;
}
