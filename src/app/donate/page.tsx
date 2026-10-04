'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { Copy, Check, ShieldCheck, HeartHandshake, QrCode, Building, Award, CheckCircle2, AlertCircle } from 'lucide-react';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentChannel, setPaymentChannel] = useState<'upi' | 'bank'>('upi');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [receiptSubmitted, setReceiptSubmitted] = useState(false);

  const presetAmounts = [200, 500, 1000, 2500, 5000];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleReceiptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReceiptSubmitted(true);
    setTimeout(() => setReceiptSubmitted(false), 5000);
  };

  const currentAmount = customAmount ? Number(customAmount) : selectedAmount || 1000;

  return (
    <div className="bg-[#FAF6EC] text-[#1F2430] min-h-screen">
      {/* Running Folio */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1F2430]/15 pb-3 mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2430]/60 gap-2">
          <span>FOLIO NO. 13 / PATRON CONTRIBUTIONS &amp; ENDOWMENT</span>
          <span className="text-[#7A1F2B] font-semibold tracking-widest">80G TAX EXEMPTION</span>
          <span>ESTD. 2011</span>
        </div>

        {/* Page Header */}
        <header className="pb-12 border-b border-[#1F2430]/15">
          <SectionHeader
            badge="Donate &amp; Support"
            title="Every rupee directly funds a student’s schooling."
            subtitle="The Samiti charges zero administrative overheads. All contributions qualify for 50% tax deduction under Section 80G of the Income Tax Act."
            level="h1"
            className="mb-4 max-w-4xl"
          />
        </header>

        {/* STEP 1: CHOOSE ENDOWMENT AMOUNT */}
        <section className="py-12 border-b border-[#1F2430]/15">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-serif italic text-6xl text-[#7A1F2B] select-none leading-none font-bold">1</span>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold block">
                STEP 01 / CONTRIBUTION AMOUNT
              </span>
              <span className="text-xs text-[#1F2430]/70 font-sans">
                Select a recommended stipend quota or input a customized contribution
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-[#F1EADA] border border-[#E2DAC8] rounded-[4px]">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`h-11 px-6 rounded-[4px] font-mono text-xs uppercase tracking-wider font-semibold transition-all ${
                    selectedAmount === amt && !customAmount
                      ? 'bg-[#7A1F2B] text-[#FAF6EC] border border-[#7A1F2B]'
                      : 'bg-[#FAF6EC] text-[#1F2430] border border-[#1F2430]/20 hover:border-[#7A1F2B]'
                  }`}
                >
                  ₹ {amt.toLocaleString()}
                </button>
              ))}

              <div className="flex items-center min-w-[200px] h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] focus-within:border-[#7A1F2B]">
                <span className="font-serif font-bold text-base text-[#1F2430]/60 mr-2">₹</span>
                <input
                  type="number"
                  min="50"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter other amount"
                  className="w-full bg-transparent text-sm font-mono text-[#1F2430] placeholder:text-[#1F2430]/40 focus:outline-none"
                />
              </div>
            </div>

            <div className="text-xs font-mono text-[#1F2430]/70">
              <span className="text-[#7A1F2B] font-semibold">Impact: </span>
              {currentAmount >= 5000
                ? 'Full year secondary tuition + complete textbook hamper + winter clothing.'
                : currentAmount >= 2500
                ? 'Covers complete annual academic textbooks and science laboratory stationery.'
                : currentAmount >= 1000
                ? 'Provides Madhyamik examination fee cover and preparatory test guides.'
                : 'Provides notebook bundles, mathematical instruments, and pens for indigent scholars.'}
            </div>
          </div>
        </section>

        {/* STEP 2: REMITTANCE CHANNELS (UPI / BANK TRANSFER) */}
        <section className="py-12 border-b border-[#1F2430]/15">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-serif italic text-6xl text-[#7A1F2B] select-none leading-none font-bold">2</span>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold block">
                STEP 02 / REMITTANCE CHANNEL
              </span>
              <span className="text-xs text-[#1F2430]/70 font-sans">
                All funds flow directly to the State Bank of India treasury ledger
              </span>
            </div>
          </div>

          {/* Toggle buttons */}
          <div className="flex items-center gap-8 mb-8 border-b border-[#1F2430]/15 pb-2">
            <button
              type="button"
              onClick={() => setPaymentChannel('upi')}
              className={`pb-2 font-serif text-lg font-bold relative transition-colors ${
                paymentChannel === 'upi' ? 'text-[#7A1F2B]' : 'text-[#1F2430]/60 hover:text-[#1F2430]'
              }`}
            >
              UPI Instant Transfer
              {paymentChannel === 'upi' && (
                <span className="block absolute bottom-0 left-0 right-0 h-[2px] bg-[#7A1F2B]"></span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setPaymentChannel('bank')}
              className={`pb-2 font-serif text-lg font-bold relative transition-colors ${
                paymentChannel === 'bank' ? 'text-[#7A1F2B]' : 'text-[#1F2430]/60 hover:text-[#1F2430]'
              }`}
            >
              Bank Transfer (NEFT / RTGS / IMPS)
              {paymentChannel === 'bank' && (
                <span className="block absolute bottom-0 left-0 right-0 h-[2px] bg-[#7A1F2B]"></span>
              )}
            </button>
          </div>

          {/* UPI View */}
          {paymentChannel === 'upi' && (
            <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F1EADA] p-6 md:p-8 border border-[#E2DAC8] rounded-[4px]">
              <div className="lg:col-span-4 flex flex-col items-start">
                <div className="p-4 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px]">
                  {/* Clean SVG QR code representation */}
                  <svg
                    aria-label="Official Samiti UPI QR Code"
                    className="w-44 h-44 text-[#1F2430]"
                    fill="currentColor"
                    viewBox="0 0 180 180"
                  >
                    <rect fill="none" height="50" stroke="currentColor" strokeWidth="4" width="50" x="0" y="0"></rect>
                    <rect fill="currentColor" height="26" width="26" x="12" y="12"></rect>
                    <rect fill="none" height="50" stroke="currentColor" strokeWidth="4" width="50" x="130" y="0"></rect>
                    <rect fill="currentColor" height="26" width="26" x="142" y="12"></rect>
                    <rect fill="none" height="50" stroke="currentColor" strokeWidth="4" width="50" x="0" y="130"></rect>
                    <rect fill="currentColor" height="26" width="26" x="12" y="142"></rect>
                    <rect height="10" width="10" x="62" y="10"></rect>
                    <rect height="10" width="22" x="80" y="22"></rect>
                    <rect height="22" width="10" x="108" y="10"></rect>
                    <rect height="8" width="16" x="62" y="42"></rect>
                    <rect height="8" width="28" x="90" y="42"></rect>
                    <rect height="10" width="20" x="10" y="62"></rect>
                    <rect height="30" width="10" x="40" y="62"></rect>
                    <rect height="24" width="24" x="62" y="62"></rect>
                    <rect height="10" width="20" x="98" y="62"></rect>
                    <rect height="10" width="40" x="130" y="62"></rect>
                    <rect height="20" width="10" x="10" y="82"></rect>
                    <rect height="20" width="20" x="150" y="82"></rect>
                    <rect height="20" width="12" x="62" y="98"></rect>
                    <rect height="10" width="34" x="84" y="98"></rect>
                    <rect height="20" width="20" x="130" y="108"></rect>
                    <rect height="10" width="20" x="62" y="130"></rect>
                    <rect height="20" width="14" x="92" y="130"></rect>
                    <rect height="40" width="10" x="120" y="130"></rect>
                    <rect height="10" width="30" x="140" y="140"></rect>
                    <rect height="18" width="20" x="62" y="152"></rect>
                    <rect height="10" width="18" x="92" y="160"></rect>
                    <rect height="10" width="10" x="160" y="160"></rect>
                  </svg>
                </div>
                <span className="text-[11px] font-mono text-[#1F2430]/60 mt-2">
                  Verified VPA • Official Account of BCKS
                </span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1F2430]/60 block mb-1">
                    Virtual Payment Address (UPI ID)
                  </span>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-mono text-2xl font-bold text-[#7A1F2B]">
                      bardhamanchhatra@sbi
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy('bardhamanchhatra@sbi', 'upi')}
                      className="px-3 py-1.5 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-xs font-mono uppercase tracking-wider text-[#7A1F2B] hover:border-[#7A1F2B] transition-colors inline-flex items-center gap-1.5"
                    >
                      {copiedItem === 'upi' ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedItem === 'upi' ? 'Copied' : 'Copy UPI ID'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-sm text-[#1F2430]/80 font-sans leading-relaxed">
                  Scan with BHIM, Google Pay, PhonePe, or Paytm. In the payment note, please enter your initials or mobile number so we can trace your 80G certificate accurately.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#1F2430]/70">
                  <span className="flex items-center gap-1">✓ Zero Intermediary Fee</span>
                  <span className="flex items-center gap-1">✓ Instant RBI Cleared</span>
                  <span className="flex items-center gap-1">✓ 80G Eligible</span>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Bank Transfer View */}
          {paymentChannel === 'bank' && (
            <RevealOnScroll className="bg-[#F1EADA] p-6 md:p-8 border border-[#E2DAC8] rounded-[4px]">
              <dl className="divide-y divide-[#1F2430]/15 text-sm font-sans">
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <dt className="font-mono text-xs uppercase text-[#1F2430]/60 sm:w-1/3">Account Name</dt>
                  <dd className="sm:w-2/3 flex items-center justify-between font-semibold text-[#1F2430]">
                    <span>Bardhaman Chhatra Kalyan Samiti</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('Bardhaman Chhatra Kalyan Samiti', 'acc_name')}
                      className="text-xs font-mono uppercase text-[#7A1F2B] hover:underline"
                    >
                      {copiedItem === 'acc_name' ? 'Copied' : 'Copy'}
                    </button>
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <dt className="font-mono text-xs uppercase text-[#1F2430]/60 sm:w-1/3">Account Number</dt>
                  <dd className="sm:w-2/3 flex items-center justify-between font-mono font-semibold text-[#1F2430]">
                    <span className="text-lg">10842091726</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('10842091726', 'acc_num')}
                      className="text-xs font-mono uppercase text-[#7A1F2B] hover:underline"
                    >
                      {copiedItem === 'acc_num' ? 'Copied' : 'Copy'}
                    </button>
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <dt className="font-mono text-xs uppercase text-[#1F2430]/60 sm:w-1/3">IFSC Code</dt>
                  <dd className="sm:w-2/3 flex items-center justify-between font-mono font-semibold text-[#1F2430]">
                    <span className="text-lg">SBIN0000048</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('SBIN0000048', 'ifsc')}
                      className="text-xs font-mono uppercase text-[#7A1F2B] hover:underline"
                    >
                      {copiedItem === 'ifsc' ? 'Copied' : 'Copy'}
                    </button>
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <dt className="font-mono text-xs uppercase text-[#1F2430]/60 sm:w-1/3">Bank &amp; Branch</dt>
                  <dd className="sm:w-2/3 flex items-center justify-between text-[#1F2430]">
                    <span>State Bank of India, Bardhaman Main Branch, Court Compound</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('State Bank of India, Bardhaman Main Branch', 'branch')}
                      className="text-xs font-mono uppercase text-[#7A1F2B] hover:underline"
                    >
                      {copiedItem === 'branch' ? 'Copied' : 'Copy'}
                    </button>
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <dt className="font-mono text-xs uppercase text-[#1F2430]/60 sm:w-1/3">Account Type</dt>
                  <dd className="sm:w-2/3 font-semibold text-[#1F2430]">
                    Savings Welfare Trust Account
                  </dd>
                </div>
              </dl>
            </RevealOnScroll>
          )}
        </section>

        {/* STEP 3: CLAIM 80G TAX RECEIPT */}
        <section className="py-12 mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-serif italic text-6xl text-[#7A1F2B] select-none leading-none font-bold">3</span>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold block">
                STEP 03 / TAX EXEMPTION &amp; RECEIPT
              </span>
              <span className="text-xs text-[#1F2430]/70 font-sans">
                Submit your transaction reference number to receive your authenticated 80G receipt
              </span>
            </div>
          </div>

          <div className="p-8 border border-[#E2DAC8] bg-[#F1EADA] rounded-[4px]">
            {receiptSubmitted ? (
              <div className="p-6 bg-[#FAF6EC] border border-[#7A1F2B] rounded-[4px] text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#7A1F2B] mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#1F2430]">
                  Remittance Recorded
                </h4>
                <p className="text-sm text-[#1F2430]/80 font-sans max-w-lg mx-auto">
                  Thank you for your generous endowment. Your digitally signed 80G Tax Exemption Certificate will be delivered to your registered email and WhatsApp within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReceiptSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                      Donor Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="As per PAN card"
                      className="w-full h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-sm text-[#1F2430] focus:border-[#7A1F2B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                      Permanent Account Number (PAN) *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={10}
                      placeholder="ABCDE1234F (Required for 80G filing)"
                      className="w-full h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-sm font-mono uppercase text-[#1F2430] focus:border-[#7A1F2B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="To receive authenticated PDF receipt"
                      className="w-full h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-sm text-[#1F2430] focus:border-[#7A1F2B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1F2430] mb-2 font-semibold">
                      UPI Reference / UTR Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="12-digit transaction UTR number"
                      className="w-full h-11 px-3 bg-[#FAF6EC] border border-[#1F2430]/20 rounded-[4px] text-sm font-mono text-[#1F2430] focus:border-[#7A1F2B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#1F2430]/15">
                  <span className="text-xs font-mono text-[#1F2430]/70">
                    Order Ref: 80G / WB / CIT(E) / AABTB4928RF20219
                  </span>
                  <button
                    type="submit"
                    className="h-11 px-8 bg-[#7A1F2B] text-[#FAF6EC] rounded-[6px] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#661823] transition-colors"
                  >
                    Submit Details &amp; Request 80G Receipt
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
