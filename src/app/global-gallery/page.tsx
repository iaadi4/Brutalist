import globalBuildingsData from "@/data/global-buildings.json";
import { PageTransition } from "@/components/motion/PageTransition";
import { GsapHorizontalScroll } from "@/components/motion/GsapHorizontalScroll";
import { GsapParallaxImage } from "@/components/motion/GsapParallaxImage";

export default function GlobalGalleryPage() {
  return (
    <PageTransition>
      <GsapHorizontalScroll className="bg-[var(--color-brutal-black)]">
        {/* Title Panel */}
        <div className="panel w-[100vw] h-screen flex-shrink-0 flex items-center justify-center relative border-r-[16px] border-[var(--color-brutal-white)] bg-[var(--color-brutal-red)] z-10">
          <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none">
             <GsapParallaxImage src="https://source.unsplash.com/random/2000x1200/?brutalism,concrete,facade" alt="Global Brutalism Texture" />
          </div>
          <div className="relative z-10 p-16 bg-[var(--color-brutal-black)] text-white brutal-border brutal-shadow my-auto">
             <h1 className="text-massive max-w-[90vw] break-words uppercase leading-[0.8] mb-8 text-[var(--color-brutal-white)]">
               GLOBAL<br/>MONOLITHS
             </h1>
             <div className="bg-[var(--color-brutal-yellow)] text-black px-4 py-2 text-3xl font-mono font-black brutal-border inline-block">
               INDEX: 06 // WORLDWIDE STRENGTH
             </div>
          </div>
        </div>

        {/* Building Panels */}
        {globalBuildingsData.map((building, index) => (
          <div key={building.id} className="panel w-[100vw] h-screen flex-shrink-0 relative overflow-hidden flex items-center justify-center border-r-[16px] border-[var(--color-brutal-black)] group">
            
            {/* Massive Background Parallax */}
            <div className="absolute inset-0 w-full h-full z-0">
               <GsapParallaxImage src={building.image} alt={building.imageAlt} />
            </div>
            
            {/* Overlay Content Box */}
            <div className={`relative z-10 max-w-4xl w-full p-8 lg:p-16 border-[8px] border-[var(--color-brutal-black)] brutal-shadow ${index % 2 === 0 ? 'bg-[var(--color-brutal-cyan)]' : 'bg-[var(--color-brutal-white)]'} ml-8 lg:ml-32 mt-16 transition-transform group-hover:-translate-y-4 duration-500`}>
                <div className="bg-[var(--color-brutal-black)] text-white px-4 py-2 font-mono text-2xl uppercase inline-block mb-6 brutal-border-sm translate-x-[-30px] translate-y-[-40px] absolute top-0 left-0">
                  {building.year} // {building.architect}
                </div>
                
                <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8 mt-4 text-[var(--color-brutal-black)]">
                  {building.name}
                </h2>
                
                <div className="bg-[var(--color-brutal-white)] border-[4px] border-[var(--color-brutal-black)] p-6 mb-8 text-black">
                  <span className="font-mono text-xl font-bold bg-[var(--color-brutal-red)] text-white px-2 py-1 mb-2 inline-block">LOCATION</span>
                  <p className="text-3xl font-bold uppercase block">{building.location} // {building.coordinates}</p>
                </div>
                
                <p className="text-xl lg:text-3xl font-medium leading-relaxed text-justify line-clamp-6 hover:line-clamp-none transition-all duration-300">
                  {building.technical_details}
                </p>
            </div>
            
          </div>
        ))}
        
        {/* End Panel */}
        <div className="panel w-[100vw] h-screen flex-shrink-0 flex items-center justify-center bg-[var(--color-brutal-yellow)] relative">
            <h2 className="text-massive text-[var(--color-brutal-black)] mix-blend-exclusion">END OF INDEX</h2>
        </div>
      </GsapHorizontalScroll>
    </PageTransition>
  );
}
