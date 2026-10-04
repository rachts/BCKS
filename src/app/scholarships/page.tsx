import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import DarkBand from '@/components/DarkBand';
import Link from 'next/link';
import { Download, ArrowRight, CheckSquare, Phone, Calendar, Clock, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Scholarships & Merit Stipends | Bardhaman Chhatra Kalyan Samiti',
  description: 'Merit-cum-means assistance ensuring secondary students in Purba Bardhaman never surrender their education to financial hardship.',
};

export default function ScholarshipsPage() {
  const meritAwardees = [
    { year: '2025', name: 'Sourav Mondal', school: 'Bardhaman Raj Collegiate School', stream: 'Class 10 (Secondary)' },
    { year: '2025', name: 'Priyanka Das', school: "Burdwan Municipal Girls' High School", stream: 'Class 11 (Science)' },
    { year: '2024', name: 'Tanmay Karmakar', school: 'Memari Vidyasagar Memorial Institution', stream: 'Class 12 (Arts)' },
    { year: '2024', name: 'Sneha Roy', school: "Kalna Maharaja's High School", stream: 'Class 10 (Secondary)' },
    { year: '2023', name: 'Rakesh Murmu', school: 'Galsi High School', stream: 'Class 11 (Commerce)' },
  ];

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 03 / SCHOLASTIC ENDOWMENT</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">BURDWAN DISTRICT AID</span>
          <span>REG. NO. S/2L/48211</span>
        </div>

        {/* Page Header */}
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <SectionHeader
              badge="Scholarships"
              title="Support that reaches the student who earned it."
              level="h1"
              className="mb-4"
            />
            <p className="text-base text-[#1F2430]/85 font-sans leading-relaxed max-w-2xl">
              Every rupee vetted, every recipient verified. Ensuring uninterrupted secondary and higher-secondary education for dedicated scholars across Purba Bardhaman facing economic distress.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#download-dossier"
                className="h-11 px-6 bg-[#7A1F2B] text-[#FAF6EC] rounded-[6px] text-sm font-medium hover:bg-[#661823] transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download application form (PDF)</span>
              </a>
              <Link
                href="/apply"
                className="h-11 px-6 border border-[#1F2430] text-[#1F2430] rounded-[6px] text-sm font-medium hover:bg-[#1F2430] hover:text-[#FAF6EC] transition-colors inline-flex items-center gap-2"
              >
                <span>Apply online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-mono text-[#1F2430]/60">
                Session 2026–2027 • Free of all application levies
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-[#1F2430]/15">
            <p className="font-serif italic text-base leading-relaxed text-[#1F2430]/80">
              “Merit-cum-means assistance ensuring secondary students in Purba Bardhaman never surrender their education to financial hardship.”
            </p>
          </div>
        </RevealOnScroll>

        {/* Main Content Layout with 8-Col Main Track & 4-Col Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#1F2430]/15 pt-12 pb-20">
          {/* Main Track (8 Columns) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Visual Plate */}
            <RevealOnScroll className="border border-[#E2DAC8] bg-[#F1EADA]/70 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5">
                  <div className="aspect-[4/3] bg-[#E2DAC8] overflow-hidden">
                    <img
                      src="/images/history-1.png"
                      alt="Academic Grant Session in Purba Bardhaman"
                      className="w-full h-full object-cover grayscale contrast-125"
                    />
                  </div>
                  <span className="block text-[10px] font-mono tracking-wider uppercase text-[#1F2430]/50 pt-2">
                    Plate 3.1: Academic Grant Session, 2025
                  </span>
                </div>
                <div className="md:col-span-7 space-y-3">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-widest text-[#7A1F2B]">
                    Human Dignity in Action
                  </span>
                  <h2 className="font-serif text-xl font-bold text-[#1F2430]">
                    Direct Handover in the Presence of Guardians
                  </h2>
                  <p className="text-sm leading-relaxed text-[#1F2430]/80 font-sans">
                    Every scholarship is handed over openly in an audit-monitored convocation. The committee ensures that textbook supplies, tuition fee waivers, and personal stipends reach the student with absolute transparency and communal honor.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Section 01: Eligibility Criteria */}
            <RevealOnScroll>
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
                  01 / Eligibility Criteria
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-2">
                Requirements for Consideration
              </h2>
              <p className="text-sm text-[#1F2430]/70 mb-8 font-sans">
                Strict criteria ratified by the Governing Council under the Educational Welfare Protocol.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="relative pt-6 border-t border-[#1F2430]/15">
                  <span className="font-serif italic text-6xl text-[#7A1F2B]/20 font-bold absolute right-2 top-2 select-none pointer-events-none">
                    1
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#1F2430] mb-2">
                    01. Secondary Enrolment
                  </h3>
                  <p className="text-sm text-[#1F2430]/85 leading-relaxed font-sans">
                    Meritorious student of a recognized government or government-sponsored school, currently enrolled in Classes 9 through 12, belonging to a verified economically constrained household.
                  </p>
                </div>

                <div className="relative pt-6 border-t border-[#1F2430]/15">
                  <span className="font-serif italic text-6xl text-[#7A1F2B]/20 font-bold absolute right-2 top-2 select-none pointer-events-none">
                    2
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#1F2430] mb-2">
                    02. Institutional Sponsorship
                  </h3>
                  <p className="text-sm text-[#1F2430]/85 leading-relaxed font-sans">
                    Applicant’s conduct and academic performance must be formally certified and sponsored by the Headmaster, Headmistress, or Teacher-in-Charge (TIC) with an official seal.
                  </p>
                </div>

                <div className="relative pt-6 border-t border-[#1F2430]/15">
                  <span className="font-serif italic text-6xl text-[#7A1F2B]/20 font-bold absolute right-2 top-2 select-none pointer-events-none">
                    3
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#1F2430] mb-2">
                    03. Prescribed Window
                  </h3>
                  <p className="text-sm text-[#1F2430]/85 leading-relaxed font-sans">
                    Physical application dossiers or authenticated digital submissions must be lodged strictly within the notified annual notification period. Delayed petitions are rejected without review.
                  </p>
                </div>

                <div className="relative pt-6 border-t border-[#1F2430]/15">
                  <span className="font-serif italic text-6xl text-[#7A1F2B]/20 font-bold absolute right-2 top-2 select-none pointer-events-none">
                    4
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#1F2430] mb-2">
                    04. Board Viva Voce
                  </h3>
                  <p className="text-sm text-[#1F2430]/85 leading-relaxed font-sans">
                    The candidate must appear in person before the Samiti Selection Board accompanied by at least one legal parent or guardian, bearing all original academic marksheets and income proofs.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Section 02: Important Dates (Timeline Strip) */}
            <RevealOnScroll className="border-y border-[#1F2430]/15 py-8">
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
                  02 / Academic Calendar • Session 2026–2027
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441] inline-block"></span>
                    <span className="text-[11px] uppercase font-mono tracking-wider font-semibold text-[#1F2430]/70">
                      Applications Open
                    </span>
                  </div>
                  <div className="font-serif text-xl font-bold text-[#1F2430]">
                    15 August 2026
                  </div>
                  <p className="text-xs text-[#1F2430]/65 font-sans leading-relaxed">
                    Forms released via website download and affiliated district higher secondary schools.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441] inline-block"></span>
                    <span className="text-[11px] uppercase font-mono tracking-wider font-semibold text-[#1F2430]/70">
                      Last Date for Submission
                    </span>
                  </div>
                  <div className="font-serif text-xl font-bold text-[#1F2430]">
                    30 September 2026
                  </div>
                  <p className="text-xs text-[#1F2430]/65 font-sans leading-relaxed">
                    Strict cutoff at the Samiti registered office by 5:00 PM IST.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441] inline-block"></span>
                    <span className="text-[11px] uppercase font-mono tracking-wider font-semibold text-[#1F2430]/70">
                      Selection Board Interview
                    </span>
                  </div>
                  <div className="font-serif text-xl font-bold text-[#1F2430]">
                    18–20 October 2026
                  </div>
                  <p className="text-xs text-[#1F2430]/65 font-sans leading-relaxed">
                    Verification sessions conducted at Burdwan Town Hall premises.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Section 03: Documentation Required */}
            <RevealOnScroll>
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
                  03 / Documentation Required
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-6">
                Mandatory Verification Checklist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                <div className="flex items-start space-x-3">
                  <CheckSquare className="w-4 h-4 text-[#7A1F2B] mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed text-[#1F2430]/85 font-sans">
                    Official school sponsorship letter signed &amp; countersigned by Headmaster / TIC with school seal.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckSquare className="w-4 h-4 text-[#7A1F2B] mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed text-[#1F2430]/85 font-sans">
                    Certified photocopies of previous academic annual marksheets and official class rank certificate.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckSquare className="w-4 h-4 text-[#7A1F2B] mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed text-[#1F2430]/85 font-sans">
                    Annual family income certificate issued by BDO / Panchayat Pradhan / Municipality or BPL ration card.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckSquare className="w-4 h-4 text-[#7A1F2B] mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed text-[#1F2430]/85 font-sans">
                    Parent or legal guardian must be present during interview alongside original identity documents.
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Section 04: Roll of Merit Scholars Table */}
            <RevealOnScroll>
              <div className="flex items-center space-x-3 mb-2">
                <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
                  04 / Recent Beneficiaries
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-6">
                Roll of Merit Scholars
              </h2>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#1F2430]/15 text-[11px] uppercase tracking-wider font-mono text-[#1F2430]/60">
                      <th className="py-3 pr-4 font-medium">Year</th>
                      <th className="py-3 px-4 font-medium">Student Name</th>
                      <th className="py-3 px-4 font-medium">School</th>
                      <th className="py-3 pl-4 text-right font-medium">Class / Stream</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-[#1F2430]/85 divide-y divide-[#1F2430]/10 font-sans">
                    {meritAwardees.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#F1EADA]/50 transition-colors">
                        <td className="py-3.5 pr-4 font-mono text-xs text-[#1F2430]/60">{item.year}</td>
                        <td className="py-3.5 px-4 font-serif font-bold text-[#1F2430]">{item.name}</td>
                        <td className="py-3.5 px-4">{item.school}</td>
                        <td className="py-3.5 pl-4 text-right text-xs uppercase tracking-wider font-medium text-[#7A1F2B]">
                          {item.stream}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="pt-4 font-serif italic text-xs text-[#1F2430]/60">
                * Awardee photographs and academic records are published with the guardian’s prior written consent.
              </p>
            </RevealOnScroll>
          </div>

          {/* Sticky Sidebar (4 Columns) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 border border-[#E2DAC8] bg-[#FAF6EC] p-6 lg:p-7 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#7A1F2B] block">
                  Applicant Desk
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1F2430]">
                  Questions about the scholarship?
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-[#1F2430]/75 font-sans">
                Our volunteer teachers and verification committee members are available to help applicants and school authorities with queries regarding documentation and submission.
              </p>
              
              <div className="space-y-3 border-y border-[#1F2430]/15 py-4 text-xs">
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-[#1F2430]/50">
                    Direct Helpline
                  </span>
                  <span className="font-mono text-[#1F2430] font-semibold text-sm">
                    +91 9434X XXXXX / 0342-2XXXXX
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-[#1F2430]/50">
                    Helpdesk Timing
                  </span>
                  <span className="text-[#1F2430]/80">Mon – Sat, 10:00 AM – 4:00 PM</span>
                </div>
              </div>

              <div>
                <Link
                  href="/membership"
                  className="inline-block text-xs font-semibold text-[#7A1F2B] underline decoration-[#7A1F2B] underline-offset-4 hover:text-[#D9A441] transition-colors"
                >
                  Contact welfare secretary →
                </Link>
              </div>

              {/* Quick Note Box */}
              <div className="bg-[#F1EADA] p-4 text-[11px] leading-relaxed text-[#1F2430]/80 border-l-2 border-[#7A1F2B]">
                <span className="font-semibold text-[#1F2430] block mb-1">Notice for School Authorities:</span>
                School teachers may submit collective applications on official school letterhead directly at our registered office during active submission windows.
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Dark Moment (Single per page limit) */}
      <DarkBand
        badge="Institutional Partnership"
        title="Are you a school teacher or Headmaster?"
        description="If you know a promising student in your institution who risks discontinuing studies due to poverty, please notify the Samiti directly. Every deserving mind deserves our collective protection."
        ctaText="Nominate a Student"
        ctaLink="/apply"
      />
    </div>
  );
}
