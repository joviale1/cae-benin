import React, { useState, useRef } from 'react';
import { ProjectItem } from '../types';
import { initialProjects } from '../data';
import { Upload, Plus, FolderHeart, Check, Briefcase, FileImage, UserPlus, HelpCircle } from 'lucide-react';

interface PortfolioProps {
  customProjects: ProjectItem[];
  onAddProject: (project: ProjectItem) => void;
}

export default function Portfolio({ customProjects, onAddProject }: PortfolioProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [entrepreneur, setEntrepreneur] = useState('');
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [dragOver, setDragOver] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const allProjects = [...initialProjects, ...customProjects];

  // Handle image loading
  const processFile = (file: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner un fichier image valide (PNG, JPG, JPEG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImagePreview(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      processFile(files[0]);
    }
  };

  // Drag and drop event handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      processFile(files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !entrepreneur || !sector || !description) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Default image if no upload was made
    const finalImage = imagePreview || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600';

    const newProj: ProjectItem = {
      id: `custom-proj-${Date.now()}`,
      title,
      entrepreneur,
      sector,
      description,
      imageUrl: finalImage,
      date: 'Juin 2026'
    };

    onAddProject(newProj);

    // Reset Form
    setTitle('');
    setEntrepreneur('');
    setSector('');
    setDescription('');
    setImagePreview('');
    setShowAddForm(false);

    setSuccessMsg('Félicitations ! Votre projet d’entreprise a été ajouté à notre galerie de réussites !');
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-bold text-[#ff7b00] uppercase tracking-widest">Nos Succès & Galerie de Projets</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Des Idées Qui Prennent Vie : Ils Nous Ont Fait Confiance
          </h3>
          <p className="text-slate-600 text-sm">
            Découvrez quelques-uns des projets portés par de brillants entrepreneurs que nous avons accompagnés dans leur formalisation juridique, business plan ou transition digitale.
          </p>
        </div>

        {successMsg && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs font-bold text-center flex items-center justify-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">✓</span>
            <span>{successMsg}</span>
          </div>
        )}

        {/* Gallery Controls (Button to open form) */}
        <div className="flex justify-between items-center mb-8 bg-slate-50 p-4.5 rounded-2xl border border-slate-100 flex-col sm:flex-row gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xs font-bold text-slate-800">Vous êtes un de nos lauréats ou porteurs accompagnés ?</h4>
            <p className="text-[11px] text-slate-500">Ajoutez votre entreprise en téléchargeant votre logo ou photo d'activité.</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-5 py-3 rounded-xl bg-[#ff7b00] hover:bg-orange-600 text-white text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer shadow-md shadow-orange-50"
            id="open-upload-project-btn"
          >
            <Plus className="w-4 h-4 shrink-0" />
            <span>Inscrire mon entreprise</span>
          </button>
        </div>

        {/* Add Project Form (Upload feature) */}
        {showAddForm && (
          <div className="mb-10 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/60 max-w-3xl mx-auto" id="add-project-form-container">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-6">
              <h4 className="text-xs font-extrabold text-[#0a3b8b] uppercase tracking-wider flex items-center gap-2">
                <FolderHeart className="w-4 h-4 text-[#ff7b00]" /> Formulaire d'inscription d'entreprise
              </h4>
              <button onClick={() => setShowAddForm(false)} className="text-xs font-bold text-slate-400 hover:text-slate-600">
                Annuler
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Nom de l’Entreprise *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ex : Bio-Sante Cosmétiques"
                    className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Nom du Promoteur / Entrepreneur *</label>
                  <input
                    type="text"
                    required
                    value={entrepreneur}
                    onChange={(e) => setEntrepreneur(e.target.value)}
                    placeholder="Ex : Sandrine N."
                    className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Secteur d’Activité *</label>
                  <input
                    type="text"
                    required
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    placeholder="Ex : Artisanat & Beauté / Service numérique"
                    className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Slogan ou Courte Description *</label>
                  <input
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Ex : Transformation locale de beurres naturels pour peaux sensibles."
                    className="w-full bg-white border border-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0a3b8b]"
                  />
                </div>
              </div>

              {/* Photo Upload Box (Using drag and drop & native files) */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Photo de l’activité ou Logo (Optionnel)</label>
                
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center ${
                    dragOver
                      ? 'border-[#ff7b00] bg-orange-50/50'
                      : imagePreview
                      ? 'border-emerald-500 bg-emerald-50/20'
                      : 'border-slate-200 hover:border-[#0a3b8b] hover:bg-slate-100/50'
                  }`}
                  id="image-dropzone-container"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="portfolio-image-upload-input"
                  />

                  {imagePreview ? (
                    <div className="space-y-3" id="upload-preview-container">
                      <img
                        src={imagePreview}
                        alt="Aperçu de l'image"
                        className="w-32 h-32 object-cover rounded-xl mx-auto shadow-sm border border-emerald-200"
                        referrerPolicy="no-referrer"
                      />
                      <p className="text-[11px] text-emerald-600 font-bold flex items-center justify-center gap-1">
                        <Check className="w-4 h-4" /> Image sélectionnée avec succès
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setImagePreview('');
                        }}
                        className="text-[10px] text-red-500 underline font-semibold"
                      >
                        Changer d'image
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-10 h-10 text-slate-400 mx-auto" />
                      <p className="text-xs font-bold text-slate-700">Glissez-déposez votre image ici, ou cliquez pour parcourir</p>
                      <p className="text-[10px] text-slate-400">Formats acceptés : PNG, JPG, JPEG, WEBP. Taille conseillée : 800x600px.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#0a3b8b] hover:bg-[#144ea8] text-white text-xs font-bold shadow-md shadow-blue-50 cursor-pointer"
                >
                  Enregistrer l'Entreprise
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Portfolio Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
          {allProjects.map((p) => (
            <div
              key={p.id}
              id={`project-card-${p.id}`}
              className="bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between group"
            >
              
              {/* Cover Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Sector Badge */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0a3b8b] text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-lg shadow-sm border border-slate-100">
                  {p.sector}
                </span>

                <span className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded">
                  {p.date}
                </span>
              </div>

              {/* Body details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-[#ff7b00] uppercase tracking-wide flex items-center gap-1">
                    <UserPlus className="w-3 h-3" /> Lauréat : {p.entrepreneur}
                  </p>
                  
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-[#0a3b8b]">
                    {p.title}
                  </h4>

                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium line-clamp-3">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">Accompagné CAE</span>
                  <span className="text-emerald-500 bg-emerald-50 text-[10px] font-black px-2 py-0.5 rounded-md">
                    ✓ Actif & Légal
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
