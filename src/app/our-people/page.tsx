import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Our People | Bardhaman Chhatra Kalyan Samiti',
  description: 'Founder Sri Baidyanath Singha Roy, founder-secretary and Advisory Committee member of Bardhaman Chhatra Kalyan Samiti.',
};

export default function OurPeoplePage() {
  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/75 gap-2">
          <span>Folio No. 09 / Our People</span>
          <span className="text-[#7A1F2B] font-semibold">Bardhaman, West Bengal</span>
        </div>
        <header className="pb-10 border-b border-[#1F2430]/15">
          <SectionHeader badge="Our People" title="The people behind the Samiti" level="h1" />
        </header>
        <section className="py-10 border-b border-[#1F2430]/15 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7A1F2B] mb-3">Founder / Founder-secretary; now Advisory Committee</p>
          <h2 className="font-serif text-3xl font-bold mb-5">Sri Baidyanath Singha Roy</h2>
          <p className="text-base text-[#1F2430]/85 leading-[1.8]">
            Sri Baidyanath Singha Roy is the founder and founder-secretary of Bardhaman Chhatra Kalyan Samiti and is now a member of its Advisory Committee. He was Assistant Headmaster of Bardhaman Raj Collegiate School and co-founder of Students Health Home, Bardhaman.
          </p>
        </section>
        <section className="pt-10" aria-labelledby="committee">
          <h2 id="committee" className="font-serif text-2xl font-bold mb-3">Committee</h2>
          <p className="text-sm text-[#1F2430]/80">Information coming soon.</p>
        </section>
      </div>
    </div>
  );
}
