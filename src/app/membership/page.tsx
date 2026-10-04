'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { Search, ShieldCheck, CheckCircle2, ArrowRight, Download, CreditCard, UserCheck } from 'lucide-react';

export default function MembershipPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const membershipTiers = [
    {
      type: 'Life Member',
      bengali: 'আজীবন সদস্য',
      fee: '₹5,000',
      frequency: 'One-time endowment',
      benefits: [
        'Permanent voting rights at all Annual General Meetings (AGM)',
        'Eligible for election to the Governing Body & Advisory Council',
        'Official hardcopy subscription to the annual Samiti Gazette & Audits',
        'Direct involvement in rural student selection and vetting panels',
      ],
    },
    {
      type: 'Ordinary Member',
      bengali: 'সাধারণ সদস্য',
      fee: '₹500',
      frequency: 'Annual subscription',
      benefits: [
        'Participation & voting privileges at the Annual General Meeting',
        'Right to inspect audited balance sheets and administrative rolls',
        'Volunteer delegate for health camps and inter-school talent meets',
        'Formal 80G tax exemption receipt for all subscriptions',
      ],
    },
    {
      type: 'Student / Youth Member',
      bengali: 'ছাত্র / যুব সদস্য',
      fee: '₹100',
      frequency: 'Annual student concession',
      benefits: [
        'Open to college & university students under 25 years of age',
        'Active youth committee assignment for educational outreach',
        'Certificate of community leadership and social service',
        'Free entry to all literary symposiums and workshops',
      ],
    },
  ];

  const initialMembers = [
    { name: 'Prof. Suniti Kumar Bandyopadhyay', no: 'BCKS/LM/2012-004', since: '2012', type: 'Life Member' },
    { name: 'Dr. Debashis Mukhopadhyay', no: 'BCKS/OM/2014-029', since: '2014', type: 'Ordinary Member' },
    { name: 'Ananya Sen Sharma (Headmistress, retd.)', no: 'BCKS/LM/2015-052', since: '2015', type: 'Life Member' },
    { name: 'Tarun Kanti Bhattacharya', no: 'BCKS/OM/2017-088', since: '2017', type: 'Ordinary Member' },
    { name: 'Dr. Sharmila Roychowdhury', no: 'BCKS/LM/2018-104', since: '2018', type: 'Life Member' },
    { name: 'Soumen Chatterjee', no: 'BCKS/OM/2019-142', since: '2019', type: 'Ordinary Member' },
    { name: 'Prasenjit Karmakar', no: 'BCKS/SM/2021-201', since: '2021', type: 'Student Member' },
    { name: 'Kakoli Mukherjee', no: 'BCKS/LM/2022-230', since: '2022', type: 'Life Member' },
    { name: 'Biplab Kr. Ghosh', no: 'BCKS/OM/2023-289', since: '2023', type: 'Ordinary Member' },
    { name: 'Ritwik Gangopadhyay', no: 'BCKS/SM/2024-340', since: '2024', type: 'Student Member' },
  ];

  const filteredMembers = initialMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.no.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.since.includes(searchQuery)
  );

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 10 / CIVIC ALLIANCE &amp; PATRON REGISTRY</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">MEMBERSHIP ROLL</span>
          <span>ESTD. 2011</span>
        </div>

        {/* Page Header */}
        <header className="pb-12 border-b border-[#1F2430]/15">
          <SectionHeader
            badge="Membership"
            title="Join the Samiti as an enrolled member."
            subtitle="Become a registered custodian of student welfare in Purba Bardhaman. Every member holds statutory rights, audit oversight, and voting voice."
            level="h1"
            className="mb-4 max-w-4xl"
          />
        </header>

        {/* Categories of Membership (Tiers) */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              01 / Categories of Membership
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, idx) => (
              <RevealOnScroll
                key={idx}
                className="p-8 border border-[#E2DAC8] bg-[#F1EADA] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold">
                      {tier.type}
                    </span>
                    <span className="font-serif italic text-sm text-[#1F2430]/70">
                      {tier.bengali}
                    </span>
                  </div>
                  <div className="font-serif text-4xl font-bold text-[#1F2430] mb-1">
                    {tier.fee}
                  </div>
                  <span className="font-mono text-xs text-[#1F2430]/60 block mb-6">
                    {tier.frequency}
                  </span>

                  <ul className="space-y-3 border-t border-[#1F2430]/15 pt-6 text-sm text-[#1F2430]/85 font-sans">
                    {tier.benefits.map((b, bidx) => (
                      <li key={bidx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#7A1F2B] mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1F2430]/15">
                  <Link
                    href="/apply"
                    className="w-full h-11 bg-[#7A1F2B] text-[#FAF6EC] rounded-[6px] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#661823] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>Apply for {tier.type}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Rights & Responsibilities Split */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#1F2430]/15 -translate-x-1/2"></div>
            
            {/* Rights */}
            <RevealOnScroll className="pr-0 md:pr-10">
              <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-6">
                Statutory Member Rights
              </h2>
              <ul className="space-y-4 text-sm text-[#1F2430]/85 font-sans">
                <li className="flex items-start gap-3">
                  <span className="font-serif italic text-lg text-[#7A1F2B] font-bold">1.</span>
                  <p>Cast one vote in elections for the Governing Body during the Annual General Meeting.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-serif italic text-lg text-[#7A1F2B] font-bold">2.</span>
                  <p>Inspect the audited statement of accounts, register of members, and executive minutes book with prior written notice to the General Secretary.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-serif italic text-lg text-[#7A1F2B] font-bold">3.</span>
                  <p>Sponsor meritorious indigent scholars from registered district secondary schools for merit scholarship consideration.</p>
                </li>
              </ul>
            </RevealOnScroll>

            {/* Duties */}
            <RevealOnScroll className="pl-0 md:pl-10">
              <h2 className="font-serif text-2xl font-bold text-[#1F2430] mb-6">
                Duties &amp; Civic Responsibilities
              </h2>
              <ul className="space-y-4 text-sm text-[#1F2430]/85 font-sans">
                <li className="flex items-start gap-3">
                  <span className="font-serif italic text-lg text-[#D9A441] font-bold">1.</span>
                  <p>Pay the prescribed annual membership subscription punctually before the closure of the audit cycle (31st March).</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-serif italic text-lg text-[#D9A441] font-bold">2.</span>
                  <p>Uphold the non-political, secular charitable ethos and educational aims of the Samiti across Purba Bardhaman institutions.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-serif italic text-lg text-[#D9A441] font-bold">3.</span>
                  <p>Participate actively in volunteer delegations during annual scholarship verification drives and public health clinics.</p>
                </li>
              </ul>
            </RevealOnScroll>
          </div>
        </section>

        {/* Procedure for Enrolment (3 Horizontal Steps) */}
        <section className="py-16 border-b border-[#1F2430]/15">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#7A1F2B] inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#7A1F2B]">
              Procedure for Enrolment
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1F2430] mb-12">
            Three simple steps to formal membership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll className="relative pt-6 border-t border-[#1F2430]/20">
              <div className="font-serif italic text-6xl text-[#7A1F2B] font-bold leading-none mb-3">
                1
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1F2430] mb-2">
                Fill the form
              </h3>
              <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                Complete the biographical dossier online or download the bilingual physical form to record your residency in Purba Bardhaman.
              </p>
            </RevealOnScroll>

            <RevealOnScroll className="relative pt-6 border-t border-[#1F2430]/20">
              <div className="font-serif italic text-6xl text-[#1F2430] font-bold leading-none mb-3">
                2
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1F2430] mb-2">
                Pay by UPI or bank transfer
              </h3>
              <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                Remit the membership fee via direct Aadhaar/UPI transfer to the registered State Bank account or submit at the Curzon Gate central desk.
              </p>
            </RevealOnScroll>

            <RevealOnScroll className="relative pt-6 border-t border-[#1F2430]/20">
              <div className="font-serif italic text-6xl text-[#1F2430] font-bold leading-none mb-3">
                3
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1F2430] mb-2">
                Receive your membership receipt
              </h3>
              <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                Obtain your official digitally authenticated 80G tax receipt, membership register number, and voting voucher within 48 hours.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Searchable Register of Enrolled Members */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1F2430]/20">
            <div>
              <div className="flex items-center space-x-2 text-[#7A1F2B] mb-1 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>02 / REGISTER OF ENROLLED MEMBERS</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#1F2430]">
                Purba Bardhaman District Roll
              </h2>
              <span className="font-mono text-xs text-[#1F2430]/60">Archival Ledger • Certified Active Members</span>
            </div>

            {/* Live Search Input */}
            <div className="w-full md:w-80 flex items-center gap-2 border-b-[1.5px] border-[#1F2430] pb-1">
              <Search className="w-4 h-4 text-[#1F2430]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search member by name or number..."
                className="w-full bg-transparent font-sans text-sm text-[#1F2430] placeholder:text-[#1F2430]/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="w-full overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1F2430]/15 font-mono text-xs text-[#1F2430]/60 uppercase tracking-wider">
                  <th className="py-3.5 pr-6 font-medium">Member Name</th>
                  <th className="py-3.5 px-6 font-medium">Membership No.</th>
                  <th className="py-3.5 px-6 font-medium">Category</th>
                  <th className="py-3.5 pl-6 text-right font-medium">Member Since</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2430]/15 font-sans text-sm text-[#1F2430]">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((m, idx) => (
                    <tr key={idx} className="hover:bg-[#F1EADA]/40 transition-colors">
                      <td className="py-4 pr-6 font-semibold text-[#1F2430]">{m.name}</td>
                      <td className="py-4 px-6 font-mono text-xs text-[#7A1F2B] font-semibold">{m.no}</td>
                      <td className="py-4 px-6 font-mono text-xs text-[#1F2430]/70">{m.type}</td>
                      <td className="py-4 pl-6 text-right font-mono text-xs text-[#1F2430]/80">{m.since}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-sm font-mono text-[#1F2430]/60">
                      No matching records found in the district roll.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
