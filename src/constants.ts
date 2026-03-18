import { LucideIcon, Sparkles, Droplets, Sun, Moon, Leaf } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: 'Skincare' | 'Makeup' | 'Body' | 'Hair';
  description: string;
  image: string;
  rating: number;
  reviews: number;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Midnight Recovery Concentrate',
    brand: 'Lumière Botanicals',
    price: 45.00,
    category: 'Skincare',
    description: 'A potent nighttime facial oil that visibly restores the appearance of skin by morning.',
    image: 'https://img.freepik.com/free-photo/argan-oil-dropper-bottle_23-2148989113.jpg',
    rating: 4.8,
    reviews: 124,
    tags: ['Best Seller', 'Night Care']
  },
  {
    id: '2',
    name: 'Hydra-Glow Vitamin C Serum',
    brand: 'Glow Theory',
    price: 38.50,
    category: 'Skincare',
    description: 'Brightening serum with 15% Vitamin C and Hyaluronic Acid for instant radiance.',
    image: 'https://img.freepik.com/free-photo/hands-with-cream-jar_23-2152003265.jpg',
    rating: 4.9,
    reviews: 89,
    tags: ['Radiance', 'Vegan']
  },
  {
    id: '3',
    name: 'Velvet Matte Lipstick - Royal Red',
    brand: 'Elysian Beauty',
    price: 22.00,
    category: 'Makeup',
    description: 'Long-wearing matte lipstick with a comfortable, non-drying formula.',
    image: 'https://cdn.pixabay.com/photo/2021/10/10/21/53/makeup-6698882_1280.jpg',
    rating: 4.7,
    reviews: 210,
    tags: ['Classic', 'Matte']
  },
  {
    id: '4',
    name: 'Sea Salt Body Scrub',
    brand: 'Oceanic Spa',
    price: 28.00,
    category: 'Body',
    description: 'Exfoliating body scrub with minerals from the Dead Sea and essential oils.',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 56,
    tags: ['Spa Day', 'Natural']
  },
  {
    id: '5',
    name: 'Silk Protein Hair Mask',
    brand: 'Lustre Locks',
    price: 32.00,
    category: 'Hair',
    description: 'Deep conditioning treatment for dry and damaged hair, enriched with silk proteins.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMG1hc2t8ZW58MHwwfDB8fHwy',
    rating: 4.9,
    reviews: 142,
    tags: ['Repair', 'Luxury']
  },
  {
    id: '6',
    name: 'Mineral Sunscreen SPF 50',
    brand: 'Sun Shield',
    price: 25.00,
    category: 'Skincare',
    description: 'Lightweight, non-greasy mineral sunscreen for daily protection.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    reviews: 78,
    tags: ['Protection', 'Daily']
  },
  {
    id: '7',
    name: 'Rose Water Toning Mist',
    brand: 'Lumière Botanicals',
    price: 18.00,
    category: 'Skincare',
    description: 'Refreshing facial mist made with 100% pure organic rose water.',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 95,
    tags: ['Organic', 'Hydrating']
  },
  {
    id: '8',
    name: 'Precision Liquid Eyeliner',
    brand: 'Elysian Beauty',
    price: 16.50,
    category: 'Makeup',
    description: 'Ultra-fine tip for perfect wings every time. Smudge-proof and waterproof.',
    image: 'https://images.unsplash.com/photo-1631237535242-b6ef156c91b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV5ZSUyMGxpbmVyfGVufDB8MHwwfHx8Mg%3D%3D',
    rating: 4.7,
    reviews: 167,
    tags: ['Waterproof', 'Precision']
  }
];
