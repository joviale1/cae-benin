import React, { useState, useEffect, useCallback } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Sparkles, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';

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
      image: '/src/assets/images/hero_slide_strategy_1782910184252.jpg',
      title: 'Réunion Stratégique',
      description: 'Conseil business sur-mesure et plan de croissance avec nos experts'
    },
    {
      image: '/src/assets/images/hero_slide_formation_1782910199655.jpg',
      title: 'Formation Professionnelle',
      description: 'Ateliers pratiques pour entrepreneurs et cadres d\'entreprise'
    },
    {
      image: '/src/assets/images/hero_slide_signature_1782910217023.jpg',
      title: 'Création d\'Entreprise',
      description: 'Formalisation légale, RCCM, IFU et accompagnement APIEx en 48h'
    },
    {
      image: '/src/assets/images/hero_slide_business_plan_1782910229594.jpg',
      title: 'Business Plans d\'Excellence',
      description: 'Projections financières robustes pour rassurer vos partenaires'
    },
    {
      image: '/src/assets/images/hero_slide_entrepreneur_1782910245884.jpg',
      title: 'Émergence & Croissance',
      description: 'Augmentez vos ventes et bâtissez une entreprise solide au Bénin'
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

  const bullets = [
    'Attirer plus de clients',
    'Développer une publicité efficace',
    'Mieux gérer leur entreprise et leurs finances',
    'Augmenter leurs ventes et leurs bénéfices',
    'Obtenir des financements',
    'Construire une entreprise solide, rentable et durable'
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-32" id="accueil">
      {/* Absolute Decorative Background Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-200 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Slogan and Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline / Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[#0a3b8b]" id="hero-badge">
              <Sparkles className="w-4 h-4 text-[#ff7b00]" />
              <span className="text-xs font-black tracking-wide uppercase">Votre réussite, notre métier</span>
            </div>

            {/* Slogan Fort */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight" id="hero-title">
              Transformez votre entreprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a3b8b] to-[#ff7b00]">
                en une véritable réussite.
              </span>
            </h1>

            {/* Presentation Short Text and bullet list */}
            <div className="space-y-4">
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold" id="hero-subtitle">
                Nous accompagnons les entrepreneurs, commerçants, artisans, agriculteurs, startups et PME du Bénin pour :
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0 text-left">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 leading-tight">{bullet}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#0a3b8b] text-sm sm:text-base font-black tracking-wide pt-2">
                Votre réussite commence ici.
              </p>
            </div>

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
                      <p className="text-[9px] text-slate-500 font-bold">Immatriculation en 48h</p>
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
      </div>
    </section>
  );
}
