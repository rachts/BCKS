import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Photo Gallery | BARDHAMAN CHHATRA KALYAN SAMITY',
  description: 'Photographs are withheld pending verified event mapping and publication consent.',
};

export default function GalleryPage() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20">
      <SectionHeader badge="Photographic collection" title="Photo gallery" level="h1" />
      <aside className="hairline-t pt-6" aria-label="Publication note">
        <p className="font-serif text-lg text-ink">Information coming soon</p>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed max-w-2xl">Demo only. Photographs are withheld pending verified event mapping and publication consent.</p>
      </aside>
    </section>
  );
}
