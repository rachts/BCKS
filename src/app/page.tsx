import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Award, BookOpen, Users, Calendar, FileText, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import DarkBand from "@/components/DarkBand";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function HomePage() {
  const circulars = [
    {
      title: "Annual Merit-cum-Means Scholarship Notification (2025–26 Cycle)",
      date: "15 Jan 2025",
      id: "CIR-2025-01",
      category: "Scholarship",
    },
    {
      title: "District Level Sit & Draw & Recitation Competition Results & Awardees",
      date: "04 Dec 2024",
      id: "CIR-2024-04",
      category: "Competitions",
    },
    {
      title: "Minutes & Financial Resolutions of the 13th Annual General Meeting (AGM)",
      date: "18 Sep 2024",
      id: "CIR-2024-03",
      category: "Governance",
    },
    {
      title: "Free Pediatric Vision & Health Camp Summary Report & Beneficiary List",
      date: "12 Jul 2024",
      id: "CIR-2024-02",
      category: "Welfare",
    },
    {
      title: "Audited Financial Balance Sheet, Income-Expenditure & Form 10B",
      date: "31 Mar 2024",
      id: "CIR-2024-01",
      category: "Audit",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-14 md:pb-22">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Archival Plate / Founder Handover Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <RevealOnScroll delay={0.1}>
              <div className="relative p-2 bg-[#EDE5D3] hairline-all shadow-none">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-paper-dark">
                  <Image
                    src="/images/history-1.png"
                    alt="Sri Baidyanath Singha Roy handing over educational aid to a recipient in Bardhaman"
                    fill
                    priority
                    className="object-cover object-center filter contrast-[1.04] transition-transform duration-1000 ease-out hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs italic text-ink/75 leading-relaxed font-serif">
                Sri Baidyanath Singha Roy, Founder-Secretary handing over educational scholarship aid to a student recipient and guardian in Bardhaman.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Column: Hero Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <RevealOnScroll delay={0.2}>
              <div className="flex items-center space-x-2 text-[11px] font-semibold tracking-folio uppercase text-maroon mb-4">
                <span>Established 2011</span>
                <span className="w-1.5 h-1.5 rounded-full bg-marigold"></span>
                <span>Purba Bardhaman, West Bengal</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.12] text-ink font-semibold tracking-tight">
                No deserving student should stop learning because of money.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-ink/80 leading-relaxed font-normal max-w-xl">
                Bardhaman Chhatra Kalyan Samiti supports underprivileged, meritorious students with higher education scholarships, textbook distribution, annual talent competitions, and healthcare relief across the district.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn-primary py-3.5 px-7 text-base">
                  Apply for Scholarship
                </Link>
                <Link href="/donate" className="btn-secondary py-3.5 px-7 text-base">
                  Support / Donate
                </Link>
              </div>

              {/* Motto Quote */}
              <div className="mt-10 pt-6 hairline-t flex items-center space-x-3 text-ink/70">
                <span className="font-serif italic text-maroon text-base sm:text-lg font-semibold">
                  “সা বিদ্যা যা বিমুক্তয়ে”
                </span>
                <span className="text-xs text-ink/65">— That is true knowledge which liberates.</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 2. STATS & KEY METRICS STRIP */}
      <section className="w-full hairline-t hairline-b bg-paper-dark/60 py-10 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              <div className="border-l-2 border-maroon pl-4 sm:pl-6">
                <div className="display-stat text-4xl sm:text-5xl md:text-6xl text-maroon font-bold">
                  1,250+
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink mt-2">
                  Students Sponsored
                </div>
                <div className="text-[11px] text-ink/65 mt-0.5">Secondary, Higher Secondary &amp; College</div>
              </div>

              <div className="border-l-2 border-maroon pl-4 sm:pl-6">
                <div className="display-stat text-4xl sm:text-5xl md:text-6xl text-maroon font-bold">
                  ₹42L+
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink mt-2">
                  Direct Aid Disbursed
                </div>
                <div className="text-[11px] text-ink/65 mt-0.5">100% transparent audit records</div>
              </div>

              <div className="border-l-2 border-maroon pl-4 sm:pl-6">
                <div className="display-stat text-4xl sm:text-5xl md:text-6xl text-maroon font-bold">
                  14+
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink mt-2">
                  Years of Service
                </div>
                <div className="text-[11px] text-ink/65 mt-0.5">Founded by community educationists in 2011</div>
              </div>

              <div className="border-l-2 border-maroon pl-4 sm:pl-6">
                <div className="display-stat text-4xl sm:text-5xl md:text-6xl text-maroon font-bold">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink mt-2">
                  Voluntary Governance
                </div>
                <div className="text-[11px] text-ink/65 mt-0.5">Zero administrative wage leakages</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. PURPOSE & MISSION STATEMENTS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-18 md:py-24">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="md:pr-8 md:border-r md:border-rule">
              <div className="flex items-center space-x-2 text-[11px] font-semibold tracking-folio uppercase text-maroon mb-3">
                <span>01 / Our Core Mission</span>
                <span className="w-5 h-[1px] bg-maroon"></span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink mb-4">
                Uplifting Education as a Common Right
              </h2>
              <p className="text-base text-ink/80 leading-relaxed font-normal">
                To support deserving students of Purba Bardhaman with structured financial stipends, learning resources, and competitive platforms, ensuring that no young scholar abandons academic aspirations due to indigence or lack of guidance.
              </p>
            </div>

            <div className="md:pl-4">
              <div className="flex items-center space-x-2 text-[11px] font-semibold tracking-folio uppercase text-maroon mb-3">
                <span>02 / Long-Term Vision</span>
                <span className="w-5 h-[1px] bg-maroon"></span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink mb-4">
                A Society Free of Financial Obstacles in Learning
              </h2>
              <p className="text-base text-ink/80 leading-relaxed font-normal">
                To cultivate an inclusive and accountable civic collective wherein every child in government and rural schools has uninterrupted access to higher education, textbooks, healthcare screening, and creative expression.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 4. CORE ACTIVITIES / ASYMMETRIC COLLAGE */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20 md:pb-28">
        <RevealOnScroll>
          <SectionHeader
            badge="Key Initiatives"
            title="Our Core Programmes & Social Work"
            bengaliTitle="সমিতির বহুমুখী সমাজসেবা ও শিক্ষামূলক উদ্যোগ"
            description="From structured annual stipends to healthcare screening and talent festivals, our programmes span the holistic development of youth."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Card (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-[#F7F2E4] p-8 md:p-10 hairline-all flex flex-col justify-between min-h-[420px]">
            <RevealOnScroll>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl font-bold text-maroon">01</span>
                  <span className="text-[11px] uppercase tracking-folio font-semibold px-3 py-1 bg-paper hairline-all text-maroon">
                    Flagship Welfare
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink mb-4 leading-snug">
                  Merit-cum-Means Scholarships
                </h3>
                <p className="text-ink/80 leading-relaxed mb-6 font-normal">
                  Annual educational stipends awarded directly to meritorious pupils of Class 9 through Post-Graduation across Purba Bardhaman district. Designed to cover tuition fees, laboratory manuals, textbook sets, and official Madhyamik/Higher Secondary examination fees.
                </p>
                <div className="grid grid-cols-2 gap-4 py-4 hairline-t hairline-b mb-6 text-xs text-ink/80">
                  <div>
                    <strong className="block text-ink text-sm font-serif">₹6,000 – ₹15,000</strong>
                    <span>Annual stipend brackets per student</span>
                  </div>
                  <div>
                    <strong className="block text-ink text-sm font-serif">Direct Bank Transfer</strong>
                    <span>Disbursed transparently to student accounts</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/scholarships"
                  className="inline-flex items-center font-semibold text-maroon hover:text-maroon-dark text-sm tracking-wide group"
                >
                  <span>Explore scholarship details &amp; quotas</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Stacked 3 items (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Item 2 */}
            <article className="p-6 bg-paper hairline-all">
              <RevealOnScroll delay={0.1}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-serif text-2xl font-bold text-maroon">02</span>
                  <span className="text-[10px] uppercase tracking-folio text-ink/50">Academics</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  Sit &amp; Draw &amp; Cultural Competitions
                </h3>
                <p className="text-ink/75 text-xs sm:text-sm leading-relaxed mb-3">
                  Annual district-wide arts, recitation, and essay competitions that assemble over 800 children to showcase artistic expression and heritage literature.
                </p>
                <Link
                  href="/competitions"
                  className="text-xs font-semibold text-maroon uppercase tracking-wider hover:underline"
                >
                  View contest rules &amp; photo archives →
                </Link>
              </RevealOnScroll>
            </article>

            {/* Item 3 */}
            <article className="p-6 bg-paper hairline-all">
              <RevealOnScroll delay={0.15}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-serif text-2xl font-bold text-maroon">03</span>
                  <span className="text-[10px] uppercase tracking-folio text-ink/50">Welfare</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  Study Material &amp; Book Bank Aid
                </h3>
                <p className="text-ink/75 text-xs sm:text-sm leading-relaxed mb-3">
                  Distributing complete textbook sets, stationery kits, school satchels, and uniforms to pupils in underprivileged remote villages and suburban colonies.
                </p>
                <Link
                  href="/student-programmes"
                  className="text-xs font-semibold text-maroon uppercase tracking-wider hover:underline"
                >
                  Read programme details →
                </Link>
              </RevealOnScroll>
            </article>

            {/* Item 4 */}
            <article className="p-6 bg-paper hairline-all">
              <RevealOnScroll delay={0.2}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-serif text-2xl font-bold text-maroon">04</span>
                  <span className="text-[10px] uppercase tracking-folio text-ink/50">Healthcare</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  Free Health &amp; Vision Check-Up Camps
                </h3>
                <p className="text-ink/75 text-xs sm:text-sm leading-relaxed mb-3">
                  Diagnostic camps offering pediatric checkups, free prescription spectacles, and general health advice conducted by senior specialist physicians.
                </p>
                <Link
                  href="/functions"
                  className="text-xs font-semibold text-maroon uppercase tracking-wider hover:underline"
                >
                  View medical camp reports →
                </Link>
              </RevealOnScroll>
            </article>
          </div>
        </div>
      </section>

      {/* 5. SCHOLARSHIP ELIGIBILITY & INTAKE WINDOW */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 hairline-t" id="scholarships-overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <RevealOnScroll>
              <SectionHeader
                badge="Selection Criteria"
                title="Who Can Receive a BCKS Scholarship?"
                bengaliTitle="বৃত্তি পাওয়ার আবশ্যিক শর্তাবলী ও নির্দেশিকা"
                description="Our selection process is strictly merit-cum-means, independently vetted by a committee of retired headmasters and senior educators."
              />

              <div className="space-y-4">
                <div className="relative p-6 bg-paper hairline-all overflow-hidden">
                  <span className="absolute -right-2 -bottom-6 font-serif text-[100px] font-bold text-maroon/10 select-none pointer-events-none leading-none">
                    1
                  </span>
                  <div className="relative z-10 pr-10">
                    <h4 className="font-serif text-lg font-semibold text-ink mb-1.5 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                      <span>Academic Merit &amp; Disadvantaged Means</span>
                    </h4>
                    <p className="text-ink/80 text-sm leading-relaxed">
                      Must be a bonafide student of Class 9 to Post-Graduation in a recognized government or state-aided institution with at least 65% aggregate marks, belonging to an economically disadvantaged family.
                    </p>
                  </div>
                </div>

                <div className="relative p-6 bg-paper hairline-all overflow-hidden">
                  <span className="absolute -right-2 -bottom-6 font-serif text-[100px] font-bold text-maroon/10 select-none pointer-events-none leading-none">
                    2
                  </span>
                  <div className="relative z-10 pr-10">
                    <h4 className="font-serif text-lg font-semibold text-ink mb-1.5 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                      <span>Institutional Endorsement</span>
                    </h4>
                    <p className="text-ink/80 text-sm leading-relaxed">
                      Application must be forwarded and verified by the Headmaster, Headmistress, or Teacher-in-Charge (TIC) with the official institutional seal.
                    </p>
                  </div>
                </div>

                <div className="relative p-6 bg-paper hairline-all overflow-hidden">
                  <span className="absolute -right-2 -bottom-6 font-serif text-[100px] font-bold text-maroon/10 select-none pointer-events-none leading-none">
                    3
                  </span>
                  <div className="relative z-10 pr-10">
                    <h4 className="font-serif text-lg font-semibold text-ink mb-1.5 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                      <span>Documented Income Certificate</span>
                    </h4>
                    <p className="text-ink/80 text-sm leading-relaxed">
                      Family gross annual income declaration certified by competent local authorities (BDO / SDO / Municipality Councilor / Panchayat Pradhan).
                    </p>
                  </div>
                </div>

                <div className="relative p-6 bg-paper hairline-all overflow-hidden">
                  <span className="absolute -right-2 -bottom-6 font-serif text-[100px] font-bold text-maroon/10 select-none pointer-events-none leading-none">
                    4
                  </span>
                  <div className="relative z-10 pr-10">
                    <h4 className="font-serif text-lg font-semibold text-ink mb-1.5 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                      <span>Personal Verification &amp; In-Person Interview</span>
                    </h4>
                    <p className="text-ink/80 text-sm leading-relaxed">
                      Shortlisted applicants appear before the Samiti education sub-committee along with parent or guardian for verification of marksheets and identity.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Sticky Application Notice */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <RevealOnScroll delay={0.2}>
              <div className="bg-[#F6EFE0] p-6 sm:p-8 hairline-all">
                <div className="w-8 h-8 rounded-full bg-maroon/10 flex items-center justify-center text-maroon mb-4 font-serif font-bold text-lg">
                  §
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-2 leading-snug">
                  2025–2026 Intake Portal
                </h3>
                <p className="text-ink/75 text-xs sm:text-sm leading-relaxed mb-6">
                  Online scholarship applications and physical form submissions for the upcoming academic session are currently under active scrutiny.
                </p>

                <div className="space-y-3 py-4 hairline-t hairline-b mb-6 text-xs text-ink/85">
                  <div className="flex justify-between">
                    <span className="text-ink/60">Territory:</span>
                    <span className="font-semibold text-ink">Purba Bardhaman</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink/60">Annual Budget:</span>
                    <span className="font-semibold text-ink">₹8,50,000 (Allocated)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink/60">Last Date:</span>
                    <span className="font-semibold text-maroon">30 November 2025</span>
                  </div>
                </div>

                <Link
                  href="/apply"
                  className="btn-primary w-full text-center py-3 text-sm block"
                >
                  Apply Online Now
                </Link>
                <span className="block text-center text-[11px] text-ink/60 mt-3">
                  Physical forms also available from registered school offices.
                </span>
              </div>
            </RevealOnScroll>
          </aside>
        </div>
      </section>

      {/* 6. THE ONE DARK MOMENT: FOUNDER QUOTE & PHILOSOPHY */}
      <DarkBand
        quote="When a community uplifts its own children through knowledge, it secures its moral and intellectual future for generations."
        attribution="Sri Baidyanath Singha Roy, Founder-Secretary"
        primaryAction={{
          label: "Read Our Founding History",
          href: "/about",
        }}
        secondaryAction={{
          label: "Meet the Committee",
          href: "/our-people",
        }}
      />

      {/* 7. WAYS TO SUPPORT / PATRONAGE */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20 md:pb-28">
        <RevealOnScroll>
          <SectionHeader
            badge="Participate &amp; Contribute"
            title="Ways to Support Our Educational Mission"
            bengaliTitle="আপনি যেভাবে যুক্ত হতে পারেন"
            description="Whether through an individual monthly donation, instituting a memorial award, or life membership, every contribution directly benefits a student."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Card 1 */}
          <div className="pt-6 hairline-t flex flex-col justify-between">
            <RevealOnScroll delay={0.1}>
              <div>
                <span className="text-xs font-mono uppercase text-maroon tracking-wider block mb-1">
                  01 / Patronage
                </span>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-3">
                  Become a Member
                </h3>
                <p className="text-ink/80 text-sm leading-relaxed mb-6 font-normal">
                  Support the Samiti continuously as a General or Life Member. Participate in democratic deliberations, AGM voting, and student aid committee reviews.
                </p>
                <div className="bg-[#FAF4E4] p-3.5 hairline-all text-xs text-ink/80 space-y-1 mb-6">
                  <p><strong className="text-ink">Life Membership:</strong> ₹5,000 (One-time)</p>
                  <p><strong className="text-ink">Annual Member:</strong> ₹500 / year</p>
                </div>
              </div>
              <Link href="/membership" className="inline-flex items-center text-sm font-semibold text-maroon hover:underline">
                <span>View membership details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </RevealOnScroll>
          </div>

          {/* Card 2 */}
          <div className="pt-6 hairline-t flex flex-col justify-between">
            <RevealOnScroll delay={0.15}>
              <div>
                <span className="text-xs font-mono uppercase text-maroon tracking-wider block mb-1">
                  02 / Direct Aid
                </span>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-3">
                  Sponsor a Student
                </h3>
                <p className="text-ink/80 text-sm leading-relaxed mb-6 font-normal">
                  Underwrite a child&apos;s educational expenses for a full academic session. Receive annual progress reports and academic certificates directly.
                </p>
                <div className="bg-[#FAF4E4] p-3.5 hairline-all text-xs text-ink/80 space-y-1 mb-6">
                  <p><strong className="text-ink">Secondary Scholar:</strong> ₹6,000 / year</p>
                  <p><strong className="text-ink">College / Technical:</strong> ₹12,000 / year</p>
                </div>
              </div>
              <Link href="/donate" className="inline-flex items-center text-sm font-semibold text-maroon hover:underline">
                <span>Donate online via UPI / Bank</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </RevealOnScroll>
          </div>

          {/* Card 3 */}
          <div className="pt-6 hairline-t flex flex-col justify-between">
            <RevealOnScroll delay={0.2}>
              <div>
                <span className="text-xs font-mono uppercase text-maroon tracking-wider block mb-1">
                  03 / Memorial Trusts
                </span>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-3">
                  Institute an Endowment
                </h3>
                <p className="text-ink/80 text-sm leading-relaxed mb-6 font-normal">
                  Perpetuate the memory of loved ones by establishing a permanent Named Scholarship Endowment or annual memorial competition trophy.
                </p>
                <div className="bg-[#FAF4E4] p-3.5 hairline-all text-xs text-ink/80 space-y-1 mb-6">
                  <p><strong className="text-ink">Permanent Endowment:</strong> ₹50,000+</p>
                  <p className="text-[11px] text-ink/65">Annual interest funds the named student stipend</p>
                </div>
              </div>
              <Link href="/ways-to-give" className="inline-flex items-center text-sm font-semibold text-maroon hover:underline">
                <span>Explore endowment options</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 8. OFFICIAL NOTICES & CIRCULARS TABLE */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-24 hairline-t pt-16" id="circulars">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-folio uppercase text-maroon block mb-2">
                Public Records &amp; Transparency
              </span>
              <h2 className="font-serif text-3xl font-semibold text-ink">
                Official Notices &amp; Circulars
              </h2>
            </div>
            <Link
              href="/updates"
              className="text-sm font-semibold text-maroon hover:underline flex items-center"
            >
              <span>View all circulars archive</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="editorial-table">
              <thead>
                <tr>
                  <th className="w-7/12">Circular Title &amp; Subject</th>
                  <th className="w-2/12">Category</th>
                  <th className="w-2/12">Published Date</th>
                  <th className="w-1/12 text-right">Official PDF</th>
                </tr>
              </thead>
              <tbody>
                {circulars.map((item, idx) => (
                  <tr key={idx} className="group">
                    <td className="font-serif font-medium text-ink group-hover:text-maroon transition-colors">
                      {item.title}
                    </td>
                    <td>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-paper-dark border border-rule text-ink/75 font-semibold">
                        {item.category}
                      </span>
                    </td>
                    <td className="font-mono text-xs text-ink/70">
                      {item.date}
                    </td>
                    <td className="text-right">
                      <Link
                        href="/updates"
                        className="font-mono text-xs font-semibold text-maroon hover:underline px-2 py-1 bg-maroon/5 border border-maroon/20 rounded"
                      >
                        PDF ↓
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
