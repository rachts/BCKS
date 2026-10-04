'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { Award, ChevronDown, ChevronUp, Download, ArrowRight, BookOpen, Trophy } from 'lucide-react';

export default function CompetitionsPage() {
  const [openClause, setOpenClause] = useState<number | null>(0);

  const categories = [
    {
      name: 'Quiz',
      subtitle: 'General & Regional Lore',
      classes: 'Classes 9–10 & 11–12',
      format: 'Teams of 2 pupils per school; written screening prelims followed by 6-team stage finals (General Knowledge, Science, Bengal History & Heritage).',
    },
    {
      name: 'Drawing & Fine Arts',
      subtitle: 'Medium: Water & Pastel',
      classes: 'Classes 6–8 & 9–12',
      format: 'Sit-and-draw on-the-spot thematic contest; art paper supplied by Samiti; themes announced 15 mins prior (Nature, Rural Bengal, Great Reformers).',
    },
    {
      name: 'Bengali Recitation',
      subtitle: 'Oratory & Verse',
      classes: 'Classes 6–8 & 9–12',
      format: 'Solo performance; prescribed classical & modern Bengali verses (Rabindranath Tagore, Kazi Nazrul Islam, Jibanananda Das, Sukanta Bhattacharya).',
    },
  ];

  const clauses = [
    {
      title: 'Clause I — Eligibility & School Accreditation',
      summary: 'Open exclusively to bona fide students of recognized secondary and higher secondary schools in Purba Bardhaman district.',
      details: 'Every participant docket must be strictly endorsed with the official round seal and countersignature of the institutional Headmaster or Principal. Private candidates and independent tuitions are non-eligible under statutory bylaws. Date-of-birth records as per WBBSE or equivalent central boards must match submitted student declarations precisely.',
    },
    {
      title: 'Clause II — Conduct & Reporting Protocols',
      summary: 'All participants must report in school uniform with legitimate identity cards 45 minutes before scheduled session.',
      details: 'Late arrivals beyond the final roll call forfeit seat allocation. Electronic communication devices, smartwatches, and preparatory printed reference material are strictly prohibited inside the competition enclosure. Accompanying teacher mentors will remain seated in the upper gallery of Town Hall.',
    },
    {
      title: 'Clause III — Adjudication & Award Honors',
      summary: 'Decisions of the independent panel of collegiate professors and veteran headmasters are final and binding; certified certificates and book bursaries conferred on stage.',
      details: 'Evaluation criteria emphasize original interpretation, grammatical fidelity, poise, and conceptual depth. Tabulation sheets are countersigned by the Presiding Registrar. All district laureates receive commemorative silver plaques, institutional book bursaries worth up to ₹5,000, and automatic nomination to the Medha Chhatravritti state vetting circuit.',
    },
  ];

  const yearResults = [
    {
      year: '2025',
      edition: '14th Annual District Meet',
      winners: [
        { event: 'Inter-School Quiz', school: 'Burdwan Municipal High School (Class 10)', laureates: 'Soumyajit Ray & Arpan Mukherjee' },
        { event: 'Senior Sit & Draw', school: 'Memari Vidyasagar Memorial (Class 11)', laureates: 'Anwesha Ghosh' },
        { event: 'Junior Recitation', school: "Kalna Maharaja's High School (Class 7)", laureates: 'Subhashree Roy' },
      ],
    },
    {
      year: '2024',
      edition: '13th Annual District Meet',
      winners: [
        { event: 'Inter-School Quiz', school: 'Bardhaman Raj Collegiate School (Class 12)', laureates: 'Ritobroto Sen & Debanjan Pal' },
        { event: 'Senior Sit & Draw', school: "Burdwan Municipal Girls' High School (Class 10)", laureates: 'Tanusree Kundu' },
        { event: 'Senior Recitation', school: 'Galsi High School (Class 9)', laureates: 'Protyush Mondal' },
      ],
    },
    {
      year: '2023',
      edition: '12th Annual District Meet',
      winners: [
        { event: 'Inter-School Quiz', school: 'Khandaghosh High School (Class 10)', laureates: 'Sayan Kar & Pritam Das' },
        { event: 'Junior Sit & Draw', school: 'Memari Rasiklal Smriti Vidyalaya (Class 8)', laureates: 'Sneha Das' },
        { event: 'Senior Recitation', school: 'Burdwan Town School (Class 11)', laureates: 'Abhirup Banerjee' },
      ],
    },
  ];

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 06 / ANNUAL ACADEMIC &amp; CULTURAL CONTESTS</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">DISTRICT ACADEMY ROSTER</span>
          <span>ESTD. 2011</span>
        </div>

        {/* Page Header */}
        <header className="pb-12 border-b border-[#1F2430]/15">
          <SectionHeader
            badge="Competitions"
            title="A stage for every school in Bardhaman."
            subtitle="The Annual Inter-School Talent Meet unites over 45 institutions across Purba Bardhaman in wholesome scholastic rivalry, literary expression, and artistic excellence."
            level="h1"
            className="mb-4 max-w-4xl"
          />
        </header>

        {/* Section 01: Academic & Cultural Categories Table */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              01 / Academic &amp; Cultural Categories
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse border-t border-b border-[#1F2430]/15">
              <thead>
                <tr className="border-b border-[#1F2430]/15 text-[11px] font-mono uppercase tracking-wider text-[#1F2430]/60">
                  <th className="py-4 pr-6 font-medium w-1/4">EVENT</th>
                  <th className="py-4 px-6 font-medium text-right w-1/4">CLASS GROUP</th>
                  <th className="py-4 pl-8 font-medium w-1/2">FORMAT &amp; CRITERIA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2430]/15 text-sm text-[#1F2430]">
                {categories.map((cat, idx) => (
                  <tr key={idx} className="align-top hover:bg-[#F1EADA]/40 transition-colors">
                    <td className="py-6 pr-6">
                      <span className="font-serif font-bold text-lg block text-[#1F2430]">
                        {cat.name}
                      </span>
                      <span className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider mt-1 block">
                        {cat.subtitle}
                      </span>
                    </td>
                    <td className="py-6 px-6 text-right font-serif text-base text-[#7A1F2B] font-semibold">
                      {cat.classes}
                    </td>
                    <td className="py-6 pl-8 text-sm text-[#1F2430]/85 font-sans leading-relaxed">
                      {cat.format}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 02: Regulatory Code (Collapsibles) */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              02 / Regulatory Code
            </span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-8">
            District Competition Bylaws
          </h2>

          <div className="divide-y divide-[#1F2430]/15 border-t border-b border-[#1F2430]/15">
            {clauses.map((clause, idx) => {
              const isOpen = openClause === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenClause(isOpen ? null : idx)}
                    className="w-full flex items-start justify-between gap-4 text-left group focus:outline-none"
                  >
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-lg text-[#1F2430] group-hover:text-[#7A1F2B] transition-colors">
                        {clause.title}
                      </h3>
                      <p className="text-sm text-[#1F2430]/75 font-sans pr-6">
                        {clause.summary}
                      </p>
                    </div>
                    <span className="font-serif text-2xl text-[#7A1F2B] shrink-0 mt-1 select-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-12 text-sm text-[#1F2430]/80 font-sans leading-relaxed border-t border-[#1F2430]/10 mt-3 animate-fadeIn">
                      <p>{clause.details}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 03: Results — Year-wise Archive */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              03 / Chronicle of Excellence
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#1F2430] mb-12">
            Archival Register of Champions
          </h2>

          <div className="space-y-16">
            {yearResults.map((yearGroup) => (
              <RevealOnScroll
                key={yearGroup.year}
                className="border-t border-[#1F2430]/15 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-3">
                  <div className="font-serif italic text-6xl lg:text-7xl font-bold text-[#7A1F2B] leading-none">
                    {yearGroup.year}
                  </div>
                  <span className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-widest block mt-2">
                    {yearGroup.edition}
                  </span>
                </div>

                <div className="lg:col-span-9 space-y-4">
                  <div className="border-t border-b border-[#1F2430]/15 divide-y divide-[#1F2430]/10 font-sans">
                    {yearGroup.winners.map((winner, widx) => (
                      <div
                        key={widx}
                        className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm"
                      >
                        <span className="font-serif font-bold text-base text-[#1F2430] sm:w-1/3">
                          {winner.event}
                        </span>
                        <span className="text-[#1F2430]/80">
                          {winner.school}
                        </span>
                        <span className="font-serif italic text-right text-[#7A1F2B] font-semibold">
                          {winner.laureates}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={`#results-${yearGroup.year}`}
                      className="inline-flex items-center gap-1.5 text-[#7A1F2B] text-xs font-mono font-semibold uppercase hover:text-[#D9A441] underline underline-offset-4 decoration-[#7A1F2B]/40 transition-colors"
                    >
                      <span>Download {yearGroup.year} official results gazette (PDF)</span>
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Section 04: Sponsor a Prize Call-Out */}
        <section className="py-16">
          <div className="w-full bg-[#F1EADA] border border-[#E2DAC8] p-8 md:p-12 relative rounded-[4px]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="text-[#7A1F2B] font-mono text-xs uppercase tracking-widest font-semibold block">
                  PERPETUAL ENDOWMENT &amp; PATRONAGE
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1F2430]">
                  Sponsor an Annual Prize or Memorial Trophy →
                </h3>
                <p className="text-sm text-[#1F2430]/85 font-sans leading-relaxed">
                  Instituted by patrons, alumni, and former educators in memory of loved ones. Annual endowment covers commemorative silver-rimmed medals, book hampers, and certificates for meritorious competitors.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/ways-to-give"
                  className="inline-flex items-center justify-center bg-[#7A1F2B] text-[#FAF6EC] text-xs font-mono uppercase tracking-wider px-6 py-3 rounded-[4px] hover:bg-[#661823] transition-colors text-center"
                >
                  Download Memorial Sponsorship Docket (PDF) →
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center bg-transparent text-[#1F2430] text-xs font-mono uppercase tracking-wider px-6 py-2.5 rounded-[4px] border border-[#1F2430]/30 hover:border-[#1F2430] hover:bg-[#1F2430] hover:text-[#FAF6EC] transition-all text-center"
                >
                  Inquire with Advisory Committee →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
