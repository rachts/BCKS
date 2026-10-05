'use client';

import { FormEvent, useRef, useState } from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { fillSampleDetails, validationError } from '@/content/demo';

type GiftType = 'new' | 'renewal' | 'donation';

export default function DonatePage() {
  const [type, setType] = useState<GiftType>('donation');
  const [amount, setAmount] = useState('200');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const submitting = useRef(false);
  const confirmation = <><h3 className="font-serif text-xl">Local demo completed</h3><p className="mt-2">No data was sent to the NGO. No payment was processed or verified, and no receipt was issued or emailed.</p></>;

  const minimum = type === 'new' ? siteContent.fees.newMembership : type === 'renewal' ? siteContent.fees.renewal : siteContent.fees.minimumDonation;
  const validAmount = /^\d+(?:\.\d{1,2})?$/.test(amount.trim()) && Number.isFinite(Number(amount)) && (type === 'donation' ? Number(amount) >= minimum : Number(amount) === minimum);
  const amountError = type === 'donation' ? `Enter a finite amount of at least ₹${minimum.toLocaleString()} with no more than two decimal places.` : `The membership fee is fixed at ₹${minimum.toLocaleString()}.`;

  function reportError(message: string) {
    setError(message);
    setStatus('error');
    requestAnimationFrame(() => errorRef.current?.focus());
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    const element = e.currentTarget;
    const honeypot = element.elements.namedItem('website');
    if (honeypot instanceof HTMLInputElement && honeypot.value) return;
    if (!validAmount) { reportError(amountError); return; }
    const invalid = validationError(element, ['name', 'phone', 'email', 'reference']);
    if (invalid) { reportError(invalid); return; }
    submitting.current = true;
    setError('');
    element.reset();
    setStatus('success');
  }

  return <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen"><div className="max-w-[1000px] mx-auto px-6 py-12">
    <div className="border-b border-[#1F2430]/15 pb-8"><p className="font-mono text-xs uppercase tracking-widest text-[#7A1F2B]">Donate / Join</p><h1 className="font-serif text-4xl md:text-6xl mt-3">Explore membership and donations</h1><p className="mt-5 max-w-2xl">Membership and donation details below use only the fees supplied by the NGO. Payment identifiers remain placeholders until the treasurer verifies them.</p></div>
    <section className="py-10 border-b border-[#1F2430]/15"><h2 className="font-serif text-2xl"><span className="text-[#7A1F2B]">1.</span> Choose type and amount</h2><div className="flex flex-wrap gap-3 mt-6">{(['new','renewal','donation'] as GiftType[]).map((item) => <button disabled={status === 'success'} key={item} type="button" onClick={() => { setType(item); setAmount(String(item === 'new' ? siteContent.fees.newMembership : item === 'renewal' ? siteContent.fees.renewal : siteContent.fees.minimumDonation)); }} className={`px-4 py-3 border rounded ${type === item ? 'bg-[#7A1F2B] text-[#FAF6EC]' : 'border-[#1F2430]/25'}`}>{item === 'new' ? `New membership ₹${siteContent.fees.newMembership.toLocaleString()}` : item === 'renewal' ? `Renewal ₹${siteContent.fees.renewal}` : `Donation from ₹${siteContent.fees.minimumDonation}`}</button>)}</div><div className="mt-5 flex flex-wrap gap-2">{type === 'donation' && [200,500,1000].map((value) => <button disabled={status === 'success'} type="button" key={value} onClick={() => setAmount(String(value))} className="border border-[#1F2430]/25 px-4 py-2 rounded">₹{value}</button>)}<label className="sr-only" htmlFor="amount">Amount</label><input id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} readOnly={type !== 'donation'} disabled={status === 'success'} inputMode="decimal" type="number" min={minimum} step="0.01" aria-invalid={!validAmount} aria-describedby={!validAmount ? 'amount-error' : undefined} className="border border-[#1F2430]/25 px-3 py-2 rounded bg-transparent" /></div>{!validAmount && <p id="amount-error" className="text-red-800 text-sm mt-2">{amountError}</p>}</section>
     <section className="py-10 border-b border-[#1F2430]/15"><h2 className="font-serif text-2xl"><span className="text-[#7A1F2B]">2.</span> Awaiting verified payment details</h2><p className="mt-4">UPI ID: <strong>{siteContent.payment.upiId}</strong></p><p>QR: {siteContent.payment.qrAsset}</p><p className="mt-4">Bank account: {siteContent.payment.accountNumber} · IFSC: {siteContent.payment.ifsc} · Branch: {siteContent.payment.bankBranch}</p><p className="text-sm mt-4">These are placeholders only; no real payment details are shown. Do not pay. This private demo does not process payments or connect to the NGO. A future NGO-owned Apps Script service may be connected only after separate approval.</p><p className="text-sm mt-4">12A: {siteContent.legal.twelveA}</p><p className="text-sm">80G: {siteContent.legal.eightyG}</p></section>
    <section className="py-10">
      <h2 className="font-serif text-2xl"><span className="text-[#7A1F2B]">3.</span> Try the confirmation form</h2>
      <p className="mt-4 border border-[#7A1F2B] p-4 text-sm">Private demo: this form is not connected to the NGO. Running the demo only performs a local test with no network request; this site does not send or intentionally persist entered details. Your browser may retain inputs. Use synthetic sample details, not personal information. No PAN or files are collected.</p>
       <p className="mt-4 text-sm">This build cannot submit applications or payments. We will email your receipt after we verify your payment. That is the intended future live process; no receipt is emailed in this demo, and timing is unconfirmed.</p>
      {status === 'success' ? <div role="status" className="mt-6 border border-[#7A1F2B] p-6">{confirmation}<button type="button" onClick={() => { setStatus('idle'); setError(''); setType('donation'); setAmount(String(siteContent.fees.minimumDonation)); submitting.current = false; }} className="mt-5 border border-[#7A1F2B] px-4 py-2 rounded">Restart demo</button></div> :
         <form ref={formRef} onSubmit={submit} aria-describedby={status === 'error' ? 'donate-form-error' : undefined} autoComplete="off" className="mt-6">
          {status === 'error' && <p ref={errorRef} id="donate-form-error" role="alert" tabIndex={-1} className="text-red-800 mb-5">{error}</p>}
            <fieldset className="space-y-5">
            <button type="button" onClick={() => { fillSampleDetails(formRef.current); setError(''); setStatus('idle'); }} className="border border-[#7A1F2B] px-4 py-2 rounded">Use sample details</button>
            <input type="hidden" name="type" value={type} />
             <div className="grid md:grid-cols-2 gap-5">{[['name','Name','text'],['phone','Phone','tel'],['email','Email','email'],['reference','UPI reference / bank UTR','text']].map(([name,label,inputType]) => <label key={name} className="text-sm">{label}<input required name={name} type={inputType} onBlur={name === 'email' ? (e) => { e.currentTarget.value = e.currentTarget.value.trim(); } : undefined} className="mt-2 w-full border border-[#1F2430]/25 px-3 py-3 rounded bg-transparent" /></label>)}</div>
            <label className="hidden" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" name="website" /></label>
              <button className="bg-[#7A1F2B] text-[#FAF6EC] px-6 py-3 rounded">Run local demo</button>
          </fieldset>
        </form>}
      <p className="mt-8 text-sm">Need scholarship information? <Link className="text-[#7A1F2B] underline" href="/scholarships">Read the eligibility criteria</Link>.</p>
    </section>
  </div></div>;
}
