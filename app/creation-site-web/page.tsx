import type { Metadata } from 'next';
import Link from 'next/link';
import { Brand } from '@/components/site/landing';
import { websites } from '@/content/websites';
import { site, whatsappUrl } from '@/lib/site';
import './service.css';

const title = 'Création de sites web au Maroc | ShineoraTech';
const description = 'Un site vitrine sur mesure pour présenter votre entreprise au Maroc : design responsive, contenus clairs, référencement de base et parcours de contact. Demandez un devis.';
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: '/creation-site-web/' },
  openGraph: { title, description, url: '/creation-site-web/', type: 'website', locale: 'fr_MA', siteName: site.name },
  twitter: { card: 'summary', title, description },
};
const deliverables = [
  ['Un design adapté à votre marque', 'Une direction visuelle cohérente avec votre identité, vos services et les attentes de vos clients.'],
  ['Des pages qui expliquent votre offre', 'Accueil, présentation, services et contact : nous définissons ensemble les pages nécessaires et leur contenu.'],
  ['Une expérience sur tous les écrans', 'Une navigation lisible et des parcours adaptés au mobile, à la tablette et à l’ordinateur.'],
  ['Des bases pour le référencement', 'Titres, descriptions, structure des contenus et sitemap pour aider les moteurs de recherche à comprendre vos pages.'],
  ['Un parcours de contact clair', 'Des appels à l’action et un contact par WhatsApp ou un formulaire, selon le fonctionnement défini pour votre projet.'],
  ['Un lancement accompagné', 'Vérification des pages et des liens, préparation de la mise en ligne et prise en main. Hébergement et maintenance précisés dans le devis.'],
];
const faqs = [
  ['Combien coûte la création d’un site web au Maroc ?', 'Le budget dépend du nombre de pages, du design, des contenus disponibles et des fonctionnalités. Après un échange sur votre besoin, nous préparons un devis avec un périmètre précis.'],
  ['Combien de temps faut-il pour créer un site vitrine ?', 'Le calendrier dépend de la taille du site, de la disponibilité des contenus et des étapes de validation. Nous le définissons avec vous avant de commencer.'],
  ['Que dois-je préparer avant de commencer ?', 'Votre logo si vous en avez un, une présentation de votre activité, vos services, vos coordonnées et des photos dont vous détenez les droits. Nous vous aidons à organiser ces éléments.'],
  ['Mon site sera-t-il visible sur Google ?', 'Nous préparons les bases techniques du référencement. L’indexation et le positionnement dépendent aussi de l’accès public au site, de ses contenus et de la concurrence. Aucune première place n’est garantie.'],
  ['Puis-je demander une refonte de mon site actuel ?', 'Oui. Nous examinons votre site, les contenus à conserver et les parcours à améliorer pour définir une refonte adaptée. Si les adresses changent, les redirections nécessaires sont prévues avec votre hébergement.'],
  ['Le nom de domaine et la maintenance sont-ils inclus ?', 'Ces éléments sont précisés dans votre proposition : domaine, hébergement, mises à jour, support et responsabilités. Vous savez ce qui est compris avant de vous engager.'],
];
const examples = websites.filter(project => ['dbsmorocco.com', 'mae-logistics.com', 'etizanksa.com'].includes(project.domain));

