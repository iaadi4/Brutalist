"use client";

import React, { useRef, ElementType, ComponentPropsWithoutRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface GsapScrollRevealOwnProps<T extends ElementType> {
  as?: T;
  children: React.ReactNode;
  className?: string;
}

type GsapScrollRevealProps<T extends ElementType> = GsapScrollRevealOwnProps<T> & 
  Omit<ComponentPropsWithoutRef<T>, keyof GsapScrollRevealOwnProps<T>>;

export function GsapScrollReveal<T extends ElementType = "div">({ 
  as, 
  children, 
  className, 
  ...props 
}: GsapScrollRevealProps<T>) {
  const Component = as || "div";
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Improve mobile touch scrolling
    if (ScrollTrigger.isTouch === 1) {
      ScrollTrigger.normalizeScroll(true);
    }

    if (containerRef.current) {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "top 60%",
          scrub: ScrollTrigger.isTouch === 1 ? true : 0.5,
        },
        opacity: 0,
        y: 50, // Reduced from 100 for smoother appearance on mobile
        ease: "power2.out",
        force3D: true,
      });
    }
  }, { scope: containerRef });

  return (
    <Component 
      ref={containerRef as any} 
      className={`${className || ""} will-change-transform`}
      {...props}
    >
      {children}
    </Component>
  );
}
