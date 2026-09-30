import Link from 'next/link';
import type { Metadata } from 'next';
import { Brand } from './landing';
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
export function serviceMetadata(content: ServiceContent): Metadata {
  const title = `${content.title} | ${site.name}`;
  return {
    title, description: content.description,
    alternates: { canonical: `/${content.slug}/` },
    openGraph: { title, description: content.description, url: `/${content.slug}/`, type: 'website', locale: 'fr_MA', siteName: site.name },
    twitter: { card: 'summary', title, description: content.description },
  };
}
export function ServicePage({ content }: { content: ServiceContent }) {
  return <div className="service-page">
    <header className="navbar"><div className="container service-nav"><Link href="/" aria-label="ShineoraTech, accueil"><Brand /></Link><Link href="/#services" className="service-home">Nos services</Link><a href="#devis" className="button small">Demander un devis</a></div></header>
    <main id="main">
      <section className="container service-hero"><nav aria-label="Fil d’Ariane" className="service-breadcrumb"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span>{content.label}</span></nav><p className="eyebrow">{content.eyebrow}</p><h1>{content.heading}<br /><span className="accent">sur mesure au Maroc.</span></h1><p className="service-lead">{content.lead}</p><div className="service-actions"><a href="#devis" className="button">Parlons de votre projet</a><a href="#exemples" className="button secondary">Découvrir les exemples</a></div><p className="service-caption">Un périmètre, un budget et un calendrier définis avec vous.</p></section>
      <section className="section light"><div className="container"><p className="eyebrow">UNE SOLUTION POUR VOTRE ACTIVITÉ</p><h2>{content.introHeading}</h2><p className="service-intro">{content.intro}</p><div className="service-deliverables">{content.deliverables.map(([heading, text], index) => <article key={heading}><span className="eyebrow">0{index + 1}</span><h3>{heading}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section container" id="exemples"><p className="eyebrow">EXEMPLES ET USAGES</p><h2>Des parcours à explorer.</h2><p className="service-intro">{content.examplesNote}</p><div className="service-examples">{content.examples.map(example => <article key={example.name}>{example.image && <img src={example.image} alt={`Aperçu de ${example.name}`} width={1440} height={1000} loading="lazy" decoding="async" />}<h3>{example.name}</h3><p>{example.description}</p>{example.url && <a className="text-link" href={example.url} target="_blank" rel="noopener noreferrer">Explorer le site ↗</a>}</article>)}</div><Link href="/#realisations" className="text-link">Voir le portfolio →</Link></section>
      <section className="section light"><div className="container"><p className="eyebrow">NOTRE MÉTHODE</p><h2>Du besoin à la mise en service.</h2><ol className="service-steps">{content.steps.map(([heading, text]) => <li key={heading}><h3>{heading}</h3><p>{text}</p></li>)}</ol></div></section>
      <section className="section container"><p className="eyebrow">VOS QUESTIONS</p><h2>Préparer votre projet.</h2><div className="service-faq">{content.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="cta-band" id="devis"><div className="container"><p className="eyebrow">PARLONS DE VOTRE PROJET</p><h2>Construisons la prochaine étape.</h2><p className="service-intro">Expliquez-nous votre activité, votre besoin et vos priorités. Nous vous aiderons à définir une solution adaptée.</p><div className="service-actions"><Link href="/#contact" className="button ink-button">Demander un devis</Link><a href={whatsappUrl(`Bonjour ShineoraTech, je souhaite discuter de votre service : ${content.label}.`)} className="button outline-ink" target="_blank" rel="noopener noreferrer">Échanger sur WhatsApp</a></div></div></section>
      <section className="container service-related" aria-label="Autres services"><p className="eyebrow">DÉCOUVRIR AUSSI</p><div className="service-actions">{[['creation-site-web', 'Création de sites web'], ['creation-site-ecommerce', 'Création de boutiques en ligne'], ['applications-web', 'Applications web sur mesure']].filter(([slug]) => slug !== content.slug).map(([slug, label]) => <Link href={`/${slug}/`} className="text-link" key={slug}>{label} →</Link>)}</div></section>
    </main>
    <footer className="footer"><div className="container service-footer"><Link href="/"><Brand /></Link><Link href="/#services">Tous les services</Link><a href={`mailto:${site.email}`}>{site.email}</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: content.title, description: content.description, url: `${site.url}/${content.slug}/`, serviceType: content.label, provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: { '@type': 'Country', name: 'Maroc' } }) }} />
  </div>;
}
