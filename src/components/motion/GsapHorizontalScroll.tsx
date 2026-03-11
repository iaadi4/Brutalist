"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GsapHorizontalScroll({ children, className }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current ? Array.from(containerRef.current.children) : [];
    const panels = gsap.utils.toArray(elements) as HTMLElement[];
    if (!panels || panels.length === 0) return;
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.1, // Slight brutal jittery delay
        end: () => "+=" + (containerRef.current?.offsetWidth || window.innerWidth) * panels.length
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden flex flex-nowrap h-screen w-[100vw] relative ${className || ""}`}>
      {children}
    </div>
  );
}
