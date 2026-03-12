import indiaData from "@/data/india-brutalism.json";
import { PageTransition } from "@/components/motion/PageTransition";
import { GsapScrollReveal } from "@/components/motion/GsapScrollReveal";
import { GsapParallaxImage } from "@/components/motion/GsapParallaxImage";
import { generateBuildingSchema, generateBreadcrumbSchema } from "@/lib/seo-schemas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app";

export const metadata = {
  title: "Indian Brutalism: The Subcontinental Monolith",
  description:
    "Explore the iconic Brutalist architecture of India. From Chandigarh to Ahmedabad, discover the tropical concrete masterworks.",
  keywords: ["Indian Brutalism", "Le Corbusier India", "Chandigarh architecture", "Ahmedabad Brutalism"],
  alternates: {
    canonical: "https://brutalist-arch.vercel.app/india",
  },
};

export default function IndiaBrutalismPage() {
  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Indian Brutalism', url: `${siteUrl}/india` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Generate building schemas for major Indian works
  const buildingSchemas = indiaData.masterworks.slice(0, 5).map((building) =>
    generateBuildingSchema(
      building.name,
      building.location,
      building.year,
      building.architect,
      building.description
    )
  );

  return (
    <PageTransition>
      <>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          suppressHydrationWarning
        />
        {buildingSchemas.map((schema, idx) => (
          <script
            key={`building-${idx}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            suppressHydrationWarning
          />
        ))}

        <div className="flex flex-col min-h-screen bg-[var(--color-brutal-bg)] text-[var(--color-brutal-black)] selection:bg-[var(--color-brutal-yellow)] selection:text-[var(--color-brutal-black)] relative overflow-hidden grain-overlay">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 z-0 bg-grid-black opacity-10 pointer-events-none"></div>

          {/* Hero Pinned Start Section */}
          <header className="relative min-h-[90vh] flex flex-col justify-end p-8 lg:p-16 border-b-8 lg:border-b-[16px] border-[var(--color-brutal-black)] bg-[var(--color-brutal-cyan)] overflow-hidden z-10">
            <div className="absolute top-0 right-0 w-2/3 h-full opacity-40 mix-blend-multiply pointer-events-none">
               <GsapParallaxImage src="/images/india-hero-texture.png" alt="Concrete Texture" priority={true} />
            </div>
            
            <GsapScrollReveal className="relative z-10 w-full flex flex-col justify-end">
              <h1 className="text-massive max-w-[90vw] break-words text-[var(--color-brutal-black)] uppercase leading-[0.8] mb-8">
                THE<br/>SUBCONTINENTAL<br/>MONOLITH
              </h1>
              <div className="bg-[var(--color-brutal-black)] text-[var(--color-brutal-yellow)] px-6 py-4 text-3xl lg:text-5xl font-mono font-black brutal-border brutal-shadow-sm inline-block max-w-5xl">
                {indiaData.section}
              </div>
            </GsapScrollReveal>
          </header>

          {/* Intro */}
          <section className="col-span-12 p-8 lg:p-24 border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] bg-[var(--color-brutal-white)] relative min-h-[70vh] flex items-center z-10">
              <GsapScrollReveal>
                  <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[var(--color-brutal-red)] border-4 border-[var(--color-brutal-black)] absolute top-0 -translate-y-1/2 left-8 lg:left-24 rotate-45 z-10 brutal-shadow-sm"></div>
                  <h2 className="text-5xl lg:text-7xl font-black uppercase mb-12 font-mono text-[var(--color-brutal-red)] tracking-tighter">
                    // INTRODUCTION
                  </h2>
                  <p className="text-xl lg:text-2xl font-medium leading-[1.6] max-w-5xl font-sans text-left">
                    {indiaData.introduction}
                  </p>
              </GsapScrollReveal>
          </section>

          {/* Masterworks */}
          <section className="flex flex-col relative z-10">
            <div className="bg-[var(--color-brutal-black)] p-8 lg:p-12 text-[var(--color-brutal-white)] border-b-4 lg:border-b-8 border-[var(--color-brutal-yellow)] sticky top-0 z-50">
              <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8]">STATECRAFT & MASTERWORKS</h2>
            </div>
            
            {indiaData.masterworks.map((work, index) => (
              <article 
                key={work.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 min-h-[90vh] border-b-8 lg:border-b-[16px] border-[var(--color-brutal-black)] ${index % 2 === 0 ? 'bg-[var(--color-brutal-gray-100)]' : 'bg-[var(--color-brutal-white)]'}`}
              >
                {/* Image Column */}
                <div className={`col-span-1 lg:col-span-7 ${index % 2 === 0 ? 'order-1 lg:order-2 border-l-4 lg:border-l-8' : 'order-1 lg:order-1 border-r-4 lg:border-r-8'} border-[var(--color-brutal-black)] relative overflow-hidden min-h-[60vh] lg:h-auto bg-[var(--color-brutal-black)]`}>
                   <GsapParallaxImage src={work.image} alt={work.imageAlt} mode="frame" />
                 
                 <div className="absolute top-8 left-8 bg-[var(--color-brutal-yellow)] border-4 border-[var(--color-brutal-black)] px-6 py-4 text-4xl font-mono font-black brutal-shadow-sm z-20">
                    {work.year}
                 </div>
              </div>

              {/* Text Column */}
              <div className={`col-span-1 lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                <GsapScrollReveal>
                  <div className="mb-8">
                    <span className="bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] px-4 py-2 font-mono font-bold text-2xl brutal-border mb-6 inline-block">
                      {work.architect}
                    </span>
                    <h3 className="text-6xl lg:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
                      {work.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-2 mb-12">
                     <span className="font-mono text-2xl font-bold bg-[var(--color-brutal-red)] text-white px-3 py-1 w-fit brutal-border brutal-shadow-sm">{work.location}</span>
                  </div>
                  
                  <p className="text-xl lg:text-2xl font-medium leading-relaxed text-left max-w-2xl">
                    {work.description}
                  </p>
                </GsapScrollReveal>
              </div>
            </article>
          ))}
        </section>

        {/* Regional Transition */}
        <section className="bg-[var(--color-brutal-yellow)] p-8 lg:p-24 border-t-8 lg:border-t-[16px] border-[var(--color-brutal-black)] relative z-10">
            <GsapScrollReveal>
                <h2 className="text-7xl lg:text-massive font-black uppercase tracking-tighter leading-[0.8] mb-12 max-w-6xl">
                    {indiaData.regional_transition_bihar.title}
                </h2>
                <p className="text-3xl lg:text-5xl font-bold bg-[var(--color-brutal-white)] p-12 lg:p-16 brutal-border brutal-shadow max-w-5xl mb-24 leading-[1.1]">
                    {indiaData.regional_transition_bihar.description}
                </p>
            </GsapScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <div className="flex flex-col gap-16">
                    <h3 className="text-5xl lg:text-6xl font-mono font-black bg-[var(--color-brutal-black)] text-white p-6 lg:p-8 brutal-border block">
                        // THE BASELINE
                    </h3>
                    {indiaData.regional_transition_bihar.historical_baseline.map((item, i) => (
                        <div key={i} className="bg-[var(--color-brutal-gray-100)] brutal-border brutal-shadow p-8 lg:p-12 flex flex-col gap-8">
                            <h4 className="text-6xl lg:text-7xl font-black uppercase leading-[0.8] tracking-tighter">{item.name}</h4>
                            <span className="font-mono text-3xl font-bold block bg-[var(--color-brutal-red)] text-[var(--color-brutal-white)] w-fit px-4 py-2 brutal-border brutal-shadow-sm">{item.year}</span>
                            <div className="w-full min-h-[300px] brutal-border overflow-hidden">
                              <GsapParallaxImage src={item.image} alt={item.imageAlt} mode="frame" />
                            </div>
                            <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-justify">{item.significance}</p>
                        </div>
                    ))}
                </div>
                
                <div className="flex flex-col gap-16">
                    <h3 className="text-5xl lg:text-6xl font-mono font-black bg-[var(--color-brutal-cyan)] text-[var(--color-brutal-black)] p-6 lg:p-8 brutal-border block">
                        // MODERN INTERVENTION
                    </h3>
                    {indiaData.regional_transition_bihar.modern_intervention.map((item, i) => (
                        <div key={i} className="bg-[var(--color-brutal-bg)] brutal-border brutal-shadow p-8 lg:p-12 flex flex-col gap-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 bg-[var(--color-brutal-black)] text-white brutal-border rotate-12 translate-x-8 -translate-y-8 group-hover:rotate-0 transition-transform duration-300 z-20">
                               <span className="font-mono font-black text-3xl">{item.year || item.location}</span>
                            </div>
                            <h4 className="text-6xl lg:text-7xl font-black uppercase leading-[0.8] tracking-tighter pr-24">{item.name}</h4>
                            <span className="font-mono text-2xl font-bold block bg-[var(--color-brutal-white)] text-[var(--color-brutal-black)] border-4 border-[var(--color-brutal-black)] w-fit px-4 py-2">ARCHITECT: {item.architect}</span>
                            <div className="w-full min-h-[300px] brutal-border overflow-hidden z-10 relative">
                              <GsapParallaxImage src={item.image} alt={item.imageAlt} mode="frame" />
                            </div>
                            <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-justify relative z-10">{item.significance}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        </div>
      </>
    </PageTransition>
  );
}
