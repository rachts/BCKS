import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
  title: 'Scholarships | BARDHAMAN CHHATRA KALYAN SAMITY',
  description: 'Scholarship eligibility for financially disadvantaged, meritorious government or government-sponsored school students in Classes 9–12.',
};

const criteria = [
  ['Secondary Enrolment', 'A meritorious student in Classes 9–12 at a government or government-sponsored school who is financially disadvantaged.'],
  ['Institutional Sponsorship', 'The student must be sponsored by the Headmaster, Headmistress, or Teacher-in-Charge (TIC).'],
  ['Prescribed Window', 'A properly filled application must be submitted within the notified period.'],
  ['Selection Board Appearance', 'The student must appear with a parent and all papers before the selection board at the notified date, time and place.'],
] as const;

export default function ScholarshipsPage() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20">
      <header className="pb-10 hairline-b">
        <SectionHeader badge="Scholarships" title="Scholarship eligibility and application information" level="h1" />
        <p className="text-base text-ink/80 leading-relaxed max-w-2xl">Scholarships are an activity of BARDHAMAN CHHATRA KALYAN SAMITY. The four eligibility criteria are listed below.</p>
      </header>
      <RevealOnScroll>
        <div className="py-12">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-8">Requirements for Consideration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {criteria.map(([title, description], index) => (
              <article key={title} className="hairline-t pt-6">
                <span className="font-serif italic text-4xl text-maroon">0{index + 1}</span>
                <h3 className="font-serif text-xl font-semibold text-ink mt-4 mb-3">{title}</h3>
                <p className="text-sm text-ink/80 leading-relaxed max-w-lg">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <aside className="hairline-t pt-6" aria-label="Application details pending">
        <p className="font-serif text-lg text-ink">Information coming soon</p>
        <p className="text-sm text-ink/75 mt-2 leading-relaxed">Award terms, application dates and submission instructions are awaiting confirmation.</p>
        <Link href="/apply" className="inline-block mt-5 text-sm font-semibold text-maroon hover:underline">Application information →</Link>
      </aside>
    </section>
  );
}
