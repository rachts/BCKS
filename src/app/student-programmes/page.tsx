import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { Calendar, Stethoscope, HeartPulse, Brain, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'Student Programmes & Health Initiatives | Bardhaman Chhatra Kalyan Samiti',
  description: 'Preventive healthcare, adolescent health clinics, spectacles distribution, and mental health counselling across Purba Bardhaman.',
};

export default function StudentProgrammesPage() {
  const upcomingCamps = [
    {
      date: '14 MARCH 2026',
      time: 'SATURDAY • 09:30 HRS',
      venue: 'Kalna Maharaja’s High School Campus',
      location: 'Kalna Sub-Division, Purba Bardhaman',
      description: 'Vision screening, corrective spectacles prescription distribution, and nutritional anemia counseling for Classes 8 through 10.',
    },
    {
      date: '18 APRIL 2026',
      time: 'SATURDAY • 10:00 HRS',
      venue: 'Khandaghosh High School',
      location: 'Khandaghosh Block, Purba Bardhaman',
      description: 'Comprehensive adolescent health assessment, diagnostic vitals review, height-to-weight indices, and systematic iron supplementation review.',
    },
    {
      date: '09 MAY 2026',
      time: 'SATURDAY • 09:00 HRS',
      venue: 'Galsi High School Ground Hall',
      location: 'Galsi-II Block, Purba Bardhaman',
      description: 'Pediatric dental evaluation, preventative oral hygiene kit distribution, and ergonomics/student posture awareness seminar.',
    },
  ];

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 05 / COMMUNITY &amp; HEALTH INITIATIVES</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">PURBA BARDHAMAN</span>
          <span>DISPATCH FILE 2026–2027</span>
        </div>

        {/* Page Header */}
        <header className="pb-12 border-b border-[#1F2430]/15">
          <SectionHeader
            badge="Student Programmes"
            title="We look after health and confidence, not just fees."
            subtitle="Education cannot flourish in poor health or isolation. Beyond monetary scholarships, Bardhaman Chhatra Kalyan Samiti conducts grassroots preventive medical care, adolescent diagnostic clinics, and psychological counselling sessions across rural secondary schools in Purba Bardhaman."
            level="h1"
            className="mb-4 max-w-4xl"
          />
        </header>

        {/* Section 01: Health Check-up Camps */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Documentary Plate (5 cols) */}
            <RevealOnScroll className="lg:col-span-5 flex flex-col">
              <div className="aspect-[4/3] w-full bg-[#F1EADA] overflow-hidden border border-[#E2DAC8] relative">
                <img
                  src="/images/history-1.png"
                  alt="Student health camp screening session"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
                <span className="absolute bottom-2 left-2 bg-[#FAF6EC]/90 text-[10px] tracking-widest uppercase px-2 py-0.5 border border-[#1F2430]/15 font-mono text-[#1F2430]">
                  [PLATE NO. 04 • HEALTH CAMP]
                </span>
              </div>
              <p className="font-serif italic text-xs text-[#1F2430]/80 pt-3 leading-snug">
                Volunteer paediatricians and optometrists conducting adolescent vision screening and hemoglobin testing at Burdwan Municipal High School premises.
              </p>
            </RevealOnScroll>

            {/* Right: Editorial Content & Tabular Details (7 cols) */}
            <RevealOnScroll className="lg:col-span-7 flex flex-col lg:pl-8 lg:border-l lg:border-[#1F2430]/15">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>PREVENTIVE HEALTHCARE • CLINICAL INITIATIVE</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-4">
                Comprehensive pediatric and vision screening camps for rural students.
              </h2>
              <p className="text-base text-[#1F2430]/85 font-sans leading-relaxed mb-6">
                Most adolescent dropouts and learning difficulties in government schools trace back to uncorrected myopia, chronic nutritional anemia, or untreated dental distress. Our medical cell mobilizes senior retired and practicing physicians to bring multi-speciality primary diagnostics directly into school classrooms.
              </p>

              {/* Key Facts Definition List */}
              <div className="w-full border-t border-[#1F2430]/15">
                <dl className="divide-y divide-[#1F2430]/15 text-sm font-sans">
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">Last Convened</dt>
                    <dd className="sm:col-span-2 text-[#1F2430] font-medium">12 January 2026 • Curzon Gate Central Unit</dd>
                  </div>
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">Primary Venue</dt>
                    <dd className="sm:col-span-2 text-[#1F2430]">Memari Vidyasagar Memorial Institution, Purba Bardhaman</dd>
                  </div>
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">Students Screened</dt>
                    <dd className="sm:col-span-2 text-[#7A1F2B] font-semibold">640 secondary and higher secondary pupils</dd>
                  </div>
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">Medical Officers</dt>
                    <dd className="sm:col-span-2 text-[#1F2430]">6 volunteer physicians (Pediatrics, Optometry, General Medicine, Dentistry)</dd>
                  </div>
                </dl>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Section 02: Upcoming Camps Calendar */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#D9A441] inline-block"></span>
            <span>CALENDAR OF MEDICAL CAMPS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#1F2430]">
              Forthcoming diagnostic clinics across district blocks
            </h2>
            <span className="font-mono text-xs text-[#1F2430]/60 tracking-wider uppercase mt-1 md:mt-0">
              Q1–Q2 SCHEDULE • SUBJECT TO LOCAL SCHOOL TERM
            </span>
          </div>

          <div className="border-t border-[#1F2430]/15">
            {upcomingCamps.map((camp, idx) => (
              <RevealOnScroll
                key={idx}
                className="py-6 border-b border-[#1F2430]/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline hover:bg-[#F1EADA]/40 transition-colors px-3"
              >
                <div className="lg:col-span-3 flex flex-col">
                  <span className="font-serif font-bold text-lg text-[#7A1F2B] tracking-wide">
                    {camp.date}
                  </span>
                  <span className="font-mono text-xs text-[#D9A441] uppercase mt-0.5 font-semibold">
                    {camp.time}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-serif font-bold text-lg text-[#1F2430]">
                    {camp.venue}
                  </h3>
                  <span className="font-mono text-xs text-[#1F2430]/60 uppercase">
                    {camp.location}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm text-[#1F2430]/80 leading-relaxed font-sans">
                    {camp.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Section 03: Counselling & Social Awareness */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Editorial Content (7 cols) */}
            <RevealOnScroll className="lg:col-span-7 flex flex-col lg:pr-8 lg:border-r lg:border-[#1F2430]/15">
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>GUIDANCE &amp; WELLBEING • ADOLESCENT FORUM</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-4">
                Building psychological resilience, career clarity, and social awareness.
              </h2>
              <p className="text-base text-[#1F2430]/85 font-sans leading-relaxed mb-6">
                Poverty and first-generation learner status bring intense exam anxiety and socio-familial pressure. We convene interactive group discussions led by veteran headmasters and certified adolescent counselors to instill emotional equilibrium, debunk social stigmas, and clarify vocational pathways after Madhyamik and Higher Secondary examinations.
              </p>

              <div className="w-full border-t border-[#1F2430]/15">
                <dl className="divide-y divide-[#1F2430]/15 text-sm font-sans">
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">Focus Areas</dt>
                    <dd className="sm:col-span-2 text-[#1F2430]">Exam stress alleviation, adolescent mental health, anti-child-marriage dialogues &amp; career mentoring</dd>
                  </div>
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">Facilitators</dt>
                    <dd className="sm:col-span-2 text-[#1F2430]">Senior educationalists, retired headmasters &amp; guest child psychologists</dd>
                  </div>
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">Average Cohort</dt>
                    <dd className="sm:col-span-2 text-[#7A1F2B] font-semibold">120–150 students per interactive session with parents invited</dd>
                  </div>
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">Partner Schools</dt>
                    <dd className="sm:col-span-2 text-[#1F2430]">38 accredited secondary schools across Purba Bardhaman</dd>
                  </div>
                </dl>
              </div>
            </RevealOnScroll>

            {/* Right: Plate (5 cols) */}
            <RevealOnScroll className="lg:col-span-5 flex flex-col">
              <div className="aspect-[4/3] w-full bg-[#F1EADA] overflow-hidden border border-[#E2DAC8] relative">
                <img
                  src="/images/history-2.png"
                  alt="Counselling and awareness seminar"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
                <span className="absolute bottom-2 left-2 bg-[#FAF6EC]/90 text-[10px] tracking-widest uppercase px-2 py-0.5 border border-[#1F2430]/15 font-mono text-[#1F2430]">
                  [PLATE NO. 05 • AWARENESS FORUM]
                </span>
              </div>
              <p className="font-serif italic text-xs text-[#1F2430]/80 pt-3 leading-snug">
                Interactive session on mental wellbeing and post-Madhyamik academic planning, facilitated at Bardhaman Town Hall.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Section 04: Community Invitation Strip */}
        <section className="py-12 my-8 border-y border-[#1F2430]/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold block mb-1">
                PROFESSIONAL VOLUNTARY SERVICE
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1F2430]">
                Are you a healthcare professional or counselor?
              </h2>
              <p className="text-sm text-[#1F2430]/80 font-sans mt-2">
                Doctors, dentists, clinical psychologists, and vocational mentors are invited to dedicate one camp weekend per quarter.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex flex-col font-mono text-xs text-[#1F2430]/70 text-left sm:text-right">
                <span>OFFICIAL DESK / CONVENOR</span>
                <span className="font-bold text-[#1F2430] text-sm tracking-wider">+91 94340 21876</span>
              </div>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center h-11 px-6 bg-[#7A1F2B] text-[#FAF6EC] text-xs font-mono uppercase tracking-wider rounded-[4px] hover:bg-[#661823] transition-colors"
              >
                <span>Volunteer with our medical cell →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
