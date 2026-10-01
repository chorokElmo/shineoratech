import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
    return ['', 'creation-site-web', 'creation-site-ecommerce', 'applications-web'].flatMap(slug => {
        const suffix = slug ? `${slug}/` : '';
        const arabic = `${site.url}/${suffix}`;
        const french = `${site.url}/fr/${suffix}`;
        const alternates = { languages: { ar: arabic, fr: french, 'x-default': arabic } };
        return [arabic, french].map(url => ({ url, alternates, changeFrequency: 'monthly' as const, priority: slug ? 0.8 : 1 }));
    });
}
