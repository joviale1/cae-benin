import React, { useState } from 'react';
import { MessageCircle, X, Send, HeartHandshake } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('Bonjour ! Je souhaite en savoir plus sur l’accompagnement de projet.');

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    const encodedMsg = encodeURIComponent(quickMsg);
    const whatsappUrl = `https://wa.me/2290165848010?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="whatsapp-floating-widget">
      
      {/* Quick message popup */}
      {isOpen && (
        <div 
          className="mb-3 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-slide-up"
          id="whatsapp-chatbox"
        >
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                💬
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wide">Conseiller en Ligne</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Répond sous 5 minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-emerald-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body chat container */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white border border-slate-100 rounded-2xl p-3.5 shadow-sm text-[11px] sm:text-xs text-slate-700 space-y-1">
              <p className="font-semibold text-[#0a3b8b]">Centre d’Appui aux Entrepreneurs :</p>
              <p>Bonjour ! Vous avez un projet d’entreprise ou une question sur nos tarifs ? Écrivez-nous directement ci-dessous pour démarrer la discussion.</p>
            </div>

            <textarea
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              placeholder="Votre message..."
              rows={3}
              className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>

            <button
              onClick={handleSendMessage}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-emerald-50 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Lancer la discussion WhatsApp</span>
            </button>
          </div>

          <div className="bg-white border-t border-slate-100 p-2 text-center text-[9px] text-slate-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-500" /> Accompagnement de A à Z
          </div>
        </div>
      )}

      {/* Primary Floating Circle Button */}
      <button
        onClick={handleOpenChat}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all shadow-xl hover:scale-105 relative cursor-pointer group ${
          isOpen ? 'bg-slate-800' : 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200'
        }`}
        id="whatsapp-trigger-btn"
        title="Besoin d'aide ? Discutez avec un conseiller sur WhatsApp."
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff7b00] text-[9px] font-bold rounded-full flex items-center justify-center text-white border border-white animate-bounce">
              1
            </span>
          </>
        )}
      </button>

    </div>
  );
}
