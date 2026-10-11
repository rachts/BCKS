import SectionHeader from '@/components/SectionHeader';
import { siteContent } from '@/content/site';

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
            <p className="font-serif text-4xl font-bold mb-2">₹{siteContent.fees.newMembership.toLocaleString()}</p>
            <p className="text-sm text-[#1F2430]/80">New membership fee</p>
          </div>
          <div className="p-6 md:p-8 bg-[#F1EADA] border border-[#E2DAC8]">
            <h2 className="font-serif text-2xl font-bold mb-2">Membership Renewal</h2>
            <p lang="bn" className="font-serif text-[#7A1F2B] mb-6">সদস্যপদ নবীকরণ</p>
            <p className="font-serif text-4xl font-bold mb-2">₹{siteContent.fees.renewal}</p>
            <p className="text-sm text-[#1F2430]/80">Annual subscription</p>
          </div>
        </section>
        <section className="pt-10" aria-labelledby="membership-information">
          <h2 id="membership-information" className="font-serif text-2xl font-bold mb-3">Membership information</h2>
           <div className="space-y-4 text-sm text-[#1F2430]/80 leading-relaxed">
             <p>A compassionate person interested in the welfare of students and society may apply for ordinary membership by paying the admission fee.</p>
             <p>An ordinary member may attend general meetings, vote and stand for election. Members may submit suggestions to the Executive Committee or resign by written notice. Annual subscriptions must be paid on time; members whose subscriptions are unpaid cannot attend general meetings or participate in elections.</p>
             <p>Members may subscribe to a Smriti Puraskar in memory of a relative or friend, or donate a Personal Scholarship in their own name by depositing the scholarship amount fixed for that year.</p>
             <p>Membership application form and present member list: <strong>[TODO: approved public documents]</strong>.</p>
           </div>
        </section>
      </div>
    </div>
  );
}
