'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { Calendar, Image as ImageIcon, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function FunctionsPage() {
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const photosChapter1 = [
    {
      year: '2024',
      caption: 'Annual financial transparency dossier laid before the general public assembly, 2024.',
      ref: 'Negative Ref. FD-24-008',
      aspect: 'aspect-[4/3]',
      src: '/images/history-1.png',
    },
    {
      year: '2024',
      caption: 'Conferment of merit medals and book bursaries to Madhyamik rankers, 2024.',
      ref: 'Negative Ref. FD-24-041',
      aspect: 'aspect-[3/4]',
      src: '/images/history-2.png',
    },
    {
      year: '2023',
      caption: 'Founding members recounting the early bicycle visits across Purba Bardhaman villages, 2023.',
      ref: 'Negative Ref. FD-23-019',
      aspect: 'aspect-[4/3]',
      src: '/images/history-1.png',
    },
  ];

  const photosChapter2 = [
    {
      year: '2025',
      caption: "Garlanding of Vidyasagar's bust at Chhatra Kalyan Bhavan, September 2025.",
      ref: 'Negative Ref. VJ-25-004',
      aspect: 'aspect-[3/4]',
      src: '/images/history-2.png',
    },
    {
      year: '2025',
      caption: 'Primary reading kits and primer distribution for first-generation village learners, 2025.',
      ref: 'Negative Ref. VJ-25-018',
      aspect: 'aspect-[4/3]',
      src: '/images/history-1.png',
    },
    {
      year: '2024',
      caption: 'Prof. S. Bandyopadhyay delivering the memorial address on vernacular education, 2024.',
      ref: 'Negative Ref. VJ-24-012',
      aspect: 'aspect-[16/10]',
      src: '/images/history-2.png',
    },
  ];

  const photosChapter3 = [
    {
      year: '2025',
      caption: 'Rabindra Jayanti observances with student chorus and recitation of Gitanjali selections.',
      ref: 'Negative Ref. RJ-25-009',
      aspect: 'aspect-[4/3]',
      src: '/images/history-1.png',
    },
    {
      year: '2024',
      caption: 'Netaji Subhash Chandra Bose 128th birth anniversary assembly at Town Hall plaza.',
      ref: 'Negative Ref. NJ-24-002',
      aspect: 'aspect-[3/4]',
      src: '/images/history-2.png',
    },
  ];

  const filterByYear = (items: any[]) => {
    if (selectedYear === 'all') return items;
    return items.filter((item) => item.year === selectedYear);
  };

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 07 / INSTITUTIONAL CALENDAR &amp; OBSERVANCES</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">PHOTOGRAPHIC MONOGRAPHS</span>
          <span>PURBA BARDHAMAN</span>
        </div>

        {/* Page Header */}
        <header className="pb-12 border-b border-[#1F2430]/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionHeader
                badge="Functions &amp; Celebrations"
                title="Moments of civic dignity, fellowship, and memory."
                subtitle="Visual records of the Samiti’s annual conclaves, birth commemorations of Bengal reformers, and community educational convocations."
                level="h1"
                className="mb-2 max-w-3xl"
              />
            </div>
            {/* Year Filter Pill Tabs */}
            <div className="flex items-center space-x-2 font-mono text-xs border border-[#1F2430]/20 p-1 bg-[#F1EADA] rounded-[4px]">
              <span className="text-[#1F2430]/50 uppercase px-2 py-1">Filter:</span>
              {['all', '2025', '2024', '2023'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1 rounded-[2px] transition-colors uppercase ${
                    selectedYear === yr
                      ? 'bg-[#7A1F2B] text-[#FAF6EC] font-semibold'
                      : 'text-[#1F2430] hover:text-[#7A1F2B]'
                  }`}
                >
                  {yr === 'all' ? 'All Years' : yr}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* CHAPTER I: Annual Conclave & Felicitation */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>CHAPTER I • বাৎসরিক সম্মেলন ও গুণীজন সংবর্ধনা</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#1F2430]">
                Annual General Conclave &amp; Felicitation
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                The flagship civic gathering of Bardhaman educators, life patrons, and students. Meritorious Madhyamik and Higher Secondary scholars receive awards in front of their guardians.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterByYear(photosChapter1).map((photo, idx) => (
              <RevealOnScroll key={idx} className="flex flex-col group">
                <div className={`relative overflow-hidden bg-[#F1EADA] border border-[#E2DAC8] ${photo.aspect} w-full`}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#FAF6EC]/90 text-[10px] tracking-widest uppercase px-2 py-0.5 border border-[#1F2430]/15 font-mono text-[#1F2430]">
                    {photo.year}
                  </span>
                </div>
                <figcaption className="mt-3 font-serif italic text-sm text-[#1F2430]/90 leading-snug">
                  {photo.caption}
                </figcaption>
                <span className="mt-1 font-mono text-[10px] tracking-widest uppercase text-[#1F2430]/50">
                  {photo.ref}
                </span>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* CHAPTER II: Birth Anniversary of Pandit Iswarchandra Vidyasagar */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>CHAPTER II • বিদ্যাসাগর জন্মজয়ন্তী (২৬ সেপ্টেম্বর)</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#1F2430]">
                Birth Anniversary of Pandit Iswarchandra Vidyasagar
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                A solemn tribute to the tireless champion of mass education and female literacy. The Samiti marks 26 September with commemorative lectures and free textbook distributions to indigent primary scholars.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterByYear(photosChapter2).map((photo, idx) => (
              <RevealOnScroll key={idx} className="flex flex-col group">
                <div className={`relative overflow-hidden bg-[#F1EADA] border border-[#E2DAC8] ${photo.aspect} w-full`}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#FAF6EC]/90 text-[10px] tracking-widest uppercase px-2 py-0.5 border border-[#1F2430]/15 font-mono text-[#1F2430]">
                    {photo.year}
                  </span>
                </div>
                <figcaption className="mt-3 font-serif italic text-sm text-[#1F2430]/90 leading-snug">
                  {photo.caption}
                </figcaption>
                <span className="mt-1 font-mono text-[10px] tracking-widest uppercase text-[#1F2430]/50">
                  {photo.ref}
                </span>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* CHAPTER III: Other Observances */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>CHAPTER III • অন্যান্য বাৎসরিক অনুষ্ঠান</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#1F2430]">
                Seasonal Observances &amp; Cultural Memorials
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                Throughout the academic calendar, the Samiti observes Rabindra Jayanti, Netaji Subhash Chandra Bose’s birthday, and annual Saraswati Puja. Each occasion is grounded in grassroots participation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filterByYear(photosChapter3).map((photo, idx) => (
              <RevealOnScroll key={idx} className="flex flex-col group">
                <div className={`relative overflow-hidden bg-[#F1EADA] border border-[#E2DAC8] ${photo.aspect} w-full`}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#FAF6EC]/90 text-[10px] tracking-widest uppercase px-2 py-0.5 border border-[#1F2430]/15 font-mono text-[#1F2430]">
                    {photo.year}
                  </span>
                </div>
                <figcaption className="mt-3 font-serif italic text-sm text-[#1F2430]/90 leading-snug">
                  {photo.caption}
                </figcaption>
                <span className="mt-1 font-mono text-[10px] tracking-widest uppercase text-[#1F2430]/50">
                  {photo.ref}
                </span>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
