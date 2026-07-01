import React from 'react';
import { testimonialsData } from '../data';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Témoignages Clients</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Ce Que Disent Nos Entrepreneurs Accompagnés
          </h3>
          <p className="text-slate-600 text-sm">
            La plus belle récompense de notre engagement quotidien est la réussite et la satisfaction des créateurs d’entreprise que nous formons et encadrons.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm relative hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Quote marks icon */}
              <div className="absolute top-6 right-6 text-[#ff7b00]/10 shrink-0">
                <MessageSquare className="w-10 h-10 fill-current" />
              </div>

              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-[#ff7b00] text-[#ff7b00]" />
                ))}
              </div>

              {/* Message text */}
              <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed font-medium mb-6 flex-1">
                « {t.text} »
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm shrink-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0a3b8b] font-black text-sm flex items-center justify-center shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                )}
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{t.name}</h4>
                  <p className="text-[10px] text-slate-500 font-semibold truncate">
                    {t.role} • <span className="text-[#0a3b8b]">{t.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-16 bg-white border border-slate-200/60 rounded-3xl p-6 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="space-y-1">
            <p className="text-xl font-black text-[#0a3b8b]">98%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Taux de Recommandation</p>
          </div>
          <div className="h-8 w-[1px] bg-slate-200 hidden md:block"></div>
          <div className="space-y-1">
            <p className="text-xl font-black text-[#ff7b00]">10 000 +</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Heures de formation</p>
          </div>
          <div className="h-8 w-[1px] bg-slate-200 hidden md:block"></div>
          <div className="space-y-1">
            <p className="text-xl font-black text-[#0a3b8b]">24 / 48h</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Délai de réponse moyen</p>
          </div>
        </div>

      </div>
    </section>
  );
}
