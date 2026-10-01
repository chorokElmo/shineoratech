import { ServicePage, serviceMetadata, type ServiceContent } from '@/components/site/service-page';

const content: ServiceContent = {
  slug: 'applications-web',
  title: 'Développement d’applications web au Maroc',
  description: 'Des applications web sur mesure au Maroc : outils métier, espaces clients, tableaux de bord et automatisation. Définissez votre projet avec ShineoraTech.',
  label: 'Applications web sur mesure',
  eyebrow: 'OUTILS MÉTIER · ESPACES CLIENTS · TABLEAUX DE BORD',
  heading: 'Développement d’applications web',
  lead: 'Transformez vos processus en un outil adapté à votre équipe. ShineoraTech conçoit des applications web pour centraliser l’information, faciliter les échanges et réduire les tâches répétitives.',
  introHeading: 'Un outil construit autour de vos usages.',
  intro: 'Quand les fichiers et les échanges dispersés compliquent le travail, une application métier peut réunir les informations dans un même espace. Nous commençons par comprendre vos utilisateurs, leurs tâches et leurs contraintes pour sélectionner les fonctionnalités utiles.',
  deliverables: [
    ['Un périmètre fonctionnel clair', 'Utilisateurs, tâches, règles métier et priorités sont documentés avant le développement. Une première version peut se concentrer sur les usages essentiels.'],
    ['Des interfaces pour votre équipe', 'Écrans, formulaires et navigation sont conçus autour des actions quotidiennes, puis validés avec vous.'],
    ['Des accès selon les rôles', 'Authentification et autorisations sont définies selon les responsabilités des utilisateurs et la sensibilité des informations.'],
    ['Des données organisées', 'Modèle de données, recherche, filtres et exports sont choisis selon les informations à consulter et à mettre à jour.'],
    ['Des connexions à vos outils', 'Les intégrations avec vos services existants sont étudiées selon leurs interfaces disponibles, leurs conditions et vos accès.'],
    ['Un déploiement accompagné', 'Vérification des parcours clés, préparation de l’environnement, prise en main et modalités de suivi définies dans la proposition.'],
  ],
  examplesNote: 'Ces concepts illustratifs sont déjà présentés sur notre homepage. Ils montrent des pistes d’interface et de fonctionnalités, sans résultats clients ni données réelles.',
  examples: [
    { name: 'SmartRecruit AI', description: 'Concept de recrutement : analyser les compétences d’un CV et explorer les correspondances avec des offres, en laissant la décision aux personnes.' },
    { name: 'SplitEasy', description: 'Concept de dépenses partagées : enregistrer les dépenses d’un groupe, suivre les soldes et faciliter les échanges.' },
    { name: 'Finance Management', description: 'Concept de gestion : réunir le suivi des paiements et le reporting dans un espace de travail structuré.' },
  ],
  steps: [
    ['Comprendre le métier', 'Nous explorons vos processus, les utilisateurs concernés, les données et les points de friction.'],
    ['Prototyper la solution', 'Nous organisons les fonctionnalités et préparons les parcours à valider avant de développer.'],
    ['Développer par étapes', 'Vous consultez des versions testables pour vérifier les usages et préciser les retours.'],
    ['Déployer et accompagner', 'Nous préparons le lancement, les accès et la prise en main, avec les conditions de suivi convenues.'],
  ],
  faqs: [
    ['Quelle différence entre un site web et une application web ?', 'Un site présente principalement des informations. Une application permet d’effectuer des tâches : gérer des dossiers, suivre des opérations ou travailler dans un espace personnel. Certains projets combinent les deux.'],
    ['Peut-on commencer par une première version limitée ?', 'Oui. Nous pouvons définir une première version centrée sur les parcours prioritaires, puis planifier des évolutions selon vos retours et votre budget.'],
    ['Quel budget et quel délai prévoir ?', 'Ils dépendent des règles métier, du nombre de rôles, des écrans et des intégrations. Le cadrage permet de préparer une proposition avec un périmètre et un calendrier définis.'],
    ['Pouvez-vous connecter l’application à nos outils ?', 'Nous étudions chaque connexion selon la documentation des outils, les accès disponibles et les contraintes de votre organisation. La faisabilité et les coûts sont précisés avant l’intégration.'],
    ['Comment sont traités les accès et les données ?', 'Nous définissons les autorisations et les besoins de protection dès le cadrage. Les modalités d’hébergement, de sauvegarde et de conservation sont adaptées au projet et précisées avec vous.'],
    ['Comment faire évoluer l’application après le lancement ?', 'Nous pouvons prévoir un accompagnement pour les corrections et les nouvelles fonctionnalités. Le périmètre, les responsabilités et les modalités de support sont définis dans votre offre.'],
  ],
};
export const metadata = serviceMetadata(content);
export default function ApplicationsPage() { return <ServicePage content={content} />; }
