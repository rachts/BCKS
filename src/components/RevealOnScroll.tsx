"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  selector?: string; // If set, will animate children matching this selector
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  y = 30,
  stagger,
  selector,
}: RevealOnScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = selector
        ? containerRef.current?.querySelectorAll(selector)
        : containerRef.current;

      if (!targets) return;

      gsap.fromTo(
        targets,
        {
          y,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay,
          stagger: stagger || 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, y, stagger, selector]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
