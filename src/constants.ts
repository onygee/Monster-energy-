export interface Flavor {
  id: string;
  name: string;
  color: string;
  accent: string;
  description: string;
  image: string;
}

export const FLAVORS: Flavor[] = [
  {
    id: 'original',
    name: 'Original',
    color: '#00ff00',
    accent: '#000000',
    description: 'The OG that started it all. Tearing into a can of the meanest energy drink on the planet.',
    image: 'https://images.unsplash.com/photo-1622543953495-473ee167c455?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ultra_white',
    name: 'Ultra White',
    color: '#ffffff',
    accent: '#333333',
    description: 'Zero sugar, lighter-tasting, citrusy energy blend. Pure energy in a crisp white can.',
    image: 'https://images.unsplash.com/photo-1622543953495-473ee167c455?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mango_loco',
    name: 'Mango Loco',
    color: '#ff9900',
    accent: '#111111',
    description: 'A heavenly blend of exotic juices that even the most stubborn spirit can’t resist.',
    image: 'https://images.unsplash.com/photo-1622543953495-473ee167c455?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pipeline_punch',
    name: 'Pipeline Punch',
    color: '#ff44aa',
    accent: '#222222',
    description: 'Banzai Pipeline, the world’s most famous wave, meets our secret blend of flavors.',
    image: 'https://images.unsplash.com/photo-1622543953495-473ee167c455?auto=format&fit=crop&q=80&w=800'
  }
];

export const LIFESTYLE_CONTENT = [
  {
    title: 'Motocross',
    image: 'https://images.unsplash.com/photo-1544186552-87007e9972c8?q=80&w=800',
    category: 'Extreme'
  },
  {
    title: 'Gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800',
    category: 'E-Sports'
  },
  {
    title: 'Music',
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800',
    category: 'Festivals'
  },
  {
    title: 'Skating',
    image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800',
    category: 'Urban'
  }
];
