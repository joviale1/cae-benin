import React from 'react';
import { ArrowRight, Phone, MessageSquare, Sparkles, ShieldCheck, Award, Users } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenWhatsApp: () => void;
  onNavigateToServices: () => void;
}

export default function Hero({ onOpenAppointment, onOpenWhatsApp, onNavigateToServices }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-32" id="accueil">
      {/* Absolute Decorative Background Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-200 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Slogan and Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline / Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[#0a3b8b]" id="hero-badge">
              <Sparkles className="w-4 h-4 text-[#ff7b00]" />
              <span className="text-xs font-bold tracking-wide uppercase">Votre réussite, notre métier</span>
            </div>

            {/* Slogan Fort */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight" id="hero-title">
              Centre d’Appui aux Entrepreneurs <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a3b8b] to-[#ff7b00]">
                Transformons vos idées
              </span> en entreprises prospères.
            </h1>

            {/* Presentation Short Text */}
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium" id="hero-description">
              Nous accompagnons les porteurs de projets au Bénin dans la création, la structuration et la croissance de leurs entreprises.
            </p>

            {/* Slogan and Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2" id="hero-ctas">
              
              {/* Demander un accompagnement Button */}
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs font-bold text-white bg-[#0a3b8b] hover:bg-[#144ea8] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-100 cursor-pointer hover:-translate-y-0.5"
                id="hero-cta-appointment"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>📞 Demander un accompagnement</span>
              </button>

              {/* Écrire sur WhatsApp Button */}
              <button
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs font-bold text-emerald-700 bg-white border-2 border-emerald-500 hover:bg-emerald-50 transition-all flex items-center justify-center space-x-2 cursor-pointer hover:-translate-y-0.5"
                id="hero-cta-whatsapp"
              >
                <MessageSquare className="w-4 h-4 shrink-0 fill-emerald-50 text-emerald-500" />
                <span>💬 Écrire sur WhatsApp</span>
              </button>

            </div>

            {/* Trust points */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold text-[#0a3b8b]">500+</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500">Porteurs formés</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold text-[#ff7b00]">200+</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500">Projets créés</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold text-[#0a3b8b]">100%</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500">Suivi personnalisé</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Column (Beautiful image representing the Beninese business meeting) */}
          <div className="lg:col-span-5 relative" id="hero-illustration">
            <div className="relative mx-auto max-w-[450px] sm:max-w-[500px] lg:max-w-none">
              
              {/* Outer Decorative Circle */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-slate-200 animate-spin-slow pointer-events-none opacity-40"></div>

              {/* Primary Visual Block with Custom Image */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
                  <img
                    src="/src/assets/images/hero_benin_entrepreneurs_1782833306681.jpg"
                    alt="Jeunes entrepreneurs béninois en réunion d’affaires et stratégie"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <span className="inline-block bg-[#ff7b00] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-2">
                        Cabinet Bénin 🇧🇯
                      </span>
                      <p className="text-white text-xs font-bold leading-snug">
                        Stratégie, montage de Business Plan & Formalisation APIEx de A à Z.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0a3b8b]/10 flex items-center justify-center font-bold text-sm text-[#0a3b8b]">
                      🇧🇯
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-800 uppercase leading-none">Cotonou - Bénin</p>
                      <p className="text-[9px] text-slate-500 font-bold">Immatriculation en 48h</p>
                    </div>
                  </div>
                  <button
                    onClick={onNavigateToServices}
                    className="px-3.5 py-2 bg-slate-900 text-white text-[10px] font-extrabold uppercase rounded-lg tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Voir Tarifs
                  </button>
                </div>
              </div>

              {/* Float Badge 1 */}
              <div className="absolute -top-5 -right-5 bg-white border border-slate-100 shadow-lg rounded-2xl p-3 flex items-center space-x-2.5 max-w-[150px] animate-bounce-slow">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-800 leading-tight">100% Agréé</p>
                  <p className="text-[9px] font-medium text-slate-500">Conforme APIEx</p>
                </div>
              </div>

              {/* Float Badge 2 */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 shadow-lg rounded-2xl p-3 flex items-center space-x-2.5 max-w-[160px]">
                <div className="w-8 h-8 rounded-lg bg-[#ff7b00] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  ★
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-800 leading-tight">Cabinet Premium</p>
                  <p className="text-[9px] font-medium text-slate-500">Expertise OHADA</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
