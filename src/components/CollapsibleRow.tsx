"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleRowProps {
  title: string;
  subtitle?: string;
  category?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleRow({
  title,
  subtitle,
  category,
  children,
  defaultOpen = false,
}: CollapsibleRowProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-rule transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 text-left flex items-start justify-between gap-4 group cursor-pointer focus:outline-none"
      >
        <div className="flex-grow">
          {category && (
            <span className="text-[10px] uppercase tracking-folio text-maroon font-semibold block mb-1">
              {category}
            </span>
          )}
          <h4 className="font-serif text-lg md:text-xl font-medium text-ink group-hover:text-maroon transition-colors">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs md:text-sm text-ink/70 mt-1 font-normal">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-1 flex-shrink-0 text-ink/60 group-hover:text-maroon transition-transform duration-300">
          <ChevronDown
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm text-ink/80 leading-relaxed font-normal">
          {children}
        </div>
      </div>
    </div>
  );
}
