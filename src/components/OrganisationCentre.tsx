import React from 'react';
import { 
  Users, 
  Crown, 
  Coins, 
  GraduationCap, 
  Cpu, 
  Monitor, 
  Megaphone, 
  ClipboardList, 
  Sparkles, 
  UserPlus, 
  ChevronDown,
  Building,
  Briefcase
} from 'lucide-react';

export default function OrganisationCentre() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden" id="organisation">
      {/* Decorative premium background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0a3b8b]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff7b00]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a3b8b]/10 text-[#0a3b8b] text-[10px] font-black uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" /> Structure Institutionnelle
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight" id="org-title">
            Organisation du Centre
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            Découvrez la structure de gouvernance et les pôles opérationnels de notre cabinet d’expertise. Une équipe soudée et qualifiée, dévouée au développement des PME béninoises et à l’émergence d’entreprises d’envergure internationale.
          </p>
        </div>

        {/* Organigram Tree Visual Container */}
        <div className="relative flex flex-col items-center space-y-12" id="organigram-root">
          
          {/* Connector Line overlay (Desktop only) */}
          <div className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#0a3b8b]/40 via-blue-200 to-amber-200 hidden lg:block -z-10"></div>

          {/* ==================== LEVEL 1 ==================== */}
          <div className="w-full flex flex-col items-center relative" id="org-level-1">
            <div className="text-center mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0a3b8b] bg-[#0a3b8b]/5 px-3 py-1 rounded-full border border-[#0a3b8b]/10">
                Niveau 1 — Haute Direction
              </span>
            </div>
            
            {/* PDG Card */}
            <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl border-2 border-amber-400/80 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 relative group">
              {/* Premium Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Gold luxury crown tag */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Crown className="w-3 h-3 text-white fill-white" /> Direction Générale
              </div>

              <div className="flex items-center space-x-4 mt-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0a3b8b] to-indigo-800 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-blue-900/10 shrink-0">
                  MB
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 leading-tight">Mr Baudelaire</h4>
                  <p className="text-[#ff7b00] text-xs font-bold uppercase tracking-wider">Président Directeur Général (PDG)</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Stratégie globale & Partenariats internationaux</p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-4 lg:hidden">
              <ChevronDown className="w-5 h-5 text-[#0a3b8b]/50 animate-bounce" />
            </div>
          </div>


          {/* ==================== LEVEL 2 ==================== */}
          <div className="w-full flex flex-col items-center relative" id="org-level-2">
            <div className="text-center mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Niveau 2 — Direction Exécutive
              </span>
            </div>

            {/* Grid of Directors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              
              {/* Card DAF */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200/80 hover:border-[#0a3b8b]/40 hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute top-4 right-4 text-slate-300 group-hover:text-emerald-500 transition-colors">
                  <Coins className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                    MB
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Pôle Finance</span>
                    <h4 className="text-sm font-black text-slate-900">Mr BLECK</h4>
                    <p className="text-slate-600 text-[11px] font-semibold uppercase">Directeur Administratif & Financier (DAF)</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-medium mt-3 border-t border-slate-100 pt-3">
                  Gestion budgétaire, ingénierie financière des projets & relations bancaires.
                </p>
              </div>

              {/* Card Dir Formation */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200/80 hover:border-[#0a3b8b]/40 hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-500 transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0a3b8b] text-white flex items-center justify-center font-bold text-lg">
                    MT
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Pôle Renforcement</span>
                    <h4 className="text-sm font-black text-slate-900">Mr TOFFA</h4>
                    <p className="text-slate-600 text-[11px] font-semibold uppercase">Directeur Formation</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-medium mt-3 border-t border-slate-100 pt-3">
                  Séminaires, formations certifiées, ateliers pratiques de gestion et incubateur d’idées.
                </p>
              </div>

              {/* Card Dir Technique */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200/80 hover:border-[#0a3b8b]/40 hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute top-4 right-4 text-slate-300 group-hover:text-orange-500 transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ff7b00] text-white flex items-center justify-center font-bold text-lg">
                    MD
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Pôle Ingénierie</span>
                    <h4 className="text-sm font-black text-slate-900">Mr DOHSOU</h4>
                    <p className="text-slate-600 text-[11px] font-semibold uppercase">Directeur Technique</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-medium mt-3 border-t border-slate-100 pt-3">
                  Conduite d’études, Business Plans, audit & formalisation des structures auprès de l’APIEx.
                </p>
              </div>

            </div>

            <div className="w-full flex justify-center mt-4 lg:hidden">
              <ChevronDown className="w-5 h-5 text-slate-400/60 animate-bounce" />
            </div>
          </div>


          {/* ==================== LEVEL 3 ==================== */}
          <div className="w-full flex flex-col items-center relative" id="org-level-3">
            <div className="text-center mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0a3b8b] bg-[#0a3b8b]/5 px-3 py-1 rounded-full border border-[#0a3b8b]/10">
                Niveau 3 — Responsables Opérationnels
              </span>
            </div>

            {/* Grid of Managers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              
              {/* Card IT */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative group flex space-x-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0a3b8b] flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Mr MEDJÈ</h4>
                  <p className="text-[#0a3b8b] text-[11px] font-bold uppercase">Responsable Informatique</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-1">
                    Développement web, outils digitaux de gestion, assistance technique & formation numérique.
                  </p>
                </div>
              </div>

              {/* Card Communication */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 relative group flex space-x-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Mr OGAN</h4>
                  <p className="text-emerald-700 text-[11px] font-bold uppercase">Responsable Communication</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-1">
                    Marketing digital, communication de marque, événementiel & relations publiques des entrepreneurs.
                  </p>
                </div>
              </div>

            </div>

            <div className="w-full flex justify-center mt-4 lg:hidden">
              <ChevronDown className="w-5 h-5 text-slate-400/60 animate-bounce" />
            </div>
          </div>


          {/* ==================== LEVEL 4 ==================== */}
          <div className="w-full flex flex-col items-center relative" id="org-level-4">
            <div className="text-center mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ff7b00] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                Niveau 4 — Administration & Inclusion (Recrutement actif)
              </span>
            </div>

            {/* Grid of Administrative staff (To recruit / vacant with unique hiring style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              
              {/* Card Secrétaire */}
              <div className="bg-gradient-to-tr from-slate-50 to-white rounded-2xl p-5 border-2 border-dashed border-slate-300 hover:border-amber-400/60 hover:shadow-lg transition-all duration-300 relative flex space-x-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-slate-600 group-hover:text-slate-800">Secrétaire Générale</h4>
                    <span className="bg-amber-100 text-amber-800 text-[8px] font-black uppercase px-2 py-0.5 rounded">Poste à recruter</span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-semibold uppercase group-hover:text-[#0a3b8b] transition-colors">Pôle Administratif</p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    Gestion de l’accueil, suivi des rendez-vous et secrétariat administratif. Déposez votre candidature spontanée.
                  </p>
                  <div className="pt-2">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-1 text-[9px] font-black uppercase text-[#0a3b8b] group-hover:text-[#ff7b00] transition-colors"
                    >
                      <UserPlus className="w-3.5 h-3.5" /> Postuler ou recommander
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Féminin & Inclusion */}
              <div className="bg-gradient-to-tr from-slate-50 to-white rounded-2xl p-5 border-2 border-dashed border-slate-300 hover:border-amber-400/60 hover:shadow-lg transition-all duration-300 relative flex space-x-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-slate-600 group-hover:text-slate-800">Resp. Entrepreneuriat Féminin / Inclusion</h4>
                    <span className="bg-amber-100 text-amber-800 text-[8px] font-black uppercase px-2 py-0.5 rounded">Poste à recruter</span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-semibold uppercase group-hover:text-[#0a3b8b] transition-colors">Inclusion & Genre</p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    Suivi et mentorat des porteuses de projet, élaboration de bourses dédiées, programmes d'inclusion financière.
                  </p>
                  <div className="pt-2">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-1 text-[9px] font-black uppercase text-[#0a3b8b] group-hover:text-[#ff7b00] transition-colors"
                    >
                      <UserPlus className="w-3.5 h-3.5" /> Postuler ou recommander
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Call to action at bottom of organigram */}
        <div className="mt-16 text-center bg-slate-900 text-white rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto border border-white/10 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7b00]/10 rounded-full blur-2xl"></div>
          <div className="relative space-y-4">
            <h4 className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#ff7b00]">
              Cabinet Agréé — Dynamisme & Compétence pour votre Croissance
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
              Chaque membre du Centre d’Appui aux Entrepreneurs met un point d’honneur à respecter nos valeurs d’intégrité, de confidentialité absolue et d’engagement personnalisé de A à Z.
            </p>
            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#0a3b8b] hover:bg-blue-800 text-white text-[10px] font-black uppercase rounded-xl tracking-wider transition-all cursor-pointer shadow-lg shadow-blue-900/40"
              >
                <Briefcase className="w-3.5 h-3.5" /> Prendre rendez-vous avec notre équipe
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
