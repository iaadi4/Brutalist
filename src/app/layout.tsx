import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GlobalNav } from "@/components/layout/global-nav";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo-schemas";
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
    "An interactive, deep-dive archive into the global history and philosophy of Brutalist Architecture. Explore iconic buildings, origins, ethics, and the movement's impact worldwide.",
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
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app"} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[var(--color-brutal-yellow)] selection:text-[var(--color-brutal-black)] flex flex-col min-h-screen bg-[var(--color-brutal-bg)]`}
      >
        <div className="flex-1 flex flex-col relative w-full max-w-[100vw] overflow-x-hidden">
          <GlobalNav />
          <main className="flex-1 w-full relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
