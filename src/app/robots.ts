import type { MetadataRoute } from 'next';
import { isDemo } from '@/content/demo';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return isDemo
    ? { rules: { userAgent: '*', disallow: '/' } }
    : { rules: { userAgent: '*', allow: '/' }, sitemap: '/sitemap.xml' };
}
