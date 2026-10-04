import React from "react";

export interface TimelineItem {
  year: string;
  title: string;
  bengaliTitle?: string;
  description: string;
  tag?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative border-l border-rule pl-6 md:pl-8 ml-3 md:ml-4 space-y-12 my-8 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="relative group">
          {/* Node Indicator */}
          <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-paper border-2 border-maroon group-hover:bg-maroon transition-colors"></div>

          {/* Year & Tag */}
          <div className="flex items-center space-x-3 mb-1.5">
            <span className="font-serif italic text-xl md:text-2xl font-bold text-maroon">
              {item.year}
            </span>
            {item.tag && (
              <span className="text-[10px] uppercase tracking-folio bg-paper-dark px-2 py-0.5 border border-rule text-ink/75 font-semibold">
                {item.tag}
              </span>
            )}
          </div>

          {/* Heading */}
          <h4 className="font-serif text-lg md:text-xl font-semibold text-ink group-hover:text-maroon transition-colors">
            {item.title}
          </h4>
          {item.bengaliTitle && (
            <p className="font-serif italic text-xs md:text-sm text-maroon/80 mb-2">
              {item.bengaliTitle}
            </p>
          )}

          {/* Body */}
          <p className="text-sm md:text-base text-ink/75 leading-relaxed max-w-2xl font-normal">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
