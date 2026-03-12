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
        
        <div className="min-h-screen bg-[var(--color-brutal-bg)] text-[var(--color-brutal-black)] selection:bg-[var(--color-brutal-yellow)] selection:text-[var(--color-brutal-black)] pb-32 relative overflow-hidden grain-overlay">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 z-0 bg-grid-black opacity-10 pointer-events-none"></div>

          {/* Hero Section */}
          <section className="min-h-[90vh] flex flex-col justify-end p-8 lg:p-16 border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] relative overflow-hidden z-10 bg-[var(--color-brutal-black)]">
            <div className="absolute inset-0 opacity-40 lg:mix-blend-screen mix-blend-normal pointer-events-none">
               <GsapParallaxImage src="/images/history-hero-texture.png" alt="Brutalist Decay Texture" priority={true} />
            </div>
            
            <GsapScrollReveal className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start lg:items-end text-left">
              <h1 className="text-massive max-w-[90vw] break-words uppercase leading-[0.8] mb-8 text-[var(--color-brutal-white)] lg:mix-blend-difference mix-blend-normal will-change-transform">
                FALL<br/>&<br/>RISE
              </h1>
              <div className="bg-[var(--color-brutal-red)] text-[var(--color-brutal-white)] px-6 py-4 text-2xl lg:text-3xl font-mono font-black brutal-border mb-8 max-w-sm text-right brutal-shadow-sm">
                FROM INFAMY TO CULT STATUS
              </div>
            </GsapScrollReveal>
          </section>

          {/* introduction */}
          <section className="p-8 lg:p-16 border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] bg-[var(--color-brutal-yellow)]">
             <GsapScrollReveal className="max-w-5xl">
                <p className="text-2xl lg:text-4xl font-black leading-tight uppercase">
                   {downfallData.introduction}
                </p>
             </GsapScrollReveal>
          </section>

          {/* Sections */}
          <div className="flex flex-col relative z-10">
            {downfallData.sections.map((section, idx) => (
              <div key={section.id} className={`grid grid-cols-1 lg:grid-cols-2 border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} ${idx % 2 === 0 ? 'bg-[var(--color-brutal-white)]' : 'bg-[var(--color-brutal-bg)]'}`}>
                
                <GsapScrollReveal 
                  as="section"
                  role="region"
                  aria-labelledby={`heading-${section.id}`}
                  className={`p-8 lg:p-16 ${idx % 2 === 0 ? 'lg:border-r-4 lg:border-r-8' : 'lg:border-l-4 lg:border-l-8'} border-b-4 lg:border-b-0 border-[var(--color-brutal-black)] flex flex-col justify-between`}
                >
                  <div className="max-w-3xl">
                    <h2 id={`heading-${section.id}`} className="text-5xl lg:text-7xl font-black text-[var(--color-brutal-black)] uppercase mb-8 leading-[0.8]">{section.heading}</h2>
                    <p className="text-xl lg:text-2xl font-medium text-left text-[var(--color-brutal-black)] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </GsapScrollReveal>
                
                <GsapScrollReveal className="p-0 border-none relative min-h-[50vh] lg:min-h-full bg-[var(--color-brutal-black)]">
                  <GsapParallaxImage src={section.image} alt={section.imageAlt} className="w-full h-full" mode="cover" />
                </GsapScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </>
    </PageTransition>
  );
}
