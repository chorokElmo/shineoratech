import { Navbar, Hero, TrustBar } from '@/components/site/landing';
import { Services, Portfolio, WhyUs, Process, BeforeAfter, CTA, Contact, Footer, WhatsAppButton } from '@/components/site/sections';
import { site } from '@/lib/site';
export default function Home() { return <><Navbar /><main id="main"><Hero /><TrustBar /><Services /><Portfolio /><WhyUs /><Process /><BeforeAfter /><CTA /><Contact /></main><Footer /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url, telephone: site.phone, description: 'Agence digitale au Maroc : sites web, applications, design et automatisation.', areaServed: { '@type': 'Country', name: 'Maroc' } }) }}/></>; }
