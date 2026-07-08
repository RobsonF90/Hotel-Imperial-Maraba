export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  amenities: string[];
  price: number; // Daily price in BRL
  size: string;
  view: string;
  capacity: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  iconName: string; // reference to Lucide icons
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'quartos' | 'piscina' | 'restaurante' | 'externa' | 'recepcao';
}

export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  discountCode: string;
  validity: string;
  bgImage: string;
}
