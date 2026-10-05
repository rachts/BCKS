import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; const routes = ['', '/about', '/scholarships', '/student-programmes', '/competitions', '/functions', '/gallery', '/our-people', '/updates', '/apply', '/donate', '/membership', '/agm', '/ways-to-give', '/privacy', '/refund-policy']; return routes.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
