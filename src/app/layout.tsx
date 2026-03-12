import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GlobalNav } from "@/components/layout/global-nav";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo-schemas";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "BRUTALISM: Ethic, Not Aesthetic | Brutalist Architecture Archive",
    template: "%s | BRUTALISM Archive",
  },
  description:
    "Explore the history and philosophy of Brutalist Architecture. Discover concrete icons, origins, and the movement's global impact.",
  keywords: [
    "brutalism",
    "brutalist architecture",
    "concrete architecture",
    "modernist architecture",
    "Soviet architecture",
    "Le Corbusier",
    "Smithsons",
    "postwar architecture",
    "architectural history",
    "iconic buildings",
    "architectural philosophy",
  ],
  authors: [{ name: "Brutalism Archive" }],
  creator: "Brutalism Archive",
  publisher: "Brutalism Archive",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "BRUTALISM Archive",
    title: "BRUTALISM: Ethic, Not Aesthetic | Global Architecture Archive",
    description:
      "An interactive, deep-dive archive into the global history and philosophy of Brutalist Architecture.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BRUTALISM: Ethic, Not Aesthetic",
        type: "image/png",
      },
      {
        url: `${siteUrl}/og-image-square.png`,
        width: 800,
        height: 800,
        alt: "BRUTALISM Archive",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRUTALISM: Ethic, Not Aesthetic",
    description:
      "An interactive archive into the global history and philosophy of Brutalist Architecture.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@brutalism_archive",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  viewport: {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
},
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BRUTALISM Archive",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          suppressHydrationWarning
        />
        
        {/* Additional SEO Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#000000" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        
        {/* Canonical Tag */}
        <link rel="canonical" href="https://brutalist-arch.vercel.app" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[var(--color-brutal-yellow)] selection:text-[var(--color-brutal-black)] flex flex-col min-h-screen bg-[var(--color-brutal-bg)]`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-brutal-yellow)] focus:text-black focus:p-4 focus:font-black focus:brutal-border focus:brutal-shadow-sm"
        >
          Skip to content
        </a>
        <div className="flex-1 flex flex-col relative w-full max-w-[100vw] overflow-x-hidden">
          <GlobalNav />
          <main id="main-content" className="flex-1 w-full relative">
            {children}
          </main>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
