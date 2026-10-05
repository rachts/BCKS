import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Annual General Meeting (AGM) | Bardhaman Chhatra Kalyan Samiti',
  description: 'Annual General Meeting information for Bardhaman Chhatra Kalyan Samiti.',
};

export default function AgmPage() {
  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/75 gap-2">
          <span>Folio No. 11 / Annual General Meeting</span>
          <span className="text-[#7A1F2B] font-semibold">Bardhaman, West Bengal</span>
        </div>
        <header className="pb-10 border-b border-[#1F2430]/15">
          <SectionHeader badge="AGM" title="Annual General Meeting" level="h1" />
        </header>
        <section className="py-10" aria-labelledby="meeting-information">
          <h2 id="meeting-information" className="font-serif text-2xl font-bold mb-3">Meeting information</h2>
          <p className="text-sm text-[#1F2430]/80">Information coming soon.</p>
        </section>
      </div>
    </div>
  );
}
