import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, Award, Users } from 'lucide-react';

export const metadata = {
  title: 'Our People & Governing Council | Bardhaman Chhatra Kalyan Samiti',
  description: 'Executive committee, trustees, advisors, and honorary members serving Bardhaman Chhatra Kalyan Samiti.',
};

export default function OurPeoplePage() {
  const officers = [
    {
      role: 'Vice-President',
      name: 'Prof. Subhas Chandra Ray',
      desc: 'Former Dean of Science, University of Burdwan. Leads the Academic Grant Evaluation Board.',
      image: '/images/history-1.png',
    },
    {
      role: 'Vice-President',
      name: 'Dr. Bani Banerjee',
      desc: 'Renowned Educationist & Former Head of Women’s Studies. Champion of female rural stipends.',
      image: '/images/history-2.png',
    },
    {
      role: 'Treasurer (Honorary)',
      name: 'Tarun Kanti Sen',
      desc: 'Chartered Accountant. Manages statutory annual audits and 80G filings.',
      image: '/images/history-1.png',
    },
    {
      role: 'Joint Secretary',
      name: 'Swapan Majumdar',
      desc: 'Senior Lecturer. Directs suburban tutorial camps and district book distributions.',
      image: '/images/history-2.png',
    },
    {
      role: 'Joint Secretary',
      name: 'Biswanath Bhattacharya',
      desc: 'Archival Officer. Oversees applicant verifications and primary documentation.',
      image: '/images/history-1.png',
    },
  ];

  const executiveMembers = [
    { name: 'Prabir Das', note: 'Ex-Teacher, Burdwan Town School' },
    { name: 'Smt. Madhumita Sarkar', note: 'Civic Philanthropist & Alumna' },
    { name: 'Debasis Chatterjee', note: 'Lecturer in Mathematics' },
    { name: 'Sanat Kumar Roy', note: 'Community Coordinator, Katwa' },
    { name: 'Aniruddha Mitra', note: 'Advocate, Burdwan District Bar' },
    { name: 'Dr. Manas Mukherjee', note: 'Medical Officer & Pediatric Lead' },
    { name: 'Smt. Ananya Sen', note: 'Secondary Headmistress, Memari' },
    { name: 'Shyamal Kr. Ghosh', note: 'Former Headmaster, Galsi' },
  ];

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 09 / GOVERNANCE &amp; TRUSTEES</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">COUNCIL DIRECTORY</span>
          <span>SESSION 2025–2027</span>
        </div>

        {/* Page Header */}
        <header className="pb-12 border-b border-[#1F2430]/15">
          <SectionHeader
            badge="Our People"
            title="Stewards of the public trust."
            subtitle="The Samiti is administered entirely by volunteer educators, retired teachers, and civic patrons. Zero executive salaries, zero administrative waste."
            level="h1"
            className="mb-4 max-w-4xl"
          />
        </header>

        {/* President & General Secretary Feature Duo */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* President */}
            <RevealOnScroll className="p-6 bg-[#F1EADA] border border-[#E2DAC8] flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-[#FAF6EC] overflow-hidden mb-6 border border-[#1F2430]/10">
                  <img
                    src="/images/history-1.png"
                    alt="Sri Amar Nath Ghosh, President"
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-semibold block mb-1">
                  President of the Council
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F2430] mb-2">
                  Sri Amar Nath Ghosh
                </h3>
                <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                  Retired Principal and distinguished civic leader. Presides over the Governing Body and ensures statutory adherence to the West Bengal Societies Registration Act of 1961.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1F2430]/15 flex items-center justify-between text-xs font-mono text-[#1F2430]/60">
                <span>Tenure: 2023–Present</span>
                <span>Honorary Capacity</span>
              </div>
            </RevealOnScroll>

            {/* General Secretary */}
            <RevealOnScroll className="p-6 bg-[#F1EADA] border border-[#E2DAC8] flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-[#FAF6EC] overflow-hidden mb-6 border border-[#1F2430]/10">
                  <img
                    src="/images/history-2.png"
                    alt="Sri Baidyanath Singha Roy, Founder-Secretary"
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-semibold block mb-1">
                  Founder-Secretary &amp; Elder Trustee
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F2430] mb-2">
                  Sri Baidyanath Singha Roy
                </h3>
                <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                  Former Assistant Headmaster, Bardhaman Raj Collegiate School. Founded the Samiti in 2011 and continues to oversee grassroots candidate verification and family counseling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1F2430]/15 flex items-center justify-between text-xs font-mono text-[#1F2430]/60">
                <span>Founder Member</span>
                <span>Honorary Capacity</span>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Council Officers & Custodians */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              Council Officers &amp; Statutory Custodians
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, idx) => (
              <RevealOnScroll key={idx} className="p-5 border border-[#E2DAC8] bg-[#FAF6EC] flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] bg-[#F1EADA] overflow-hidden mb-4 border border-[#1F2430]/10">
                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="w-full h-full object-cover grayscale contrast-110"
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7A1F2B] font-semibold block mb-1">
                    {officer.role}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#1F2430] mb-2">
                    {officer.name}
                  </h4>
                  <p className="text-xs text-[#1F2430]/80 font-sans leading-relaxed">
                    {officer.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Working Executive Members Table */}
        <section className="py-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              Working Executive Members (Elected Session 2025–2027)
            </span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-8">
            Council of Members
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {executiveMembers.map((member, idx) => (
              <div key={idx} className="p-4 border border-[#1F2430]/15 bg-[#F1EADA]/50">
                <span className="text-[10px] font-mono uppercase text-[#7A1F2B] font-bold block mb-1">
                  Executive Member
                </span>
                <h5 className="font-serif font-bold text-base text-[#1F2430]">
                  {member.name}
                </h5>
                <p className="text-xs text-[#1F2430]/70 font-sans mt-1">
                  {member.note}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
