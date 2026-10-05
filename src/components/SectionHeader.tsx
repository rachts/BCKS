import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  bengaliTitle?: string;
  description?: string;
  subtitle?: string;
  level?: "h1" | "h2" | "h3" | string;
  align?: "left" | "center" | "right" | string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  bengaliTitle,
  description,
  subtitle,
  level = "h2",
  align = "left",
  centered = false,
  className = "",
}: SectionHeaderProps) {
  const isCentered = centered || align === "center";
  const descText = description || subtitle;

  return (
    <div className={`mb-10 md:mb-14 ${isCentered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"} ${className}`}>
      {badge && (
        <div className={`flex items-center space-x-2 text-[11px] font-semibold tracking-folio uppercase text-maroon mb-3 ${isCentered ? "justify-center" : ""}`}>
          <span>{badge}</span>
          <span aria-hidden="true" className="w-6 h-px bg-maroon inline-block"></span>
        </div>
      )}
      {level === "h1" ? (
        <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-ink leading-[1.15]">
          {title}
        </h1>
      ) : (
        <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-ink leading-[1.15]">
          {title}
        </h2>
      )}
      {bengaliTitle && (
        <div className="font-serif italic text-maroon/90 text-sm sm:text-base mt-1.5">
          {bengaliTitle}
        </div>
      )}
      {descText && (
        <p className="mt-4 text-base sm:text-lg text-ink/75 leading-relaxed font-normal font-sans">
          {descText}
        </p>
      )}
    </div>
  );
}
