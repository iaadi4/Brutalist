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
  className,
  mode = "cover",
  width = 1200,
  height = 800,
  priority = false,
  loading
}: { 
  src: string; 
  alt: string; 
  className?: string;
  mode?: "cover" | "frame";
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | HTMLDivElement>(null);
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
      ease: "power4.inOut"
    });

    gsap.fromTo(
      imageRef.current,
      { y: mode === "cover" ? "-15%" : "-5%" },
      {
        y: mode === "cover" ? "15%" : "5%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: ScrollTrigger.isTouch === 1 ? true : 0.5,
          // Optimization
          fastScrollEnd: true,
          preventOverlaps: true,
        },
        force3D: true,
      }
    );
  }, { scope: containerRef });

  if (mode === "frame") {
    return (
      <div ref={containerRef} className={`relative overflow-hidden w-full h-full flex flex-col items-center justify-center p-8 lg:p-12 border-[8px] border-transparent ${className || ""}`}>
        {/* Brutalist dot pattern background */}
        <div className="absolute inset-0 opacity-20 bg-[var(--color-brutal-black)]" style={{ backgroundImage: 'radial-gradient(var(--color-brutal-white) 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
        
        {/* The Frame */}
        <div ref={imageRef as React.RefObject<HTMLDivElement>} className="relative z-10 w-full h-full flex items-center justify-center filter lg:drop-shadow-[16px_16px_0px_#000]">
           <img
             src={src}
             alt={alt}
             loading={loading || (priority ? "eager" : "lazy")}
             {...(priority ? { fetchpriority: "high" } : {})}
             width={width}
             height={height}
             className="max-w-full max-h-full object-contain border-[8px] border-[var(--color-brutal-black)] bg-[var(--color-brutal-white)] filter contrast-125 grayscale-[20%]"
           />
        </div>
        
        <div ref={overlayRef} className="absolute inset-0 bg-[var(--color-brutal-yellow)] z-20 origin-bottom brutal-border"></div>
      </div>
    );
  }

  // Default "cover" mode
  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full h-full bg-[var(--color-brutal-black)] ${className || ""}`}>
      <img
        ref={imageRef as React.RefObject<HTMLImageElement>}
        src={src}
        alt={alt}
        loading={loading || (priority ? "eager" : "lazy")}
        {...(priority ? { fetchpriority: "high" } : {})}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full object-cover scale-[1.3] will-change-transform filter contrast-125 grayscale-[20%]"
      />
      <div ref={overlayRef} className="absolute inset-0 bg-[var(--color-brutal-yellow)] z-10 origin-bottom brutal-border"></div>
    </div>
  );
}
