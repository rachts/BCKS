"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useId } from "react";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const moreTriggerRef = useRef<HTMLButtonElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuId = useId();
  const moreMenuId = useId();
  const isCurrent = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  // Reset route-dependent menus before rendering the new route.
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      const trigger = mobileTriggerRef.current;
      const menu = mobileMenuRef.current;
      if (!trigger || !menu || (document.activeElement !== trigger && !menu.contains(document.activeElement))) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileMenuOpen(false);
        trigger.focus();
      } else if (event.key === "Tab") {
        const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>("a[href]"));
        const first = links[0];
        const last = links[links.length - 1];
        if (document.activeElement === trigger) {
          event.preventDefault();
          (event.shiftKey ? last : first)?.focus();
        } else if ((event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
          event.preventDefault();
          trigger.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (dropdownOpen) moreMenuRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
  }, [dropdownOpen]);

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
    { label: "Gallery", href: "/gallery" },
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
            <span className="font-semibold text-maroon">BCKS</span>
            <span className="text-ink/30">•</span>
            <span>Bardhaman, West Bengal</span>
            <span className="text-ink/30 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Reg. No. [TODO: registration number]</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-maroon font-semibold hidden md:inline">Student welfare collective</span>
            <span className="text-ink/30 hidden md:inline">•</span>
            <span className="font-serif italic capitalize tracking-normal text-ink/80">[TODO: approved motto]</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-paper hairline-b transition-all duration-200 ${
          scrolled ? "py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4 xl:gap-3">
          {/* Brand & Crest */}
          <Link href="/" aria-current={isCurrent("/") ? "page" : undefined} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 xl:max-w-[280px] group">
            <BrandLogo className="h-11 w-11 sm:h-14 sm:w-14" sizes="(min-width: 640px) 56px, 44px" priority />
            <div className="flex min-w-0 flex-col">
              <span className="font-serif font-bold text-[13px] sm:text-lg xl:text-[15px] tracking-tight text-ink group-hover:text-maroon transition-colors leading-tight">
                Bardhaman Chhatra Kalyan Samiti
              </span>
              <span lang="bn" className="font-serif text-[10px] sm:text-[11px] text-ink/70 font-medium leading-snug">
                বর্ধমান ছাত্র কল্যাণ সমিতি
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex shrink-0 items-center gap-3 whitespace-nowrap text-[13px] font-medium text-ink/90">
            {navLinks.map((link) => {
              const isActive = isCurrent(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`editorial-link transition-colors ${
                    isActive ? "text-maroon font-semibold" : "text-ink/80 hover:text-maroon"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Dropdown for More */}
            <div className="relative" onKeyDown={(event) => {
              if (event.key === "Escape" && dropdownOpen) {
                event.preventDefault();
                setDropdownOpen(false);
                moreTriggerRef.current?.focus();
              }
            }} onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setDropdownOpen(false);
            }}>
              <button
                ref={moreTriggerRef}
                type="button"
                aria-expanded={dropdownOpen}
                aria-controls={moreMenuId}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center space-x-1 hover:text-maroon text-[13px] font-medium transition-colors cursor-pointer ${moreLinks.some((link) => isCurrent(link.href)) ? "text-maroon font-semibold" : "text-ink/80"}`}
              >
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5 text-ink/60" />
              </button>

              {dropdownOpen && (
                <div ref={moreMenuRef} id={moreMenuId} className="absolute right-0 mt-2 w-52 bg-paper border border-rule-solid py-2 z-50">
                  {moreLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      aria-current={isCurrent(subLink.href) ? "page" : undefined}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2 text-xs hover:bg-paper-dark hover:text-maroon transition-colors ${isCurrent(subLink.href) ? "text-maroon font-semibold" : "text-ink/85"}`}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-3">
            <Link
              href="/donate"
              aria-current={isCurrent("/donate") ? "page" : undefined}
              className="btn-primary whitespace-nowrap text-xs sm:text-sm py-2 px-2.5 sm:px-4"
            >
              <Heart className="w-3.5 h-3.5 mr-1.5 fill-current text-white/90" />
               <span><span className="sr-only sm:not-sr-only">Join / </span>Donate</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              ref={mobileTriggerRef}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded text-ink hover:text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-maroon focus-visible:outline-offset-2"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} id={mobileMenuId} className="xl:hidden bg-paper hairline-b px-6 py-6 border-b border-rule">
          <nav className="flex flex-col space-y-3.5 text-sm font-medium" onClick={(event) => {
            if ((event.target as HTMLElement).closest("a[href]")) setMobileMenuOpen(false);
          }}>
            <Link
              href="/"
              aria-current={isCurrent("/") ? "page" : undefined}
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
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`py-1.5 border-b border-rule/50 ${
                  isCurrent(link.href) ? "text-maroon font-semibold" : "text-ink/85 hover:text-maroon"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {moreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`py-1.5 border-b border-rule/50 ${
                  isCurrent(link.href) ? "text-maroon font-semibold" : "text-ink/85 hover:text-maroon"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/donate"
                aria-current={isCurrent("/donate") ? "page" : undefined}
                className="btn-primary w-full text-center py-2.5"
              >
                Join / Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
