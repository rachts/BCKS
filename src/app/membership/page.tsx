import SectionHeader from '@/components/SectionHeader';

export default function MembershipPage() {
  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/75 gap-2">
          <span>Folio No. 10 / Membership</span>
          <span className="text-[#7A1F2B] font-semibold">Bardhaman, West Bengal</span>
        </div>
        <header className="pb-10 border-b border-[#1F2430]/15">
          <SectionHeader badge="Membership" title="Membership of the Samiti" level="h1" />
        </header>
        <section aria-label="Membership fees" className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-b border-[#1F2430]/15">
          <div className="p-6 md:p-8 bg-[#F1EADA] border border-[#E2DAC8]">
            <h2 className="font-serif text-2xl font-bold mb-2">New Membership</h2>
            <p lang="bn" className="font-serif text-[#7A1F2B] mb-6">নতুন সদস্যপদ</p>
            <p className="font-serif text-4xl font-bold mb-2">₹2,000</p>
            <p className="text-sm text-[#1F2430]/80">New membership fee</p>
          </div>
          <div className="p-6 md:p-8 bg-[#F1EADA] border border-[#E2DAC8]">
            <h2 className="font-serif text-2xl font-bold mb-2">Membership Renewal</h2>
            <p lang="bn" className="font-serif text-[#7A1F2B] mb-6">সদস্যপদ নবীকরণ</p>
            <p className="font-serif text-4xl font-bold mb-2">₹500</p>
            <p className="text-sm text-[#1F2430]/80">Annual subscription</p>
          </div>
        </section>
        <section className="pt-10" aria-labelledby="membership-information">
          <h2 id="membership-information" className="font-serif text-2xl font-bold mb-3">Membership information</h2>
          <p className="text-sm text-[#1F2430]/80">Information coming soon.</p>
        </section>
      </div>
    </div>
  );
}
