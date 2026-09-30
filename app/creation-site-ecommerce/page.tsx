import { ServicePage, serviceMetadata, type ServiceContent } from '@/components/site/service-page';
import { websites } from '@/content/websites';

const content: ServiceContent = {
  slug: 'creation-site-ecommerce',
  title: 'Création de sites e-commerce au Maroc',
  description: 'Créez une boutique en ligne adaptée à votre activité au Maroc : catalogue, fiches produits, panier, commande et gestion. Un projet cadré avec ShineoraTech.',
  label: 'Création de sites e-commerce',
  eyebrow: 'BOUTIQUE EN LIGNE · PRODUITS · COMMANDE',
  heading: 'Création de sites e-commerce',
  lead: 'Présentez vos produits et accompagnez vos clients jusqu’à la commande. Nous concevons une boutique en ligne adaptée à votre catalogue, à votre organisation et aux habitudes de vos acheteurs.',
  introHeading: 'Une boutique pensée pour acheter simplement.',
  intro: 'Vendre en ligne demande plus qu’un catalogue. Les visiteurs doivent trouver le bon produit, comprendre son prix et connaître les conditions de livraison. Nous définissons avec vous un parcours cohérent, de la première visite au suivi de commande.',
  deliverables: [
    ['Un catalogue organisé', 'Catégories, variantes, recherche et filtres sont définis selon la taille de votre catalogue et les besoins de vos clients.'],
    ['Des fiches produits utiles', 'Photos, descriptions, prix, disponibilité et informations de livraison pour permettre un choix éclairé.'],
    ['Un panier et une commande clairs', 'Un parcours adapté au mobile, avec les informations nécessaires pour finaliser la commande et comprendre les frais.'],
    ['Des paiements adaptés', 'Paiement en ligne, à la livraison ou autre mode : les options sont choisies selon votre activité et les conditions des prestataires.'],
    ['Une gestion au quotidien', 'Produits, stocks et commandes : nous définissons les outils et les accès dont votre équipe a besoin.'],
    ['Des bases SEO pour les produits', 'Structure des catégories, adresses des pages, titres et descriptions. Les données produit sont prévues selon le catalogue et la solution retenue.'],
  ],
  examples: websites.filter(project => project.domain === 'besmarto.com'),
  examplesNote: 'Besmarto figure dans notre portfolio : un exemple de boutique consacrée aux technologies et à la maison connectée. Les fonctionnalités de votre propre boutique seront définies selon votre besoin.',
  steps: [
    ['Définir la vente', 'Catalogue, zones de livraison, modes de paiement, gestion des stocks et besoins de votre équipe.'],
    ['Dessiner les parcours', 'Structure des catégories, fiches produits et étapes de commande, avec validation des maquettes.'],
    ['Configurer et vérifier', 'Intégration des contenus et vérification du panier, des commandes et des intégrations retenues.'],
    ['Lancer la boutique', 'Préparation de la mise en ligne et prise en main des outils de gestion par votre équipe.'],
  ],
  faqs: [
    ['Quel budget prévoir pour une boutique en ligne ?', 'Le coût dépend du catalogue, des variantes, des intégrations et de la gestion souhaitée. Nous établissons un devis après avoir précisé ces éléments. Les frais récurrents sont identifiés dans la proposition.'],
    ['Quels moyens de paiement peut-on proposer au Maroc ?', 'Les possibilités dépendent de votre entreprise et des prestataires disponibles pour votre activité. Nous examinons les options avec vous ; une intégration de paiement nécessite notamment un compte et une validation par le prestataire.'],
    ['Peut-on proposer le paiement à la livraison ?', 'Oui, si ce mode correspond à votre organisation. Il faut définir les zones desservies, les frais, la confirmation des commandes et les modalités avec votre transporteur.'],
    ['Comment gérer les produits et les stocks ?', 'Nous choisissons avec vous une interface de gestion adaptée au catalogue. Une connexion à un outil existant peut être étudiée et chiffrée séparément.'],
    ['Que faut-il préparer pour lancer la boutique ?', 'Un catalogue à jour, des photos autorisées, les prix, les variantes, les règles de livraison et les conditions de vente applicables à votre activité. Nous organisons ces informations avec vous.'],
    ['La maintenance est-elle comprise ?', 'Le périmètre de maintenance, les mises à jour, l’hébergement et le support sont précisés dans le devis. Nous définissons également qui prend en charge les produits et les commandes après le lancement.'],
  ],
};
export const metadata = serviceMetadata(content);
export default function EcommercePage() { return <ServicePage content={content} />; }
