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
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    
    gsap.to(wrapper, {
      x: () => -(wrapper.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.1,
        end: () => "+=" + wrapper.scrollWidth
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden relative select-none ${className || ""}`}>
      <div ref={wrapperRef} className="flex flex-nowrap h-screen w-max">
        {children}
      </div>
    </div>
  );
}
