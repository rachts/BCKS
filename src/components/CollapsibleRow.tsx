"use client";

import React, { useId, useState } from "react";
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
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-rule transition-colors">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-4 text-left flex items-start justify-between gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon"
        >
          <span className="flex-grow">
            {category && (
              <span className="text-[10px] uppercase tracking-folio text-maroon font-semibold block mb-1">
                {category}
              </span>
            )}
            <span className="block font-serif text-lg md:text-xl font-medium text-ink group-hover:text-maroon transition-colors">
              {title}
            </span>
            {subtitle && (
              <span className="block text-xs md:text-sm text-ink/70 mt-1 font-normal">
                {subtitle}
              </span>
            )}
          </span>
          <span className="mt-1 flex-shrink-0 text-ink/60 group-hover:text-maroon">
            <ChevronDown
              aria-hidden="true"
              className={`w-5 h-5 transform transition-transform duration-300 motion-reduce:transition-none ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden text-sm text-ink/80 leading-relaxed font-normal">
          <div className="pb-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
