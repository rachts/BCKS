import Link from 'next/link';

export const metadata = { title: 'Privacy notice', description: 'Draft privacy notice for Bardhaman Chhatra Kalyan Samiti.' };

export default function PrivacyPage() {
  return <article className="max-w-[900px] mx-auto px-6 py-16 prose prose-slate">
    <p className="font-mono text-xs uppercase tracking-widest text-maroon">Draft for NGO review</p>
    <h1>Privacy notice</h1>
    <p>This draft explains how BCKS may handle information submitted through this website. It must be reviewed and approved by the NGO before publication.</p>
    <h2>Information collected</h2><p>Forms should collect only the information needed to respond to an application or verify a payment, such as name, contact details, amount, reference number and optional supporting documents.</p>
    <h2>Storage and access</h2><p>[TODO: the NGO must supply the approved storage location, retention period, access roles and deletion process.]</p>
    <h2>Contact</h2><p>[TODO: verified privacy contact]</p>
    <Link href="/" className="text-maroon underline">Return home</Link>
  </article>;
}
