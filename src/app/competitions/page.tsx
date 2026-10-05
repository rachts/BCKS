import SectionHeader from '@/components/SectionHeader';

export default function CompetitionsPage() {
  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/75 gap-2">
          <span>Folio No. 06 / Competitions</span>
          <span className="text-[#7A1F2B] font-semibold">Bardhaman, West Bengal</span>
        </div>
        <header className="pb-10 border-b border-[#1F2430]/15">
          <SectionHeader
            badge="Competitions"
            title="Quiz, drawing and cultural competitions"
            subtitle="Quiz, drawing and cultural competitions are activities of Bardhaman Chhatra Kalyan Samiti."
            level="h1"
          />
        </header>
        <section className="py-10 border-b border-[#1F2430]/15" aria-labelledby="activities">
          <h2 id="activities" className="font-mono text-xs uppercase tracking-widest text-[#7A1F2B] font-semibold mb-6">Our activities</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 font-serif text-2xl font-bold">
            <li className="border-t border-[#1F2430]/15 pt-5">Quiz</li>
            <li className="border-t border-[#1F2430]/15 pt-5">Drawing</li>
            <li className="border-t border-[#1F2430]/15 pt-5">Cultural Competitions</li>
          </ul>
        </section>
        <section className="pt-10" aria-labelledby="competition-information">
          <h2 id="competition-information" className="font-serif text-2xl font-bold mb-3">Competition rules &amp; results</h2>
          <p className="text-sm text-[#1F2430]/80">Information coming soon.</p>
        </section>
      </div>
    </div>
  );
}
