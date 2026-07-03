import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { servicesData } from '../data';
import { X, Trash2, FileCheck, Phone, CheckCircle, Calculator, Printer, ArrowRight } from 'lucide-react';

interface QuoteCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: ServiceItem[];
  onRemoveService: (serviceId: string) => void;
  onClearServices: () => void;
  onAddService: (service: ServiceItem) => void;
}

export default function QuoteCalculator({
  isOpen,
  onClose,
  selectedServices,
  onRemoveService,
  onClearServices,
  onAddService,
}: QuoteCalculatorProps) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [serviceQuantities, setServiceQuantities] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [generatedDevisNo, setGeneratedDevisNo] = useState('');

  if (!isOpen) return null;

  const handleQuantityChange = (serviceId: string, value: number) => {
    if (value < 1) return;
    setServiceQuantities((prev) => ({
      ...prev,
      [serviceId]: value,
    }));
  };

  const getQuantity = (serviceId: string) => {
    return serviceQuantities[serviceId] || 1;
  };

  const calculateTotal = () => {
    return selectedServices.reduce((acc, curr) => {
      const q = getQuantity(curr.id);
      return acc + curr.price * q;
    }, 0);
  };

  const handleRequestDevis = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) return;
    if (!clientName || !clientPhone) return;

    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      const devisNo = `CAE-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedDevisNo(devisNo);
      setIsSubmitted(true);
      setSubmitting(false);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendToWhatsApp = () => {
    const total = calculateTotal();
    const serviceListStr = selectedServices
      .map((s) => `- ${s.name} x${getQuantity(s.id)} (${(s.price * getQuantity(s.id)).toLocaleString('fr-FR')} FCFA)`)
      .join('%0A');

    const whatsappMessage = `Bonjour, je souhaite obtenir un devis officiel.%0A%0A*DEVIS RÉFÉRANCE :* ${generatedDevisNo}%0A*Nom:* ${clientName}%0A*Téléphone:* ${clientPhone}%0A%0A*PRESTATIONS DEMANDÉES :*%0A${serviceListStr}%0A%0A*TOTAL ESTIMÉ :* *${total.toLocaleString('fr-FR')} FCFA*%0A%0A_Merci de me recontacter pour valider ce devis._`;
    const whatsappUrl = `https://wa.me/2290165848010?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClearServices();
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setClientNotes('');
    setServiceQuantities({});
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id="devis-calculator-modal">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Backdrop overlay */}
        <div 
          onClick={onClose} 
          className="fixed inset-0 transition-opacity bg-slate-900/60 backdrop-blur-sm"
          id="calculator-overlay"
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-3xl border border-slate-100 sm:align-middle">
          
          {/* Header */}
          <div className="bg-[#0a3b8b] text-white px-6 py-5 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <Calculator className="w-6 h-6 text-[#ff7b00]" />
              <div>
                <h3 className="text-base font-black uppercase tracking-wide">
                  Simulateur de Devis Interactif
                </h3>
                <p className="text-[10px] text-blue-100">
                  Sélectionnez vos services et obtenez une estimation immédiate en FCFA.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              id="close-calculator-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content Area */}
          {isSubmitted ? (
            /* Success Summary View */
            <div className="p-8 text-center space-y-6" id="devis-success-view">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-black text-slate-900">Demande de Devis Enregistrée !</h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Votre simulation a été enregistrée avec succès sous le numéro unique <strong className="text-slate-800 font-bold">{generatedDevisNo}</strong>. Notre équipe étudie votre demande.
                </p>
              </div>

              {/* Devis summary table */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 max-w-xl mx-auto text-left space-y-4 print-area">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div>
                    <h5 className="text-xs font-black text-[#0a3b8b] uppercase">Centre d'Appui aux Entrepreneurs</h5>
                    <p className="text-[10px] text-slate-500">Réf : {generatedDevisNo}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-700">{clientName}</p>
                    <p className="text-[10px] text-slate-500">{clientPhone}</p>
                  </div>
                </div>

                <div className="space-y-2.5 max-h-40 overflow-y-auto pr-1">
                  {selectedServices.map((service) => (
                    <div key={service.id} className="flex justify-between text-xs text-slate-700">
                      <span>
                        {service.name} <span className="text-slate-400">x{getQuantity(service.id)}</span>
                      </span>
                      <span className="font-semibold text-slate-900">
                        {(service.price * getQuantity(service.id)).toLocaleString('fr-FR')} F
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-200 text-sm font-black text-[#0a3b8b]">
                  <span>TOTAL ESTIMÉ :</span>
                  <span className="text-base text-[#ff7b00]">{calculateTotal().toLocaleString('fr-FR')} FCFA</span>
                </div>
              </div>

              {/* Success Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-md shadow-emerald-50 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Envoyer sur WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimer le devis</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition-all cursor-pointer"
                >
                  Nouveau devis
                </button>
              </div>
            </div>
          ) : (
            /* Editing Simulator View */
            <form onSubmit={handleRequestDevis} className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* Left Column: Selected Prestations List */}
              <div className="md:col-span-7 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-[#0a3b8b] uppercase tracking-wider">
                    Prestations sélectionnées ({selectedServices.length})
                  </h4>
                  {selectedServices.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearServices}
                      className="text-[10px] font-bold text-red-500 hover:text-red-700 flex items-center space-x-1"
                      id="clear-all-services-btn"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Tout retirer</span>
                    </button>
                  )}
                </div>

                {selectedServices.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <p className="text-slate-400 text-xs font-medium">Aucun service n'est sélectionné pour le moment.</p>
                    
                    <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-[11px] text-slate-600 max-w-sm mx-auto">
                      Sélectionnez des services directement dans le catalogue ci-dessous en cliquant sur le bouton <span className="font-bold text-[#0a3b8b]">+</span>.
                    </div>

                    <div className="max-h-52 overflow-y-auto space-y-1.5 p-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase text-left">Ajouter rapidement :</p>
                      {servicesData.slice(0, 5).map((service) => (
                        <div key={service.id} className="flex justify-between items-center text-xs p-2 bg-slate-50 rounded-lg">
                          <span className="truncate max-w-[220px] font-semibold text-slate-700">{service.name}</span>
                          <button
                            type="button"
                            onClick={() => onAddService(service)}
                            className="px-2 py-1 bg-[#0a3b8b] text-white rounded font-bold text-[10px] hover:bg-[#144ea8]"
                          >
                            + {service.price.toLocaleString('fr-FR')} F
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1" id="selected-services-scroll">
                    {selectedServices.map((service) => (
                      <div
                        key={service.id}
                        className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate">{service.name}</p>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase">
                            {service.price.toLocaleString('fr-FR')} F {service.unit || ''}
                          </p>
                        </div>

                        {/* Quantity and Remove Button */}
                        <div className="flex items-center space-x-3 shrink-0">
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(service.id, getQuantity(service.id) - 1)}
                              className="px-2.5 py-1 text-slate-500 hover:bg-slate-50 font-bold"
                            >
                              -
                            </button>
                            <span className="px-2 py-1 text-xs font-bold text-slate-800 min-w-[20px] text-center">
                              {getQuantity(service.id)}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(service.id, getQuantity(service.id) + 1)}
                              className="px-2.5 py-1 text-slate-500 hover:bg-slate-50 font-bold"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemoveService(service.id)}
                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                            title="Retirer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subtotal calculation display */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>Nombre de services :</span>
                    <span>{selectedServices.length}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-black text-slate-900">
                    <span>TOTAL ESTIMÉ :</span>
                    <span className="text-lg text-[#ff7b00]">{calculateTotal().toLocaleString('fr-FR')} FCFA</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Contact Details Form */}
              <div className="md:col-span-5 p-6 space-y-4 bg-slate-50/50">
                <h4 className="text-xs font-bold text-[#0a3b8b] uppercase tracking-wider">
                  Vos Coordonnées pour le Devis
                </h4>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Votre Nom & Prénom *</label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ex : Bernadette Eyenga"
                      className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Votre Numéro de Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="Ex : +237 6 17 81 11 5"
                      className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Votre Email (Optionnel)</label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Ex : contact@domaine.com"
                      className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Description de votre projet d'activité</label>
                    <textarea
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      placeholder="Dites-nous en quelques mots sur quel type de projet vous travaillez pour obtenir des conseils plus fins..."
                      rows={3}
                      className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting || selectedServices.length === 0 || !clientName || !clientPhone}
                  className="w-full mt-4 py-3.5 bg-[#0a3b8b] hover:bg-[#144ea8] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-blue-50 cursor-pointer uppercase tracking-wider"
                  id="submit-devis-btn"
                >
                  {submitting ? (
                    <span>Génération en cours...</span>
                  ) : (
                    <>
                      <FileCheck className="w-4 h-4" />
                      <span>Générer mon devis gratuit</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
