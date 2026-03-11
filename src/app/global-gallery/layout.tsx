import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app";

export const metadata: Metadata = {
  title: "Global Gallery | Worldwide Brutalist Monuments",
  description:
    "Explore the world's most iconic Brutalist buildings. From Soviet monuments to modernist masterpieces, discover architectural monuments that defy conventions.",
  keywords: [
    "brutalist buildings",
    "global architecture",
    "iconic monuments",
    "concrete architecture",
    "architectural gallery",
    "Soviet brutalism",
    "modernist monuments",
  ],
  openGraph: {
    title: "Global Gallery | Worldwide Brutalist Monuments",
    description:
      "Explore the world's most iconic Brutalist buildings and architectural monuments.",
    url: `${siteUrl}/global-gallery`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-global-gallery.png`,
        width: 1200,
        height: 630,
        alt: "Global Brutalist Gallery",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/global-gallery`,
  },
};

export default function GlobalGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
