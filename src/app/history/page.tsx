import originsData from "@/data/origins.json";
import { Separator } from "@/components/ui/separator";
import { PageTransition } from "@/components/motion/PageTransition";
import { GsapScrollReveal } from "@/components/motion/GsapScrollReveal";
import { GsapParallaxImage } from "@/components/motion/GsapParallaxImage";
import { Metadata } from "next";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo-schemas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app";

export const metadata: Metadata = {
  title: "Origins of Brutalism: The Raw Core",
  description:
    "Explore the origins of Brutalism. Learn about Béton Brut, Le Corbusier's influence, and the ethical framework of postwar architecture.",
  keywords: [
    "brutalism origins",
    "béton brut",
    "Le Corbusier",
    "nybrutalism",
    "Swedish brutalism",
    "Reyner Banham",
    "architectural history",
    "postwar architecture",
  ],
  openGraph: {
    title: "Origins of Brutalism | History & Philosophy",
    description:
      "Learn about the origins of Brutalism through Béton Brut and Le Corbusier's concrete revolution.",
    url: "https://brutalist-arch.vercel.app/history",
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-history.png`,
        width: 1200,
        height: 630,
        alt: "Origins of Brutalism",
      },
    ],
  },
  alternates: {
    canonical: "https://brutalist-arch.vercel.app/history",
  },
};

export default function OriginsPage() {
  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Origins', url: `${siteUrl}/history` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    'Origins of Brutalism: The Raw Core',
    originsData.introduction,
    '/history',
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
               <GsapParallaxImage src="/images/history-hero-texture.png" alt="Brutalist Texture" />
            </div>
            <GsapScrollReveal className="relative z-10">
              <h1 className="text-massive max-w-[90vw] break-words uppercase">Origins</h1>
              <p className="text-3xl font-mono font-black mt-8 max-w-3xl">
                THE RAW CORE. THE SWEDISH PRECEDENT. THE MORAL IMPERATIVE.
              </p>
            </GsapScrollReveal>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 relative z-10">
            {/* Abstract Sidebar */}
            <aside className="col-span-1 lg:col-span-3 border-r-4 lg:border-r-8 border-[var(--color-brutal-black)] bg-[var(--color-brutal-gray-100)] p-8 hidden lg:block overflow-hidden relative">
               <div className="text-raw rotate-90 origin-left translate-x-12 translate-y-32 tracking-[0.5em] text-[var(--color-brutal-gray-900)] opacity-40 whitespace-nowrap">
                 BÉTON_BRUT // 1952 // NYBRUTALISM // 1950 // THE_NEW_BRUTALISM // 1955
               </div>
            </aside>

            {/* Content Feed */}
            <div className="col-span-1 lg:col-span-9 flex flex-col">
              {originsData.sections.map((item, index) => (
                <article 
                  key={item.id} 
                  className={`p-8 lg:p-16 border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] relative overflow-hidden group ${index % 2 === 0 ? 'bg-[var(--color-brutal-white)]' : 'bg-[var(--color-brutal-bg)]'}`}
                >
                  <div className="absolute top-0 right-0 p-4 bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] font-mono font-black text-2xl brutal-border translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform z-20">
                    {item.year}
                  </div>
                  
                  <GsapScrollReveal>
                    <h2 className="text-5xl lg:text-7xl font-black uppercase mb-4 max-w-4xl tracking-tighter leading-[0.9]">
                      {item.title}
                    </h2>
                  </GsapScrollReveal>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <span className="bg-[var(--color-brutal-red)] text-white px-3 py-1 font-mono font-bold text-lg brutal-border">
                      {item.figure}
                    </span>
                    <Separator orientation="horizontal" className="flex-1 bg-[var(--color-brutal-red)] h-[2px]" />
                  </div>
                  
                  {/* Massive Image Reveal */}
                  <div className="w-full min-h-[300px] mb-12 mt-8 brutal-border brutal-shadow-sm">
                    <GsapParallaxImage 
                      src={item.image} 
                      alt={item.imageAlt}
                      mode="frame"
                    />
                  </div>
                  
                  <GsapScrollReveal>
                    <p className="text-xl lg:text-2xl font-medium leading-relaxed max-w-4xl text-justify font-sans">
                      {item.content}
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
