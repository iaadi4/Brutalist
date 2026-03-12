import { Metadata } from "next";
import GalleryClient from "./client/gallery-client";

export const metadata: Metadata = {
  title: "Global Brutalist Monoliths",
  description:
    "A curated gallery of the world's most iconic Brutalist buildings. Explore concrete giants from Marseille to Caracas.",
  alternates: {
    canonical: "https://brutalist-arch.vercel.app/global-gallery",
  },
};

export default function GlobalGalleryPage() {
  return <GalleryClient />;
}
