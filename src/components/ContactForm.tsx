import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, CalendarDays, Calculator } from 'lucide-react';
import { servicesData } from '../data';

interface ContactFormProps {
  onBookAppointment: (appointment: any) => void;
  selectedPrebookServiceId?: string;
  onClearPrebookServiceId?: () => void;
}

export default function ContactForm({
  onBookAppointment,
  selectedPrebookServiceId,
  onClearPrebookServiceId,
}: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(selectedPrebookServiceId || 'diag-ent');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 - 10:00');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync state if prebooked service changes
  React.useEffect(() => {
    if (selectedPrebookServiceId) {
      setServiceId(selectedPrebookServiceId);
    }
  }, [selectedPrebookServiceId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;

    setLoading(true);
    setTimeout(() => {
      const newAppointment = {
        id: `apt-${Date.now()}`,
        name,
        email,
        phone,
        serviceId,
        date,
        timeSlot,
        notes,
        status: 'pending' as const,
      };

      onBookAppointment(newAppointment);
      setLoading(false);
      setIsSuccess(true);
      if (onClearPrebookServiceId) onClearPrebookServiceId();

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setNotes('');
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Prendre Contact</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Prise de Rendez-vous en Ligne & Contact Direct
          </h3>
          <p className="text-slate-600 text-sm">
            Remplissez notre formulaire pour réserver votre créneau de consultation ou écrivez-nous directement sur WhatsApp. Nous sommes là pour vous guider.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Contact details + Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Coordinates list */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <h4 className="text-xs font-bold text-[#0a3b8b] uppercase tracking-wider">
                Nos Coordonnées Officielles
              </h4>

              <div className="space-y-4.5">
                {/* Phones */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0a3b8b] flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Téléphones</p>
                    <p className="text-xs font-black text-slate-800">01 65 84 80 10</p>
                    <p className="text-[10px] text-slate-500 font-semibold">MTN / Moov : Appels direct & Renseignements</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">WhatsApp Conseiller</p>
                    <p className="text-xs font-black text-emerald-700 hover:underline cursor-pointer">
                      <a href="https://wa.me/2290165848010" target="_blank" rel="noreferrer">
                        +229 01 65 84 80 10
                      </a>
                    </p>
                    <p className="text-[10px] text-slate-500 font-semibold">Réponse sous quelques minutes</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff7b00] flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Adresse Courriel</p>
                    <p className="text-xs font-black text-slate-800 hover:underline">
                      <a href="mailto:contact@entrepreneur-appui.bj">contact@entrepreneur-appui.bj</a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Localisation du Siège</p>
                    <p className="text-xs font-black text-slate-800">
                      Avenue Jean-Paul II, Face Direction Générale des Impôts, Cotonou, Bénin
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Horaires de Travail</p>
                    <p className="text-xs font-black text-slate-800">Lundi - Vendredi : 08:00 - 18:00</p>
                    <p className="text-[10px] text-slate-500 font-semibold">Samedi : 09:00 - 14:00 (Sur RDV)</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Localisation Map Simulator (Polished representation) */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-between min-h-[220px]">
              <div className="space-y-1 z-10">
                <span className="text-[9px] font-bold text-[#ff7b00] uppercase tracking-widest">Plan d'accès</span>
                <h5 className="text-xs font-black text-slate-800">Venez nous rencontrer au Cabinet</h5>
              </div>

              {/* Decorative map visual */}
              <div className="absolute inset-0 bg-slate-100/50 mt-12 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0a3b8b_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
                
                {/* Styled paths like a vector map */}
                <svg className="w-full h-full opacity-30" viewBox="0 0 400 200">
                  <path d="M 0 50 Q 150 150 400 50" fill="none" stroke="#0a3b8b" strokeWidth="4" />
                  <path d="M 100 0 Q 180 180 250 200" fill="none" stroke="#ff7b00" strokeWidth="3" />
                  <path d="M 220 0 L 220 200" fill="none" stroke="#0a3b8b" strokeWidth="1.5" />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-2.5 rounded-2xl border border-blue-200 shadow-xl flex items-center space-x-2.5 pointer-events-auto">
                  <div className="w-5 h-5 rounded-full bg-[#0a3b8b] animate-ping absolute"></div>
                  <div className="w-5 h-5 rounded-full bg-[#ff7b00] flex items-center justify-center text-white text-[10px] font-black relative shadow">
                    ✓
                  </div>
                  <div className="text-[9px] font-bold text-slate-800 leading-tight">
                    <span>CAE Cotonou Cabinet</span>
                    <span className="block text-[8px] text-slate-400 font-medium">Face Impôts</span>
                  </div>
                </div>
              </div>

              {/* Action for real direction */}
              <div className="z-10 mt-auto pt-4 text-center">
                <button
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-[10px] rounded-lg tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  Itinéraire GPS Google Maps
                </button>
              </div>
            </div>

          </div>

          {/* Column 2: Appointment Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
            
            {isSuccess ? (
              <div className="text-center py-16 space-y-6" id="appointment-success">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-slate-900">Demande de Consultation Soumise !</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Nous vous remercions pour l’intérêt que vous portez à nos services d'appui. Notre secrétariat vous contactera par téléphone pour valider l’heure exacte de votre entretien.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#0a3b8b] hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-all"
                >
                  Réserver un autre rendez-vous
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black text-[#0a3b8b] uppercase tracking-wider flex items-center gap-1.5">
                    <CalendarDays className="w-4.5 h-4.5 text-[#ff7b00]" /> Formulaire de Demande de Rendez-vous
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    Fixez un entretien préliminaire de diagnostic ou réservez votre session de formation en quelques clics.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Votre Nom & Prénom *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex : Samuel Dossou"
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Numéro de Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ex : +229 01 65 84 80 10"
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Service Demandé *</label>
                      <select
                        value={serviceId}
                        onChange={(e) => setServiceId(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} ({s.price.toLocaleString('fr-FR')} F)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Date Souhaitée *</label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Créneau Horaire *</label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      >
                        <option value="08:30 - 10:00">08:30 - 10:00 (Matinée)</option>
                        <option value="10:30 - 12:00">10:30 - 12:00 (Matinée)</option>
                        <option value="13:00 - 14:30">13:00 - 14:30 (Après-midi)</option>
                        <option value="15:00 - 16:30">15:00 - 16:30 (Après-midi)</option>
                        <option value="17:00 - 18:00">17:00 - 18:00 (Fin de journée)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Adresse Email (Optionnel)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex : samuel@gmail.com"
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Vos Objectifs ou Précisions</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Indiquez brièvement le secteur de votre projet ou les questions prioritaires que vous souhaitez aborder..."
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !name || !phone || !date}
                    className="w-full py-4 bg-[#0a3b8b] hover:bg-[#144ea8] disabled:bg-slate-300 text-white font-extrabold text-xs rounded-xl transition-all shadow-md cursor-pointer uppercase tracking-wider"
                    id="book-appointment-submit-btn"
                  >
                    {loading ? 'Traitement en cours...' : 'Soumettre ma demande d’accompagnement'}
                  </button>

                </form>
              </div>
            )}

            {/* Quick trust help guidelines */}
            <div className="mt-6 p-4 bg-orange-50/50 border border-orange-100 rounded-2xl flex items-center space-x-3 text-slate-700 text-[10px] sm:text-xs">
              <span className="text-base">🛡️</span>
              <p className="font-medium text-slate-600">
                <span className="font-bold text-[#0a3b8b]">Engagement confidentialité :</span> Nous prenons la protection de vos brevets, marques et formules très au sérieux. Aucune information partagée ne sera diffusée.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
