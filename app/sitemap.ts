import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africatechstudio.com';
  const routes = ['', '/services', '/portfolio', '/about', '/contact', '/blog'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
  return routes;
}


