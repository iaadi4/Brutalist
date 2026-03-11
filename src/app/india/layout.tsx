import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app";

export const metadata: Metadata = {
  title: "Indian Brutalism | Subcontinental Monoliths",
  description:
    "Discover the bold Brutalist architecture of India. Explore Le Corbusier's Chandigarh, Doshi's masterworks, and iconic post-independence Indian modernism.",
  keywords: [
    "Indian brutalism",
    "Chandigarh",
    "Le Corbusier India",
    "Doshi architect",
    "Indian modernism",
    "post-independence architecture",
    "concrete buildings India",
  ],
  openGraph: {
    title: "Indian Brutalism | The Subcontinental Monolith",
    description:
      "Explore the bold Brutalist architecture of India, including Le Corbusier's Chandigarh and post-independence modernism.",
    url: `${siteUrl}/india`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-india.png`,
        width: 1200,
        height: 630,
        alt: "Indian Brutalism",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/india`,
  },
};

export default function IndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
