import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Download, CheckCircle2, FileText, AlertCircle, Users } from 'lucide-react';

export const metadata = {
  title: 'Annual General Meeting (AGM) | Bardhaman Chhatra Kalyan Samiti',
  description: 'Statutory convocation notices, agenda protocols, quorum declarations, and historical gazette archives under WB Societies Act XXVI of 1961.',
};

export default function AgmPage() {
  const agmSteps = [
    {
      step: '1.',
      time: 'Stage 09:30–10:15',
      title: 'Registration & Roll Verification',
      desc: 'Checking verified photo credentials against the central registrar ledger. Registered voting tokens and printed dossier folios are issued at the entrance counter.',
      ledger: 'Ledger: General Membership Index',
    },
    {
      step: '2.',
      time: 'Stage 10:30–11:00',
      title: 'Presidential Invocation & Minutes',
      desc: 'Reviewing, confirming, and adopting the formal minutes of the preceding annual assembly. Tributes to departed patrons and formal constitutional opening remarks.',
      ledger: 'Ratification: 14th AGM Gazette',
    },
    {
      step: '3.',
      time: 'Stage 11:00–11:45',
      title: 'Tabling of Secretary’s Report',
      desc: 'Detailed presentation of field dispatches, scholarship distributions, textbook banks, and rural outreach programs accomplished during the completed operational year.',
      ledger: 'Document: Annual Dispatch Dossier',
    },
    {
      step: '4.',
      time: 'Stage 11:45–12:30',
      title: 'Presentation of Audited Ledger',
      desc: 'Comprehensive scrutiny by the independent chartered accountant, clarification of balance sheets, and an open floor question-and-answer period for active voting members.',
      ledger: 'Audit: Statutorily Certified Accounts',
    },
    {
      step: '5.',
      time: 'Stage 12:30–13:30',
      title: 'Election of Governing Council',
      desc: 'Secret ballot or unanimous election of the Executive Committee and Trustees for the biennial term, monitored by appointed returning scrutineers.',
      ledger: 'Registry: Biennial Electoral Return',
    },
    {
      step: '6.',
      time: 'Stage 13:30–14:00',
      title: 'Valedictory Address & Chorus',
      desc: 'Closing remarks by incoming President, formal resolution on corpus preservation, followed by community lunch and collective singing of the Samiti anthem.',
      ledger: 'Adjournment: Statutory Record Signed',
    },
  ];

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 11 / STATUTORY ASSEMBLY &amp; CIVIC COMPLIANCE</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">ANNUAL CONCLAVE</span>
          <span>ESTD. 2011</span>
        </div>

        {/* Notice Header Plate */}
        <section className="p-8 md:p-12 border border-[#E2DAC8] bg-[#F1EADA] mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              Formal Statutory Notice
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2430] mb-2 leading-tight">
            15th Annual General Meeting
          </h1>
          <p className="font-serif italic text-xl text-[#7A1F2B] mb-8">
            পঞ্চদশ বার্ষিক সাধারণ সভা
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-[#1F2430]/15">
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-[#7A1F2B] mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider block">Convene Date</span>
                <span className="font-serif font-bold text-lg text-[#1F2430]">Sunday, 27 Dec 2026</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-[#7A1F2B] mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider block">Appointed Hour</span>
                <span className="font-serif font-bold text-lg text-[#1F2430]">10:30 AM IST</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#7A1F2B] mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider block">Conclave Venue</span>
                <span className="font-serif font-bold text-lg text-[#1F2430]">Burdwan Town Hall Plaza</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#1F2430]/70">
              Dispatched under Rule 12 of West Bengal Societies Registration Rules, 1963.
            </span>
            <a
              href="#download-notice"
              className="h-11 px-6 bg-[#7A1F2B] text-[#FAF6EC] rounded-[6px] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#661823] transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Notice &amp; Agenda Docket (PDF)</span>
            </a>
          </div>
        </section>

        {/* Statutory Quorum & Eligibility */}
        <section className="py-12 border-b border-[#1F2430]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>Article XIV • Statutory Quorum</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2430]">
                Quorum &amp; Voting Eligibility
              </h2>
              <span className="font-mono text-xs text-[#1F2430]/60 block mt-1">
                WB Societies Act XXVI of 1961
              </span>
            </div>

            <div className="lg:col-span-8">
              <div className="pl-6 border-l-2 border-[#D9A441] space-y-3">
                <p className="font-serif italic text-lg leading-relaxed text-[#1F2430]">
                  “As stipulated under Section 14 of the Samiti Constitution registered under West Bengal Act XXVI of 1961, one-third of the active registered voting members on the central roll constitutes a valid statutory quorum.”
                </p>
                <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                  If no quorum is formed within 30 minutes of the appointed hour (10:30 AM), the assembly stands adjourned to reconvene at the same venue 45 minutes thereafter, where present members shall conduct statutory business and resolve agenda motions irrespective of total registered headcounts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 mt-6 border-t border-[#1F2430]/15 font-mono text-xs">
                <div>
                  <span className="text-[#1F2430]/50 block uppercase text-[10px]">Registered Roll</span>
                  <span className="text-sm font-semibold text-[#1F2430]">418 Qualified Members</span>
                </div>
                <div>
                  <span className="text-[#1F2430]/50 block uppercase text-[10px]">Mandatory Quorum (33.3%)</span>
                  <span className="text-sm font-semibold text-[#7A1F2B]">140 Voting Delegates</span>
                </div>
                <div>
                  <span className="text-[#1F2430]/50 block uppercase text-[10px]">Presiding Returning Officer</span>
                  <span className="text-sm font-semibold text-[#1F2430]">Adv. T. K. Chattopadhyay</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How the AGM is Conducted (6-Step Protocol) */}
        <section className="py-16">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              Order of Conclave
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#1F2430] mb-12">
            How the AGM is conducted
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {agmSteps.map((step, idx) => (
              <RevealOnScroll
                key={idx}
                className="border-t border-[#1F2430]/15 pt-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-serif italic text-6xl text-[#7A1F2B] select-none font-bold">
                      {step.step}
                    </span>
                    <span className="font-mono text-xs tracking-wider uppercase text-[#D9A441] font-semibold">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1F2430] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#1F2430]/10 font-mono text-[11px] text-[#1F2430]/50 uppercase">
                  {step.ledger}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
