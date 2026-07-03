import React from 'react';
import { ShieldCheck, UserCheck, Zap, Coins, HeartHandshake, Puzzle } from 'lucide-react';

const handshakeSuccess = "https://images.unsplash.com/photo-1573164713619-24c711fe7878?auto=format&fit=crop&w=800&q=65";

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Accompagnement de A à Z',
      description: 'Nous vous prenons en main depuis l’ébauche de votre idée d’entreprise jusqu’à l’enregistrement officiel et la mise sur le marché.',
      icon: ShieldCheck,
      bgColor: 'bg-blue-50 text-[#0a3b8b]',
    },
    {
      title: 'Conseillers qualifiés',
      description: 'Bénéficiez de l’expertise d’une équipe pluridisciplinaire de consultants en gestion, fiscalistes et spécialistes du digital.',
      icon: UserCheck,
      bgColor: 'bg-orange-50 text-[#ff7b00]',
    },
    {
      title: 'Réponses rapides',
      description: 'Parce que votre temps est précieux, nous nous engageons à traiter vos demandes d’informations sous un délai de 24h à 48h maximum.',
      icon: Zap,
      bgColor: 'bg-emerald-50 text-emerald-700',
    },
    {
      title: 'Tarifs accessibles',
      description: 'Une grille tarifaire transparente, ultra-compétitive et spécialement pensée pour les jeunes créateurs d’entreprises et budgets d’auto-emploi.',
      icon: Coins,
      bgColor: 'bg-purple-50 text-purple-700',
    },
    {
      title: 'Suivi personnalisé',
      description: 'Pas de réponses automatisées. Un conseiller dédié analyse votre projet et vous coache personnellement selon votre rythme.',
      icon: HeartHandshake,
      bgColor: 'bg-cyan-50 text-cyan-700',
    },
    {
      title: 'Solutions adaptées',
      description: 'Que vous soyez agriculteur, commerçant, artisan ou développeur Web, nous créons des solutions sur-mesure pour votre secteur.',
      icon: Puzzle,
      bgColor: 'bg-amber-50 text-amber-700',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="pourquoi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Nos Atouts majeurs</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Pourquoi Choisir Notre Centre d'Appui ?
          </h3>
          <p className="text-slate-600 text-sm">
            Notre différence réside dans notre approche humaine, notre rapidité de traitement et notre volonté constante de rendre l’entrepreneuriat simple, légal et durable.
          </p>
        </div>

        {/* Split teaser with Handshake image */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl" id="handshake-teaser">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md aspect-square max-w-[340px] mx-auto lg:mx-0 group">
            <img 
              src={handshakeSuccess} 
              alt="Partenariat et poignée de main de succès au Bénin" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <p className="text-white text-[10px] font-bold tracking-wide uppercase">
                🤝 Un pacte de réussite pour votre projet
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <h4 className="text-sm font-black text-[#0a3b8b] uppercase tracking-wider">Un engagement fort de bout en bout</h4>
            <h5 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
              Nous croyons en la force de vos idées et en la solidité de notre accompagnement.
            </h5>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              Nous n’offrons pas de simples formalités : nous bâtissons des partenariats à long terme. De l’immatriculation à l’APIEx jusqu’à la première levée de fonds ou l’optimisation fiscale de vos opérations au Bénin, notre cabinet vous épaule face à chaque défi.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-100 text-[10px] font-black uppercase px-2.5 py-1.5 rounded-lg">✓ Suivi personnalisé</span>
              <span className="bg-blue-50 text-[#0a3b8b] border border-blue-100 text-[10px] font-black uppercase px-2.5 py-1.5 rounded-lg">✓ Réactivité sous 24h</span>
              <span className="bg-orange-50 text-[#ff7b00] border border-orange-100 text-[10px] font-black uppercase px-2.5 py-1.5 rounded-lg">✓ Accréditation officielle</span>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all space-y-4 group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shrink-0 ${pt.bgColor} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#0a3b8b]">
                    {pt.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
