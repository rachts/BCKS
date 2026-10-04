import React from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

interface DarkBandProps {
  badge?: string;
  quote?: string;
  attribution?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

export default function DarkBand({
  badge,
  quote,
  attribution,
  title,
  description,
  ctaText,
  ctaLink,
  primaryAction,
  secondaryAction,
  className = "",
}: DarkBandProps) {
  const pAction = primaryAction || (ctaText && ctaLink ? { label: ctaText, href: ctaLink } : undefined);

  return (
    <section className={`w-full bg-maroon text-paper py-14 md:py-20 my-16 md:my-24 relative overflow-hidden ${className}`}>
      {/* Background Subtle Bengal Border Pattern Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none border-y border-white"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {quote ? (
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-serif text-marigold text-5xl leading-none select-none block mb-2">“</span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl italic font-medium leading-snug tracking-tight text-paper">
              {quote}
            </blockquote>
            {attribution && (
              <p className="mt-5 text-xs sm:text-sm tracking-folio uppercase text-marigold font-semibold">
                — {attribution}
              </p>
            )}
            {(pAction || secondaryAction) && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {pAction && (
                  <Link
                    href={pAction.href}
                    className="bg-paper text-maroon hover:bg-white px-6 py-3 rounded-[6px] font-medium text-sm transition-all duration-200 shadow-sm"
                  >
                    {pAction.label}
                  </Link>
                )}
                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="btn-outline-cream px-6 py-3 text-sm"
                  >
                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-folio uppercase text-marigold font-semibold block mb-2">
                {badge || "A Mission of Solidarity & Action"}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-paper leading-tight">
                {title || "Support the Education of a Deserving Child Today"}
              </h3>
              {description && (
                <p className="mt-3 text-sm sm:text-base text-paper/85 leading-relaxed font-normal">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 flex-shrink-0">
              {pAction && (
                <Link
                  href={pAction.href}
                  className="bg-paper text-maroon hover:bg-white px-6 py-3 rounded-[6px] font-semibold text-sm transition-all duration-200 inline-flex items-center space-x-1.5 shadow-sm"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{pAction.label}</span>
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="btn-outline-cream px-6 py-3 text-sm"
                >
                  <span>{secondaryAction.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
