'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import { Download, ArrowRight, FileText, CheckCircle2, Phone, Mail, MapPin, Building, Upload, AlertCircle } from 'lucide-react';

export default function ApplyPage() {
  const [activeFormTab, setActiveFormTab] = useState<'membership' | 'scholarship' | 'vidyanidhi' | 'competition' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const forms = [
    {
      id: 'membership',
      title: 'Membership application',
      bengaliTitle: 'সদস্যপদ আবেদন পত্র',
      description: 'For new members, patron supporters, and yearly renewals.',
      ref: 'BCKS/ADM/M-01',
      docs: 'Aadhaar card copy, two stamp-sized photographs, and residential certificate.',
    },
    {
      id: 'scholarship',
      title: 'Scholarship application',
      bengaliTitle: 'মেধাবৃত্তি ও শিক্ষা সহায়তা আবেদন',
      description: 'For secondary & higher secondary students nominated by their school, classes 9–12.',
      ref: 'BCKS/SCH/S-04',
      docs: 'Last annual marksheet, Headmaster testimonial & seal, and family income certificate (BDO/SDO/Panchayat).',
    },
    {
      id: 'vidyanidhi',
      title: 'Vidyanidhi scheme application',
      bengaliTitle: 'বিদ্যানিধি প্রকল্প আবেদন পত্র',
      description: "For the Samiti's term-end higher study grants and university entrance preparation support.",
      ref: 'BCKS/VID/V-02',
      docs: 'Proof of college/institution enrollment, fee voucher estimate, and self-declaration of economic need.',
    },
    {
      id: 'competition',
      title: 'Sponsoring names for competitions',
      bengaliTitle: 'প্রতিযোগিতার শিক্ষার্থী মনোনয়ন',
      description: 'For headmasters, headmistresses, and Teachers-in-Charge submitting student squads.',
      ref: 'BCKS/COMP/N-03',
      docs: 'Institutional seal on official school letterhead, candidate roster with verified dates of birth.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveFormTab(null);
    }, 4000);
  };

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 08 / STATUTORY &amp; ADMINISTRATIVE FORMS</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">FORM REGISTRY</span>
          <span>ACADEMIC YEAR 2026–2027</span>
        </div>

        {/* Page Header */}
        <header className="mb-12">
          <SectionHeader
            badge="Official Dispatches"
            title="Start with the right form."
            subtitle="Keep your documents ready before you begin your submission."
            level="h1"
            className="mb-4"
          />
        </header>

        {/* FORM ROWS SECTION */}
        <section aria-label="Administrative Applications" className="border-t border-[#1F2430]/15">
          {forms.map((form) => (
            <RevealOnScroll
              key={form.id}
              className="py-10 border-b border-[#1F2430]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 flex flex-col">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                  <h2 className="font-serif text-2xl font-bold text-[#1F2430]">
                    {form.title}
                  </h2>
                  <span className="font-serif italic text-lg text-[#7A1F2B]">
                    {form.bengaliTitle}
                  </span>
                </div>
                <p className="text-base text-[#1F2430]/85 font-sans mb-3">
                  {form.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#1F2430]/60">
                  <span className="font-semibold text-[#7A1F2B] uppercase tracking-wider">
                    Form Ref: {form.ref}
                  </span>
                  <span>•</span>
                  <span className="font-sans text-[#1F2430]/75">
                    Accepted documents: {form.docs}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center lg:justify-end gap-3">
                <a
                  href={`#download-${form.id}`}
                  className="inline-flex items-center justify-center h-10 px-4 rounded-[6px] border border-[#1F2430] text-[#1F2430] text-xs font-mono uppercase tracking-wider hover:border-[#7A1F2B] hover:text-[#7A1F2B] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFormTab(form.id as any);
                    setSubmitted(false);
                  }}
                  className="inline-flex items-center justify-center h-10 px-5 rounded-[6px] bg-[#7A1F2B] text-[#FAF6EC] text-xs font-mono uppercase tracking-wider hover:bg-[#661823] transition-colors"
                >
                  Apply online →
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </section>

        {/* Dynamic Online Submission Drawer/Modal */}
        {activeFormTab && (
          <RevealOnScroll className="my-12 p-8 border-2 border-[#7A1F2B] bg-[#F1EADA] rounded-[4px]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7A1F2B] font-semibold">
                  Online Dossier Submission
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F2430] mt-1">
                  {forms.find((f) => f.id === activeFormTab)?.title}
                </h3>
                <p className="text-xs font-mono text-[#1F2430]/60 mt-0.5">
                  Reference: {forms.find((f) => f.id === activeFormTab)?.ref}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveFormTab(null)}
                className="text-sm font-mono text-[#1F2430]/60 hover:text-[#7A1F2B] transition-colors"
              >
                ✕ Close
              </button>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#FAF6EC] border border-[#7A1F2B] rounded-[4px] text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#7A1F2B] mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#1F2430]">
                  Application Recorded in Registry
                </h4>
                <p className="text-sm text-[#1F2430]/80 font-sans max-w-lg mx-auto">
                  Your submission docket has been logged. Physical verification by the Samiti verification team will proceed within 14 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sourav Mondal / Sri Baidyanath"
                      className="w-full h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-sm text-[#1F2430] focus:border-[#7A1F2B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                      Contact Telephone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9434X XXXXX"
                      className="w-full h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-sm text-[#1F2430] focus:border-[#7A1F2B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                      Institution / School / Residential Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="School Name or Village / Town, Bardhaman"
                      className="w-full h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-sm text-[#1F2430] focus:border-[#7A1F2B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                      Upload Attested Dossier (PDF/Scans, Max 5MB)
                    </label>
                    <div className="w-full h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] flex items-center justify-between text-xs text-[#1F2430]/60 cursor-pointer hover:border-[#7A1F2B]">
                      <span>Attach scanned marksheets &amp; letterhead...</span>
                      <Upload className="w-4 h-4 text-[#7A1F2B]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                    Statement of Recommendation / Need (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state academic standing or financial circumstances..."
                    className="w-full p-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-sm text-[#1F2430] focus:border-[#7A1F2B] focus:outline-none font-sans"
                  ></textarea>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center space-x-2 text-xs text-[#1F2430]/70">
                    <CheckCircle2 className="w-4 h-4 text-[#7A1F2B]" />
                    <span>No application fee is ever charged by the Samiti.</span>
                  </div>
                  <button
                    type="submit"
                    className="h-11 px-7 bg-[#7A1F2B] text-[#FAF6EC] rounded-[6px] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#661823] transition-colors"
                  >
                    Submit Official Application
                  </button>
                </div>
              </form>
            )}
          </RevealOnScroll>
        )}

        {/* Archival Status & Submission Channels */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#1F2430]/15 pt-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="w-full h-[1px] bg-[#D9A441] opacity-70 mb-4"></div>
            <p className="text-base text-[#1F2430]/90 leading-relaxed font-sans">
              Need help with filling or submitting a form? Contact the Administrative Desk at{' '}
              <span className="font-semibold text-[#1F2430] font-mono">+91 (0342) 256-0812</span> or reach out via email at{' '}
              <a
                href="mailto:contact@bardhamanchhatra.org"
                className="text-[#7A1F2B] underline hover:text-[#D9A441] transition-colors font-medium"
              >
                contact@bardhamanchhatra.org
              </a>
              . Physical forms can also be submitted directly at Chhatra Kalyan Bhavan, Netaji Subhash Road, Khoshbagan, Bardhaman during working hours (10:00 AM – 5:00 PM, Monday through Saturday).
            </p>

            <div className="pt-4 border-t border-[#1F2430]/10 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-[#1F2430]/75">
              <span>
                <strong className="font-semibold text-[#1F2430]">Physical Verification:</strong> Within 14 working days from receipt
              </span>
              <span>
                <strong className="font-semibold text-[#1F2430]">Attestation:</strong> Gazetted Officer or School Head seal required
              </span>
              <span>
                <strong className="font-semibold text-[#1F2430]">No Processing Fee:</strong> All application kits are provided gratis
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-6 border-l-0 lg:border-l border-[#1F2430]/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold block mb-1">
              Submission Cycle 2026–2027
            </span>
            <p className="text-xs text-[#1F2430]/70 font-sans mb-3">
              Distribution log across registered Purba and Paschim Bardhaman centers.
            </p>
            <div className="p-3 bg-[#F1EADA] border border-[#E2DAC8] rounded-[4px]">
              <svg
                aria-label="Application intake trend chart"
                className="w-full h-14 text-[#7A1F2B]"
                fill="none"
                viewBox="0 0 280 60"
              >
                <path
                  d="M0 45 L40 40 L80 48 L120 30 L160 22 L200 28 L240 12 L280 8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M0 45 L40 40 L80 48 L120 30 L160 22 L200 28 L240 12 L280 8 L280 60 L0 60 Z"
                  fill="currentColor"
                  fillOpacity="0.06"
                ></path>
                <circle cx="240" cy="12" fill="#7A1F2B" r="3.5"></circle>
                <circle cx="280" cy="8" fill="#7A1F2B" r="3.5"></circle>
              </svg>
              <div className="flex justify-between text-[10px] font-mono text-[#1F2430]/60 border-t border-[#1F2430]/10 pt-1 mt-1">
                <span>Aug (Nomination)</span>
                <span>Sep (Peak)</span>
                <span>Oct (Audited)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
