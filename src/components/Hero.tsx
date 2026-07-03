import React, { useState, useEffect, useCallback } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';

const coachingAfriqueStrategie = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=65";
const aboutCoaching = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=65";
const academyTraining = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=65";
const cardFinancialOffice = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=65";
const cardBusinessCreation = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=65";

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenWhatsApp: () => void;
  onNavigateToServices: () => void;
}

interface SlideItem {
  image: string;
  title: string;
  description: string;
}

export default function Hero({ onOpenAppointment, onOpenWhatsApp, onNavigateToServices }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideItem[] = [
    {
      image: coachingAfriqueStrategie,
      title: 'Réunion Stratégique',
      description: 'Conseil business sur-mesure et plan de croissance avec nos experts'
    },
    {
      image: aboutCoaching,
      title: 'Coaching Business',
      description: 'Accompagnement de proximité par des conseillers qualifiés et d’expérience'
    },
    {
      image: academyTraining,
      title: 'Formation Entrepreneuriale',
      description: 'Ateliers collectifs pratiques pour propulser votre réussite commerciale'
    },
    {
      image: cardFinancialOffice,
      title: 'Analyse Financière & Business Plan',
      description: 'Projections financières robustes pour rassurer vos partenaires bancaires'
    },
    {
      image: cardBusinessCreation,
      title: 'Création d’Entreprise',
      description: 'Formalisation légale, RCCM, IFU et immatriculation APIEx rapide'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Autoplay effect - 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-28 animate-fade-in" id="accueil">
      {/* Absolute Decorative Background Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-200 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Slogan and Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Slogan / Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#0a3b8b]" id="hero-badge">
              <Sparkles className="w-4 h-4 text-[#ff7b00]" />
              <span className="text-xs font-black tracking-wide uppercase">Votre réussite, notre métier</span>
            </div>

            {/* Titre Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight" id="hero-title">
              Centre d’Appui aux<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a3b8b] to-[#ff7b00]">
                Entrepreneurs
              </span>
            </h1>

            {/* Sous-titre & Description */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-extrabold text-[#0a3b8b] leading-relaxed max-w-2xl mx-auto lg:mx-0" id="hero-subtitle">
                Transformez votre entreprise en une véritable réussite.🇧🇯
              </h2>
              
              <div className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold text-left inline-block lg:block" id="hero-description">
                <p className="mb-3 text-slate-700 font-bold">Nous aidons les entrepreneurs, commerçants et PME à :</p>
                <ul className="space-y-2 mt-2 pl-1">
                  {[
                    "Attirer plus de clients.",
                    "Faire une publicité efficace.",
                    "Mieux gérer leur entreprise et leurs finances.",
                    "Augmenter leurs ventes.",
                    "Construire une entreprise solide et rentable."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-slate-600 text-xs sm:text-sm font-semibold">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[#ff7b00] font-black text-sm sm:text-base">Votre réussite commence ici.</p>
              </div>
            </div>

            {/* Slogan and Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4" id="hero-ctas">
              
              {/* Demander un accompagnement Button */}
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs font-bold text-white bg-[#0a3b8b] hover:bg-[#144ea8] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-100 cursor-pointer hover:-translate-y-0.5"
                id="hero-cta-appointment"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Demander un accompagnement</span>
              </button>

              {/* Écrire sur WhatsApp Button */}
              <button
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs font-bold text-emerald-700 bg-white border-2 border-emerald-500 hover:bg-emerald-50 transition-all flex items-center justify-center space-x-2 cursor-pointer hover:-translate-y-0.5"
                id="hero-cta-whatsapp"
              >
                <MessageSquare className="w-4 h-4 shrink-0 fill-emerald-50 text-emerald-500" />
                <span>Écrire sur WhatsApp</span>
              </button>

            </div>

          </div>

          {/* Visual Showcase Column (Beautiful dynamic image carousel) */}
          <div className="lg:col-span-5 relative" id="hero-illustration">
            <div className="relative mx-auto max-w-[450px] sm:max-w-[500px] lg:max-w-none">
              
              {/* Outer Decorative Circle */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-slate-200 animate-spin-slow pointer-events-none opacity-40"></div>

              {/* Primary Visual Block with Carrousel Container */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-slate-900 group">
                  
                  {/* Slider Images with crossfade transition */}
                  {slides.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {/* Subtle Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-5">
                        <span className="inline-block bg-[#ff7b00] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 w-fit">
                          Cabinet Bénin 🇧🇯
                        </span>
                        <h4 className="text-white text-sm font-extrabold leading-tight">{slide.title}</h4>
                        <p className="text-slate-300 text-[10px] sm:text-xs font-medium mt-1 leading-snug">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Left Control Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                    aria-label="Slide précédente"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right Control Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                    aria-label="Slide suivante"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Pagination Dots */}
                  <div className="absolute bottom-3 right-3 z-20 flex space-x-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentSlide ? 'bg-white w-4' : 'bg-white/40'
                        }`}
                        aria-label={`Aller au slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                </div>

                {/* Bottom interactive card footer info */}
                <div className="p-4 bg-slate-50 rounded-2xl mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0a3b8b]/10 flex items-center justify-center font-bold text-sm text-[#0a3b8b]">
                      🇧🇯
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-800 uppercase leading-none">Cotonou - Bénin</p>
                      <p className="text-[9px] text-slate-500 font-bold">Cabinet Agréé APIEx</p>
                    </div>
                  </div>
                  <button
                    onClick={onNavigateToServices}
                    className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-extrabold uppercase rounded-lg tracking-wider transition-colors cursor-pointer"
                  >
                    Voir Tarifs
                  </button>
                </div>
              </div>

              {/* Float Badge 1 */}
              <div className="absolute -top-5 -right-5 bg-white border border-slate-100 shadow-lg rounded-2xl p-3 flex items-center space-x-2.5 max-w-[150px] animate-bounce-slow z-20">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-800 leading-tight">100% Agréé</p>
                  <p className="text-[9px] font-medium text-slate-500">Conforme APIEx</p>
                </div>
              </div>

              {/* Float Badge 2 */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 shadow-lg rounded-2xl p-3 flex items-center space-x-2.5 max-w-[160px] z-20">
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

        {/* 3 Statistics Segment - Affiché sous le Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 sm:mt-24 pt-10 border-t border-slate-200/80">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#0a3b8b]/10 text-[#0a3b8b] flex items-center justify-center font-black text-lg shrink-0">
              🎓
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">+500</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Porteurs formés</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#ff7b00]/10 text-[#ff7b00] flex items-center justify-center font-black text-lg shrink-0">
              🚀
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#ff7b00] tracking-tight">+200</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Projets créés</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-lg shrink-0">
              🤝
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-emerald-600 tracking-tight">100%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Suivi personnalisé</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
