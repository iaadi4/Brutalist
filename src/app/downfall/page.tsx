import downfallData from "@/data/downfall-revival.json";
import { PageTransition } from "@/components/motion/PageTransition";
import { GsapScrollReveal } from "@/components/motion/GsapScrollReveal";
import { GsapParallaxImage } from "@/components/motion/GsapParallaxImage";
import { Metadata } from "next";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo-schemas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist-arch.vercel.app";

export const metadata: Metadata = {
  title: "The Downfall & Revival of Brutalism: From Revulsion to Cult Status",
  description:
    "Explore the dramatic narrative of Brutalism: its sociological collapse, material degradation, and the 21st-century architectural resurrection.",
  keywords: [
    "brutalism downfall",
    "brutalism revival",
    "concrete jungle",
    "SOS Brutalism",
    "architectural conservation",
    "material degradation",
    "post-war architecture",
  ],
  openGraph: {
    title: "The Downfall & Revival of Brutalism",
    description:
      "Witness the evolution of Brutalism from reviled 'concrete jungles' to celebrated spatial masterpieces.",
    url: "https://brutalist-arch.vercel.app/downfall",
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-downfall.png`,
        width: 1200,
        height: 630,
        alt: "Downfall and Revival of Brutalism",
      },
    ],
  },
  alternates: {
    canonical: "https://brutalist-arch.vercel.app/downfall",
  },
};

export default function DownfallPage() {
  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Downfall & Revival', url: `${siteUrl}/downfall` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    'The Brutal Backlash and the 21st Century Revival',
    downfallData.introduction,
    '/downfall',
    new Date().toISOString(),
    'Brutalism Archive'
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          suppressHydrationWarning
        />
        
        <div className="flex flex-col min-h-screen bg-[var(--color-brutal-bg)] text-[var(--color-brutal-black)] selection:bg-[var(--color-brutal-yellow)] selection:text-[var(--color-brutal-black)] relative overflow-hidden grain-overlay">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 z-0 bg-grid-black opacity-10 pointer-events-none"></div>

          <header className="p-8 lg:p-16 bg-[var(--color-brutal-yellow)] border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] relative overflow-hidden z-10">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 mix-blend-multiply pointer-events-none hidden md:block">
               <GsapParallaxImage src="/images/history-hero-texture.png" alt="Brutalist Texture" priority={true} />
            </div>
            <GsapScrollReveal className="relative z-10">
              <h1 className="text-massive max-w-[90vw] break-words uppercase leading-[0.8]">Fall & Revival</h1>
              <p className="text-3xl font-mono font-black mt-8 max-w-3xl uppercase">
                From Infamy to Cult Status. The Collapse. The Resurrection.
              </p>
            </GsapScrollReveal>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 relative z-10">
            {/* Abstract Sidebar */}
            <aside className="col-span-1 lg:col-span-3 border-r-4 lg:border-r-8 border-[var(--color-brutal-black)] bg-[var(--color-brutal-gray-100)] p-8 hidden lg:block overflow-hidden relative">
               <div className="text-raw rotate-90 origin-left translate-x-12 translate-y-32 tracking-[0.5em] text-[var(--color-brutal-gray-900)] opacity-40 whitespace-nowrap">
                 DECAY // REJECTION // #SOSBRUTALISM // REDISCOVERY // RESURRECTION
               </div>
            </aside>

            {/* Content Feed */}
            <div className="col-span-1 lg:col-span-9 flex flex-col">
              {/* Introduction Section */}
              <section className="p-8 lg:p-16 border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] bg-[var(--color-brutal-white)]">
                <GsapScrollReveal>
                  <p className="text-2xl lg:text-3xl font-bold leading-tight uppercase max-w-4xl">
                    {downfallData.introduction}
                  </p>
                </GsapScrollReveal>
              </section>

              {downfallData.sections.map((section, idx) => (
                <article 
                  key={section.id} 
                  className={`p-8 lg:p-16 border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] relative overflow-hidden group ${idx % 2 === 0 ? 'bg-[var(--color-brutal-bg)]' : 'bg-[var(--color-brutal-white)]'}`}
                >
                  <div className="absolute top-0 right-0 p-4 bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] font-mono font-black text-2xl brutal-border translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform z-20 uppercase">
                    {section.id.split('-')[0]}
                  </div>
                  
                  <GsapScrollReveal>
                    <h2 className="text-5xl lg:text-7xl font-black uppercase mb-8 max-w-4xl tracking-tighter leading-[0.9]">
                      {section.heading}
                    </h2>
                  </GsapScrollReveal>
                  
                  {/* Framed Image - Respecting Dimensions */}
                  <div className="w-full min-h-[300px] mb-12 mt-8 brutal-border brutal-shadow-sm bg-black/5">
                    <GsapParallaxImage 
                      src={section.image} 
                      alt={section.imageAlt}
                      mode="frame"
                    />
                  </div>
                  
                  <GsapScrollReveal>
                    <p className="text-xl lg:text-2xl font-medium leading-relaxed max-w-4xl text-justify font-sans">
                      {section.content}
                    </p>
                  </GsapScrollReveal>
                </article>
              ))}
            </div>
          </div>
        </div>
      </>
    </PageTransition>
  );
}
