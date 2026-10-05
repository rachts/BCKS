import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Functions & Celebrations | Bardhaman Chhatra Kalyan Samiti',
  description: 'Functions and celebrations information is awaiting confirmation.',
};

export default function FunctionsPage() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20">
      <SectionHeader badge="Functions & Celebrations" title="Functions and celebrations" level="h1" />
      <aside className="hairline-t pt-6" aria-label="Publication note">
        <p className="font-serif text-lg text-ink">Information coming soon</p>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed max-w-2xl">Demo only. Event details and photographs are withheld pending verified event mapping and publication consent.</p>
      </aside>
    </section>
  );
}
