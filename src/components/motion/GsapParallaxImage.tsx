"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GsapParallaxImage({ 
  src, 
  alt, 
  className 
}: { 
  src: string; 
  alt: string; 
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 0.8,
      ease: "power4.inOut" // abrupt snap
    });

    gsap.fromTo(
      imageRef.current,
      { y: "-15%" },
      {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full h-full bg-[var(--color-brutal-black)] ${className || ""}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover scale-[1.3] will-change-transform filter contrast-125 grayscale-[20%]"
      />
      <div ref={overlayRef} className="absolute inset-0 bg-[var(--color-brutal-yellow)] z-10 origin-bottom brutal-border"></div>
    </div>
  );
}