export default function WebsiteCreation() {
  return <div className="service-page">
    <header className="navbar"><div className="container service-nav"><Link href="/" aria-label="ShineoraTech, accueil"><Brand /></Link><Link href="/#services" className="service-home">Nos services</Link><a href="#devis" className="button small">Demander un devis</a></div></header>
    <main id="main">
      <section className="container service-hero">
        <nav aria-label="Fil d’Ariane" className="service-breadcrumb"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span>Création de sites web</span></nav>
        <p className="eyebrow">SITE VITRINE · DESIGN · ACCOMPAGNEMENT</p>
        <h1>Création de sites web<br /><span className="accent">sur mesure au Maroc.</span></h1>
        <p className="service-lead">Présentez votre activité avec un site clair, professionnel et pensé pour faciliter la prise de contact. ShineoraTech vous accompagne du premier échange à la mise en ligne.</p>
        <div className="service-actions"><a href="#devis" className="button">Parlons de votre site</a><a href="#exemples" className="button secondary">Voir des exemples</a></div>
        <p className="service-caption">Pour les entreprises, indépendants et porteurs de projet.</p>
      </section>
      <section className="section light"><div className="container"><p className="eyebrow">VOTRE ACTIVITÉ, BIEN PRÉSENTÉE</p><h2>Un site utile à vos clients.<br />Et à votre entreprise.</h2><p className="service-intro">Un site vitrine permet de comprendre vos services, de découvrir votre entreprise et de vous contacter. Nous organisons l’information autour des questions de vos visiteurs : ce que vous proposez, à qui vous vous adressez et comment travailler avec vous.</p><div className="service-deliverables">{deliverables.map(([heading, text], index) => <article key={heading}><span className="eyebrow">0{index + 1}</span><h3>{heading}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section container" id="exemples"><p className="eyebrow">SÉLECTION DU PORTFOLIO</p><h2>Des exemples à explorer.</h2><p className="service-intro">Découvrez une sélection de sites présentés dans notre portfolio, avec des besoins de présentation et de navigation différents.</p><div className="service-examples">{examples.map(project => <article key={project.domain}><a href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={`Aperçu du site ${project.name}`} width={1440} height={1000} loading="lazy" decoding="async" /></a><h3>{project.name}</h3><p>{project.description}</p><a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Explorer le site ↗</a></article>)}</div><Link href="/#realisations" className="text-link">Découvrir l’ensemble du portfolio →</Link></section>
      <section className="section light"><div className="container"><p className="eyebrow">DU BRIEF AU LANCEMENT</p><h2>Un projet construit avec vous.</h2><ol className="service-steps">{[['Cadrer le besoin', 'Nous définissons vos objectifs, les pages, les fonctionnalités, le budget et le calendrier.'], ['Valider le design', 'Nous préparons la structure et les maquettes, puis intégrons vos retours.'], ['Construire et vérifier', 'Nous développons les pages et vérifions les parcours de navigation et de contact.'], ['Mettre en ligne', 'Nous préparons le lancement et la prise en main, avec le suivi prévu dans votre offre.']].map(([heading, text]) => <li key={heading}><h3>{heading}</h3><p>{text}</p></li>)}</ol></div></section>
      <section className="section container"><p className="eyebrow">VOS QUESTIONS</p><h2>Avant de créer votre site.</h2><div className="service-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="cta-band" id="devis"><div className="container"><p className="eyebrow">PARLONS DE VOTRE PROJET</p><h2>Quel site avez-vous en tête ?</h2><p className="service-intro">Présentez-nous votre activité, les pages souhaitées et vos priorités. Nous vous aiderons à définir la prochaine étape.</p><div className="service-actions"><Link href="/#contact" className="button ink-button">Demander un devis</Link><a href={whatsappUrl('Bonjour ShineoraTech, je souhaite discuter de la création d’un site web pour mon activité.')} className="button outline-ink" target="_blank" rel="noopener noreferrer">Échanger sur WhatsApp</a></div></div></section>
      <section className="container service-related" aria-label="Autres services"><p className="eyebrow">DÉCOUVRIR AUSSI</p><div className="service-actions"><Link className="text-link" href="/creation-site-ecommerce/">Création de boutiques en ligne →</Link><Link className="text-link" href="/applications-web/">Applications web sur mesure →</Link></div></section>
    </main>
    <footer className="footer"><div className="container service-footer"><Link href="/"><Brand /></Link><Link href="/#services">Tous les services</Link><a href={`mailto:${site.email}`}>{site.email}</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Création de sites web au Maroc', description, url: `${site.url}/creation-site-web/`, serviceType: 'Création de sites web', provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: { '@type': 'Country', name: 'Maroc' } }) }} />
  </div>;
}
