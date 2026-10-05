import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import { siteContent } from '@/content/site';

const eligibility = [
  ['Academic Merit & Disadvantaged Means', 'A meritorious student in Classes 9–12 at a government or government-sponsored school who is financially disadvantaged.'],
  ['Institutional Endorsement', 'The student must be sponsored by the Headmaster, Headmistress, or Teacher-in-Charge (TIC).'],
  ['Application in the Notified Period', 'A properly filled application must be submitted within the notified period.'],
  ['Selection Board Appearance', 'The student must appear with a parent and all papers before the selection board at the notified date, time and place.'],
] as const;

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8 min-w-0">
            <p className="text-[11px] font-semibold tracking-folio uppercase text-maroon mb-5">Student welfare collective / Bardhaman, West Bengal</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.12] text-ink font-semibold tracking-tight">{siteContent.name}</h1>
            <p className="mt-6 text-base sm:text-lg text-ink/80 leading-relaxed max-w-2xl">Activities include scholarships, quiz, drawing and cultural competitions, and health checkups in Bardhaman, West Bengal.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/scholarships" className="btn-primary py-3.5 px-7 text-base">Scholarship Information</Link>
              <Link href="/donate" className="btn-secondary py-3.5 px-7 text-base">Support / Donate</Link>
            </div>
          </div>
          <aside className="lg:col-span-4 hairline-t pt-6">
            <p className="text-[11px] font-semibold tracking-folio uppercase text-maroon mb-3">Our founder</p>
            <p className="font-serif text-xl font-semibold text-ink">{siteContent.founder}</p>
            <p className="mt-3 text-sm text-ink/75 leading-relaxed">{siteContent.founderRole}</p>
            <Link href="/about" className="inline-flex items-center mt-5 text-sm font-semibold text-maroon hover:underline">About the Samiti <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" /></Link>
          </aside>
        </div>
      </section>

      <section className="hairline-t hairline-b bg-paper-dark/60">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 md:py-20">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="md:pr-8 md:border-r md:border-rule">
                <p className="text-[11px] font-semibold tracking-folio uppercase text-maroon mb-3">01 / Our purpose</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink mb-4">Mission</h2>
                <p className="text-base text-ink/80 leading-relaxed">{siteContent.mission}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-folio uppercase text-maroon mb-3">02 / Looking ahead</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink mb-4">Vision</h2>
                <p className="text-base text-ink/80 leading-relaxed">{siteContent.vision}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 md:py-24">
        <SectionHeader badge="Key initiatives" title="Our activities" bengaliTitle="সমিতির বহুমুখী সমাজসেবা ও শিক্ষামূলক উদ্যোগ" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {siteContent.activities.map((activity, index) => (
            <article key={activity} className="hairline-t pt-5">
              <span className="text-xs font-mono text-maroon">0{index + 1}</span>
              <h3 className="font-serif text-2xl font-semibold text-ink mt-2">{activity}</h3>
            </article>
          ))}
        </div>
        <Link href="/student-programmes" className="inline-flex items-center mt-8 text-sm font-semibold text-maroon hover:underline">Explore student programmes <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" /></Link>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 hairline-t" id="scholarships-overview">
        <SectionHeader badge="Selection criteria" title="Who Can Receive a BCKS Scholarship?" description="The four scholarship eligibility criteria are listed below." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eligibility.map(([title, description]) => (
            <article key={title} className="p-6 hairline-all bg-paper">
              <h3 className="font-serif text-lg font-semibold text-ink mb-3 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-maroon shrink-0 mt-1" aria-hidden="true" />{title}</h3>
              <p className="text-ink/80 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 hairline-t">
        <SectionHeader badge="Participate & contribute" title="Support the Samiti" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <article>
            <h3 className="font-serif text-2xl font-semibold text-ink mb-3">Become a Member</h3>
            <p className="text-sm text-ink/80 leading-relaxed">New membership: Rs{siteContent.fees.newMembership}. Renewal: Rs{siteContent.fees.renewal} per year.</p>
            <Link href="/membership" className="inline-block mt-5 text-sm font-semibold text-maroon hover:underline">Membership information →</Link>
          </article>
          <article>
            <h3 className="font-serif text-2xl font-semibold text-ink mb-3">Make a Donation</h3>
            <p className="text-sm text-ink/80 leading-relaxed">Minimum donation: Rs{siteContent.fees.minimumDonation}.</p>
            <Link href="/donate" className="inline-block mt-5 text-sm font-semibold text-maroon hover:underline">Donation information →</Link>
          </article>
        </div>
      </section>

      <aside className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 pb-20 hairline-t" aria-label="Information pending">
        <p className="font-serif text-lg text-ink">Information coming soon</p>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed">Further programme details, application dates and notices are awaiting confirmation.</p>
      </aside>
    </div>
  );
}
