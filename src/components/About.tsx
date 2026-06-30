import React from 'react';
import { Shield, Award, Eye, HeartHandshake, Lightbulb, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Professionnalisme',
      description: 'Une équipe de consultants et formateurs hautement qualifiés à votre écoute pour vous fournir des solutions rigoureuses et adaptées.',
      icon: Award,
      color: 'bg-blue-50 text-[#0a3b8b] border-blue-100',
    },
    {
      title: 'Intégrité',
      description: 'La transparence absolue dans nos tarifs, nos démarches et l’évaluation réaliste des chances de réussite de votre projet d’entreprise.',
      icon: Shield,
      color: 'bg-orange-50 text-[#ff7b00] border-orange-100',
    },
    {
      title: 'Confidentialité',
      description: 'Le respect strict du secret professionnel. Toutes vos idées, formules, données financières et plans d’affaires restent strictement confidentiels.',
      icon: Eye,
      color: 'bg-purple-50 text-purple-700 border-purple-100',
    },
    {
      title: 'Accompagnement personnalisé',
      description: 'Chaque entrepreneur est unique. Nous adaptons nos conseils, nos formations et notre rythme de travail à votre profil et à votre marché.',
      icon: HeartHandshake,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      title: 'Innovation',
      description: 'Nous intégrons des stratégies modernes, le marketing digital avancé et les outils technologiques pour propulser votre entreprise vers l’avenir.',
      icon: Lightbulb,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
    },
  ];

  return (
    <section className="py-20 bg-white" id="propos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Qui sommes-nous ?</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Votre Partenaire Stratégique de Confiance
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Le <span className="font-bold text-[#0a3b8b]">Centre d’Appui aux Entrepreneurs</span> est une structure d’accompagnement de premier plan dédiée à l’incubation, à la formation et à la formalisation administrative des porteurs de projets et des PME.
          </p>
        </div>

        {/* Mission and Presentation Box */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16 items-center">
          
          {/* Column 1: Presentation & Mission */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 relative">
              <span className="absolute top-4 right-4 text-slate-200 font-black text-6xl select-none leading-none">“</span>
              <h4 className="text-lg font-extrabold text-[#0a3b8b] mb-3">Notre Mission</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Notre mission est de démocratiser l’entrepreneuriat en offrant à chaque porteur d’idée, quel que soit son budget, un encadrement structuré, des formations opérationnelles et des outils d’aide à la décision pour transformer son rêve en une activité viable, légale et génératrice de richesses.
              </p>
            </div>

            <div className="space-y-3.5">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Pourquoi notre expertise fait la différence</h4>
              
              <div className="flex items-start space-x-3 text-slate-700 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Une double culture :</strong> Nous allions la rigueur des procédures administratives classiques à l'agilité des nouveaux métiers de la transition digitale.
                </span>
              </div>

              <div className="flex items-start space-x-3 text-slate-700 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Une équipe de terrain :</strong> Nos experts conseillent quotidiennement des dizaines de créateurs et connaissent parfaitement l’écosystème économique local.
                </span>
              </div>

              <div className="flex items-start space-x-3 text-slate-700 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Une accessibilité universelle :</strong> Des services professionnels d’excellence tarifés de manière juste et inclusive pour encourager l’auto-emploi.
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Graphic Representation or Photo placeholder */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-4/3 border border-slate-100 group">
              <img 
                src="/src/assets/images/about_coaching_benin_1782833321123.jpg" 
                alt="Conseiller d’affaires accompagnant un entrepreneur au Bénin" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <p className="text-white text-xs font-bold tracking-wide">
                  💡 Session d’accompagnement stratégique au Bénin
                </p>
              </div>
            </div>

            <div className="relative bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-3">
                Un engagement quotidien à vos côtés
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 bg-slate-50/70 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-700">Taux d'intégration professionnelle</span>
                  <span className="text-xs font-black text-[#0a3b8b] bg-blue-50 px-2.5 py-1 rounded-lg">94%</span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-slate-50/70 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-700">Dossiers administratifs validés du 1er coup</span>
                  <span className="text-xs font-black text-[#ff7b00] bg-orange-50 px-2.5 py-1 rounded-lg">98%</span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-slate-50/70 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-700">Formations certifiantes délivrées</span>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">1 200+</span>
                </div>
              </div>

              <div className="bg-[#0a3b8b] text-white p-4.5 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase text-blue-200">Horaires d'ouverture</p>
                  <p className="text-xs font-black">Lundi - Vendredi : 08h00 - 18h00</p>
                  <p className="text-[11px] text-blue-100">Samedi : 09h00 - 14h00</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  🕒
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Our values Grid */}
        <div className="mt-20">
          <h4 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Nos valeurs fondamentales</h4>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                  id={`value-card-${i}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${v.color} mb-4 shrink-0 transition-transform group-hover:scale-105`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 mb-2">{v.title}</h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
