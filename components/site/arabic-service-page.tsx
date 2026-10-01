import Link from 'next/link';
import type { Metadata } from 'next';
import { LanguageSwitch } from './language-switch';
import { ArabicBrand as Brand } from './arabic-brand';
import { site, whatsappUrl } from '@/lib/site';
import '@/app/creation-site-web/service.css';

export type ServiceContent = {
  slug: string;
  title: string;
  description: string;
  label: string;
  eyebrow: string;
  heading: string;
  lead: string;
  introHeading: string;
  intro: string;
  deliverables: [string, string][];
  steps: [string, string][];
  faqs: [string, string][];
  examples: { name: string; description: string; image?: string; url?: string }[];
  examplesNote: string;
};
export function arabicServiceMetadata(content: ServiceContent): Metadata {
  const title = `${content.title} | ${site.name}`;
  return {
    title, description: content.description,
    alternates: { canonical: `/${content.slug}/`, languages: { ar: `/${content.slug}/`, fr: `/fr/${content.slug}/`, 'x-default': `/${content.slug}/` } },
    openGraph: { title, description: content.description, url: `/${content.slug}/`, type: 'website', locale: 'ar_SA', siteName: site.name },
    twitter: { card: 'summary', title, description: content.description },
  };
}
export function ArabicServicePage({ content }: { content: ServiceContent }) {
  return <div className="service-page">
    <header className="navbar"><div className="container service-nav"><Link href="/" aria-label="ShineoraTech — الرئيسية"><Brand /></Link><LanguageSwitch language="ar" path={content.slug} /><Link href="/#services" className="service-home">خدماتنا</Link><a href="#devis" className="button small">اطلب عرض سعر</a></div></header>
    <main id="main">
      <section className="container service-hero"><nav aria-label="مسار التصفح" className="service-breadcrumb"><Link href="/">الرئيسية</Link><span aria-hidden="true">/</span><span>{content.label}</span></nav><p className="eyebrow">{content.eyebrow}</p><h1>{content.heading}<br /><span className="accent">للشركات في السعودية والكويت والخليج.</span></h1><p className="service-lead">{content.lead}</p><div className="service-actions"><a href="#devis" className="button">لنتحدث عن مشروعك</a><a href="#exemples" className="button secondary">استكشف الأمثلة</a></div><p className="service-caption">نطاق عمل وميزانية وجدول زمني نحددها معك.</p></section>
      <section className="section light"><div className="container"><p className="eyebrow">حل يناسب نشاطك</p><h2>{content.introHeading}</h2><p className="service-intro">{content.intro}</p><div className="service-deliverables">{content.deliverables.map(([heading, text], index) => <article key={heading}><span className="eyebrow">0{index + 1}</span><h3>{heading}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section container" id="exemples"><p className="eyebrow">أمثلة واستخدامات</p><h2>تجارب يمكنك استكشافها.</h2><p className="service-intro">{content.examplesNote}</p><div className="service-examples">{content.examples.map(example => <article key={example.name}>{example.image && <img src={example.image} alt={`معاينة ${example.name}`} width={1440} height={1000} loading="lazy" decoding="async" />}<h3>{example.name}</h3><p>{example.description}</p>{example.url && <a className="text-link" href={example.url} target="_blank" rel="noopener noreferrer">زيارة الموقع ↗</a>}</article>)}</div><Link href="/#realisations" className="text-link">شاهد معرض الأعمال ←</Link></section>
      <section className="section light"><div className="container"><p className="eyebrow">طريقة عملنا</p><h2>من الفكرة إلى الإطلاق.</h2><ol className="service-steps">{content.steps.map(([heading, text]) => <li key={heading}><h3>{heading}</h3><p>{text}</p></li>)}</ol></div></section>
      <section className="section container"><p className="eyebrow">أسئلتك</p><h2>استعد لمشروعك.</h2><div className="service-faq">{content.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="cta-band" id="devis"><div className="container"><p className="eyebrow">لنتحدث عن مشروعك</p><h2>لنخطط لخطوتك القادمة.</h2><p className="service-intro">أخبرنا عن نشاطك واحتياجاتك وأولوياتك. نساعدك على تحديد حل مناسب.</p><div className="service-actions"><Link href="/#contact" className="button ink-button">اطلب عرض سعر</Link><a href={whatsappUrl(`مرحباً ShineoraTech، أود مناقشة خدمة ${content.label}.`)} className="button outline-ink" target="_blank" rel="noopener noreferrer">تواصل على واتساب</a></div></div></section>
      <section className="container service-related" aria-label="خدمات أخرى"><p className="eyebrow">اكتشف أيضاً</p><div className="service-actions">{[['creation-site-web', 'تصميم المواقع الإلكترونية'], ['creation-site-ecommerce', 'تطوير المتاجر الإلكترونية'], ['applications-web', 'تطبيقات ويب مخصصة']].filter(([slug]) => slug !== content.slug).map(([slug, label]) => <Link href={`/${slug}/`} className="text-link" key={slug}>{label} →</Link>)}</div></section>
    </main>
    <footer className="footer"><div className="container service-footer"><Link href="/"><Brand /></Link><Link href="/#services">جميع الخدمات</Link><a href={`mailto:${site.email}`}>{site.email}</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: content.title, description: content.description, url: `${site.url}/${content.slug}/`, serviceType: content.label, provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: ['السعودية', 'الكويت', 'الإمارات', 'قطر', 'البحرين', 'عُمان'].map(name => ({ '@type': 'Country', name })) }) }} />
  </div>;
}
