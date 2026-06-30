import React, { useState } from 'react';
import { resourcesData } from '../data';
import { ResourceItem } from '../types';
import { Download, FileText, CheckCircle, ArrowDown, HelpCircle, Sparkles } from 'lucide-react';

export default function Resources() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  const handleDownloadSimulate = (item: ResourceItem) => {
    if (downloadingId) return; // wait for active download to finish
    
    setDownloadingId(item.id);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingId(null);
            setDownloadedIds((prevList) => [...prevList, item.id]);
            // Simulate open file warning or thank you
            alert(`Téléchargement terminé avec succès pour : "${item.title}" (${item.fileSize}). Le fichier est prêt.`);
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'guide':
        return 'Guide PDF';
      case 'modele':
        return 'Modèle Excel';
      case 'checklist':
        return 'Aide-Mémoire';
      default:
        return 'Fichier';
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'guide':
        return 'text-blue-600 bg-blue-50 border-blue-100';
      case 'modele':
        return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'checklist':
        return 'text-purple-600 bg-purple-50 border-purple-100';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  return (
    <section className="py-20 bg-slate-50" id="ressources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Boîte à Outils Gratuite</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Téléchargez Nos Ressources Professionnelles Offertes
          </h3>
          <p className="text-slate-600 text-sm">
            Mettez toutes les chances de votre côté. Nous mettons à votre disposition des modèles de documents, des guides méthodologiques et des trames interactives prêts à l’emploi.
          </p>
        </div>

        {/* Resources Grid layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {resourcesData.map((res) => {
            const isCurrentlyDownloading = downloadingId === res.id;
            const hasDownloaded = downloadedIds.includes(res.id);

            return (
              <div
                key={res.id}
                id={`resource-card-${res.id}`}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  
                  {/* Category and Size label */}
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                    <span className={`px-2.5 py-1 rounded-lg border ${getCategoryColor(res.category)}`}>
                      {getCategoryLabel(res.category)}
                    </span>
                    <span className="text-slate-400 font-mono">
                      {res.fileSize}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-black text-slate-900">
                      {res.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                      {res.description}
                    </p>
                  </div>

                </div>

                {/* Download interactive actions */}
                <div className="space-y-4">
                  {isCurrentlyDownloading ? (
                    <div className="space-y-2" id="download-progress-bar">
                      <div className="flex justify-between text-[10px] font-bold text-[#0a3b8b]">
                        <span>Téléchargement en cours...</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-[#ff7b00] h-full rounded-full transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : hasDownloaded ? (
                    <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-150 flex items-center justify-between text-emerald-800 text-xs font-bold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500" /> Fichier obtenu !
                      </span>
                      <button
                        onClick={() => handleDownloadSimulate(res)}
                        className="text-[10px] underline hover:text-emerald-900 font-semibold"
                      >
                        Télécharger à nouveau
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDownloadSimulate(res)}
                      className="w-full py-3.5 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                      id={`btn-download-${res.id}`}
                    >
                      <Download className="w-4 h-4 text-slate-400" />
                      <span>Télécharger gratuitement</span>
                    </button>
                  )}

                  <p className="text-[10px] text-slate-400 text-center font-semibold">
                    Déjà obtenu par {res.downloadsCount + (hasDownloaded ? 1 : 0)} entrepreneurs cette semaine
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Form model requested notification */}
        <div className="mt-12 text-center p-6 bg-white border border-slate-200/60 rounded-3xl max-w-2xl mx-auto space-y-3.5">
          <p className="text-xs text-slate-600 font-semibold">
            💡 Vous recherchez un document ou un modèle de lettre administratif spécifique non listé ici ?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs text-[#0a3b8b] font-black uppercase hover:underline"
          >
            Faites-nous une demande par message →
          </button>
        </div>

      </div>
    </section>
  );
}
