const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brutalist.vercel.app';
const SITE_NAME = 'BRUTALISM: Ethic, Not Aesthetic';
const SITE_DESCRIPTION = 'An interactive, deep-dive archive into the global history of Brutalist Architecture. Explore the ethics, origins, and iconic buildings of Brutalism.';

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://en.wikipedia.org/wiki/Brutalist_architecture',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Internet',
    },
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

export const generateArticleSchema = (
  title: string,
  description: string,
  slug: string,
  publishedDate?: string,
  author?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `${SITE_URL}${slug}`,
    ...(publishedDate && { datePublished: publishedDate }),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author,
      },
    }),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
    },
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateBuildingSchema = (
  name: string,
  location: string,
  year: number,
  architect?: string,
  description?: string,
  image?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${SITE_URL}/buildings/${name.toLowerCase().replace(/\s+/g, '-')}`,
    name: name,
    description: description || `${name} in ${location}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location,
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
    ...(architect && {
      creator: {
        '@type': 'Person',
        name: architect,
      },
    }),
    ...(year && {
      dateCreated: `${year}`,
    }),
  };
};

export const generateCollectionSchema = (
  title: string,
  description: string,
  slug: string,
  items: any[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Collection',
    name: title,
    description: description,
    url: `${SITE_URL}${slug}`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: item.name,
        url: item.url,
      },
    })),
  };
};

export const generateLocalBusinessSchema = (businessName: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  };
};

export const generateVideoSchema = (
  title: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    duration: duration,
  };
};

// Utility to embed schemas in script tags
export const generateSchemaScript = (schema: any) => {
  return JSON.stringify(schema);
};
