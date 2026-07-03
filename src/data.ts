import { ServiceItem, ProjectItem, NewsItem, ResourceItem, FAQItem, TestimonialItem } from './types';

const servicesBrainstorming = "https://images.unsplash.com/photo-1531535934202-f0d45309b403?auto=format&fit=crop&w=800&q=65";
const cardDigitalMarketing = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=65";
const aboutCoaching = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=65";
const cardPitchInvestor = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=65";
const cardSalesStrategy = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=65";
const cardFinancialOffice = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=65";
const academyTraining = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=65";
const clientHappyContract = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=65";
const coachingAfriqueStrategie = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=65";

export const servicesData: ServiceItem[] = [
  // Consultation / Conseil
  {
    id: 'diag-ent',
    name: 'Diagnostic d’entreprise',
    price: 10000,
    category: 'consultation',
    description: 'Analyse approfondie de la situation actuelle de votre entreprise pour identifier les forces, faiblesses et opportunités de croissance.'
  },
  {
    id: 'conseil-gest',
    name: 'Conseils en gestion',
    price: 15000,
    category: 'consultation',
    description: 'Accompagnement stratégique pour optimiser vos opérations quotidiennes, structurer vos équipes et améliorer vos performances financières.'
  },
  
  // Création d'Entreprise
  {
    id: 'aide-creat',
    name: 'Aide à la création d’entreprise',
    price: 25000,
    category: 'creation',
    description: 'Assistance complète pour le choix du statut juridique, la rédaction des statuts, et l’ensemble des démarches d’immatriculation.'
  },
  {
    id: 'business-plan',
    name: 'Élaboration de Business Plan',
    price: 35000,
    category: 'creation',
    description: 'Rédaction d’un plan d’affaires professionnel et solide pour convaincre vos partenaires commerciaux et vos futurs financeurs.'
  },

  // Nos Formations
  {
    id: 'form-gest',
    name: 'Formation : Gestion d’entreprise',
    price: 40000,
    category: 'formation',
    description: 'Maîtrisez les fondamentaux du management, de la planification stratégique et du suivi de performance.'
  },
  {
    id: 'form-mkt',
    name: 'Formation : Marketing & Vente',
    price: 30000,
    category: 'formation',
    description: 'Apprenez à définir votre cible, concevoir des offres irrésistibles, et appliquer des techniques de vente efficaces.'
  },
  {
    id: 'form-info',
    name: 'Formation : Informatique de base',
    price: 30000,
    category: 'formation',
    description: 'Prise en main des outils informatiques essentiels : Windows, internet, messagerie professionnelle et outils collaboratifs.'
  },
  {
    id: 'form-secr',
    name: 'Formation : Secrétariat Bureautique',
    price: 50000,
    category: 'formation',
    description: 'Apprentissage approfondi des logiciels de traitement de texte (Word), tableurs (Excel) et présentations (PowerPoint).'
  },

  // Services Administratifs
  {
    id: 'adm-cv',
    name: 'Création de CV Professionnel',
    price: 2000,
    category: 'administratif',
    description: 'Mise en valeur de vos compétences et de votre parcours à travers un CV au design moderne et percutant.'
  },
  {
    id: 'adm-lm',
    name: 'Lettre de Motivation',
    price: 1000,
    category: 'administratif',
    description: 'Rédaction d’une lettre de motivation personnalisée et adaptée au poste ou au secteur d’activité ciblé.'
  },
  {
    id: 'adm-fd',
    name: 'Modèle Facture / Devis',
    price: 1500,
    category: 'administratif',
    description: 'Conception de modèles de facturation et de devis clairs, professionnels et conformes aux exigences de base.'
  },
  {
    id: 'adm-saisie',
    name: 'Saisie de Documents',
    price: 500,
    unit: '/ page',
    category: 'administratif',
    description: 'Saisie informatique rapide et soignée de vos manuscrits, rapports ou courriers divers.'
  },

  // Services Digitaux
  {
    id: 'dig-web',
    name: 'Création de site web',
    price: 150000,
    category: 'digital',
    description: 'Création de votre site vitrine professionnel, optimisé pour les mobiles et le référencement naturel.'
  },
  {
    id: 'dig-mkt',
    name: 'Stratégie Marketing Digital',
    price: 45000,
    category: 'digital',
    description: 'Mise en place d’une présence efficace sur les réseaux sociaux (Facebook, LinkedIn, Instagram) et création de campagnes publicitaires.'
  },
  {
    id: 'dig-design',
    name: 'Conception Graphique (Logo, Affiche)',
    price: 20000,
    category: 'digital',
    description: 'Création d’une identité visuelle unique comprenant votre logo, vos chartes graphiques et vos supports de communication.'
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Agro-Innov Bénin',
    entrepreneur: 'Koffi Ségbé',
    sector: 'Agro-alimentaire & Transformation',
    description: 'Accompagnement de l’idée au business plan et recherche de financement pour une unité moderne de séchage et conditionnement d’ananas à Allada.',
    imageUrl: servicesBrainstorming,
    date: 'Mai 2026'
  },
  {
    id: 'proj-2',
    title: 'Danxomé Fashion Hub',
    entrepreneur: 'Abla Djigbode',
    sector: 'Mode & Artisanat d’Art Béninois',
    description: 'Création d’entreprise, accompagnement administratif et mise en place d’une stratégie marketing digital pour lancer une marque de vêtements en pagne tissé (Kanvo).',
    imageUrl: cardDigitalMarketing,
    date: 'Avril 2026'
  },
  {
    id: 'proj-3',
    title: 'Edu-Tech Bénin',
    entrepreneur: 'Saliou Mensah',
    sector: 'Éducation & Technologies de l’Information',
    description: 'Aide à la structuration juridique et rédaction d’un plan d’affaires solide ayant permis d’obtenir un financement d’amorçage auprès du programme national d’appui.',
    imageUrl: aboutCoaching,
    date: 'Juin 2026'
  }
];

