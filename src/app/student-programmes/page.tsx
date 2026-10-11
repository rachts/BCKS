import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
  title: 'Student Programmes & Health Initiatives | BARDHAMAN CHHATRA KALYAN SAMITY',
  description: 'Health checkups, quiz, drawing and cultural competitions are activities of BARDHAMAN CHHATRA KALYAN SAMITY, Bardhaman, West Bengal.',
};

export default function StudentProgrammesPage() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20">
      <header className="pb-10 hairline-b">
        <SectionHeader badge="Student Programmes" title="Student programmes and health checkups" level="h1" description="Activities of BARDHAMAN CHHATRA KALYAN SAMITY in Bardhaman, West Bengal." />
      </header>
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-12">
          <article>
            <span className="font-mono text-xs uppercase tracking-widest text-maroon">01 / Health</span>
            <h2 className="font-serif text-2xl font-semibold text-ink mt-3 mb-4">Health checkups</h2>
            <p className="text-base text-ink/80 leading-relaxed">The Samiti is taking steps to organise health camps and seminars in schools for the better health of students.</p>
          </article>
          <article className="md:border-l md:border-rule md:pl-10">
            <span className="font-mono text-xs uppercase tracking-widest text-maroon">02 / Competitions</span>
            <h2 className="font-serif text-2xl font-semibold text-ink mt-3 mb-4">Quiz, drawing &amp; cultural competitions</h2>
            <p className="text-base text-ink/80 leading-relaxed">Each year, the Samiti conducts competitions for students in Classes 5–12 of government and government-sponsored schools. The junior group covers Classes 5–8 and the senior group covers Classes 9–12. Subjects include recitation, music, drawing and quiz.</p>
            <Link href="/competitions" className="inline-block mt-5 text-sm font-semibold text-maroon hover:underline">Competition information →</Link>
          </article>
        </div>
      </RevealOnScroll>
      <section className="hairline-t py-10" aria-labelledby="school-reach">
        <h2 id="school-reach" className="font-serif text-2xl font-semibold text-ink mb-3">School reach</h2>
        <p className="text-sm text-ink/80 leading-relaxed max-w-2xl">The Samity has reached all 40 secondary and higher-secondary schools in its current area: 38 in Bardhaman Municipality and two in adjoining panchayat areas.</p>
      </section>
      <aside className="hairline-t pt-6" aria-label="Programme details pending">
        <p className="font-serif text-lg text-ink">Information coming soon</p>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed">Schedules, participation details and health services are awaiting confirmation.</p>
      </aside>
    </section>
  );
}
