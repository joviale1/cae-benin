import React, { useState } from 'react';
import { 
  Compass, 
  FileText, 
  Coins, 
  Scale, 
  GraduationCap, 
  Activity, 
  ShieldCheck, 
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Award
} from 'lucide-react';

export default function AccompagnementProjet() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'Analyse & Diagnostic',
      subtitle: 'La fondation de votre succès',
      description: 'Nous analysons en profondeur la viabilité de votre idée d’entreprise, votre profil entrepreneurial, et vos besoins en ressources. Cette étape permet d’identifier les forces, les opportunités du marché béninois et d’anticiper les verrous techniques ou financiers.',
      icon: Compass,
      color: 'from-blue-500 to-[#0a3b8b]',
      lightColor: 'bg-blue-50 text-[#0a3b8b]',
      details: [
        'Évaluation d’opportunité et cohérence projet/porteur',
        'Étude préliminaire des contraintes du secteur au Bénin',
        'Élaboration d’une feuille de route personnalisée de A à Z'
      ]
    },
    {
      title: 'Élaboration du Plan d’Affaires',
      subtitle: 'La modélisation de votre vision',
      description: 'Nos experts rédigent votre Business Plan premium : étude de marché approfondie (Cotonou, Porto-Novo, Parakou, etc.), stratégie marketing, et projections financières automatisées sur 3 à 5 ans. Un dossier d’excellence, convaincant et solide.',
      icon: FileText,
      color: 'from-amber-400 to-[#ff7b00]',
      lightColor: 'bg-orange-50 text-[#ff7b00]',
      details: [
        'Étude de marché locale et analyse de la concurrence',
        'Modélisation financière complète (trésorerie, rentabilité, BFR)',
        'Pitch deck professionnel pour convaincre vos partenaires'
      ]
    },
    {
      title: 'Ingénierie & Financement',
      subtitle: 'La mobilisation des ressources',
      description: 'Bien que nous ne financions pas directement, nous optimisons vos dossiers pour les rendre éligibles aux subventions étatiques, aux fonds d’appui de l’APIEx, et à notre réseau d’institutions financières béninoises et de microfinance (PADME, ALFAD).',
      icon: Coins,
      color: 'from-emerald-500 to-green-700',
      lightColor: 'bg-emerald-50 text-emerald-700',
      details: [
        'Intermédiation bancaire et préparation aux comités de crédit',
        'Veille et accompagnement pour l’accès aux bourses vertes/startups',
        'Négociation des meilleures conditions d’accompagnement de crédit'
      ]
    },
    {
      title: 'Formalisation Juridique (APIEx)',
      subtitle: 'La légitimité de votre structure',
      description: 'Nous gérons toutes les démarches administratives de création d’entreprise (Sarl, Établissement, SAS). Grâce à notre maîtrise des rouages de l’APIEx Bénin, nous obtenons vos statuts, votre RCCM, votre numéro IFU et votre carte d’importateur en 48h.',
      icon: Scale,
      color: 'from-indigo-500 to-indigo-800',
      lightColor: 'bg-indigo-50 text-indigo-800',
      details: [
        'Rédaction de statuts sur mesure conformes aux actes OHADA',
        'Immatriculation complète au guichet unique de l’APIEx',
        'Conseils d’optimisation fiscale pour le choix de votre régime'
      ]
    },
    {
      title: 'Formation & Renforcement',
      subtitle: 'Le pilotage de la croissance',
      description: 'Un entrepreneur bien formé est la meilleure garantie de survie d’un projet. Nous vous formons aux meilleures pratiques de gestion : comptabilité de caisse simplifiée, utilisation des factures normalisées de la DGI, et techniques de vente digitale.',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-800',
      lightColor: 'bg-purple-50 text-purple-800',
      details: [
        'Ateliers pratiques de facturation légale béninoise',
        'Maîtrise de la gestion financière d’exploitation',
        'Formation au marketing digital et acquisition clients locaux'
      ]
    },
    {
      title: 'Suivi & Mentorat post-création',
      subtitle: 'La pérennité de votre entreprise',
      description: 'Nous restons à vos côtés après le lancement. Grâce à des bilans de santé périodiques, des audits de trésorerie et un mentorat stratégique mensuel, nous vous aidons à ajuster le tir face aux réalités et à capter les opportunités du marché.',
      icon: Activity,
      color: 'from-rose-500 to-rose-800',
      lightColor: 'bg-rose-50 text-rose-800',
      details: [
        'Tableau de bord mensuel de suivi des performances',
        'Conseils fiscaux et comptables de conformité permanente',
        'Réseautage d’affaires exclusif avec d’autres promoteurs du Centre'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0a3b8b]/[0.02] border-y border-slate-100 relative overflow-hidden" id="accompagnement">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ff7b00]/10 text-[#ff7b00] text-[10px] font-black uppercase tracking-wider">
              🚀 Méthodologie d’Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Comment nous accompagnons votre projet d'entreprise
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              L’accompagnement de projet est un processus rigoureux, structuré et personnalisé. Il transforme une idée brute en une entreprise légale, rentable et prête à croître. Notre objectif ultime est de <strong className="text-[#0a3b8b]">réduire de 80% les risques d’échec</strong> inhérents aux premières années de lancement et de maximiser votre retour sur investissement.
            </p>
          </div>
          
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0a3b8b]/10 flex items-center justify-center text-[#0a3b8b] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-800 uppercase tracking-wide">La Charte du Centre</p>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-0.5">
                Chaque accompagnement garantit une confidentialité absolue, une réactivité sous 24 heures et un encadrement adapté aux réalités fiscales et commerciales du Bénin.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Split Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: List of Steps */}
          <div className="lg:col-span-6 space-y-3">
            <div className="border-b border-slate-200 pb-3 mb-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Le Parcours en 6 Étapes Clés</h3>
            </div>
            
            <div className="space-y-3">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeStep === idx;
                
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isSelected 
                        ? 'bg-white border-blue-200 shadow-lg translate-x-2' 
                        : 'bg-transparent border-slate-200/60 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${step.lightColor} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-slate-400">Étape 0{idx + 1}</span>
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                          )}
                        </div>
                        <h4 className={`text-xs sm:text-sm font-black ${isSelected ? 'text-[#0a3b8b]' : 'text-slate-800'}`}>
                          {step.title}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="text-xs font-bold text-slate-400 pr-2">
                      {isSelected ? (
                        <span className="text-[10px] font-black uppercase text-[#ff7b00] bg-orange-50 px-2 py-0.5 rounded">Actif</span>
                      ) : (
                        <span>En savoir +</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Detail Panel & Photo */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Active Step Details Panel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl relative overflow-hidden">
              {/* Subtle visual gradient header bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${steps[activeStep].color}`}></div>
              
              <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <span className="text-[10px] font-black text-[#ff7b00] uppercase tracking-wider block">
                    Étape Clé 0{activeStep + 1} du programme
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-400 text-xs font-bold italic">{steps[activeStep].subtitle}</p>
                </div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${steps[activeStep].lightColor}`}>
                  {React.createElement(steps[activeStep].icon, { className: "w-6 h-6" })}
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                {steps[activeStep].description}
              </p>

              {/* Action Bullet Lists for Current Step */}
              <div className="space-y-3 mb-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Ce que nous réalisons concrètement :
                </p>
                <ul className="space-y-2">
                  {steps[activeStep].details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instant Call to Action Link inside the step card */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                  <Award className="w-4 h-4 text-amber-500" /> Taux de réussite maximisé
                </div>
                <a 
                  href="#contact" 
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[10px] rounded-lg uppercase tracking-wider transition-colors"
                >
                  Démarrer cette étape
                </a>
              </div>
            </div>

            {/* Realistic Coaching Photo with overlay text */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video border border-slate-100 group">
              <img 
                src="/images/coaching_afrique_strategie_1782836353896.webp" 
                alt="Coaching stratégique au Bénin - Centre d'Appui aux Entrepreneurs" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                <span className="bg-[#ff7b00] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md w-fit mb-1.5">
                  Cabinet Cotonou 🇧🇯
                </span>
                <p className="text-white text-xs sm:text-sm font-black leading-snug">
                  Un accompagnement de proximité par des conseillers qualifiés et d’expérience.
                </p>
                <p className="text-slate-300 text-[10px] font-medium mt-1">
                  Coaching individuel personnalisé pour transformer chaque obstacle en opportunité commerciale solide.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Global Impact Grid at the bottom of the section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xl">
          
          <div className="space-y-2 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-6">
            <div className="text-3xl font-black text-[#0a3b8b]" id="accompagnement-stat-1">80%</div>
            <p className="text-xs font-black text-slate-800 uppercase tracking-wide">De réduction du taux d’échec</p>
            <p className="text-[11px] text-slate-500 font-medium">
              Notre protocole d’accompagnement diminue significativement les erreurs stratégiques et de trésorerie commises au démarrage.
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:px-6">
            <div className="text-3xl font-black text-[#ff7b00]" id="accompagnement-stat-2">24h à 48h</div>
            <p className="text-xs font-black text-slate-800 uppercase tracking-wide">D’immatriculation APIEx</p>
            <p className="text-[11px] text-slate-500 font-medium">
              Un gain de temps exceptionnel grâce à nos process intégrés et notre maîtrise parfaite des services administratifs de Cotonou.
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left md:pl-6">
            <div className="text-3xl font-black text-emerald-600" id="accompagnement-stat-3">+500 PME</div>
            <p className="text-xs font-black text-slate-800 uppercase tracking-wide">Accompagnées avec succès</p>
            <p className="text-[11px] text-slate-500 font-medium">
              Du secteur de l’agro-business, de la tech locale à l’artisanat d’art, nos références illustrent la pertinence de nos méthodes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
