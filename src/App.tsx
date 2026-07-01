import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AccompagnementProjet from './components/AccompagnementProjet';
import OrganisationCentre from './components/OrganisationCentre';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesList from './components/ServicesList';
import AcademySection from './components/AcademySection';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import BlogActualites from './components/BlogActualites';
import Resources from './components/Resources';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteCalculator from './components/QuoteCalculator';
import { ServiceItem, ProjectItem, Appointment } from './types';
import { Sparkles, Phone, MessageSquare, ArrowUp, Send, CheckCircle, BellRing } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [selectedServicesInDevis, setSelectedServicesInDevis] = useState<ServiceItem[]>([]);
  const [customProjects, setCustomProjects] = useState<ProjectItem[]>([]);
  const [isDevisModalOpen, setIsDevisModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [prebookServiceId, setPrebookServiceId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Real-time flash notifications list representing training sessions or funding deadlines
  const [activeNotification, setActiveNotification] = useState<string | null>(
    '🔥 Offre Spéciale : 15% de réduction sur l’élaboration de Business Plan jusqu’au 15 Juillet 2026 !'
  );

  // Sync state from localStorage for added projects
  useEffect(() => {
    try {
      const savedProjects = localStorage.getItem('cae_custom_projects');
      if (savedProjects) {
        setCustomProjects(JSON.parse(savedProjects));
      }
      
      const savedDevis = localStorage.getItem('cae_devis_services');
      if (savedDevis) {
        setSelectedServicesInDevis(JSON.parse(savedDevis));
      }
    } catch (e) {
      console.error("Erreur de chargement du localStorage :", e);
    }
  }, []);

  // Show or hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Live Section Observer
      const sections = ['accueil', 'propos', 'organisation', 'services', 'academie', 'pourquoi', 'portfolio', 'actualites', 'ressources', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddToDevis = (service: ServiceItem) => {
    const exists = selectedServicesInDevis.some((s) => s.id === service.id);
    let updated: ServiceItem[];
    if (exists) {
      updated = selectedServicesInDevis.filter((s) => s.id !== service.id);
    } else {
      updated = [...selectedServicesInDevis, service];
    }
    setSelectedServicesInDevis(updated);
    localStorage.setItem('cae_devis_services', JSON.stringify(updated));
  };

  const handleRemoveFromDevis = (serviceId: string) => {
    const updated = selectedServicesInDevis.filter((s) => s.id !== serviceId);
    setSelectedServicesInDevis(updated);
    localStorage.setItem('cae_devis_services', JSON.stringify(updated));
  };

  const handleClearDevis = () => {
    setSelectedServicesInDevis([]);
    localStorage.removeItem('cae_devis_services');
  };

  const handleAddProject = (project: ProjectItem) => {
    const updated = [project, ...customProjects];
    setCustomProjects(updated);
    localStorage.setItem('cae_custom_projects', JSON.stringify(updated));
  };

  const handleBookServiceImmediate = (service: ServiceItem) => {
    setPrebookServiceId(service.id);
    handleNavigate('contact');
    setTimeout(() => {
      const selectEl = document.querySelector('select');
      if (selectEl) {
        selectEl.classList.add('ring-4', 'ring-[#ff7b00]', 'transition-all');
        setTimeout(() => selectEl.classList.remove('ring-4', 'ring-[#ff7b00]'), 2000);
      }
    }, 400);
  };

  const handleBookAppointmentLocal = (appointment: Appointment) => {
    // Save to local registry just in case
    try {
      const existing = localStorage.getItem('cae_appointments') || '[]';
      const parsed = JSON.parse(existing);
      parsed.push(appointment);
      localStorage.setItem('cae_appointments', JSON.stringify(parsed));
    } catch (e) {
      console.error(e);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#ff7b00]/20 selection:text-[#0a3b8b]">
      
      {/* Dynamic Flash Banner */}
      {activeNotification && (
        <div 
          className="bg-[#ff7b00] text-white py-2 px-4 text-center text-xs font-extrabold flex items-center justify-center gap-2 relative z-50 animate-pulse"
          id="flash-banner"
        >
          <BellRing className="w-4 h-4 shrink-0 animate-bounce" />
          <span>{activeNotification}</span>
          <button
            onClick={() => setActiveNotification(null)}
            className="absolute right-4 text-white/80 hover:text-white font-bold p-1 text-[10px] uppercase cursor-pointer"
            id="close-flash-banner-btn"
          >
            Fermer
          </button>
        </div>
      )}

      {/* Main Navigation Component */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAppointmentModal={() => handleNavigate('contact')}
        onOpenDevisModal={() => setIsDevisModalOpen(true)}
        customProjects={customProjects}
      />

      {/* Hero Section */}
      <Hero
        onOpenAppointment={() => handleNavigate('contact')}
        onOpenWhatsApp={() => {
          const url = "https://wa.me/2290165848010?text=Bonjour, je souhaite être recontacté pour un accompagnement de projet.";
          window.open(url, "_blank");
        }}
        onNavigateToServices={() => handleNavigate('services')}
      />

      {/* À propos Section */}
      <About />

      {/* Comment nous accompagnons un projet Section */}
      <AccompagnementProjet />

      {/* Organisation du Centre Section */}
      <OrganisationCentre />

      {/* Nos Services with interactive prices, category filters, and devis button */}
      <ServicesList
        onAddToDevis={handleAddToDevis}
        selectedServiceIdsInDevis={selectedServicesInDevis.map((s) => s.id)}
        onBookService={handleBookServiceImmediate}
      />

      {/* Académie Entrepreneuriale — Centre de Formation & Ressources */}
      <AcademySection />

      {/* Pourquoi nous choisir ? */}
      <WhyChooseUs />

      {/* Showcase Portfolio section with uploaded custom projects support */}
      <Portfolio
        customProjects={customProjects}
        onAddProject={handleAddProject}
      />

      {/* Témoignages */}
      <Testimonials />

      {/* Actualités with notification systems and newsletter */}
      <BlogActualites />

      {/* Ressources gratuites with download simulations */}
      <Resources />

      {/* FAQ Accordions */}
      <FAQSection />

      {/* Contact Form with Appointment Scheduler & map */}
      <ContactForm
        onBookAppointment={handleBookAppointmentLocal}
        selectedPrebookServiceId={prebookServiceId}
        onClearPrebookServiceId={() => setPrebookServiceId(undefined)}
      />

      {/* Footer Section */}
      <footer className="bg-slate-950 text-white pt-16 pb-8" id="footer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12">
            
            {/* Branding column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#0a3b8b] flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase leading-tight tracking-wider">Centre d’Appui</h4>
                  <p className="text-[10px] font-bold text-[#ff7b00] uppercase tracking-wider">aux Entrepreneurs</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Cabinet agréé de conseil, formalisation d’entreprise, d’accompagnement et de formations pour porteurs de projets d'activité.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest mb-4">Navigation</h5>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li><button onClick={() => handleNavigate('accueil')} className="hover:text-white">Accueil</button></li>
                <li><button onClick={() => handleNavigate('propos')} className="hover:text-white">À Propos</button></li>
                <li><button onClick={() => handleNavigate('services')} className="hover:text-white">Prestations & Tarifs</button></li>
                <li><button onClick={() => handleNavigate('portfolio')} className="hover:text-white">Projets Réussis</button></li>
              </ul>
            </div>

            {/* Services highlights */}
            <div>
              <h5 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest mb-4">Nos Spécialités</h5>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li><span className="text-slate-300">✓</span> Aide à la Création d’Entreprise</li>
                <li><span className="text-slate-300">✓</span> Élaboration de Business Plan</li>
                <li><span className="text-slate-300">✓</span> Formation continue en Gestion</li>
                <li><span className="text-slate-300">✓</span> Conception Graphique & Web</li>
              </ul>
            </div>

            {/* Newsletter Fast field */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest mb-4">Contact direct</h5>
              <p className="text-xs text-slate-400 font-medium">
                Cotonou, Bénin <br />
                01 65 84 80 10
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4.5 py-2 bg-[#0a3b8b] hover:bg-blue-800 text-white text-[10px] font-extrabold uppercase rounded-lg tracking-wider transition-all"
              >
                📞 Demander un rappel
              </button>
            </div>

          </div>

          {/* Legal Rights */}
          <div className="pt-8 text-center text-xs text-slate-500 font-medium flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2026 Centre d'Appui aux Entrepreneurs. Tous droits réservés.</p>
            <p className="text-[10px]">Statut : Agréé par l’écosystème d’appui au développement des PME.</p>
          </div>

        </div>
      </footer>

      {/* Interactive Quote Simulation Drawer Modal */}
      <QuoteCalculator
        isOpen={isDevisModalOpen}
        onClose={() => setIsDevisModalOpen(false)}
        selectedServices={selectedServicesInDevis}
        onRemoveService={handleRemoveFromDevis}
        onClearServices={handleClearDevis}
        onAddService={handleAddToDevis}
      />

      {/* Floating Scroll to top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-24 right-6 p-3 rounded-full bg-[#0a3b8b]/90 text-white shadow-lg transition-all hover:bg-[#0a3b8b] z-40 cursor-pointer border border-blue-400/20"
          title="Retourner en haut de la page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp chat widget */}
      <WhatsAppButton />

    </div>
  );
}
