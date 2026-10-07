import SectionHeader from '@/components/SectionHeader';
import { siteContent } from '@/content/site';

export const metadata = {
  title: 'About the Samiti | BARDHAMAN CHHATRA KALYAN SAMITY',
  description: 'About BARDHAMAN CHHATRA KALYAN SAMITY, its mission, vision and activities in Bardhaman, West Bengal.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/75 gap-2">
          <span>Folio No. 02 / Institutional Record</span>
          <span className="text-[#7A1F2B] font-semibold">About the Society</span>
          <span>Bardhaman, West Bengal</span>
        </div>
        <header className="pb-10 border-b border-[#1F2430]/15">
          <SectionHeader badge="About Us" title="About BARDHAMAN CHHATRA KALYAN SAMITY" level="h1" />
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-[#1F2430]/15">
          <p className="text-base leading-[1.8] text-[#1F2430]/85 first-letter:text-5xl first-letter:font-serif first-letter:text-[#7A1F2B] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            BARDHAMAN CHHATRA KALYAN SAMITY is an NGO in Bardhaman, West Bengal. Its activities include scholarships, quiz, drawing and cultural competitions, and health checkups.
          </p>
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">Sri Baidyanath Singha Roy</h2>
            <p className="font-mono text-xs uppercase tracking-widest text-[#7A1F2B] mb-4">Founder-secretary &amp; Advisory Committee member</p>
            <p className="text-base leading-[1.8] text-[#1F2430]/85">
              Sri Baidyanath Singha Roy, founder and founder-secretary of BARDHAMAN CHHATRA KALYAN SAMITY, is now a member of its Advisory Committee. He was Assistant Headmaster of Bardhaman Raj Collegiate School and co-founder of Students Health Home, Bardhaman.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F1EADA] border-b border-[#1F2430]/15 p-6 md:p-10">
          <div className="md:pr-10 md:border-r border-[#1F2430]/15">
            <h2 className="font-serif text-3xl font-bold mb-4">Mission</h2>
            <p className="text-base text-[#1F2430]/85 leading-relaxed">{siteContent.mission}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">Vision</h2>
            <p className="text-base text-[#1F2430]/85 leading-relaxed">{siteContent.vision}</p>
          </div>
        </section>
        <section className="pt-10" aria-labelledby="institutional-information">
          <h2 id="institutional-information" className="font-serif text-2xl font-bold mb-3">Institutional history &amp; records</h2>
          <p className="text-sm text-[#1F2430]/80">Information coming soon.</p>
        </section>
      </div>
    </div>
  );
}
