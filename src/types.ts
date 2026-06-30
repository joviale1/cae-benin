export interface ServiceItem {
  id: string;
  name: string;
  price: number; // in FCFA
  unit?: string; // e.g. "/ page"
  category: 'consultation' | 'creation' | 'formation' | 'administratif' | 'digital';
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  entrepreneur: string;
  sector: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  category: 'conseils' | 'financement' | 'programme' | 'astuces';
  date: string;
  readTime: string;
  imageUrl?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  downloadsCount: number;
  category: 'guide' | 'modele' | 'checklist';
  downloadUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'creation' | 'accompagnement' | 'tarifs' | 'procedures';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatarUrl?: string;
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status: 'pending' | 'confirmed';
}

export interface DevisRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  selectedServices: { serviceId: string; quantity: number }[];
  totalPrice: number;
  notes?: string;
}
