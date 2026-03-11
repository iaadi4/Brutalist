import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brutalist.vercel.app";

export const metadata: Metadata = {
  title: "Media Archive | Soviet & Brutalist Photography",
  description:
    "Browse our comprehensive archive of Brutalist architecture photography. Soviet concrete monuments, iconic modernist buildings, and rare architectural documentation.",
  keywords: [
    "brutalist photography",
    "architecture archive",
    "Soviet monuments",
    "concrete buildings",
    "modernist photography",
    "architectural documentation",
  ],
  openGraph: {
    title: "Media Archive | Soviet & Brutalist Photography",
    description:
      "Explore our extensive archive of Brutalist architecture photography and Soviet concrete monuments.",
    url: `${siteUrl}/media`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-media.png`,
        width: 1200,
        height: 630,
        alt: "Brutalist Architecture Archive",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/media`,
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
