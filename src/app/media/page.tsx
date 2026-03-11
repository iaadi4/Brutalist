"use client";

import famousBuildings from "@/data/famous-buildings.json";
import { PageTransition } from "@/components/motion/PageTransition";
import { GsapScrollReveal } from "@/components/motion/GsapScrollReveal";
import { useState, useMemo } from "react";

const ALL_TAGS = ["ALL", "Soviet", "Iconic", "Abandoned", "Social Housing", "Civic", "Pioneer", "Megastructure"];

// Deduplicate: only keep one building per image URL, skip fallback texture 
function dedup(buildings: typeof famousBuildings) {
  const seen = new Set<string>();
  return buildings.filter(b => {
    const key = b.image;
    if (!key || key.includes('global-hero') || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function BuildingCard({ building, index }: { building: typeof famousBuildings[number]; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <GsapScrollReveal
      className={`border-b-[8px] border-r-0 lg:border-r-[8px] border-[var(--color-brutal-white)] relative overflow-hidden group ${
        index % 4 < 2 ? 'bg-[var(--color-brutal-black)]' : 'bg-[#0a0a0a]'
      } last:border-b-0`}
    >
      {/* Image */}
      <div className="relative h-[65vw] lg:h-[35vw] max-h-[540px] w-full overflow-hidden border-b-[8px] border-[var(--color-brutal-white)]">
        {imgFailed ? (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundImage: 'url(/images/global-hero-texture.png)', backgroundSize: '200px 200px' }}
          >
            <span className="font-mono text-[var(--color-brutal-yellow)] text-2xl font-black bg-black/80 px-4 py-2 brutal-border">
              NO IMAGE
            </span>
          </div>
        ) : (
          <img
            src={building.image}
            alt={`${building.name}, ${building.location}`}
            className="w-full h-full object-cover filter grayscale-[20%] contrast-110 group-hover:scale-105 transition-transform duration-700 will-change-transform"
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--color-brutal-yellow)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-multiply z-10"></div>

        {/* Year badge */}
        <div className="absolute top-6 left-6 bg-[var(--color-brutal-black)] text-[var(--color-brutal-yellow)] font-mono text-3xl font-black px-4 py-2 border-[4px] border-[var(--color-brutal-yellow)] brutal-shadow z-20">
          {building.year}
        </div>
        {/* Style tag */}
        <div className="absolute top-6 right-6 bg-[var(--color-brutal-red)] text-white font-mono text-sm font-black px-3 py-1 brutal-border z-20">
          {building.style}
        </div>
      </div>

      {/* Text */}
      <div className="p-8 lg:p-12 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {building.tags.map(tag => (
            <span key={tag} className="font-mono text-xs font-bold bg-[var(--color-brutal-white)] text-[var(--color-brutal-black)] px-2 py-1">
              #{tag}
            </span>
          ))}
        </div>

        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.85] group-hover:text-[var(--color-brutal-yellow)] transition-colors duration-300">
          {building.name}
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono text-lg font-bold bg-[var(--color-brutal-red)] text-white px-3 py-1">
            {building.location}
          </span>
          <span className="font-mono text-base text-[var(--color-brutal-gray-100)] font-bold">
            {building.architect}
          </span>
        </div>

        <p className="text-lg font-medium leading-relaxed text-[var(--color-brutal-gray-100)] text-justify mt-2">
          {building.description}
        </p>
      </div>
    </GsapScrollReveal>
  );
}

export default function MediaPage() {
  const [activeTag, setActiveTag] = useState("ALL");

  const dedupedBuildings = useMemo(() => dedup(famousBuildings as typeof famousBuildings), []);

  const filtered = activeTag === "ALL"
    ? dedupedBuildings
    : dedupedBuildings.filter(b => b.tags.includes(activeTag));

  return (
    <PageTransition>
      <div className="min-h-screen bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] selection:bg-[var(--color-brutal-red)] selection:text-white">

        {/* Hero — NO GsapScrollReveal to ensure it's always visible */}
        <header className="relative min-h-[70vh] flex flex-col justify-end p-8 lg:p-16 border-b-[16px] border-[var(--color-brutal-white)] overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'url(/images/global-hero-texture.png)', backgroundSize: '240px 240px', backgroundRepeat: 'repeat' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brutal-black)] via-black/60 to-transparent z-0"></div>

          {/* Animate in with a CSS keyframe instead of GSAP ScrollTrigger */}
          <div className="relative z-10 animate-[slideUp_0.8s_ease-out_forwards]" style={{ animationFillMode: 'both' }}>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <span className="font-mono text-xl font-black bg-[var(--color-brutal-red)] text-white px-4 py-2 brutal-border">INDEX: 07</span>
              <span className="font-mono text-xl font-black bg-[var(--color-brutal-yellow)] text-black px-4 py-2 brutal-border">
                SOVIET + GLOBAL ARCHIVE
              </span>
            </div>
            <h1 className="text-massive uppercase leading-[0.8] tracking-tighter mb-8 max-w-[90vw] break-words">
              CONCRETE<br/>EMPIRE
            </h1>
            <p className="text-2xl lg:text-3xl font-bold max-w-4xl font-mono bg-[var(--color-brutal-white)] text-[var(--color-brutal-black)] p-6 brutal-border">
              THE BRUTALIST STRUCTURES THAT DEFINED AN ERA OF MONOLITHIC STATECRAFT — FROM TBILISI TO BELGRADE TO THE MOUNTAIN TOPS OF BULGARIA.
            </p>
          </div>
        </header>

        {/* Filter Bar */}
        <div className="sticky top-0 z-50 bg-[var(--color-brutal-black)] border-b-[8px] border-[var(--color-brutal-yellow)] p-4 lg:p-6 flex flex-wrap gap-3 items-center">
          <span className="font-mono text-lg font-black text-[var(--color-brutal-yellow)] mr-4">FILTER //</span>
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`font-mono text-base font-black px-3 py-2 border-[4px] border-[var(--color-brutal-white)] transition-all hover:-translate-y-1 ${
                activeTag === tag
                  ? 'bg-[var(--color-brutal-white)] text-[var(--color-brutal-black)] shadow-[4px_4px_0px_var(--color-brutal-yellow)]'
                  : 'bg-transparent text-[var(--color-brutal-white)] hover:bg-[var(--color-brutal-white)] hover:text-[var(--color-brutal-black)]'
              }`}
            >
              {tag}
            </button>
          ))}
          <span className="ml-auto font-mono text-[var(--color-brutal-gray-100)] text-base font-bold">
            {filtered.length} STRUCTURES
          </span>
        </div>

        {/* Building Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {filtered.map((building, index) => (
            <BuildingCard key={building.id} building={building} index={index} />
          ))}
        </div>

        {/* Footer Manifesto */}
        <div className="bg-[var(--color-brutal-red)] p-12 lg:p-24 border-t-[16px] border-[var(--color-brutal-white)]">
          <p className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] max-w-5xl text-white">
            "THE ONLY HONEST ARCHITECTURE IS ONE THAT REFUSES TO HIDE WHAT IT IS. THERE IS NO DECEPTION IN CONCRETE."
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
