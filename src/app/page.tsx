import { PageTransition } from "@/components/motion/PageTransition";
import { GsapScrollReveal } from "@/components/motion/GsapScrollReveal";
import Link from "next/link";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist-arch.vercel.app";

export const metadata: Metadata = {
  title: "BRUTALISM: Ethic, Not Aesthetic | Home",
  description:
    "Discover Brutalism—an ethical architectural movement, not an aesthetic choice. Explore the origins, philosophy, and iconic brutalist buildings from around the world.",
  keywords: [
    "brutalism",
    "brutalist architecture",
    "modernist ethics",
    "architectural philosophy",
  ],
  openGraph: {
    title: "BRUTALISM: Ethic, Not Aesthetic",
    description:
      "Discover Brutalism—an ethical architectural movement, not an aesthetic choice. Explore the origins, philosophy, and iconic buildings.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BRUTALISM Home",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[var(--color-brutal-bg)] text-[var(--color-brutal-black)] selection:bg-[var(--color-brutal-yellow)] selection:text-[var(--color-brutal-black)] flex flex-col relative overflow-hidden grain-overlay">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 bg-grid-black opacity-10 pointer-events-none"></div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-20 right-[10%] w-32 h-32 border-4 border-black bg-[var(--color-brutal-magenta)] rounded-full brutal-shadow-sm animate-bounce opacity-20 pointer-events-none hidden lg:block" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-[5%] w-24 h-24 border-4 border-black bg-[var(--color-brutal-cyan)] brutal-shadow-sm rotate-12 opacity-20 pointer-events-none hidden lg:block"></div>

        <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-6 lg:p-12 min-h-screen">
          <GsapScrollReveal className="w-full max-w-7xl flex flex-col items-center gap-16">
            
            {/* Enhanced Hero Section with Overlapping Slabs */}
            <div className="relative w-full flex flex-col items-center lg:items-start lg:pl-20">
              
              {/* Backing Slab */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-[var(--color-brutal-black)] brutal-border opacity-5 hidden lg:block"></div>
              
              {/* Main Manifesto Slab */}
              <div className="relative z-10 bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)] p-8 lg:p-14 brutal-border brutal-shadow-premium max-w-4xl w-full rotate-[-0.5deg] hover:rotate-0 duration-500 transition-all group">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-sm lg:text-base font-black bg-[var(--color-brutal-black)] text-white px-3 py-1 uppercase">
                    ARCHIVE_REF: 2026.03.12
                  </span>
                  <div className="flex-1 h-[2px] bg-black opacity-20"></div>
                  <span className="font-mono text-sm font-bold opacity-50">#001_LANDING</span>
                </div>

                <h1 className="text-massive leading-[0.75] mb-10 group-hover:tracking-tight transition-all duration-700">
                  <span className="block italic">BRUTAL</span>
                  <span className="block translate-x-4 lg:translate-x-8">ISM</span>
                </h1>

                <div className="relative">
                   <div className="absolute -left-2 top-0 bottom-0 w-1 bg-[var(--color-brutal-red)]"></div>
                   <p className="text-2xl lg:text-4xl font-black uppercase leading-none pl-6 border-l-4 border-black">
                    Ethic, Not Aesthetic.
                    <br/>
                    <span className="text-lg lg:text-xl font-mono mt-2 block normal-case font-medium opacity-80 italic">
                      &quot;Brutalism is not a style, it is an attitude.&quot;
                    </span>
                  </p>
                </div>
              </div>

              {/* Overlapping Callout Slab */}
              <div className="relative lg:absolute lg:-bottom-12 lg:-right-4 z-20 bg-[var(--color-brutal-white)] brutal-border p-6 lg:p-8 max-w-sm brutal-shadow mt-8 lg:mt-0 rotate-[2deg] hover:rotate-0 transition-transform">
                <p className="font-mono text-sm font-bold uppercase mb-4 text-[var(--color-brutal-red)]">
                  {`// Mission Statement`}
                </p>
                <p className="text-lg font-bold">
                  Documenting the raw, unfiltered truth of 20th century concrete monoliths.
                </p>
              </div>
            </div>

            {/* Navigation Grid - Enhanced with Depth Perception */}
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full mt-20">
              {[
                { name: "ORIGINS", path: "/history", color: "bg-[var(--color-brutal-cyan)]", desc: "The Post-War Pour", accent: "bg-white" },
                { name: "ETHOS", path: "/philosophy", color: "bg-[var(--color-brutal-red)]", desc: "The Moral Choice", accent: "bg-[var(--color-brutal-yellow)]" },
                { name: "GLOBAL", path: "/global-gallery", color: "bg-[var(--color-brutal-lime)]", desc: "Concrete Giants", text: "text-black" },
                { name: "INDIA", path: "/india", color: "bg-[var(--color-brutal-orange)]", desc: "Tropical Slabs", text: "text-black" },
                { name: "MEDIA", path: "/media", color: "bg-[var(--color-brutal-purple)]", desc: "Soviet Archive", text: "text-white" }
              ].map((link, idx) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`${link.color} p-6 brutal-border brutal-card-hover group relative overflow-hidden flex flex-col justify-between min-h-[220px]`}
                >
                  <div className="absolute top-2 right-2 font-mono text-xs font-black opacity-20">
                    0{idx + 1}
                  </div>
                  
                  <div className="relative z-10 pt-4">
                    <h2 className={`text-4xl lg:text-5xl font-black uppercase mb-2 ${link.text || 'text-white'} group-hover:italic transition-all`}>
                      {link.name}
                    </h2>
                    <div className={`h-1 w-12 ${link.accent || 'bg-black'} group-hover:w-full transition-all duration-300 mb-4`}></div>
                  </div>

                  <div className="relative z-10">
                    <span className={`font-mono text-xs font-bold uppercase block ${link.text || 'text-white'} group-hover:translate-x-2 transition-transform`}>
                      INDEX__{link.name}
                    </span>
                    <p className={`text-sm font-black uppercase leading-tight mt-1 ${link.text || 'text-white'} opacity-70`}>
                      {link.desc}
                    </p>
                  </div>

                  {/* Geometric Decoration on Hover */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-black/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                </Link>
              ))}
            </nav>

          </GsapScrollReveal>
        </main>
      </div>
    </PageTransition>
  );
}
