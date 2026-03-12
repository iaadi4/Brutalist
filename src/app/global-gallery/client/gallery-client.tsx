"use client";

import globalBuildingsData from "@/data/global-buildings.json";
import { PageTransition } from "@/components/motion/PageTransition";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

import { generateBreadcrumbSchema } from "@/lib/seo-schemas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app";

export default function GalleryClient() {
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Global Gallery', url: `${siteUrl}/global-gallery` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Increase scroll performance on mobile
    if (ScrollTrigger.isTouch === 1) {
      ScrollTrigger.normalizeScroll(true);
    }

    const sections = gsap.utils.toArray('.building-section');
    
    sections.forEach((sec: any) => {
      const textBox = sec.querySelector('.text-box');
      const textInner = sec.querySelector('.text-inner');
      const imageBg = sec.querySelector('.image-bg');
      const overlayBg = sec.querySelector('.overlay-bg');
      
      // Calculate how much the content needs to scroll
      const getScrollAmount = () => {
        if (!textInner) return 0;
        return -(textInner.scrollHeight - textInner.clientHeight);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight, (textInner?.scrollHeight || 0))}`,
          pin: true,
          scrub: ScrollTrigger.isTouch === 1 ? true : 0.5,
          fastScrollEnd: true,
          preventOverlaps: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Phase 1: Scroll Content (if it overflows)
      if (textInner && textInner.scrollHeight > textInner.clientHeight) {
        tl.to(textInner, {
          y: getScrollAmount,
          ease: "none",
          duration: 2
        });
      }

      // Phase 2: Fade out Box & Reveal Image
      tl.to(textBox, { 
        opacity: 0, 
        scale: 0.9,
        y: -50,
        duration: 1, 
        ease: "power2.in" 
      })
      .to(overlayBg, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      }, "<")
      .to(imageBg, {
        scale: 1.1,
        duration: 1.5,
        ease: "power1.inOut"
      }, "<")
      // Phase 3: Pause to admire the image
      .to({}, { duration: 0.5 });
    });
  }, { scope: containerRef });

  return (
    <PageTransition>
      <div ref={containerRef} className="bg-[var(--color-brutal-black)] min-h-screen relative overflow-hidden grain-overlay">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          suppressHydrationWarning
        />
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 bg-grid-white opacity-5 pointer-events-none"></div>

        {/* Title Panel */}
        <div className="w-full h-screen flex items-center justify-center relative border-b-8 lg:border-b-[16px] border-[var(--color-brutal-white)] bg-[var(--color-brutal-red)] z-10">
          <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none">
             <img src="/images/global-hero-texture.png" alt="Global Brutalism Texture" width={1200} height={800} className="w-full h-full object-cover filter contrast-150 grayscale" />
          </div>
          <div className="relative z-10 p-8 lg:p-16 bg-[var(--color-brutal-black)] text-white brutal-border brutal-shadow my-auto">
             <h1 className="text-massive max-w-[90vw] break-words uppercase leading-[0.8] mb-8 text-[var(--color-brutal-white)] text-center">
                GLOBAL<br/>MONOLITHS
             </h1>
             <div className="bg-[var(--color-brutal-yellow)] text-black px-4 py-2 text-xl lg:text-3xl font-mono font-black brutal-border inline-block brutal-shadow-sm">
               INDEX: 06 // WORLDWIDE STRENGTH
             </div>
          </div>
        </div>

        {/* Pinned Building Panels */}
        {globalBuildingsData.map((building, index) => (
          <div key={building.id} className="building-section w-full h-screen relative overflow-hidden flex items-center justify-center border-b-8 lg:border-b-[16px] border-[var(--color-brutal-black)] bg-[var(--color-brutal-black)] z-10">
            
            {/* Massive Background Image */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
               <img src={building.image} alt={building.imageAlt} width={1000} height={1000} loading="lazy" className="image-bg absolute inset-0 w-full h-full object-cover filter contrast-125 grayscale-[20%] scale-100 will-change-transform" />
               <div className="overlay-bg absolute inset-0 bg-black/60 will-change-opacity"></div>
            </div>
            
            {/* Sequential Content Box */}
            <div className={`text-box relative z-10 w-[90%] max-w-5xl p-6 lg:p-12 border-4 lg:border-8 border-[var(--color-brutal-black)] brutal-shadow ${index % 2 === 0 ? 'bg-[var(--color-brutal-cyan)]' : 'bg-[var(--color-brutal-white)]'} flex flex-col max-h-[80vh] overflow-hidden will-change-transform`}>
                <div className="text-inner flex flex-col will-change-transform">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="bg-[var(--color-brutal-black)] text-white px-4 py-2 font-mono text-xl lg:text-2xl uppercase inline-block brutal-border w-fit">
                      {building.year} // {building.architect}
                    </div>
                    <div className="font-mono text-lg lg:text-xl font-bold bg-[var(--color-brutal-red)] text-white px-3 py-1 brutal-border brutal-shadow-sm w-fit">
                      {building.location}
                    </div>
                  </div>
                  
                  <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.8] mb-8 text-[var(--color-brutal-black)]">
                    {building.name}
                  </h2>
                  
                  <p className="text-lg lg:text-2xl font-medium leading-relaxed text-left text-[var(--color-brutal-black)]">
                    {building.technical_details}
                    {/* Add extra spacing to ensure logic treats it as "scrolled" */}
                    <span className="block h-12"></span>
                  </p>
                </div>
            </div>
          </div>
        ))}
        
        {/* End Panel */}
        <div className="w-full h-screen flex items-center justify-center bg-[var(--color-brutal-yellow)] relative z-10">
            <h2 className="text-massive text-[var(--color-brutal-black)]">END OF INDEX</h2>
        </div>
      </div>
    </PageTransition>
  );
}
