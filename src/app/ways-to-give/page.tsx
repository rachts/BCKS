import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Heart, Award, Users, BookOpen, Building2, Download, Phone } from 'lucide-react';

export const metadata = {
  title: 'Ways to Give & Philanthropic Protocols | Bardhaman Chhatra Kalyan Samiti',
  description: 'Seven statutory and time-honoured pathways through which citizens, educators, and alumni sustain students across Purba Bardhaman.',
};

export default function WaysToGivePage() {
  const pathways = [
    {
      num: '1.',
      title: 'Membership Subscription',
      tag: 'CONSTITUTIONAL ENROLMENT',
      desc: "Joining the Samiti is both a governance voice and an enduring contribution. New membership enrolment contribution is ₹2,000 (one-time lifetime accession towards the students' corpus fund), and annual sustaining renewal is ₹500 per year. Members receive voting rights at the Annual General Meeting, eligibility for the governing council, and dispatch of the printed financial gazette.",
      note: 'ANNUAL RENEWAL DUE: 31 MARCH',
      cta: 'Join as Member',
      link: '/membership',
    },
    {
      num: '2.',
      title: 'Smriti Puraskar (Memorial Endowment)',
      tag: 'PERPETUAL ENDOWMENT',
      desc: 'Honour a departed teacher, elder, or loved one through a permanently endowed annual student prize or medal. An endowment of ₹15,000 or more establishes an annual prize conferred during the annual convention in their name to a top-performing secondary student from rural schools in Purba Bardhaman. The capital remains untouched in scheduled treasury deposits; only annual interest yields are disbursed as citation rolls.',
      note: 'CORPUS BOND PRESERVED IN PERPETUITY',
      cta: 'Endow a Prize',
      link: '/donate',
    },
    {
      num: '3.',
      title: 'A Personal Student Sponsorship',
      tag: 'DIRECT SCHOLASTIC CARE',
      desc: "Support one named boy or girl through a crucial academic year (Classes IX to XII). A recurring contribution of ₹6,000 annually covers textbooks, school uniforms, board examination fees, and localized subject coaching, with progress reports delivered to you twice a year under the seal of the Headmaster's verification.",
      note: 'BI-ANNUAL ACADEMIC AUDIT PROVIDED',
      cta: 'Sponsor a Student',
      link: '/donate',
    },
    {
      num: '4.',
      title: 'The Vidyanidhi Scheme',
      tag: 'CONTINGENCY EMERGENCY POOL',
      desc: 'A dedicated emergency buffer for enrolled students facing sudden domestic bereavement, acute medical crises, or crop failure affecting their household. Vidyanidhi stipends prevent abrupt school dropouts before the Madhyamik and Higher Secondary examinations. Donations from ₹500 upwards directly bolster this relief pool, accessible within 24 hours upon field verification.',
      note: 'DISBURSED UNDER HEADMASTER WARRANT',
      cta: 'Contribute to Vidyanidhi',
      link: '/donate',
    },
    {
      num: '5.',
      title: 'Statutory Tax Benefits (Section 80G & 12A)',
      tag: 'REVENUE RECOGNITION',
      desc: 'Bardhaman Chhatra Kalyan Samiti is registered under the West Bengal Societies Registration Act XXVI of 1961. Contributions enjoy 50% tax exemption under Section 80G of the Income Tax Act, 1961 (Order No. CIT(E)/KOL/80G/2021-22). Form 10BE certificates are furnished directly via digital dispatch within 48 hours and registered on the IT portal before each annual assessment deadline.',
      note: 'FORM 10BE COMPLIANCE INCLUDED',
      cta: 'Donate with 80G Benefit',
      link: '/donate',
    },
    {
      num: '6.',
      title: 'Corporate & Institutional CSR Giving',
      tag: 'SCHEDULE VII MANDATES',
      desc: 'We collaborate with accredited public sector units, banks, and corporate entities on audited educational infrastructure, student science kits, and diagnostic health camps under Schedule VII CSR guidelines. Formal compliance reports, photographic records, and third-party utility auditing certificates are presented to corporate CSR boards with statutory precision.',
      note: 'CSR REGISTRATION: CSR00018821',
      cta: 'Initiate CSR Partnership',
      link: '/membership',
    },
    {
      num: '7.',
      title: 'Foreign Contributions',
      tag: 'COMPLIANCE PROTOCOL',
      desc: 'Please note: The Samiti operates strictly under domestic banking regulations. Please contact our General Secretariat desk before initiating any foreign contribution, remittance, or international donor assistance to ensure compliance with relevant statutory permissions.',
      note: 'DOMESTIC REGULATION ADHERENCE',
      cta: 'Contact Secretariat',
      link: '/our-people',
    },
  ];

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 14 / PHILANTHROPIC PROTOCOLS</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">WAYS TO GIVE</span>
          <span>ESTD. 2011</span>
        </div>

        {/* Page Header */}
        <header className="pb-12 border-b border-[#1F2430]/15">
          <SectionHeader
            badge="Ways to Give"
            title="There is a right way for every giver."
            subtitle="Bardhaman Chhatra Kalyan Samiti operates purely on civic solidarity, local educator patronage, and community endowments. Below are the statutory, time-honoured pathways through which citizens sustain students across Purba Bardhaman."
            level="h1"
            className="mb-4 max-w-4xl"
          />
        </header>

        {/* Asymmetrical 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Primary Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {pathways.map((item, idx) => (
              <RevealOnScroll
                key={idx}
                className="pt-8 first:pt-0 border-t border-[#1F2430]/15 first:border-t-0 space-y-3"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-serif text-2xl font-bold text-[#1F2430]">
                    <span className="text-[#7A1F2B] mr-2">{item.num}</span>
                    {item.title}
                  </h2>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#7A1F2B] font-semibold">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-[#1F2430]/85 font-sans leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-[#7A1F2B] text-xs font-mono font-semibold uppercase tracking-wider underline underline-offset-4 decoration-[#7A1F2B]/40 hover:text-[#D9A441] transition-colors"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#1F2430]/60 uppercase">
                    {item.note}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Right Rail Sidebar (4 cols) */}
          <aside className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-[#1F2430]/15 space-y-8">
            {/* Financial Restraint Note */}
            <div className="p-6 bg-[#F1EADA] border border-[#E2DAC8] rounded-[4px] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A1F2B] font-bold block">
                ARCHIVAL LEDGER DISCLOSURE
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1F2430]">
                A Note on Financial Restraint
              </h3>
              <p className="text-xs text-[#1F2430]/80 font-sans leading-relaxed">
                We publish our audited receipts and balance sheets annually at the Court Compound secretariat. Not a single rupee of student welfare capital is expended on digital advertising or paid promoters. Administrative costs are borne entirely through dedicated voluntary memberships.
              </p>
              <div className="pt-2 border-t border-[#1F2430]/15 text-[10px] font-mono text-[#1F2430]/60 uppercase">
                Annual audit vouched by independent Chartered Accountants
              </div>
            </div>

            {/* Statutory Identification */}
            <div className="p-6 border border-[#1F2430]/15 bg-[#FAF6EC] rounded-[4px] space-y-3 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#7A1F2B] font-bold block">
                STATUTORY IDENTIFICATION
              </span>
              <div className="space-y-1 text-[#1F2430]/85">
                <p><span className="text-[#1F2430]/60">REG NO:</span> S/2L/48211 OF 2011</p>
                <p><span className="text-[#1F2430]/60">12A ORDER:</span> AABTB4928RE20214</p>
                <p><span className="text-[#1F2430]/60">80G URN:</span> AABTB4928RF20219</p>
                <p><span className="text-[#1F2430]/60">DARPAN ID:</span> WB/2018/0198421</p>
              </div>
              <div className="pt-2 border-t border-[#1F2430]/15 text-[10px] text-[#1F2430]/60 uppercase">
                Govt. of West Bengal Registration Registry
              </div>
            </div>

            {/* Quote Block */}
            <div className="pt-4 border-t border-[#1F2430]/15">
              <span className="font-serif text-3xl text-[#D9A441] leading-none select-none">“</span>
              <p className="font-serif italic text-sm text-[#1F2430]/80 leading-relaxed -mt-2">
                Every coin contributed in the name of rural literacy holds the gravity of an ancestral promise.
              </p>
              <cite className="block text-[10px] font-mono uppercase tracking-wider text-[#7A1F2B] font-semibold mt-2 not-italic">
                — Founding Charter Resolution, July 2011
              </cite>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
