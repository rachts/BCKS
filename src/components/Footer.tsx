import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F1EADA] border-t-2 border-maroon mt-auto" id="footer">
      {/* Top Banner Notice */}
      <div className="hairline-b bg-paper px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-ink/75 gap-2">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-maroon flex-shrink-0" />
            <span>Registered under West Bengal Societies Registration Act XXVI of 1961 (Reg. No. S/1L/83162)</span>
          </div>
          <div className="text-maroon font-semibold">
            All donations eligible for 50% Income Tax exemption under Section 80G
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-ink/80 text-sm">
          {/* Col 1: Headquarters & Contact */}
          <div>
            <h5 className="font-serif text-base font-semibold text-ink mb-3.5 tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-maroon"></span>
              <span>Headquarters</span>
            </h5>
            <address className="not-italic space-y-2 text-xs leading-relaxed text-ink/85">
              <p className="font-medium text-ink">Bardhaman Chhatra Kalyan Samiti</p>
              <p>Nabapally, P.O. & Dist. Purba Bardhaman</p>
              <p>West Bengal, PIN 713101, India</p>
              <div className="pt-2 space-y-1">
                <p className="flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-maroon" />
                  <span><strong>Helpline:</strong> +91 94341 52834</span>
                </p>
                <p className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-maroon" />
                  <span><strong>Email:</strong> info@bcks.org.in</span>
                </p>
              </div>
            </address>
          </div>

          {/* Col 2: Core Missions & Programmes */}
          <div>
            <h5 className="font-serif text-base font-semibold text-ink mb-3.5 tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-maroon"></span>
              <span>Key Programmes</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/scholarships" className="hover:text-maroon transition-colors">
                  • Higher Education Merit Scholarships
                </Link>
              </li>
              <li>
                <Link href="/student-programmes" className="hover:text-maroon transition-colors">
                  • Student Study Aid & Book Distribution
                </Link>
              </li>
              <li>
                <Link href="/competitions" className="hover:text-maroon transition-colors">
                  • Annual Sit-and-Draw & Recitation Contests
                </Link>
              </li>
              <li>
                <Link href="/functions" className="hover:text-maroon transition-colors">
                  • Memorial Awards & Foundation Day
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
            <h5 className="font-serif text-base font-semibold text-ink mb-3.5 tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-maroon"></span>
              <span>Governance & Records</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-maroon transition-colors">
                  • History & Founding Philosophy (Est. 2011)
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
                  • Life & General Membership Rules
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-maroon transition-colors">
                  • Public Notices, Dates & Audited Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ways to Support */}
          <div>
            <h5 className="font-serif text-base font-semibold text-ink mb-3.5 tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-maroon"></span>
              <span>Support Our Mission</span>
            </h5>
            <p className="text-xs text-ink/75 leading-relaxed mb-3">
              100% of public contributions go directly toward student fees, textbooks, and examination stipends.
            </p>
            <div className="space-y-2">
              <Link href="/donate" className="btn-primary w-full text-xs py-2 text-center">
                <Heart className="w-3.5 h-3.5 mr-1.5 fill-current" />
                Make a Contribution
              </Link>
              <Link href="/ways-to-give" className="btn-secondary w-full text-xs py-2 text-center block">
                Bank Transfer & Endowment Details
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Folio & Motto */}
        <div className="mt-12 pt-6 hairline-t flex flex-col sm:flex-row items-center justify-between text-xs text-ink/65 gap-4">
          <div>
            <p>© 2011–2026 Bardhaman Chhatra Kalyan Samiti. All rights reserved.</p>
          </div>
          <div className="text-center sm:text-right">
            <span className="font-serif italic text-maroon text-sm font-semibold tracking-wide">
              “সা বিদ্যা যা বিমুক্তয়ে”
            </span>
            <span className="text-[11px] text-ink/60 ml-2">— That is true knowledge which liberates</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
