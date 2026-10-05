'use client';
import { FormEvent, useRef, useState } from 'react';
import Link from 'next/link';
import { fillSampleDetails, validationError } from '@/content/demo';

export default function ApplyPage() {
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const submitting = useRef(false);
  const confirmation = <><h3 className="font-serif text-xl">Local demo completed — no application sent</h3><p className="mt-2">No application was sent to the NGO. No selection decision or acknowledgment was issued. The site did not send or intentionally persist your inputs; your browser may retain them.</p></>;
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
    const invalid = validationError(element, ['name', 'phone', 'school', 'class']);
    if (invalid) { reportError(invalid); return; }
    submitting.current = true;
    setError('');
    element.reset();
    setStatus('success');
  }
  return <div className="bg-[#FAF6EC] min-h-screen text-[#1F2430]"><div className="max-w-[1000px] mx-auto px-6 py-12">
    <p className="font-mono text-xs uppercase tracking-widest text-[#7A1F2B]">Applications</p><h1 className="font-serif text-4xl md:text-6xl mt-3">Explore the scholarship application</h1><p className="mt-5 max-w-2xl">The scholarship criteria below are supplied by the NGO. The notified period, selection details and final document list are still to be supplied.</p>
    <section className="mt-10 border-y border-[#1F2430]/15 py-8"><h2 className="font-serif text-2xl">Scholarship eligibility</h2><ol className="mt-5 list-decimal pl-6 space-y-3"><li>Meritorious student of a government or government-sponsored school, class 9–12, from a financially disadvantaged background.</li><li>Name sponsored by the headmaster, headmistress or TIC.</li><li>Properly filled application submitted in the notified period.</li><li>Student appears before the selection board with a parent and all papers on the notified date, time and place.</li></ol><p className="mt-5 text-sm">Notified period and selection details: <strong>[TODO: supplied notice]</strong></p></section>
    <section className="py-10">
      <h2 className="font-serif text-2xl">Try the application form</h2>
      {status !== 'success' && <p className="mt-4 border border-[#7A1F2B] p-4 text-sm">Private demo: submitting runs only a local demo, with no network request. The site does not send or intentionally persist your inputs; your browser may retain them. Use only synthetic sample details, never personal information. No files are collected.</p>}
       <p className="mt-4 text-sm">This private demo is not connected to the NGO and cannot accept a real application. A future NGO-owned Apps Script service may be connected only after separate approval; no service is connected now.</p>
      {status === 'success' ? <div role="status" className="mt-6 border border-[#7A1F2B] p-6">{confirmation}<button type="button" onClick={() => { setStatus('idle'); setError(''); submitting.current = false; }} className="mt-5 border border-[#7A1F2B] px-4 py-2 rounded">Restart demo</button></div> :
         <form ref={formRef} onSubmit={submit} aria-describedby={status === 'error' ? 'apply-form-error' : undefined} autoComplete="off" className="mt-6">
          {status === 'error' && <p ref={errorRef} id="apply-form-error" role="alert" tabIndex={-1} className="text-red-800 mb-5">{error}</p>}
            <fieldset className="space-y-5">
            <button type="button" onClick={() => { fillSampleDetails(formRef.current); setError(''); setStatus('idle'); }} className="border border-[#7A1F2B] px-4 py-2 rounded">Use sample details</button>
            <div className="grid md:grid-cols-2 gap-5">
              <label className="text-sm">Applicant name<input required name="name" className="mt-2 w-full border border-[#1F2430]/25 px-3 py-3 rounded bg-transparent" /></label>
              <label className="text-sm">Phone<input required name="phone" type="tel" className="mt-2 w-full border border-[#1F2430]/25 px-3 py-3 rounded bg-transparent" /></label>
              <label className="text-sm">Email (optional)<input name="email" type="email" onBlur={(e) => { e.currentTarget.value = e.currentTarget.value.trim(); }} className="mt-2 w-full border border-[#1F2430]/25 px-3 py-3 rounded bg-transparent" /></label>
              <label className="text-sm">School<input required name="school" className="mt-2 w-full border border-[#1F2430]/25 px-3 py-3 rounded bg-transparent" /></label>
              <label className="text-sm">Class<input required name="class" min="9" max="12" type="number" className="mt-2 w-full border border-[#1F2430]/25 px-3 py-3 rounded bg-transparent" /></label>
            </div>
            <label className="hidden" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" name="website" /></label>
              <button className="bg-[#7A1F2B] text-[#FAF6EC] px-6 py-3 rounded">Run local demo</button>
          </fieldset>
        </form>}
      <p className="mt-8 text-sm">Paper application form: <strong>[TODO: supplied paper form]</strong></p><p className="mt-3 text-sm"><Link href="/privacy" className="text-[#7A1F2B] underline">Read the draft privacy notice</Link>.</p>
    </section>
  </div></div>;
}
