import philosophyData from "@/data/philosophy.json";
import { PageTransition } from "@/components/motion/PageTransition";
import { GsapScrollReveal } from "@/components/motion/GsapScrollReveal";
import { GsapParallaxImage } from "@/components/motion/GsapParallaxImage";
import { Metadata } from "next";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo-schemas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app";

export const metadata: Metadata = {
  title: "Philosophy of Brutalism | Ethos, Not Aesthetic",
  description:
    "Understand the moral philosophy of Brutalism. Explore Team 10, the Doorn Manifesto, structural honesty, and the ethics that defined this architectural movement.",
  keywords: [
    "brutalism philosophy",
    "architectural ethics",
    "Team 10",
    "Doorn Manifesto",
    "structural honesty",
    "Smithsons",
    "welfare state architecture",
    "modernist ethics",
  ],
  openGraph: {
    title: "Philosophy of Brutalism | Ethos, Not Aesthetic",
    description:
      "Understanding Brutalism's core philosophy: Team 10, the Doorn Manifesto, and the moral imperative of structural honesty.",
    url: `${siteUrl}/philosophy`,
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-philosophy.png`,
        width: 1200,
        height: 630,
        alt: "Philosophy of Brutalism",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/philosophy`,
  },
};

export default function PhilosophyPage() {
  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Philosophy', url: `${siteUrl}/philosophy` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    'The Brutalist Philosophy: Ethos Over Aesthetic',
    philosophyData.introduction,
    '/philosophy',
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
               <GsapParallaxImage src="/images/philosophy-hero-texture.png" alt="Brutalist Texture" />
            </div>
            
            <GsapScrollReveal className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start lg:items-end">
              <h1 className="text-massive max-w-[90vw] break-words uppercase leading-[0.8] mb-8 text-[var(--color-brutal-white)] lg:mix-blend-difference mix-blend-normal will-change-transform">
                ETHOS<br/>NOT<br/>AESTHETIC
              </h1>
              <div className="bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)] px-6 py-4 text-2xl lg:text-3xl font-mono font-black brutal-border mb-8 max-w-sm text-right brutal-shadow-sm">
                THE DOORN MANIFESTO & THE MORAL IMPERATIVE
              </div>
            </GsapScrollReveal>
          </section>

          {/* Sections */}
          <div className="flex flex-col relative z-10">
            {philosophyData.sections.map((section, idx) => (
              <div key={section.id} className={`grid grid-cols-1 lg:grid-cols-2 border-b-4 lg:border-b-8 border-[var(--color-brutal-black)] ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} ${idx % 2 === 0 ? 'bg-[var(--color-brutal-white)]' : 'bg-[var(--color-brutal-bg)]'}`}>
                
                <GsapScrollReveal className={`p-8 lg:p-16 ${idx % 2 === 0 ? 'lg:border-r-4 lg:border-r-8' : 'lg:border-l-4 lg:border-l-8'} border-b-4 lg:border-b-0 border-[var(--color-brutal-black)] flex flex-col justify-between`}>
                  <div className="max-w-3xl">
                    <h2 className="text-5xl lg:text-7xl font-black text-[var(--color-brutal-red)] uppercase mb-8 leading-[0.8]">{section.heading}</h2>
                    <p className="text-xl lg:text-2xl font-medium text-left text-[var(--color-brutal-black)] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </GsapScrollReveal>
                
                <GsapScrollReveal className="p-0 border-none relative min-h-[50vh] lg:min-h-full bg-[var(--color-brutal-black)]">
                  <GsapParallaxImage src={section.image} alt={section.imageAlt} className="w-full h-full" mode="frame" />
                </GsapScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </>
    </PageTransition>
  );
}
