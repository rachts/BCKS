import Link from "next/link";
import { Mail, Phone, ShieldCheck, Heart } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F1EADA] border-t-2 border-maroon mt-auto" id="footer">
      {/* Top Banner Notice */}
      <div className="hairline-b bg-paper px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-ink/75 gap-2">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-maroon flex-shrink-0" />
            <span>Registration: [TODO: registration number] · Act: [TODO: applicable registration act]</span>
          </div>
          <div className="text-maroon font-semibold">
            Tax treatment: [TODO: verified tax status]
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <Link href="/" className="mb-8 flex w-fit max-w-full min-w-0 items-center gap-3 group">
          <BrandLogo className="h-14 w-14" sizes="56px" />
          <span className="flex min-w-0 flex-col font-serif">
            <span className="text-base font-semibold leading-tight text-ink group-hover:text-maroon transition-colors">
              Bardhaman Chhatra Kalyan Samiti
            </span>
            <span lang="bn" className="mt-1 text-xs text-ink/70">বর্ধমান ছাত্র কল্যাণ সমিতি</span>
          </span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-ink/80 text-sm">
          {/* Col 1: Headquarters & Contact */}
          <div>
            <h2 className="font-serif text-base font-semibold text-ink mb-3.5 tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-maroon"></span>
              <span>Headquarters</span>
            </h2>
            <address className="not-italic space-y-2 text-xs leading-relaxed text-ink/85">
              <p className="font-medium text-ink">Bardhaman Chhatra Kalyan Samiti</p>
              <p>[TODO: verified postal address]</p>
              <p>[TODO: verified phone and email]</p>
              <div className="pt-2 space-y-1">
                <p className="flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-maroon" />
                  <span><strong>Helpline:</strong> [TODO: verified phone]</span>
                </p>
                <p className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-maroon" />
                  <span><strong>Email:</strong> [TODO: verified email]</span>
                </p>
              </div>
            </address>
          </div>

          {/* Col 2: Core Missions & Programmes */}
          <div>
            <h2 className="font-serif text-base font-semibold text-ink mb-3.5 tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-maroon"></span>
              <span>Key Programmes</span>
            </h2>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/gallery" className="hover:text-maroon transition-colors">
                   • Gallery
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="hover:text-maroon transition-colors">
                   • Scholarships
                </Link>
              </li>
              <li>
                <Link href="/student-programmes" className="hover:text-maroon transition-colors">
                   • Health Checkups
                </Link>
              </li>
              <li>
                <Link href="/competitions" className="hover:text-maroon transition-colors">
                   • Quiz, Drawing & Cultural Competitions
                </Link>
              </li>
              <li>
                <Link href="/functions" className="hover:text-maroon transition-colors">
                   • Functions
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-maroon transition-colors">
                  • Student Aid Application Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Governance & Transparency */}
          <div>
            <h2 className="font-serif text-base font-semibold text-ink mb-3.5 tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-maroon"></span>
              <span>Governance & Records</span>
            </h2>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-maroon transition-colors">
                   • About BCKS
                </Link>
              </li>
              <li>
                <Link href="/our-people" className="hover:text-maroon transition-colors">
                  • Executive Council & Advisory Board
                </Link>
              </li>
              <li>
                <Link href="/agm" className="hover:text-maroon transition-colors">
                  • Annual General Meeting (AGM) Minutes
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-maroon transition-colors">
                   • Membership
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-maroon transition-colors">
                   • Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ways to Support */}
          <div>
            <h2 className="font-serif text-base font-semibold text-ink mb-3.5 tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-maroon"></span>
              <span>Support Our Mission</span>
            </h2>
            <p className="text-xs text-ink/75 leading-relaxed mb-3">
              Contributions support the organisation&apos;s student-welfare activities. Allocation and financial reports will be published when verified records are supplied.
            </p>
            <div className="space-y-2">
              <Link href="/donate" className="btn-primary w-full text-xs py-2 text-center">
                <Heart className="w-3.5 h-3.5 mr-1.5 fill-current" />
                Make a Contribution
              </Link>
              <Link href="/ways-to-give" className="btn-secondary w-full text-xs py-2 text-center block">
                 Ways to Give
              </Link>
            </div>
            <div className="mt-5 flex gap-4 text-xs">
              <Link href="/privacy" className="text-maroon underline">Privacy draft</Link>
              <Link href="/refund-policy" className="text-maroon underline">Refund draft</Link>
            </div>
          </div>
        </div>

        {/* Bottom Folio & Motto */}
        <div className="mt-12 pt-6 hairline-t flex flex-col sm:flex-row items-center justify-between text-xs text-ink/65 gap-4">
          <div>
            <p>Bardhaman Chhatra Kalyan Samiti. All rights reserved.</p>
          </div>
          <div className="text-center sm:text-right">
            <span className="font-serif italic text-maroon text-sm font-semibold tracking-wide">
              [TODO: approved motto]
            </span>
            <span className="text-[11px] text-ink/75 ml-2">[TODO: approved motto translation]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
