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
  Send,
  Download,
  FileText
} from 'lucide-react';

interface DomainItem {
  id: string;
  title: string;
  shortDesc: string;
  points: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  lightBg: string;
  borderColor: string;
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
        'Stratégies concrètes pour attirer de nouveaux clients qualifiés',
        'Fidélisation active et programmes de recommandation',
        'Techniques de vente directes et négociation sur le terrain',
        'Optimisation de la relation client et accueil d’excellence'
      ],
      icon: Users,
      color: 'text-[#0a3b8b]',
      lightBg: 'bg-blue-50/70',
      borderColor: 'border-blue-100 hover:border-blue-400'
    },
    {
      id: 'finances',
      title: 'Gestion des finances',
      shortDesc: 'Maîtrisez votre trésorerie et séparez rigoureusement vos comptes d’exploitation.',
      points: [
        'Séparer efficacement finances personnelles et professionnelles',
        'Élaboration et suivi d’un budget d’exploitation mensuel',
        'Optimisation des flux de trésorerie et fonds de roulement',
        'Chasse aux gaspillages et techniques pour maximiser vos bénéfices'
      ],
      icon: Coins,
      color: 'text-emerald-600',
      lightBg: 'bg-emerald-50/70',
      borderColor: 'border-emerald-100 hover:border-emerald-400'
    },
    {
      id: 'marketing',
      title: 'Publicité & Marketing',
      shortDesc: 'Déployez une marque forte et vendez en ligne sur les réseaux sociaux leaders.',
      points: [
        'Publicités payantes et ciblées sur Facebook, Instagram et TikTok',
        'Techniques d’acquisition organique par WhatsApp Business',
        'Conception visuelle d’affiches, de flyers et d’identités de marque',
        'Création de logo et mise en place d’une boutique en ligne'
      ],
      icon: Megaphone,
      color: 'text-[#ff7b00]',
      lightBg: 'bg-orange-50/70',
      borderColor: 'border-orange-100 hover:border-orange-400'
    },
    {
      id: 'organisation',
      title: 'Organisation de l’entreprise',
      shortDesc: 'Améliorez votre efficacité opérationnelle et structurez vos équipes au quotidien.',
      points: [
        'Gestion rationnelle du temps et matrice des priorités',
        'Définition claire d’objectifs SMART et plans d’actions',
        'Délégation efficace et organisation des tâches journalières',
        'Recrutement, gestion des employés et suivi des performances'
      ],
      icon: Clock,
      color: 'text-indigo-600',
      lightBg: 'bg-indigo-50/70',
      borderColor: 'border-indigo-100 hover:border-indigo-400'
    },
    {
      id: 'creation',
      title: 'Création d’entreprise',
      shortDesc: 'Validez votre idée de projet, concevez vos statuts et évitez les pièges classiques.',
      points: [
        'Méthodes pour valider une idée rentable sur le marché béninois',
        'Rédaction pas-à-pas d’un business plan solide et convaincant',
        'Parcours administratif complet et formalisation légale à l’APIEx',
        'Analyse des erreurs critiques à éviter absolument au démarrage'
      ],
      icon: Lightbulb,
      color: 'text-amber-500',
      lightBg: 'bg-amber-50/70',
      borderColor: 'border-amber-100 hover:border-amber-400'
    },
    {
      id: 'developpement',
      title: 'Développement de l’entrepreneur',
      shortDesc: 'Forgez votre posture de leader, gérez votre stress et affinez votre art de négocier.',
      points: [
        'Leadership managérial et prise de parole inspirante',
        'Techniques avancées de communication et gestion de conflits',
        'Négociation commerciale et partenariats stratégiques',
        'Gestion constructive du stress, autodiscipline et motivation'
      ],
      icon: Award,
      color: 'text-purple-600',
      lightBg: 'bg-purple-50/70',
      borderColor: 'border-purple-100 hover:border-purple-400'
    },
    {
      id: 'financement',
      title: 'Recherche de Financement',
      shortDesc: 'Devenez éligible aux financements, préparez votre levée et convainquez les investisseurs.',
      points: [
        'Cartographie des guichets de financement publics et privés',
        'Constitution d’un dossier financier complet aux normes bancaires',
        'Techniques de pitch pour séduire les business angels et fonds',
        'Gestion stratégique de la dette et des remboursements'
      ],
      icon: Building,
      color: 'text-sky-600',
      lightBg: 'bg-sky-50/70',
      borderColor: 'border-sky-100 hover:border-sky-400'
    },
    {
      id: 'pratique',
      title: 'Formations Pratiques & IA',
      shortDesc: 'Appropriez-vous les outils bureautiques et l’intelligence artificielle appliquée aux PME.',
      points: [
        'Comptabilité de caisse simplifiée sur tableur Excel',
        'Maîtrise de l’informatique de bureau et suite collaborative',
        'Marketing digital, rédaction web et community management',
        'IA générative appliquée (automatisation de mails, posts, visuels)'
      ],
      icon: Cpu,
      color: 'text-rose-600',
      lightBg: 'bg-rose-50/70',
      borderColor: 'border-rose-100 hover:border-rose-400'
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
      // Simulate close
      setIsModalOpen(false);
      // Reset form
      setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
      setIsSubscribed(false);
    }, 2800);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="academie">
      {/* Visual top grid decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-[#ff7b00]/5 to-transparent rounded-bl-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block split with high-quality classroom representation image */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a3b8b]/10 text-[#0a3b8b] text-[10px] font-black uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> Académie de Formation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Académie Entrepreneuriale & Ressources
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Parce que la formation continue est le pilier d’une entreprise pérenne, notre cabinet met à disposition un catalogue de programmes structurés, intensifs et immédiatement applicables. Que vous cherchiez à structurer vos comptes, acquérir des clients sur internet ou lever des fonds, nos ateliers pratiques répondent aux réalités d'Afrique de l'Ouest.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video border border-slate-100 group">
              <img 
                src="/src/assets/images/academy_training_benin_1782901047713.jpg" 
                alt="Formation d'entrepreneurs à l'Académie du Centre au Bénin" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-white text-[10px] font-black tracking-widest uppercase">
                  🎓 Masterclass Collective — Cotonou Bénin
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Domains Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="academy-domains-grid">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div 
                key={domain.id}
                className={`bg-white rounded-2xl border ${domain.borderColor} p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Icon with colored circle wrapper */}
                  <div className={`w-11 h-11 rounded-xl ${domain.lightBg} flex items-center justify-center ${domain.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug mb-2 group-hover:text-[#0a3b8b] transition-colors">
                    {domain.title}
                  </h3>
                  
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed mb-4">
                    {domain.shortDesc}
                  </p>
                  
                  {/* Points sublist with small ticks */}
                  <ul className="space-y-2 mb-6 border-t border-slate-50 pt-4">
                    {domain.points.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-2 text-[10px] text-slate-600 font-medium leading-tight">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => handleOpenRegister(domain.title)}
                    className="w-full py-2.5 px-3 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200/80 text-slate-700 font-extrabold text-[10px] rounded-xl uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>S'inscrire / En savoir plus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Evolution teaser to resources & download */}
        <div className="mt-12 bg-slate-50 rounded-3xl p-6 border border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ff7b00]/10 text-[#ff7b00] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase">Espace Élève & Ressources Pédagogiques</p>
              <p className="text-[11px] text-slate-500 font-medium">
                À venir très prochainement : Votre catalogue de formations en ligne avec suivi d’apprentissage, téléchargement de polycopiés de cours et forums d’échange d’affaires.
              </p>
            </div>
          </div>
          <a 
            href="#ressources"
            className="px-5 py-3 bg-[#0a3b8b] hover:bg-blue-800 text-white font-black text-[10px] rounded-xl uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Télécharger les guides gratuits
          </a>
        </div>

      </div>

      {/* Modern Registration Modal Dialog */}
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
                <h3 className="text-xl font-black text-slate-900">Demande d'inscription reçue !</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-md mx-auto">
                  Merci pour votre confiance. Un conseiller pédagogique du Centre d’Appui aux Entrepreneurs va vous contacter sur votre numéro <strong className="text-[#0a3b8b]">{formData.phone}</strong> pour planifier votre séance d'apprentissage.
                </p>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider pt-3">
                  À très bientôt sur l'Académie !
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 text-[#ff7b00] text-[9px] font-black uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3" /> Demande d'information & Inscription
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Inscrivez-vous à une formation
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Sélectionnez votre formule et nos équipes vous guideront vers la session adéquate.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-4">
                  {/* Selected Domain Showcase */}
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5">Module Sélectionné</label>
                    <input 
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-black text-[#0a3b8b] focus:outline-none"
                      value={selectedDomain || ''}
                      readOnly
                    />
                  </div>

                  {/* Name field */}
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

                  {/* Phone & Email split */}
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
                      <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5">Adresse Email (Facultatif)</label>
                      <input 
                        type="email"
                        placeholder="Ex : saliou@gmail.com"
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Message / context */}
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5">Décrivez votre projet ou vos attentes (Facultatif)</label>
                    <textarea 
                      rows={3}
                      placeholder="Indiquez brièvement votre domaine d'activité actuel et ce que vous souhaitez apprendre..."
                      className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#ff7b00]" /> Suivi direct MTN/Moov
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-[#0a3b8b] to-blue-800 text-white font-extrabold text-[10px] rounded-xl uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md shadow-blue-900/10 hover:shadow-lg transition-all"
                  >
                    <span>Envoyer la demande</span>
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
