import React, { useState } from 'react';
import { newsData } from '../data';
import { NewsItem } from '../types';
import { Bell, BookOpen, Calendar, ArrowRight, Share2, Filter, Info, Sparkles } from 'lucide-react';

export default function BlogActualites() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [subscribedCategories, setSubscribedCategories] = useState<string[]>([]);
  const [successEmail, setSuccessEmail] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Active training notifications list
  const upcomingFormations = [
    {
      title: 'Gestion & Comptabilité Simplifiée',
      date: '15 Juillet 2026',
      price: '40 000 FCFA',
      duration: '3 Jours',
      badge: 'Bientôt complet',
    },
    {
      title: 'Marketing Digital & Publicité Facebook',
      date: '22 Juillet 2026',
      price: '30 000 FCFA',
      duration: '2 Jours',
      badge: 'Nouveau',
    },
    {
      title: 'Création de CV & Pitch Professionnel',
      date: '05 Août 2026',
      price: 'Gracieuseté CAE',
      duration: '1 Journée',
      badge: 'Gratuit',
    }
  ];

  const filteredNews = newsData.filter((item) => {
    return activeFilter === 'all' || item.category === activeFilter;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'financement':
        return 'text-emerald-700 bg-emerald-50 border-emerald-100';
      case 'conseils':
        return 'text-blue-700 bg-blue-50 border-blue-100';
      case 'programme':
        return 'text-orange-700 bg-orange-50 border-orange-100';
      case 'astuces':
        return 'text-purple-700 bg-purple-50 border-purple-100';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-100';
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'financement':
        return 'Opportunités de Financement';
      case 'conseils':
        return 'Conseils aux Entrepreneurs';
      case 'programme':
        return 'Nouveaux Programmes & Formations';
      case 'astuces':
        return 'Astuces de Gestion';
      default:
        return cat;
    }
  };

  const handleSubscribe = (category: string) => {
    if (subscribedCategories.includes(category)) {
      setSubscribedCategories(subscribedCategories.filter((c) => c !== category));
    } else {
      setSubscribedCategories([...subscribedCategories, category]);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setSuccessEmail(`Merci d'avoir activé les notifications ! Vous recevrez nos bulletins hebdomadaires à ${inputValue}.`);
    setInputValue('');
    setTimeout(() => setSuccessEmail(''), 6000);
  };

  return (
    <section className="py-20 bg-white" id="actualites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Actualités & Veille Entrepreneuriale</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Conseils, Opportunités de Financement & Programmes
          </h3>
          <p className="text-slate-600 text-sm">
            Retrouvez chaque semaine les appels à projets officiels, des guides de gestion gratuits, des concours nationaux et l'agenda de nos prochaines sessions de formations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Column: Blog Posts (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Category Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { id: 'all', label: 'Toutes les actualités' },
                { id: 'conseils', label: 'Conseils pratiques' },
                { id: 'financement', label: 'Financements' },
                { id: 'programme', label: 'Formations' },
                { id: 'astuces', label: 'Gestion' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeFilter === filter.id
                      ? 'bg-[#0a3b8b] text-white'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* News feed list */}
            <div className="space-y-6" id="news-posts-feed">
              {filteredNews.map((news) => (
                <article
                  key={news.id}
                  id={`news-card-${news.id}`}
                  className="bg-white border border-slate-150 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row"
                >
                  {/* Article Thumbnail */}
                  {news.imageUrl && (
                    <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden bg-slate-50 shrink-0">
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Article Details */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2 items-center text-[10px] text-slate-400 font-bold">
                        <span className={`px-2.5 py-1 rounded-lg uppercase tracking-wider border ${getCategoryColor(news.category)}`}>
                          {getCategoryLabel(news.category)}
                        </span>
                        <span>•</span>
                        <span>{news.date}</span>
                        <span>•</span>
                        <span>Lect. {news.readTime}</span>
                      </div>

                      <h4 className="text-base font-black text-slate-900 hover:text-[#0a3b8b] cursor-pointer">
                        {news.title}
                      </h4>

                      <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-3">
                        {news.content}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <button 
                        onClick={() => alert(`Partage de l'article : "${news.title}"`)}
                        className="text-slate-400 hover:text-slate-600 flex items-center gap-1 font-semibold"
                      >
                        <Share2 className="w-4 h-4" /> Partager
                      </button>

                      <button
                        onClick={() => alert(`Lecture de l'article complet bientôt disponible ! Réf: ${news.id}`)}
                        className="text-[#0a3b8b] hover:text-blue-800 font-bold flex items-center gap-1"
                      >
                        <span>Lire l'article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </article>
              ))}
            </div>

          </div>

          {/* Sidebar Column: Notifications & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Formation Alerts Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 space-y-5" id="formation-notifications-box">
              <div className="flex items-center space-x-2.5 pb-3 border-b border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-[#ff7b00] shrink-0">
                  <Bell className="w-4.5 h-4.5 animate-swing" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">Alerte Formations</h4>
                  <p className="text-[10px] text-slate-400">Restez informé des prochaines sessions.</p>
                </div>
              </div>

              {/* Training notifications list */}
              <div className="space-y-4">
                {upcomingFormations.map((f, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-white border border-slate-100 rounded-2xl shadow-sm relative overflow-hidden space-y-2 group"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-black uppercase bg-orange-50 text-[#ff7b00] px-2 py-0.5 rounded">
                        {f.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-300" /> {f.date}
                      </span>
                    </div>

                    <h5 className="text-xs font-bold text-slate-800 group-hover:text-[#0a3b8b] transition-colors leading-tight">
                      {f.title}
                    </h5>

                    <div className="flex justify-between items-center pt-2 text-[10px] text-slate-500 border-t border-slate-50">
                      <span>Tarif : <strong className="text-slate-800 font-bold">{f.price}</strong></span>
                      <span>Durée : <strong className="text-slate-800 font-bold">{f.duration}</strong></span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-[#0a3b8b] hover:bg-[#144ea8] text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>M’inscrire à une session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Newsletter Subscription Card */}
            <div className="bg-gradient-to-tr from-[#0a3b8b] to-blue-900 rounded-3xl p-6 text-white space-y-4 shadow-xl">
              <div className="space-y-1.5">
                <div className="inline-flex items-center space-x-1 px-2.5 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase">
                  <Sparkles className="w-3 h-3 text-[#ff7b00]" />
                  <span>Hebdomadaire</span>
                </div>
                <h4 className="text-base font-black uppercase tracking-wide">Lettre d’Information</h4>
                <p className="text-blue-100 text-[11px] leading-relaxed">
                  Inscrivez-vous pour recevoir les opportunités de financement, concours locaux et astuces de gestion directement dans votre boîte mail.
                </p>
              </div>

              {successEmail && (
                <div className="p-3 bg-emerald-500/25 border border-emerald-500/20 rounded-xl text-xs text-white">
                  {successEmail}
                </div>
              )}

              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="votre.email@domaine.com"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#ff7b00] focus:bg-white/20"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#ff7b00] hover:bg-orange-600 font-bold text-xs rounded-xl transition-all uppercase tracking-wider"
                >
                  S'abonner gratuitement
                </button>
              </form>

              <div className="text-[10px] text-blue-200 text-center font-medium">
                ✓ Sans spam. Désinscription possible en un clic.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
