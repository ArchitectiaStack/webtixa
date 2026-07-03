import { Doctor, Service, Facility, Article } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Specialist Polyclinic',
    description: 'Comprehensive outpatient care led by senior specialists in cardiology, pediatrics, neurology, and more.',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=400&auto=format&fit=crop',
    iconName: 'Stethoscope'
  },
  {
    id: '2',
    title: 'Inpatient Care',
    description: 'Highly comfortable and fully-equipped recovery wards staffed 24/7 by dedicated nursing teams.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=400&auto=format&fit=crop',
    iconName: 'Bed'
  },
  {
    id: '3',
    title: '24/7 Emergency Unit',
    description: 'Immediate medical intervention for life-threatening cases with on-call trauma surgeons.',
    image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=400&auto=format&fit=crop',
    iconName: 'AlertCircle'
  },
  {
    id: '4',
    title: 'Radiology & Imaging',
    description: 'State-of-the-art MRI, CT scan, digital X-rays, and ultrasound imaging for precise diagnosis.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop',
    iconName: 'Activity'
  },
  {
    id: '5',
    title: 'Clinical Laboratory',
    description: 'Accredited clinical and pathology laboratory providing highly accurate diagnostic results.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f35116f?q=80&w=400&auto=format&fit=crop',
    iconName: 'FlaskConical'
  },
  {
    id: '6',
    title: '24/7 Pharmacy',
    description: 'Fully stocked, quality-assured pharmacy service with expert pharmacological consultation.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400&auto=format&fit=crop',
    iconName: 'Pills'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'dr. Anita Gibs, Sp.JP',
    specialty: 'Cardiovascular Specialist',
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://i.ibb.co/84sK8qmf/The-Benefits-of-Using-Nursing-Assignment-Helper-for-Group-Projects.jpg',
    available: true,
    schedule: 'Mon, Wed, Fri (09:00 - 13:00)',
    experience: '12 years'
  },
  {
    id: 'd2',
    name: 'dr. Maria Poliya, Sp.A',
    specialty: 'Pediatric Specialist',
    rating: 4.8,
    reviewsCount: 210,
    image: 'https://i.ibb.co/xKQBDyjk/Beginne-deine-Karriere-mit-einem-strahlenden-L-cheln-Ein-professionelles-Bewerbungsfoto-kann.jpg',
    available: true,
    schedule: 'Tue, Thu, Sat (10:00 - 15:00)',
    experience: '8 years'
  },
  {
    id: 'd3',
    name: 'dr. Budi Santoso, Sp.S',
    specialty: 'Neurology Specialist',
    rating: 4.9,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400',
    available: false,
    schedule: 'Mon, Tue, Thu (14:00 - 18:00)',
    experience: '15 years'
  },
  {
    id: 'd4',
    name: 'dr. Linda Permata, Sp.OG',
    specialty: 'Obstetrics & Gynecology',
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400',
    available: true,
    schedule: 'Wed, Fri, Sat (08:00 - 12:00)',
    experience: '10 years'
  },
  {
    id: 'd5',
    name: 'dr. Rian Hidayat, Sp.OT',
    specialty: 'Orthopedic Specialist',
    rating: 4.7,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400',
    available: true,
    schedule: 'Tue, Thu (13:00 - 17:00)',
    experience: '7 years'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    name: 'Modular Exam Rooms',
    image: 'https://i.ibb.co/rKLwdbjk/Ref-1.jpg'
  },
  {
    id: 'f2',
    name: 'Integrated Telehealth Pods',
    image: 'https://i.ibb.co/YB51WjFZ/image.jpg'
  },
  {
    id: 'f3',
    name: 'Digital Patient Experience Hubs',
    image: 'https://i.ibb.co/Q7Zh7yyD/Types-of-Telehealth-Services-4-Examples-and-their-Benefits.jpg'
  },
  {
    id: 'f4',
    name: 'Healing-Centric',
    image: 'https://i.ibb.co/PGBLzJr5/Hospital.jpg'
  },
  {
    id: 'f5',
    name: 'Dedicated Preventive Health',
    image: 'https://i.ibb.co/Xk5gfnJJ/Expert-Care-from-Annual-Physicals-to-Chronic-Disease-Management.jpg'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Understanding Hypertension: Causes, Symptoms, and Effective Prevention',
    category: 'Heart Health',
    date: '20 May 2026',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=500&auto=format&fit=crop',
    excerpt: 'Hypertension is often called a silent killer. Learn the essential lifestyle adjustments and dietary choices to control high blood pressure effectively.',
    readTime: '5 min read'
  },
  {
    id: 'a2',
    title: 'The Essential Guide to Pediatric Vaccination Schedules in 2026',
    category: 'Child Health',
    date: '15 May 2026',
    image: 'https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=500',
    excerpt: 'Protect your little ones from preventable diseases. Review the updated, pediatrician-approved immunization timeline for toddlers and young children.',
    readTime: '4 min read'
  },
  {
    id: 'a3',
    title: 'Nutritional Powerhouses: Top Superfoods to Boost Immune Support',
    category: 'Healthy Living',
    date: '10 May 2026',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=500&auto=format&fit=crop',
    excerpt: 'Discover simple, whole-food additions to your daily diet that significantly enhance wellness, vitality, and your body’s natural defense systems.',
    readTime: '3 min read'
  },
  {
    id: 'a4',
    title: 'Preventative Health Screenings: Critical Checkups for Every Stage of Life',
    category: 'Preventative Care',
    date: '02 May 2026',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=500&auto=format&fit=crop',
    excerpt: 'Early detection saves lives. Find out which diagnostic screenings, medical tests, and laboratory panels you need based on age, lifestyle, and history.',
    readTime: '6 min read'
  }
];