export const newsData: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Subventions de l’APIEx Bénin : Financements pour les startups innovantes',
    content: 'L’Agence de Promotion des Investissements et des Exportations (APIEx) lance un guichet spécial d’aide financière allant jusqu’à 5 000 000 FCFA pour soutenir les projets d’entreprises vertes et d’agro-business au Bénin. Notre centre d’appui vous accompagne dans la préparation du pitch et de l’étude de faisabilité.',
    category: 'financement',
    date: '28 Juin 2026',
    readTime: '3 min',
    imageUrl: cardPitchInvestor
  },
  {
    id: 'news-2',
    title: '5 étapes pour réaliser son étude de marché au Bénin en 2026',
    content: 'Comprendre la demande à Cotonou, Porto-Novo et Parakou est indispensable avant d’investir. L’étude de marché permet d’identifier la concurrence directe, de tester la viabilité commerciale de vos produits et d’ajuster votre tarification de manière réaliste et compétitive.',
    category: 'conseils',
    date: '25 Juin 2026',
    readTime: '5 min',
    imageUrl: cardSalesStrategy
  },
  {
    id: 'news-3',
    title: 'Prochaine session de formation : Comptabilité Pratique et Fiscalité Béninoise',
    content: 'Inscrivez-vous pour notre session intensive de 3 jours à Cotonou. Maîtrisez le système fiscal béninois, la déclaration du TPS (Taxe Professionnelle Synthétique), la gestion journalière de caisse et l’utilisation des factures normalisées obligatoires de la DGI.',
    category: 'programme',
    date: '20 Juin 2026',
    readTime: '4 min',
    imageUrl: cardFinancialOffice
  },
  {
    id: 'news-4',
    title: 'Comment sécuriser la trésorerie de sa PME contre l’inflation',
    content: 'La gestion prévisionnelle de trésorerie est le cœur de la survie de toute PME au Bénin. Découvrez nos conseils pour optimiser vos délais de recouvrement clients, structurer un fonds de roulement solide et négocier efficacement vos conditions d’achat fournisseurs.',
    category: 'astuces',
    date: '14 Juin 2026',
    readTime: '6 min',
    imageUrl: academyTraining
  }
];

