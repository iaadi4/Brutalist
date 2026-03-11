"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GsapScrollReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
        end: "top 60%",
        scrub: 0.5,
      },
      opacity: 0,
      y: 100, // sharp upward thrust
      ease: "none",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`${className || ""} will-change-transform`}>
      {children}
    </div>
  );
}
