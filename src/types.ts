export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  image: string;
  available: boolean;
  schedule: string;
  experience: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface Facility {
  id: string;
  name: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
}

export interface Appointment {
  fullName: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  timeSlot: string;
  notes?: string;
  insuranceType: 'BPJS' | 'Private' | 'None';
}
