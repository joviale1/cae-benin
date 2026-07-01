import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Coins, 
  Megaphone, 
  Clock, 
  Lightbulb, 
  Award, 
  Building, 
  Cpu, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  Phone,
  Briefcase,
  X,
  Send
} from 'lucide-react';

import cardSalesStrategy from '@/src/assets/images/card_sales_strategy_1782908156281.webp';
import cardFinancialOffice from '@/src/assets/images/card_financial_office_1782908169678.webp';
import cardDigitalMarketing from '@/src/assets/images/card_digital_marketing_1782908183274.webp';
import academyTraining from '@/src/assets/images/academy_training_benin_1782901047713.webp';
import cardBusinessCreation from '@/src/assets/images/card_business_creation_1782908196304.webp';
import coachingAfriqueStrategie from '@/src/assets/images/coaching_afrique_strategie_1782836353896.webp';
import cardPitchInvestor from '@/src/assets/images/card_pitch_investor_1782908208185.webp';

interface DomainItem {
  id: string;
  title: string;
  shortDesc: string;
  points: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  lightBg: string;
  borderColor: string;
  image: string;
}

export default function AcademySection() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const domains: DomainItem[] = [
    {
      id: 'clients',
      title: 'Trouver plus de clients',
      shortDesc: 'Développez votre clientèle et apprenez à fidéliser pour pérenniser vos ventes au Bénin.',
      points: [
        'Comment attirer de nouveaux clients',
        'Comment fidéliser les clients',
        'Techniques de vente efficaces',
        'Comment améliorer le service client'
      ],
      icon: Users,
      color: 'text-[#0a3b8b]',
      lightBg: 'bg-blue-50/70',
      borderColor: 'border-blue-100 hover:border-blue-400',
      image: cardSalesStrategy
    },
    {
      id: 'finances',
      title: 'Gestion des finances',
      shortDesc: 'Maîtrisez votre trésorerie et séparez rigoureusement vos comptes d’exploitation.',
      points: [
        'Séparer finances personnelles et professionnelles',
        'Élaborer un budget',
        'Gérer la trésorerie',
        'Réduire les dépenses',
        'Augmenter les bénéfices'
      ],
      icon: Coins,
      color: 'text-emerald-600',
      lightBg: 'bg-emerald-50/70',
      borderColor: 'border-emerald-100 hover:border-emerald-400',
      image: cardFinancialOffice
    },
    {
      id: 'marketing',
      title: 'Publicité & Marketing',
      shortDesc: 'Déployez une marque forte et vendez en ligne sur les réseaux sociaux leaders.',
      points: [
        'Facebook',
        'WhatsApp Business',
        'Instagram',
        'TikTok',
        'Création d\'affiches',
        'Création de flyers',
        'Création de logo',
        'Identité visuelle',
        'Vente en ligne'
      ],
      icon: Megaphone,
      color: 'text-[#ff7b00]',
      lightBg: 'bg-orange-50/70',
      borderColor: 'border-orange-100 hover:border-orange-400',
      image: cardDigitalMarketing
    },
    {
      id: 'organisation',
      title: 'Organisation de l\'entreprise',
      shortDesc: 'Améliorez votre efficacité opérationnelle et structurez vos équipes au quotidien.',
      points: [
        'Gestion du temps',
        'Définition des objectifs',
        'Organisation quotidienne',
        'Gestion des employés',
        'Suivi des performances'
      ],
      icon: Clock,
      color: 'text-indigo-600',
      lightBg: 'bg-indigo-50/70',
      borderColor: 'border-indigo-100 hover:border-indigo-400',
      image: academyTraining
    },
    {
      id: 'creation',
      title: 'Création d\'entreprise',
      shortDesc: 'Validez votre idée de projet, concevez vos statuts et évitez les pièges classiques.',
      points: [
        'Choisir une idée rentable',
        'Business Plan',
        'Formalités administratives',
        'Les erreurs à éviter'
      ],
      icon: Lightbulb,
      color: 'text-amber-500',
      lightBg: 'bg-amber-50/70',
      borderColor: 'border-amber-100 hover:border-amber-400',
      image: cardBusinessCreation
    },
    {
      id: 'developpement',
      title: 'Développement personnel',
      shortDesc: 'Forgez votre posture de leader, gérez votre stress et affinez votre art de négocier.',
      points: [
        'Leadership',
        'Communication',
        'Négociation',
        'Gestion du stress',
        'Discipline',
        'Motivation'
      ],
      icon: Award,
      color: 'text-purple-600',
      lightBg: 'bg-purple-50/70',
      borderColor: 'border-purple-100 hover:border-purple-400',
      image: coachingAfriqueStrategie
    },
    {
      id: 'financement',
      title: 'Financement',
      shortDesc: 'Devenez éligible aux financements, préparez votre levée et convainquez les investisseurs.',
      points: [
        'Trouver des financements',
        'Préparer un dossier',
        'Convaincre un investisseur',
        'Gestion des prêts'
      ],
      icon: Building,
      color: 'text-sky-600',
      lightBg: 'bg-sky-50/70',
      borderColor: 'border-sky-100 hover:border-sky-400',
      image: cardPitchInvestor
    },
    {
      id: 'pratiques',
      title: 'Formations pratiques',
      shortDesc: 'Appropriez-vous les outils bureautiques et l’intelligence artificielle appliquée aux PME.',
      points: [
        'Comptabilité simplifiée',
        'Informatique',
        'Bureautique',
        'Marketing digital',
        'Gestion de projet',
        'Intelligence artificielle appliquée aux entreprises'
      ],
      icon: Cpu,
      color: 'text-rose-600',
      lightBg: 'bg-rose-50/70',
      borderColor: 'border-rose-100 hover:border-rose-400',
      image: academyTraining
    }
  ];

  const handleOpenRegister = (domainTitle: string) => {
    setFormData({
      ...formData,
      interest: domainTitle
    });
    setSelectedDomain(domainTitle);
    setIsModalOpen(true);
    setIsSubscribed(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
      setIsSubscribed(false);
    }, 2800);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden" id="academie">
      {/* Decorative premium elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-[#ff7b00]/5 to-transparent rounded-bl-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a3b8b]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a3b8b]/10 text-[#0a3b8b] text-[10px] font-black uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Académie de Formation Professionnelle
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            🎓 Académie Entrepreneuriale
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Le Centre d’Appui aux Entrepreneurs possède une véritable académie de formation professionnelle destinée aux entrepreneurs, PME, artisans, agriculteurs, commerçants, startups et porteurs de projets du Bénin. Accédez à nos programmes clés pour propulser votre réussite.
          </p>
        </div>

        {/* 8 Domains Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="academy-domains-grid">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div 
                key={domain.id}
                className={`bg-white rounded-3xl border ${domain.borderColor} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Realist Illustration with Hover zoom effect */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img 
                      src={domain.image} 
                      alt={domain.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <div className={`w-10 h-10 rounded-2xl ${domain.lightBg} flex items-center justify-center ${domain.color} shadow-md backdrop-blur-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-base font-black text-slate-900 leading-snug mb-2 group-hover:text-[#0a3b8b] transition-colors">
                      {domain.title}
                    </h3>
                    
                    <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mb-4">
                      {domain.shortDesc}
                    </p>
                    
                    {/* Points list of Modules */}
                    <div className="space-y-2 border-t border-slate-50 pt-4">
                      <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                        Modules inclus :
                      </p>
                      <ul className="space-y-1.5">
                        {domain.points.map((pt, i) => (
                          <li key={i} className="flex items-start space-x-2 text-[10px] text-slate-700 font-semibold leading-snug">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenRegister(domain.title)}
                    className="w-full py-3 px-4 bg-slate-50 group-hover:bg-[#0a3b8b] group-hover:text-white border border-slate-100 text-[#0a3b8b] font-black text-[10px] rounded-2xl uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive future evolution teaser */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7b00]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center space-x-5 max-w-2xl">
            <div className="w-14 h-14 rounded-2xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#ff7b00] uppercase tracking-wide">
                Espace Élève & Catalogue de Ressources
              </h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Notre plateforme évolue prochainement vers un portail apprenant complet ! Vous pourrez vous inscrire en ligne à vos cours, suivre votre progression pédagogique pas-à-pas et télécharger des fiches d'outils et guides méthodologiques exclusifs pour votre entreprise.
              </p>
            </div>
          </div>
          
          <a 
            href="#contact"
            className="px-6 py-4 bg-[#0a3b8b] hover:bg-blue-800 text-white font-black text-[10px] rounded-xl uppercase tracking-wider whitespace-nowrap transition-all shadow-lg shadow-blue-900/40"
          >
            Télécharger les guides gratuits
          </a>
        </div>

      </div>

      {/* Register Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubscribed ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Demande d'information reçue !</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-md mx-auto">
                  Merci pour votre intérêt envers l'Académie. Un conseiller pédagogique du Centre d’Appui aux Entrepreneurs va vous contacter très prochainement sur votre numéro <strong className="text-[#0a3b8b]">{formData.phone}</strong> pour planifier votre entretien d'orientation.
                </p>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider pt-3">
                  À très bientôt sur l'Académie !
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 text-[#ff7b00] text-[9px] font-black uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3" /> Académie Entrepreneuriale
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Découvrir ce programme de formation
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Laissez-nous vos coordonnées afin qu'un conseiller vous présente le syllabus complet et les modalités d'inscription.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-4">
                  {/* Selected Domain */}
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5">Programme sélectionné</label>
                    <input 
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-black text-[#0a3b8b] focus:outline-none"
                      value={selectedDomain || ''}
                      readOnly
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5">Nom Complet *</label>
                    <input 
                      type="text"
                      required
                      placeholder="Ex : Saliou Mensah"
                      className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5">Numéro WhatsApp / Téléphone *</label>
                      <input 
                        type="tel"
                        required
                        placeholder="Ex : +229 01 65 84 80 10"
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5">Adresse Email</label>
                      <input 
                        type="email"
                        placeholder="Ex : saliou@gmail.com"
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5">Votre secteur d'activité ou vos attentes (Facultatif)</label>
                    <textarea 
                      rows={3}
                      placeholder="Indiquez brièvement vos besoins ou questions sur ce programme de formation..."
                      className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#ff7b00]" /> Suivi direct Bénin 🇧🇯
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-[#0a3b8b] to-blue-800 text-white font-extrabold text-[10px] rounded-xl uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md shadow-blue-900/10 hover:shadow-lg transition-all"
                  >
                    <span>Découvrir le programme</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
