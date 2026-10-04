"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Heart, Award, Users, BookOpen } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Programmes", href: "/student-programmes" },
    { label: "Competitions", href: "/competitions" },
    { label: "Functions", href: "/functions" },
    { label: "People", href: "/our-people" },
    { label: "Updates", href: "/updates" },
    { label: "Apply", href: "/apply" },
  ];

  const moreLinks = [
    { label: "Membership", href: "/membership" },
    { label: "Annual General Meeting", href: "/agm" },
    { label: "Ways to Give", href: "/ways-to-give" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Editorial Running Folio Line */}
      <div className="bg-[#F1EADA] hairline-b text-[10px] md:text-[11px] tracking-folio uppercase text-ink/75 py-1.5 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-maroon">Est. 2011</span>
            <span className="text-ink/30">•</span>
            <span>Bardhaman, West Bengal</span>
            <span className="text-ink/30 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Reg. No. S/1L/83162</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-maroon font-semibold hidden md:inline">80G Tax Exempt</span>
            <span className="text-ink/30 hidden md:inline">•</span>
            <span className="font-serif italic capitalize tracking-normal text-ink/80">“সা বিদ্যা যা বিমুক্তয়ে”</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-paper/95 backdrop-blur-md hairline-b transition-all duration-200 ${
          scrolled ? "py-2.5 shadow-sm" : "py-3.5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand & Crest */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded border border-maroon/20 bg-paper-dark p-1 flex items-center justify-center flex-shrink-0 group-hover:border-maroon transition-colors">
              <span className="font-serif font-bold text-maroon text-lg sm:text-xl tracking-tighter">BCKS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-ink group-hover:text-maroon transition-colors leading-tight">
                Bardhaman Chhatra Kalyan Samiti
              </span>
              <span className="text-[11px] text-ink/70 font-medium tracking-wide">
                বর্ধমান ছাত্র কল্যাণ সমিতি
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-medium text-ink/90">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`editorial-link transition-colors ${
                    isActive ? "text-maroon font-semibold" : "text-ink/80 hover:text-maroon"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Dropdown for More */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 text-ink/80 hover:text-maroon text-[13px] font-medium transition-colors cursor-pointer"
              >
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5 text-ink/60" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-paper border border-rule-solid shadow-md py-2 z-50">
                  {moreLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-xs text-ink/85 hover:bg-paper-dark hover:text-maroon transition-colors"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="/donate"
              className="btn-primary text-xs sm:text-sm py-2 px-4 sm:px-5"
            >
              <Heart className="w-3.5 h-3.5 mr-1.5 fill-current text-white/90" />
              <span>Join / Donate</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-ink hover:text-maroon focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper hairline-b px-6 py-6 border-b border-rule shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-sm font-medium">
            <Link
              href="/"
              className={`py-1.5 border-b border-rule/50 ${
                pathname === "/" ? "text-maroon font-semibold" : "text-ink/85"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1.5 border-b border-rule/50 ${
                  pathname === link.href ? "text-maroon font-semibold" : "text-ink/85 hover:text-maroon"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {moreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1.5 border-b border-rule/50 ${
                  pathname === link.href ? "text-maroon font-semibold" : "text-ink/85 hover:text-maroon"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/donate"
                className="btn-primary w-full text-center py-2.5"
              >
                Donate Online (80G Exempt)
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
