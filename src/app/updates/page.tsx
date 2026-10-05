import SectionHeader from '@/components/SectionHeader';

export default function UpdatesPage() {
  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/75 gap-2">
          <span>Folio No. 12 / Notices &amp; Updates</span>
          <span className="text-[#7A1F2B] font-semibold">Bardhaman, West Bengal</span>
        </div>
        <header className="pb-10 border-b border-[#1F2430]/15">
          <SectionHeader badge="Updates" title="Notices & Updates" level="h1" />
        </header>
        <p className="py-10 text-sm text-[#1F2430]/80">Information coming soon.</p>
      </div>
    </div>
  );
}
