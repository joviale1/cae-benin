import React, { useState } from 'react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';
import { Search, Plus, Check, FileSpreadsheet, Briefcase, GraduationCap, FileText, Globe, ArrowRight } from 'lucide-react';

interface ServicesListProps {
  onAddToDevis: (service: ServiceItem) => void;
  selectedServiceIdsInDevis: string[];
  onBookService: (service: ServiceItem) => void;
}

export default function ServicesList({
  onAddToDevis,
  selectedServiceIdsInDevis,
  onBookService,
}: ServicesListProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tous les services', icon: Briefcase },
    { id: 'consultation', label: 'Consultation', icon: Briefcase },
    { id: 'creation', label: 'Création d’Entreprise', icon: FileSpreadsheet },
    { id: 'formation', label: 'Nos Formations', icon: GraduationCap },
    { id: 'administratif', label: 'Services Administratifs', icon: FileText },
    { id: 'digital', label: 'Marketing & Digital', icon: Globe },
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'consultation':
        return 'text-blue-600 bg-blue-50 border-blue-100';
      case 'creation':
        return 'text-orange-600 bg-orange-50 border-orange-100';
      case 'formation':
        return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'administratif':
        return 'text-purple-600 bg-purple-50 border-purple-100';
      case 'digital':
        return 'text-cyan-600 bg-cyan-50 border-cyan-100';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'consultation':
        return 'Consultation & Conseil';
      case 'creation':
        return 'Création d’Entreprise';
      case 'formation':
        return 'Nos Formations';
      case 'administratif':
        return 'Services Administratifs';
      case 'digital':
        return 'Marketing & Digital';
      default:
        return cat;
    }
  };

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with split layout containing the team brainstorming image */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16" id="services-header-block">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Nos Tarifs & Solutions</h2>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Des Services Clairs, Accessibles et Sans Surprise
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Retrouvez l’ensemble de nos prestations et tarifs officiels pour les entrepreneurs au Bénin. Utilisez notre simulateur interactif de devis pour composer votre formule sur-mesure ou inscrivez-vous à nos séminaires pratiques de gestion et d’ingénierie financière.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-slate-200/80 group">
              <img 
                src="/images/services_brainstorming_benin_1782833335428.jpg" 
                alt="Équipe béninoise analysant des graphiques financiers" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-white text-[10px] font-bold tracking-wide uppercase">
                  📊 Brainstorming & stratégie financière — Cabinet Cotonou
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters Block */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 mb-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Rechercher une prestation (ex: Business plan, CV...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                id="services-search-input"
              />
              <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
            </div>

            <div className="text-[11px] font-bold text-slate-500 bg-slate-50 px-3 py-2 rounded-xl shrink-0">
              {filteredServices.length} prestation{filteredServices.length > 1 ? 's' : ''} disponible{filteredServices.length > 1 ? 's' : ''}
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200" id="services-tabs">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-[#0a3b8b] text-white shadow-md shadow-blue-100'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                  }`}
                  id={`tab-${cat.id}`}
                >
                  <IconComponent className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {filteredServices.length === 0 ? (
            <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-100">
              <p className="text-slate-400 text-sm font-medium">Aucune prestation ne correspond à votre recherche.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="mt-3 text-xs text-[#0a3b8b] font-bold underline"
              >
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            filteredServices.map((service) => {
              const isInDevis = selectedServiceIdsInDevis.includes(service.id);
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    
                    {/* Category Tag */}
                    <span className={`inline-flex px-2.5 py-1 text-[10px] font-extrabold rounded-lg uppercase tracking-wider border ${getCategoryColor(service.category)}`}>
                      {getCategoryLabel(service.category)}
                    </span>

                    {/* Service title */}
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-[#0a3b8b] transition-colors">
                      {service.name}
                    </h4>

                    {/* Service description */}
                    <p className="text-slate-500 text-[11px] leading-relaxed font-medium line-clamp-3">
                      {service.description}
                    </p>

                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="bg-slate-50 p-5 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 leading-none">Tarif :</span>
                      <span className="text-[#ff7b00] text-sm sm:text-base font-black tracking-tight">
                        {service.price.toLocaleString('fr-FR')} FCFA <span className="text-[10px] text-slate-400 font-medium">{service.unit || ''}</span>
                      </span>
                    </div>

                    <div className="flex space-x-1.5 shrink-0">
                      
                      {/* Add to Devis Simulator Button */}
                      <button
                        onClick={() => onAddToDevis(service)}
                        className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                          isInDevis
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'bg-white border-slate-200 text-slate-600 hover:text-[#0a3b8b] hover:border-[#0a3b8b]'
                        }`}
                        title={isInDevis ? 'Ajouté au devis' : 'Ajouter à la simulation de devis'}
                        id={`btn-add-devis-${service.id}`}
                      >
                        {isInDevis ? <Check className="w-4.5 h-4.5" /> : <Plus className="w-4.5 h-4.5" />}
                      </button>

                      {/* Immediate booking selection button */}
                      <button
                        onClick={() => onBookService(service)}
                        className="px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider bg-[#0a3b8b] hover:bg-[#144ea8] text-white transition-all cursor-pointer"
                        id={`btn-book-${service.id}`}
                      >
                        Réserver
                      </button>

                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Small Highlight Section below Services */}
        <div className="mt-12 bg-gradient-to-r from-[#0a3b8b] to-blue-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold">Besoin d'un devis global instantané pour plusieurs services ?</h4>
            <p className="text-xs text-blue-100">Sélectionnez les prestations de votre choix à l’aide du bouton <span className="font-bold text-white bg-white/20 px-1 py-0.5 rounded">+</span> puis ouvrez le simulateur.</p>
          </div>
          <button
            onClick={() => {
              // open the devis modal
              const devisBtn = document.getElementById('nav-devis-btn');
              if (devisBtn) devisBtn.click();
            }}
            className="px-6 py-3.5 bg-[#ff7b00] hover:bg-orange-600 font-bold text-xs rounded-xl flex items-center space-x-1.5 transition-all shadow-md shrink-0 cursor-pointer"
            id="services-simulate-cta"
          >
            <span>Lancer la simulation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
