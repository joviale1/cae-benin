import React, { useState } from 'react';
import { faqData } from '../data';
import { FAQItem } from '../types';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // default open first one
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les questions' },
    { id: 'creation', label: 'Création légale' },
    { id: 'tarifs', label: 'Tarifs & Simulation' },
    { id: 'procedures', label: 'Délais & Procédures' },
    { id: 'accompagnement', label: 'Méthodes d’Appui' },
  ];

  const filteredFaqs = faqData.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Foire Aux Questions</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Des Réponses Claires à Vos Questions Fréquentes
          </h3>
          <p className="text-slate-600 text-sm">
            Vous souhaitez savoir comment lancer votre activité ? Découvrez les réponses rédigées par nos experts administratifs et juridiques.
          </p>
        </div>

        {/* Categories filters for FAQs */}
        <div className="flex gap-2 justify-center overflow-x-auto pb-4 scrollbar-none mb-10 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0a3b8b] text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Collapsible accordion list */}
        <div className="max-w-3xl mx-auto space-y-4" id="faq-accordion-list">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                
                {/* Accordion header button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-4.5 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  id={`btn-toggle-faq-${faq.id}`}
                >
                  <span className="text-xs sm:text-sm font-black text-slate-800 flex items-center gap-2.5">
                    <HelpCircle className="w-4.5 h-4.5 text-[#ff7b00] shrink-0" /> {faq.question}
                  </span>
                  <ChevronDown className={`w-4.5 h-4.5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Accordion content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium border-t border-slate-50">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Footer Contact Callout */}
        <div className="mt-16 text-center max-w-xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto text-[#0a3b8b]">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-900 uppercase">Une autre question en suspens ?</h4>
            <p className="text-[11px] text-slate-500">Nos conseillers sont disponibles sur WhatsApp pour vous débloquer.</p>
          </div>
          <button
            onClick={() => {
              const whatsappUrl = `https://wa.me/23761781115?text=Bonjour, j'ai une question sur les services d'accompagnement.`;
              window.open(whatsappUrl, '_blank');
            }}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm cursor-pointer"
          >
            Discuter en Direct
          </button>
        </div>

      </div>
    </section>
  );
}
