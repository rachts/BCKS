import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { BookOpen, FileCheck, Award, HeartHandshake, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'About the Samiti | Bardhaman Chhatra Kalyan Samiti',
  description: 'History, foundational mission, charter, and milestones of Bardhaman Chhatra Kalyan Samiti since 2011.',
};

export default function AboutPage() {
  const milestones = [
    {
      year: '2011',
      title: 'The Samiti is Formed',
      description: 'Veteran teachers and alumni of Bardhaman Raj Collegiate School establish a mutual student welfare corpus with modest personal contributions.',
      tag: 'Foundation Accord • Burdwan Town',
    },
    {
      year: '2013',
      title: 'First Scholarship Awarded',
      description: 'Ten meritorious Madhyamik rankers from impoverished rural farming households receive full annual stipend covers and complete high-school textbook sets.',
      tag: 'Secondary Stipend Roll • 10 Enrolled',
    },
    {
      year: '2016',
      title: 'First Inter-School Quiz Competition',
      description: 'Over 45 schools across Bardhaman district participate in an annual contest celebrating general knowledge, Indian history, and Bengali literature.',
      tag: 'District Academy Forum • 45 Institutions',
    },
    {
      year: '2018',
      title: 'First Student Health Check-up Camp',
      description: 'Voluntary pediatricians and optometrists launch diagnostic clinics providing spectacles, pediatric review, and nutritional supplements for enrolled pupils.',
      tag: 'Preventative Clinical Cell • Town Hall',
    },
    {
      year: '2022',
      title: 'Vidyanidhi Scheme Launched',
      description: 'Special secondary endowment created for higher secondary science and humanities scholars preparing for competitive university entrance examinations.',
      tag: 'Higher Endowment Tract • Direct Grants',
    },
  ];

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>Folio No. 02 / Institutional Record</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">About the Society</span>
          <span>Purba Bardhaman, West Bengal</span>
        </div>

        {/* Header Block */}
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-8">
            <SectionHeader
              badge="About Us"
              title="A small organisation with a stubborn belief: money should never end a student’s education."
              level="h1"
              className="mb-4"
            />
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end pt-2">
            <div className="border border-[#E2DAC8] bg-[#F1EADA] p-5 max-w-sm w-full">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#7A1F2B]" />
                <span>Corpus Charter</span>
              </div>
              <p className="text-sm text-[#1F2430]/90 leading-relaxed font-sans">
                Self-governed mutual welfare endowment administered without overhead expenses, high salaries, or bureaucratic reserves.
              </p>
              <div className="mt-4 pt-3 border-t border-[#1F2430]/15 text-[11px] font-mono text-[#1F2430]/60">
                Audit Term: 2011 — Present
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Broadsheet Two-Column Article & Archival Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t border-[#1F2430]/15 pt-10 mb-16">
          <RevealOnScroll className="lg:col-span-4 text-[#1F2430]/90 leading-[1.8] text-base">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#7A1F2B] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Founded in 2011 by devoted educators, alumni, and citizens of Purba Bardhaman, Bardhaman Chhatra Kalyan Samiti emerged from a quiet realization: every academic season, brilliant young students across rural and municipal high schools drop out not for lack of dedication, but for lack of a few hundred rupees for textbooks, school fees, or examination forms.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-4 text-[#1F2430]/90 leading-[1.8] text-base">
            <p className="mb-6">
              What began as an informal effort among veteran teachers pooling small contributions from their pensions has evolved into an institutional lifeline. We do not maintain elaborate offices or corporate overheads. Every rupee gathered goes directly to verified students, overseen with rigorous grassroots scrutiny, parental interviews, and direct school headmaster endorsements.
            </p>
            <div className="p-4 bg-[#F1EADA] border border-[#E2DAC8]">
              <p className="italic text-[#7A1F2B] font-serif text-sm leading-snug">
                “When an indigent scholar passes their Secondary Board with distinction, it transforms the social gravity of their entire village.”
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-4">
            <div className="bg-[#F1EADA] p-3 border border-[#E2DAC8]">
              <div className="relative aspect-[4/3] bg-[#E2DAC8] overflow-hidden mb-3">
                <img
                  src="/images/history-1.png"
                  alt="Field verification and textbook distribution in Purba Bardhaman"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="font-serif italic text-xs text-[#1F2430]/80 leading-normal">
                Direct verification and textbook distribution to a supported scholar and family, Purba Bardhaman.
              </p>
              <div className="flex justify-between items-center text-[10px] font-mono text-[#1F2430]/50 mt-3 pt-2 border-t border-[#1F2430]/15">
                <span>FIELD ARCHIVE</span>
                <span>VERIFIED 2011–2025</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Mission & Vision (Broadsheet Split) */}
      <section className="w-full bg-[#F1EADA] border-y border-[#1F2430]/15 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#1F2430]/15 -translate-x-1/2"></div>
            
            {/* Mission */}
            <RevealOnScroll className="flex flex-col pr-0 md:pr-10">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>01 / OUR PURPOSE</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#1F2430] mb-4">Mission</h2>
              <p className="text-base text-[#1F2430]/85 leading-relaxed mb-6 font-sans">
                To support deserving students with education, financial assistance, and opportunities that help them achieve their goals and build a better future.
              </p>
              <div className="mt-auto border-t border-[#1F2430]/15 pt-4">
                <ul className="text-sm space-y-2.5 text-[#1F2430]/80">
                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-[#7A1F2B] rounded-full mt-2 shrink-0"></span>
                    <span>Direct stipend transfers with zero intermediary commission or processing deduction</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-[#7A1F2B] rounded-full mt-2 shrink-0"></span>
                    <span>Annual syllabus book grants, guide paper provisions, and complete stationery kit allocation</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Vision */}
            <RevealOnScroll className="flex flex-col pl-0 md:pl-10">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>02 / LONG-TERM HORIZON</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#1F2430] mb-4">Vision</h2>
              <p className="text-base text-[#1F2430]/85 leading-relaxed mb-6 font-sans">
                To create a society where financial limitations never prevent a deserving student from pursuing education and realizing their potential.
              </p>
              <div className="mt-auto border-t border-[#1F2430]/15 pt-4">
                <ul className="text-sm space-y-2.5 text-[#1F2430]/80">
                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full mt-2 shrink-0"></span>
                    <span>Universal secondary retention across all remote rural blocks of Purba Bardhaman</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full mt-2 shrink-0"></span>
                    <span>Sustained alumni mentorship circle guiding Higher Secondary scholars into university degrees</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeader
            badge="OUR JOURNEY"
            title="Milestones in Student Welfare"
            subtitle="Over a decade of uninterrupted service to the scholars of Purba Bardhaman."
            align="center"
          />
        </div>

        <div className="relative w-full">
          {/* Continuous central axis */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-[#1F2430]/15 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <RevealOnScroll key={item.year} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FAF6EC] border-2 border-[#D9A441] items-center justify-center z-10">
                    <span className={`w-1.5 h-1.5 rounded-full ${isEven ? 'bg-[#7A1F2B]' : 'bg-[#D9A441]'}`}></span>
                  </div>

                  {/* Left Column */}
                  {isEven ? (
                    <div className="pl-12 md:pl-0 md:pr-14 md:text-right">
                      <div className="font-serif italic text-4xl text-[#7A1F2B] font-bold leading-none mb-2">
                        {item.year}
                      </div>
                      <h3 className="font-serif font-bold text-xl text-[#1F2430] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#1F2430]/85 leading-relaxed font-sans mb-3">
                        {item.description}
                      </p>
                      <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#1F2430]/60 border-t border-[#1F2430]/15 pt-1">
                        {item.tag}
                      </span>
                    </div>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}

                  {/* Right Column */}
                  {!isEven ? (
                    <div className="pl-12 md:pl-14 md:text-left">
                      <div className="font-serif italic text-4xl text-[#7A1F2B] font-bold leading-none mb-2">
                        {item.year}
                      </div>
                      <h3 className="font-serif font-bold text-xl text-[#1F2430] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#1F2430]/85 leading-relaxed font-sans mb-3">
                        {item.description}
                      </p>
                      <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#1F2430]/60 border-t border-[#1F2430]/15 pt-1">
                        {item.tag}
                      </span>
                    </div>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Profile Block */}
      <section className="w-full border-t border-[#1F2430]/15 bg-[#FAF6EC] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Archival Portrait */}
            <RevealOnScroll className="lg:col-span-5">
              <div className="bg-[#F1EADA] p-4 border border-[#E2DAC8]">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#E2DAC8] mb-3">
                  <img
                    src="/images/history-2.png"
                    alt="Sri Baidyanath Singha Roy, Founder-Secretary"
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                </div>
                <div className="text-center">
                  <p className="font-serif italic text-xs text-[#1F2430]/80">
                    Sri Baidyanath Singha Roy conducting home assessments in rural Purba Bardhaman.
                  </p>
                  <p className="font-mono text-[10px] uppercase text-[#7A1F2B] font-semibold mt-1">
                    Founder-Secretary &amp; Elder Trustee
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: Editorial Biography & Dark Moment Quote */}
            <RevealOnScroll className="lg:col-span-7 flex flex-col justify-center">
              <SectionHeader
                badge="FOUNDER PROFILE"
                title="Sri Baidyanath Singha Roy"
                level="h2"
                className="mb-1"
              />
              <p className="font-mono text-xs uppercase tracking-widest text-[#7A1F2B] font-semibold mb-6">
                FOUNDER-SECRETARY &amp; ADVISORY COMMITTEE MEMBER
              </p>
              <p className="text-base text-[#1F2430]/85 leading-[1.8] font-sans mb-8">
                A revered teacher for decades and former Assistant Headmaster of the historic Bardhaman Raj Collegiate School, Sri Baidyanath Singha Roy has dedicated his life to grassroots education. In his youth, he co-founded the Students Health Home movement in the district, ensuring healthcare for indigent scholars. As the founder-secretary of Bardhaman Chhatra Kalyan Samiti, his daily routine included cycling down village tracks to verify students’ home circumstances. Today, he continues to guide the Samiti as a member of its Advisory Committee.
              </p>

              {/* Single Dark Moment Band for this page */}
              <div className="p-6 bg-[#7A1F2B] text-[#FAF6EC] border border-[#7A1F2B] rounded-[4px]">
                <div className="flex items-start space-x-3">
                  <span className="font-serif text-3xl leading-none text-[#D9A441]">“</span>
                  <div>
                    <p className="font-serif italic text-lg leading-snug">
                      True education liberates not just the mind, but the entire generational future of a family.
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#D9A441] mt-3">
                      — Address to Patrons, 2011 Inaugural Assembly
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Statutory Transparency Strip */}
      <section className="w-full bg-[#F1EADA] border-y border-[#1F2430]/15 py-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="border-b md:border-b-0 md:border-r border-[#1F2430]/15 pb-4 md:pb-0 md:pr-6">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-1 font-mono text-xs uppercase font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Registered Society</span>
              </div>
              <p className="font-serif text-sm font-semibold text-[#1F2430]">WB Societies Reg. Act XXVI of 1961</p>
              <p className="font-mono text-xs text-[#1F2430]/70 mt-0.5">Reg. No. S/2L/48211</p>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-[#1F2430]/15 pb-4 md:pb-0 md:pr-6">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-1 font-mono text-xs uppercase font-semibold">
                <FileCheck className="w-4 h-4" />
                <span>12A Certification</span>
              </div>
              <p className="font-serif text-sm font-semibold text-[#1F2430]">Income Tax Exemption Trust</p>
              <p className="font-mono text-xs text-[#1F2430]/70 mt-0.5">Order: AABTB4928RE20214</p>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-[#1F2430]/15 pb-4 md:pb-0 md:pr-6">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-1 font-mono text-xs uppercase font-semibold">
                <Award className="w-4 h-4 text-[#D9A441]" />
                <span>80G Tax Exemption</span>
              </div>
              <p className="font-serif text-sm font-semibold text-[#1F2430]">50% Donor Exemption</p>
              <p className="font-mono text-xs text-[#1F2430]/70 mt-0.5">URN: AABTB4928RF20219</p>
            </div>

            <div className="flex flex-col justify-center items-start md:items-end">
              <Link
                href="/updates"
                className="group inline-flex items-center space-x-2 text-[#7A1F2B] font-serif font-semibold text-sm hover:text-[#1F2430] transition-colors pb-1 border-b border-[#7A1F2B]"
              >
                <span>Download Statutory Filings (PDF)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <span className="font-mono text-[10px] text-[#1F2430]/50 mt-1 uppercase">Full Audit Papers Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
