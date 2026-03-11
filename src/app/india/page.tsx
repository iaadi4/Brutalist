import indiaData from "@/data/india-brutalism.json";
import { Separator } from "@/components/ui/separator";

export default function IndiaPage() {
  return (
    <div className="min-h-screen bg-[#ffede6] selection:bg-[var(--color-brutal-black)] selection:text-[var(--color-brutal-yellow)]">
      {/* Hero Header */}
      <header className="px-8 py-16 lg:p-24 border-b-[12px] border-[var(--color-brutal-black)] relative overflow-hidden bg-[var(--color-brutal-red)] text-white">
        <h1 className="text-[clamp(4rem,15vw,15rem)] font-black uppercase leading-none tracking-tighter mb-8 z-10 relative relative">
          SUBCONTINENTAL<br/>MONOLITH
        </h1>
        <div className="bg-black text-[var(--color-brutal-cyan)] text-2xl font-mono p-4 inline-block z-10 relative brutal-border">
          TROPICAL CONSTRAINTS // INSTITUTIONAL GRAVITY
        </div>
        
        {/* Massive Background Geometry */}
        <div className="absolute right-0 bottom-0 w-[50vw] h-[50vw] rounded-full bg-white opacity-10 translate-x-1/4 translate-y-1/4 select-none pointer-events-none" />
      </header>

      {/* Intro */}
      <section className="p-8 lg:p-24 border-b-[8px] border-[var(--color-brutal-black)] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8">
          <p className="text-3xl lg:text-5xl font-black uppercase text-justify leading-[1.1]">
            {indiaData.introduction}
          </p>
        </div>
        <div className="lg:col-span-4 border-[8px] border-black p-8 bg-[var(--color-brutal-white)] aspect-square flex flex-col justify-center items-center relative transform -rotate-3 hover:rotate-0 transition-transform brutal-shadow">
           <div className="text-8xl font-black text-black">1950+</div>
           <div className="text-xl font-mono font-bold uppercase mt-4 text-center">Post-Colonial Expansion</div>
        </div>
      </section>

      {/* Masterworks Grid */}
      <section className="bg-[var(--color-brutal-black)] text-white border-b-[8px] border-[var(--color-brutal-white)] p-8 lg:p-24">
        <h2 className="text-6xl lg:text-8xl font-black uppercase mb-16 text-[var(--color-brutal-yellow)] border-b-[8px] border-[var(--color-brutal-yellow)] pb-8 inline-block">
          THE MASTERWORKS
        </h2>
        
        <div className="flex flex-col gap-16 lg:gap-32">
          {indiaData.masterworks.map((work, idx) => (
             <div key={work.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:grid-flow-col-dense lg:flex-row-reverse' : ''}`}>
               <div className={`p-8 lg:p-16 border-[6px] border-[var(--color-brutal-white)] relative overflow-visible ${idx % 2 !== 0 ? 'lg:col-start-2 bg-[var(--color-brutal-red)]' : 'lg:col-start-1 bg-[var(--color-brutal-cyan)] text-black'}`}>
                 <h3 className="text-5xl font-black uppercase mb-4 leading-none tracking-tight">{work.name}</h3>
                 <div className="font-mono text-xl font-bold bg-black text-white px-3 py-1 inline-block mb-8 mb-8">{work.architect} / {work.year} / {work.location}</div>
                 <p className="text-2xl font-medium text-justify">{work.description}</p>
                 
                 {/* Decorative protruding element */}
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--color-brutal-yellow)] border-[4px] border-[var(--color-brutal-black)] translate-x-8 -translate-y-8 z-10 hidden lg:block"></div>
               </div>
               
               {/* Abstract placeholder for architecture imaging/graphic */}
               <div className={`aspect-video lg:aspect-square border-[8px] border-white w-full h-full flex items-center justify-center p-8 relative overflow-hidden group ${idx % 2 !== 0 ? 'lg:col-start-1 bg-[var(--color-brutal-gray-900)]' : 'lg:col-start-2 bg-[var(--color-brutal-gray-900)]'}`}>
                  <div className="w-full h-full border-[2px] border-dashed border-white/30 flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
                    <span className="font-mono text-3xl font-bold text-white uppercase opacity-40 mix-blend-overlay">IMAGE:{work.id}.BÉTON</span>
                  </div>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* Regional Transition: Bihar */}
      <section className="p-8 lg:p-24 border-b-[12px] border-[var(--color-brutal-black)] bg-[var(--color-brutal-yellow)]">
        <h2 className="text-6xl lg:text-7xl font-black uppercase mb-8 max-w-5xl">
          {indiaData.regional_transition_bihar.title}
        </h2>
        <p className="text-3xl font-medium mb-16 max-w-4xl text-justify pb-16 border-b-[4px] border-[var(--color-brutal-black)]">
          {indiaData.regional_transition_bihar.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          {/* Vertical Separator for Desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-[8px] bg-[var(--color-brutal-black)] -translate-x-1/2"></div>
          
          <div className="pr-0 lg:pr-12">
            <h3 className="text-4xl font-black uppercase mb-12 bg-black text-white p-4 inline-block brutal-border">HISTORICAL BASELINE</h3>
            <div className="space-y-12">
              {indiaData.regional_transition_bihar.historical_baseline.map((item, idx) => (
                <div key={idx} className="bg-white p-8 border-[6px] border-black brutal-shadow-sm">
                  <h4 className="text-3xl font-black uppercase mb-2">{item.name}</h4>
                  {item.year && <span className="font-mono font-bold text-lg bg-[var(--color-brutal-red)] text-white px-2 py-1 mb-4 inline-block">{item.year}</span>}
                  <p className="text-xl font-medium mt-4">{item.significance}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pl-0 lg:pl-12">
            <h3 className="text-4xl font-black uppercase mb-12 bg-[var(--color-brutal-cyan)] text-black p-4 inline-block brutal-border">MODERN INTERVENTION</h3>
            <div className="space-y-12">
              {indiaData.regional_transition_bihar.modern_intervention.map((item, idx) => (
                <div key={idx} className="bg-[var(--color-brutal-black)] text-white p-8 border-[6px] border-black brutal-shadow-sm">
                   <h4 className="text-3xl font-black uppercase mb-2 text-[var(--color-brutal-yellow)]">{item.name}</h4>
                   <div className="font-mono text-sm uppercase opacity-70 mb-4 tracking-wider">
                     {item.architect} {item.year ? `// ${item.year}` : ''}
                   </div>
                   <p className="text-xl font-medium border-l-[4px] border-[var(--color-brutal-cyan)] pl-4">{item.significance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
