import { ArabicHome } from '@/components/site/arabic-home';
import { site } from '@/lib/site';
export default function Home() {
  return <><ArabicHome /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url, telephone: site.phone, email: site.email, description: 'تصميم مواقع ومتاجر وتطبيقات ويب للشركات في السعودية والكويت والخليج.', areaServed: ['السعودية', 'الكويت', 'الإمارات', 'قطر', 'البحرين', 'عُمان'].map(name => ({ '@type': 'Country', name })), logo: `${site.url}/brand/shineoratech-logo.png` }) }} /></>;
}
