import React, { useState, useEffect, useRef } from 'react';
import { Search, Phone, BookOpen, Menu, X, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { servicesData, newsData, faqData, initialProjects, resourcesData } from '../data';
import { ServiceItem, NewsItem, FAQItem, ProjectItem, ResourceItem } from '../types';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenAppointmentModal: () => void;
  onOpenDevisModal: () => void;
  customProjects: ProjectItem[];
}

export default function Navbar({
  onNavigate,
  activeSection,
  onOpenAppointmentModal,
  onOpenDevisModal,
  customProjects,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchResults, setSearchResults] = useState<{
    services: ServiceItem[];
    news: NewsItem[];
    faqs: FAQItem[];
    projects: ProjectItem[];
    resources: ResourceItem[];
  }>({
    services: [],
    news: [],
    faqs: [],
    projects: [],
    resources: [],
  });

  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle live advanced search and categorization
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ services: [], news: [], faqs: [], projects: [], resources: [] });
      return;
    }

    const q = searchQuery.toLowerCase();

    // Filter Services
    const filteredServices = servicesData.filter(
      (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    );

    // Filter News
    const filteredNews = newsData.filter(
      (n) => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)
    );

    // Filter FAQs
    const filteredFaqs = faqData.filter(
      (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );

    // Filter Projects (including uploaded ones)
    const filteredProjects = [...initialProjects, ...customProjects].filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.entrepreneur.toLowerCase().includes(q) ||
        p.sector.toLowerCase().includes(q)
    );

    // Filter Resources
    const filteredResources = resourcesData.filter(
      (r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
    );

    setSearchResults({
      services: filteredServices,
      news: filteredNews,
      faqs: filteredFaqs,
      projects: filteredProjects,
      resources: filteredResources,
    });
  }, [searchQuery, customProjects]);

  const totalResultsCount =
    (selectedCategoryFilter === 'all' || selectedCategoryFilter === 'services' ? searchResults.services.length : 0) +
    (selectedCategoryFilter === 'all' || selectedCategoryFilter === 'news' ? searchResults.news.length : 0) +
    (selectedCategoryFilter === 'all' || selectedCategoryFilter === 'faqs' ? searchResults.faqs.length : 0) +
    (selectedCategoryFilter === 'all' || selectedCategoryFilter === 'projects' ? searchResults.projects.length : 0) +
    (selectedCategoryFilter === 'all' || selectedCategoryFilter === 'resources' ? searchResults.resources.length : 0);

  const handleResultClick = (sectionId: string, elementId?: string) => {
    onNavigate(sectionId);
    setShowSearchDropdown(false);
    setSearchQuery('');
    setMobileMenuOpen(false);

    if (elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-4', 'ring-[#ff7b00]', 'ring-offset-2', 'transition-all', 'duration-500');
          setTimeout(() => {
            el.classList.remove('ring-4', 'ring-[#ff7b00]', 'ring-offset-2');
          }, 2500);
        }
      }, 300);
    }
  };

  const navLinks = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À Propos', id: 'propos' },
    { label: 'Accompagnement', id: 'accompagnement' },
    { label: 'Organisation', id: 'organisation' },
    { label: 'Nos Services', id: 'services' },
    { label: 'Pourquoi nous ?', id: 'pourquoi' },
    { label: 'Projets', id: 'portfolio' },
    { label: 'Actualités', id: 'actualites' },
    { label: 'Ressources', id: 'ressources' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm" id="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div 
            onClick={() => handleResultClick('accueil')} 
            className="flex items-center space-x-3 cursor-pointer shrink-0"
            id="nav-logo"
          >
            {/* Minimal SVG recreate of the logo shape for extreme professional look */}
            <div className="w-11 h-11 bg-gradient-to-tr from-[#0a3b8b] to-[#1e5dbb] rounded-xl flex items-center justify-center text-white font-bold text-xl relative shadow-md shadow-blue-200">
              C
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#ff7b00] rounded-lg flex items-center justify-center text-[10px] font-black shadow-sm">
                A
              </div>
            </div>
            <div className="hidden md:block">
              <span className="block font-black text-[#0a3b8b] tracking-tight text-lg leading-tight uppercase">
                Centre d’Appui
              </span>
              <span className="block text-xs font-semibold text-[#ff7b00] tracking-wider uppercase leading-none">
                aux Entrepreneurs
              </span>
            </div>
          </div>

          {/* Large Screen Navigation Links */}
          <div className="hidden lg:flex space-x-1 xl:space-x-2" id="nav-desktop-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleResultClick(link.id)}
                className={`px-2.5 py-2 rounded-lg text-[13px] xl:text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-[#0a3b8b] bg-blue-50/70 font-semibold'
                    : 'text-slate-600 hover:text-[#0a3b8b] hover:bg-slate-50'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Advanced Search Bar & Actions Container */}
          <div className="flex items-center space-x-3" id="nav-actions">
            
            {/* Search Box */}
            <div ref={searchRef} className="relative hidden sm:block w-48 md:w-64" id="nav-search-container">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un service, guide..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => setShowSearchDropdown(true)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs rounded-xl pl-9 pr-8 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b] focus:bg-white transition-all"
                  id="search-input-field"
                />
                <Search className="absolute left-3 top-3 w-3.5 h-3.5 text-slate-400" />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setShowSearchDropdown(false);
                    }}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    id="search-clear-btn"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Advanced Search Results Dropdown with Category Filters */}
              {showSearchDropdown && searchQuery && (
                <div 
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden"
                  id="search-dropdown"
                >
                  {/* Category filters bar inside search */}
                  <div className="bg-slate-50 p-2.5 border-b border-slate-100 flex items-center justify-between gap-1 overflow-x-auto shrink-0 scrollbar-none">
                    <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <Filter className="w-3 h-3 text-slate-400" /> Filtres :
                    </span>
                    <div className="flex gap-1">
                      {[
                        { id: 'all', label: 'Tous' },
                        { id: 'services', label: 'Services' },
                        { id: 'news', label: 'Infos' },
                        { id: 'faqs', label: 'FAQ' },
                        { id: 'projects', label: 'Projets' },
                        { id: 'resources', label: 'Guides' },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedCategoryFilter(cat.id)}
                          className={`px-2 py-0.5 text-[10px] rounded-md font-semibold transition-all shrink-0 ${
                            selectedCategoryFilter === cat.id
                              ? 'bg-[#0a3b8b] text-white'
                              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Results scrollable container */}
                  <div className="max-h-[360px] overflow-y-auto p-2 space-y-3" id="search-results-list">
                    {totalResultsCount === 0 ? (
                      <div className="py-8 text-center text-slate-400 text-xs">
                        Aucun résultat trouvé pour « <span className="font-semibold text-slate-600">{searchQuery}</span> »
                      </div>
                    ) : (
                      <>
                        {/* Services Matches */}
                        {(selectedCategoryFilter === 'all' || selectedCategoryFilter === 'services') &&
                          searchResults.services.length > 0 && (
                            <div className="space-y-1">
                              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-blue-50/50 rounded-md">
                                Services & Tarifs
                              </h4>
                              {searchResults.services.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => handleResultClick('services', `service-card-${item.id}`)}
                                  className="w-full text-left p-2 hover:bg-slate-50 rounded-lg transition-all flex justify-between items-center group"
                                >
                                  <div className="pr-2">
                                    <p className="text-xs font-semibold text-slate-800 group-hover:text-[#0a3b8b]">
                                      {item.name}
                                    </p>
                                    <p className="text-[10px] text-slate-500 line-clamp-1">{item.description}</p>
                                  </div>
                                  <span className="text-[10px] font-bold text-[#ff7b00] whitespace-nowrap bg-orange-50 px-2 py-1 rounded">
                                    {item.price.toLocaleString('fr-FR')} F
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}

                        {/* News Matches */}
                        {(selectedCategoryFilter === 'all' || selectedCategoryFilter === 'news') &&
                          searchResults.news.length > 0 && (
                            <div className="space-y-1">
                              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-green-50/50 rounded-md">
                                Actualités & Opportunités
                              </h4>
                              {searchResults.news.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => handleResultClick('actualites', `news-card-${item.id}`)}
                                  className="w-full text-left p-2 hover:bg-slate-50 rounded-lg transition-all group"
                                >
                                  <p className="text-xs font-semibold text-slate-800 group-hover:text-[#0a3b8b]">
                                    {item.title}
                                  </p>
                                  <p className="text-[10px] text-slate-400 font-mono">{item.date}</p>
                                </button>
                              ))}
                            </div>
                          )}

                        {/* Projects Matches */}
                        {(selectedCategoryFilter === 'all' || selectedCategoryFilter === 'projects') &&
                          searchResults.projects.length > 0 && (
                            <div className="space-y-1">
                              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-amber-50/50 rounded-md">
                                Projets & Portfolio
                              </h4>
                              {searchResults.projects.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => handleResultClick('portfolio', `project-card-${item.id}`)}
                                  className="w-full text-left p-2 hover:bg-slate-50 rounded-lg transition-all group"
                                >
                                  <p className="text-xs font-semibold text-slate-800 group-hover:text-[#0a3b8b]">
                                    {item.title}
                                  </p>
                                  <p className="text-[10px] text-slate-500">
                                    Par {item.entrepreneur} • <span className="italic">{item.sector}</span>
                                  </p>
                                </button>
                              ))}
                            </div>
                          )}

                        {/* Resources Matches */}
                        {(selectedCategoryFilter === 'all' || selectedCategoryFilter === 'resources') &&
                          searchResults.resources.length > 0 && (
                            <div className="space-y-1">
                              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-purple-50/50 rounded-md">
                                Ressources Gratuites
                              </h4>
                              {searchResults.resources.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => handleResultClick('ressources', `resource-card-${item.id}`)}
                                  className="w-full text-left p-2 hover:bg-slate-50 rounded-lg transition-all group"
                                >
                                  <p className="text-xs font-semibold text-slate-800 group-hover:text-[#0a3b8b]">
                                    {item.title}
                                  </p>
                                  <p className="text-[10px] text-slate-500 line-clamp-1">{item.description}</p>
                                </button>
                              ))}
                            </div>
                          )}

                        {/* FAQ Matches */}
                        {(selectedCategoryFilter === 'all' || selectedCategoryFilter === 'faqs') &&
                          searchResults.faqs.length > 0 && (
                            <div className="space-y-1">
                              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-purple-50/50 rounded-md">
                                Foire Aux Questions
                              </h4>
                              {searchResults.faqs.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => handleResultClick('faq', `faq-item-${item.id}`)}
                                  className="w-full text-left p-2 hover:bg-slate-50 rounded-lg transition-all group"
                                >
                                  <p className="text-xs font-semibold text-slate-800 group-hover:text-[#0a3b8b]">
                                    {item.question}
                                  </p>
                                  <p className="text-[10px] text-slate-500 line-clamp-1">{item.answer}</p>
                                </button>
                              ))}
                            </div>
                          )}
                      </>
                    )}
                  </div>
                  <div className="bg-slate-50 p-2 text-center text-[10px] text-slate-400 font-medium">
                    {totalResultsCount} correspondances trouvées
                  </div>
                </div>
              )}
            </div>

            {/* Simulated Online Consultation Pricing button / Devis gratuit */}
            <button
              onClick={onOpenDevisModal}
              className="hidden md:flex items-center space-x-1 px-4 py-2.5 text-xs font-bold text-[#0a3b8b] border border-blue-200 hover:border-[#0a3b8b] hover:bg-blue-50/50 rounded-xl transition-all cursor-pointer"
              id="nav-devis-btn"
            >
              <span>Calculateur Devis</span>
            </button>

            {/* Quick Contact Call-To-Action */}
            <button
              onClick={onOpenAppointmentModal}
              className="flex items-center space-x-1.5 px-4.5 py-2.5 text-xs font-bold text-white bg-[#0a3b8b] hover:bg-[#144ea8] hover:shadow-md hover:shadow-blue-100 rounded-xl transition-all cursor-pointer shadow-sm shrink-0"
              id="nav-consult-btn"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Rendez-vous</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#0a3b8b] hover:bg-slate-100 rounded-xl"
              id="nav-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with Search */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4 shadow-inner" id="nav-mobile-drawer">
          
          {/* Mobile Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher service, guide, FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b]"
              id="mobile-search-field"
            />
            <Search className="absolute left-3 top-3 w-3.5 h-3.5 text-slate-400" />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-slate-400">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick results in mobile list */}
          {searchQuery && (
            <div className="bg-slate-50 rounded-xl p-2 max-h-48 overflow-y-auto space-y-2 border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase px-2 py-1">Résultats de recherche ({totalResultsCount}) :</p>
              {searchResults.services.slice(0, 3).map(item => (
                <div 
                  key={item.id} 
                  onClick={() => handleResultClick('services', `service-card-${item.id}`)}
                  className="p-1.5 hover:bg-white rounded text-xs font-semibold text-slate-700 cursor-pointer flex justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-[#ff7b00]">{item.price} F</span>
                </div>
              ))}
              {searchResults.news.slice(0, 2).map(item => (
                <div 
                  key={item.id} 
                  onClick={() => handleResultClick('actualites', `news-card-${item.id}`)}
                  className="p-1.5 hover:bg-white rounded text-xs text-slate-600 cursor-pointer"
                >
                  {item.title}
                </div>
              ))}
              {totalResultsCount === 0 && (
                <div className="p-2 text-center text-xs text-slate-400">Aucun résultat</div>
              )}
            </div>
          )}

          {/* Mobile Menu Links */}
          <div className="grid grid-cols-2 gap-2" id="nav-mobile-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleResultClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-[#0a3b8b]'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2" id="nav-mobile-actions">
            <button
              onClick={onOpenDevisModal}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border border-blue-200 text-[#0a3b8b] text-xs font-bold bg-blue-50/30"
            >
              <span>Calculer mon devis</span>
            </button>
            <button
              onClick={onOpenAppointmentModal}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#0a3b8b] text-white text-xs font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>Demander un accompagnement</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
