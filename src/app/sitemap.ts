import { MetadataRoute } from 'next';
import globalBuildingsData from '@/data/global-buildings.json';
import indiaBuildingsData from '@/data/india-brutalism.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brutalist.vercel.app';
  
  // Static pages with priorities
  const staticRoutes = [
    {
      url: baseUrl,
      changeFrequency: 'weekly' as const,
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/history`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/philosophy`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/global-gallery`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/india`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/media`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: new Date(),
    },
  ];

  // Dynamic building routes from global gallery
  const globalBuildingRoutes = globalBuildingsData.map((building) => ({
    url: `${baseUrl}/global-gallery#${building.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(),
  }));

  // Dynamic building routes from India page
  const indiaBuildingRoutes = indiaBuildingsData.masterworks.map((building) => ({
    url: `${baseUrl}/india#${building.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...globalBuildingRoutes, ...indiaBuildingRoutes];
}