export const resourcesData: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Guide complet de la Création d’Entreprise au Bénin',
    description: 'Un manuel de 35 pages récapitulant les statuts juridiques d’Afrique de l’Ouest (OHADA), les formalités auprès du guichet unique de l’APIEx, et le choix du régime fiscal.',
    fileSize: '4.2 Mo',
    downloadsCount: 428,
    category: 'guide',
    downloadUrl: '#'
  },
  {
    id: 'res-2',
    title: 'Modèle Excel de Plan de Trésorerie & Seuil de Rentabilité',
    description: 'Une trame financière prête à l’emploi pour estimer vos dépenses, calculer vos marges et formuler un budget prévisionnel solide pour vos partenaires financiers.',
    fileSize: '1.8 Mo',
    downloadsCount: 589,
    category: 'modele',
    downloadUrl: '#'
  },
  {
    id: 'res-3',
    title: 'Checklist des Pièces pour l’Immatriculation APIEx',
    description: 'La liste exacte des pièces d’identité, formulaires, photos et déclarations sur l’honneur exigés pour obtenir vos statuts, registre de commerce, IFU et carte professionnelle.',
    fileSize: '750 Ko',
    downloadsCount: 312,
    category: 'checklist',
    downloadUrl: '#'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'De quels documents ai-je besoin pour créer mon entreprise au Bénin ?',
    answer: 'Pour immatriculer une entreprise individuelle (Établissement) ou une SARL au Bénin, les pièces requises à l’APIEx comprennent : une copie d’une pièce d’identité valide (passeport, carte d’identité biométrique nationale ou CIP), deux photos d’identité, un justificatif de domicile ou plan de localisation du siège social, et un casier judiciaire béninois (ou déclaration sur l’honneur de non-condamnation).',
    category: 'creation'
  },
  {
    id: 'faq-2',
    question: 'Combien coûte l’accompagnement au Centre d’Appui ?',
    answer: 'Nos tarifs d’accompagnement sont transparents et très compétitifs. L’aide à la rédaction de statuts et démarches de création est à partir de 25 000 FCFA. L’élaboration complète de Business Plan solide démarre à 35 000 FCFA. Utilisez notre calculateur de devis intégré pour configurer votre formule sur mesure.',
    category: 'tarifs'
  },
  {
    id: 'faq-3',
    question: 'Qu’est-ce que l’APIEx et quel est son rôle au Bénin ?',
    answer: 'L’Agence de Promotion des Investissements et des Exportations (APIEx) est le guichet unique de création d’entreprise au Bénin. Elle simplifie, accélère et centralise toutes les formalités d’immatriculation, de déclaration et de délivrance d’actes d’entreprises.',
    category: 'creation'
  },
  {
    id: 'faq-4',
    question: 'Proposez-vous des financements directs pour les porteurs de projets ?',
    answer: 'Le Centre d’Appui aux Entrepreneurs ne fournit pas de subventions ou prêts directs. Notre mission est d’élaborer des dossiers d’excellence (Business Plan de haut niveau, études de faisabilité sérieuses) et de préparer minutieusement les promoteurs à défendre leur projet devant les banques, institutions de microfinance (comme l’ALFAD, le PADME), ou les programmes d’appui gouvernementaux béninois.',
    category: 'accompagnement'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Bernadette Sossa',
    role: 'Fondatrice',
    company: 'Nature & Beauté Bénin Sarl',
    text: 'Grâce au Centre d’Appui aux Entrepreneurs de Cotonou, j’ai pu formaliser mon activité cosmétique en toute sérénité. Leur maîtrise des procédures de l’APIEx et de la DGI m’a fait gagner un temps précieux et permis de décrocher mes premiers contrats de distribution.',
    rating: 5,
    avatarUrl: clientHappyContract
  },
  {
    id: 'test-2',
    name: 'Samuel Dossou',
    role: 'Directeur Général',
    company: 'Dossou Logistique Parakou',
    text: 'La formation intensive en gestion d’entreprise et comptabilité pratique que j’ai suivie a radicalement changé ma façon de piloter ma trésorerie. C’est concret, adapté aux realities du Bénin et immédiatement applicable. Je recommande vivement.',
    rating: 5,
    avatarUrl: coachingAfriqueStrategie
  },
  {
    id: 'test-3',
    name: 'Patrice Gbaguidi',
    role: 'Co-fondateur',
    company: 'Cotonou Tech Services',
    text: 'Le diagnostic d’entreprise réalisé par leurs consultants d’affaires a été un électrochoc pour notre startup. Nous avons restructuré nos offres commerciales et relancé notre chiffre d’affaires en hausse de 40% en seulement 4 mois d’activité.',
    rating: 5,
    avatarUrl: aboutCoaching
  }
];
