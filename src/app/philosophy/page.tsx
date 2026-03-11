import philosophyData from "@/data/philosophy.json";
import { PageTransition } from "@/components/motion/PageTransition";
import { GsapScrollReveal } from "@/components/motion/GsapScrollReveal";
import { GsapParallaxImage } from "@/components/motion/GsapParallaxImage";

export default function PhilosophyPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] selection:bg-[var(--color-brutal-red)] selection:text-white pb-32">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-end p-8 lg:p-16 border-b-[8px] border-[var(--color-brutal-white)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
             <GsapParallaxImage src="/images/philosophy-hero-texture.png" alt="Brutalist Texture" />
          </div>
          
          <GsapScrollReveal className="relative z-10 w-full flex justify-between items-end">
            <h1 className="text-massive max-w-[90vw] break-words uppercase leading-[0.8] mb-8 text-[var(--color-brutal-white)] mix-blend-difference">
              ETHOS<br/>NOT<br/>AESTHETIC
            </h1>
            <div className="hidden lg:block bg-[var(--color-brutal-yellow)] text-black px-6 py-4 text-3xl font-mono font-black brutal-border mb-8 max-w-sm text-right">
              THE DOORN MANIFESTO & THE MORAL IMPERATIVE
            </div>
          </GsapScrollReveal>
        </section>

        {/* Sections */}
        <div className="flex flex-col">
          {philosophyData.sections.map((section, idx) => (
            <div key={section.id} className={`grid grid-cols-1 lg:grid-cols-2 border-b-[8px] border-[var(--color-brutal-white)] ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <GsapScrollReveal className="p-8 lg:p-16 border-r-0 lg:border-r-[8px] border-b-[8px] lg:border-b-0 border-[var(--color-brutal-white)] flex flex-col justify-between">
                <div>
                  <h2 className="text-5xl lg:text-7xl font-black text-[var(--color-brutal-cyan)] uppercase mb-6 leading-[0.8]">{section.heading}</h2>
                </div>
                <p className="text-2xl lg:text-3xl font-medium text-justify text-[var(--color-brutal-gray-100)] leading-relaxed mt-8">
                  {section.content}
                </p>
              </GsapScrollReveal>
              
              <GsapScrollReveal className="p-0 border-none relative min-h-[50vh] lg:min-h-full bg-[var(--color-brutal-black)]">
                <GsapParallaxImage src={section.image} alt={section.imageAlt} className="w-full h-full" mode="frame" />
              </GsapScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
