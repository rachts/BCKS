'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { Calendar, Download, ArrowRight, Tag, Bell } from 'lucide-react';

export default function UpdatesPage() {
  const [filter, setFilter] = useState('all');

  const dispatches = [
    {
      id: 894,
      date: '02 MARCH 2026',
      bengaliDate: '১৭ ফাল্গুন ১৪৩২',
      category: 'scholarships',
      categoryName: 'Scholarships',
      title: 'Roll of Merit Stipends: Final List for Higher Secondary Cycle 2026 Announced',
      summary: 'Verified list of 24 Madhyamik scholars across Purba Bardhaman selected for full tuition and textbook grants. Cheques and book hampers will be handed over on 18 March.',
      fileRef: 'DISPATCH #894 • PDF (340 KB)',
    },
    {
      id: 893,
      date: '14 FEBRUARY 2026',
      bengaliDate: '১ ফাল্গুন ১৪৩২',
      category: 'health',
      categoryName: 'Health Camps',
      title: "Upcoming Paediatric & Vision Screening Camp at Kalna Maharaja's High School",
      summary: 'Voluntary panel ophthalmologists and paediatricians will conduct clinical vitals, refractive testing, and provide complimentary corrective spectacles for Classes 8 through 10.',
      fileRef: 'DISPATCH #893 • PDF (280 KB)',
    },
    {
      id: 892,
      date: '22 JANUARY 2026',
      bengaliDate: '৮ মাঘ ১৪৩২',
      category: 'competitions',
      categoryName: 'Competitions',
      title: 'Results Announced: 14th District Inter-School Essay & Debate Laureates',
      summary: 'Over 620 student essays evaluated on vernacular prose and scientific temper; ceremonial citation distribution to take place at Chhatra Kalyan Bhavan.',
      fileRef: 'DISPATCH #892 • PDF (510 KB)',
    },
    {
      id: 891,
      date: '05 JANUARY 2026',
      bengaliDate: '২০ পৌষ ১৪৩২',
      category: 'agm',
      categoryName: 'AGM Notice',
      title: 'Statutory Notice: 15th Annual General Meeting Convened for 27 December 2026',
      summary: 'Notice is hereby given to all registered life and patron members of the Samiti to assemble at Town Hall, Bardhaman for presentation of audited accounts and council elections.',
      fileRef: 'DISPATCH #891 • PDF (650 KB)',
    },
    {
      id: 890,
      date: '18 DECEMBER 2025',
      bengaliDate: '২ পৌষ ১৪৩২',
      category: 'scholarships',
      categoryName: 'Scholarships',
      title: 'Disbursement of Emergency Book Grants & Winter Educational Kits across Galsi Block',
      summary: 'Immediate distribution of high-school mathematics primers, geometry instruments, and warm woollen wear completed across six rural secondary institutions.',
      fileRef: 'DISPATCH #890 • PDF (190 KB)',
    },
    {
      id: 889,
      date: '28 NOVEMBER 2025',
      bengaliDate: '১১ অগ্রহায়ণ ১৪৩২',
      category: 'health',
      categoryName: 'Health Camps',
      title: 'Adolescent Nutrition & Mental Health Counselling Forum Held at Memari',
      summary: 'Senior child psychologists and visiting educators engaged 160 secondary candidates and their guardians in dialogue on coping with exam anxiety and post-Madhyamik career mapping.',
      fileRef: 'DISPATCH #889 • PDF (310 KB)',
    },
  ];

  const filtered = filter === 'all' ? dispatches : dispatches.filter((d) => d.category === filter);

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 12 / PERIODIC DISPATCHES &amp; NOTICES</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">SAMITI GAZETTE</span>
          <span>PURBA BARDHAMAN</span>
        </div>

        {/* Page Header */}
        <header className="pb-8 border-b border-[#1F2430]/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionHeader
                badge="Notices &amp; Results"
                title="Official Dispatches &amp; Gazette"
                subtitle="Circulars, scholarship lists, competition tabulations, and institutional notices published by the secretariat."
                level="h1"
                className="mb-2 max-w-3xl"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs border border-[#1F2430]/15 p-1 bg-[#F1EADA] rounded-[4px]">
              {[
                { id: 'all', label: 'All Dispatches' },
                { id: 'scholarships', label: 'Scholarships' },
                { id: 'health', label: 'Health Camps' },
                { id: 'competitions', label: 'Competitions' },
                { id: 'agm', label: 'AGM Notice' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-[2px] transition-colors uppercase ${
                    filter === tab.id
                      ? 'bg-[#7A1F2B] text-[#FAF6EC] font-semibold'
                      : 'text-[#1F2430] hover:text-[#7A1F2B]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Gazette Entries List */}
        <section className="divide-y divide-[#1F2430]/15 border-b border-[#1F2430]/15">
          {filtered.map((item) => (
            <RevealOnScroll
              key={item.id}
              className="py-10 flex flex-col md:flex-row gap-8 hover:bg-[#F1EADA]/30 transition-colors px-3"
            >
              {/* Date Column (w-52) */}
              <div className="w-full md:w-56 shrink-0 flex flex-col gap-1">
                <time className="font-mono text-xs uppercase tracking-widest text-[#7A1F2B] font-bold">
                  {item.date}
                </time>
                <span className="font-serif italic text-xs text-[#1F2430]/60">
                  {item.bengaliDate}
                </span>
                <div className="pt-2">
                  <span className="inline-block px-2 py-0.5 bg-[#F1EADA] text-[#1F2430] font-mono text-[10px] tracking-wider uppercase border border-[#1F2430]/15">
                    {item.categoryName}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#1F2430]/40 mt-1">
                  DISPATCH #{item.id}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1 flex flex-col">
                <h2 className="font-serif text-2xl text-[#1F2430] hover:text-[#7A1F2B] font-bold leading-snug transition-colors mb-3">
                  {item.title}
                </h2>
                <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed mb-4 max-w-3xl">
                  {item.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1">
                  <Link
                    href={`/updates#dispatch-${item.id}`}
                    className="text-[#7A1F2B] hover:text-[#D9A441] underline underline-offset-4 decoration-[#7A1F2B]/40 font-semibold transition-colors inline-flex items-center gap-1"
                  >
                    <span>Read full text →</span>
                  </Link>
                  <span className="text-[#1F2430]/20 hidden sm:inline">|</span>
                  <a
                    href="#download"
                    className="text-[#1F2430]/70 hover:text-[#7A1F2B] transition-colors inline-flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-[#7A1F2B]" />
                    <span className="underline underline-offset-4 decoration-[#1F2430]/20">
                      Download Official Gazette PDF
                    </span>
                    <span className="text-[10px] text-[#1F2430]/50">({item.fileRef})</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </section>

        {/* Archival Inquiry Strip */}
        <section className="my-16 p-8 md:p-12 border border-[#E2DAC8] bg-[#F1EADA] rounded-[4px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold block">
                Archival Search &amp; Gazette Subscription
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1F2430]">
                Looking for historical circulars prior to 2024?
              </h3>
              <p className="text-sm text-[#1F2430]/80 font-sans">
                Physical printed copies of annual balance sheets and resolution dockets dating back to 2011 are preserved at our Khoshbagan registered office library.
              </p>
            </div>
            <div>
              <Link
                href="/membership"
                className="h-11 px-6 bg-[#7A1F2B] text-[#FAF6EC] rounded-[6px] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#661823] transition-colors inline-flex items-center gap-2"
              >
                <span>Request Archival Copy →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
