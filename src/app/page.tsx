import { PageTransition } from "@/components/motion/PageTransition";
import { GsapScrollReveal } from "@/components/motion/GsapScrollReveal";
import { GsapParallaxImage } from "@/components/motion/GsapParallaxImage";
import Link from "next/link";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] selection:bg-[var(--color-brutal-red)] selection:text-white flex flex-col relative overflow-hidden">
        
        {/* Massive Tiled Texture Background */}
        <div 
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: 'url(/images/global-hero-texture.png)', backgroundSize: '320px 320px', backgroundRepeat: 'repeat' }}
        ></div>

        {/* Hard red diagonal accent */}
        <div className="absolute top-0 left-0 w-[40vw] h-full bg-[var(--color-brutal-red)] opacity-15 mix-blend-multiply pointer-events-none" style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)' }}></div>

        <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-8 lg:p-16 min-h-screen">
          <GsapScrollReveal className="w-full max-w-7xl flex flex-col items-center">
            
            {/* Core Manifesto Box */}
            <div className="bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)] p-8 lg:p-16 brutal-border brutal-shadow mb-16 max-w-5xl w-full rotate-[-1deg] transform transition-transform hover:rotate-0 duration-500">
              <span className="font-mono text-xl lg:text-2xl font-black bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] px-4 py-2 block w-fit mb-8">
                ARCHITECTURAL ARCHIVE // 01
              </span>
              <h1 className="text-massive uppercase leading-[0.8] tracking-tighter mb-8 indent-[-0.05em]">
                BRUTALISM
              </h1>
              <p className="text-3xl lg:text-5xl font-bold bg-[var(--color-brutal-white)] border-[4px] border-[var(--color-brutal-black)] p-6 inline-block w-full">
                AN ETHIC. 
                <br/>NOT AN AESTHETIC.
              </p>
            </div>

            {/* Navigation Grid */}
            <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-6xl">
              {[
                { name: "ORIGINS", path: "/history", color: "bg-[var(--color-brutal-cyan)]", desc: "The Post-War Concrete Pour" },
                { name: "ETHOS", path: "/philosophy", color: "bg-[var(--color-brutal-red)]", desc: "The Moral Imperative" },
                { name: "GLOBAL", path: "/global-gallery", color: "bg-[var(--color-brutal-white)]", desc: "Worldwide Monoliths", text: "text-[var(--color-brutal-black)]" },
                { name: "INDIA", path: "/india", color: "bg-[var(--color-brutal-gray-100)]", desc: "The Subcontinental Slab", text: "text-[var(--color-brutal-black)]" },
                { name: "MEDIA", path: "/media", color: "bg-[var(--color-brutal-yellow)]", desc: "Soviet Concrete Archive", text: "text-[var(--color-brutal-black)]" }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`${link.color} p-8 brutal-border brutal-shadow group relative overflow-hidden transition-all hover:-translate-y-2 hover:translate-x-[-4px]`}
                >
                  <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                  <div className="relative z-10">
                    <h2 className={`text-4xl lg:text-5xl font-black uppercase mb-4 ${link.text || 'text-white'} group-hover:text-[var(--color-brutal-yellow)] transition-colors`}>{link.name}</h2>
                    <span className={`font-mono text-sm lg:text-base font-bold uppercase block ${link.text || 'text-white'} group-hover:text-white transition-colors`}>-&gt; {link.desc}</span>
                  </div>
                </Link>
              ))}
            </nav>

          </GsapScrollReveal>
        </main>
      </div>
    </PageTransition>
  );
}
