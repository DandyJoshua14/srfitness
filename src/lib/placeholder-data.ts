
import type { Product } from './types';

export const placeholderProducts: Product[] = [
    {
      id: 'prod1',
      name: 'SR Fitness Long sleeve',
      category: 'Apparel',
      price: 15000,
      image: '/longsl.jpeg',
      dataAiHint: 'fitness shirt',
      rating: 5,
      isNew: true,
      timestamp: new Date('2024-07-20T10:00:00Z').getTime(),
    },
    {
      id: 'prod9',
      name: 'SR Fitness Sleevles',
      category: 'Apparel',
      price: 10000,
      image: '/sleevles.jpeg',
      dataAiHint: 'fitness hoodie',
      rating: 5,
      isNew: true,
      timestamp: new Date('2024-07-25T10:00:00Z').getTime(),
    },
    {
      id: 'prod10',
      name: 'Short sleeve',
      category: 'Apparel',
      price: 10000,
      image: '/shortsl.jpeg',
      dataAiHint: 'tech shirt running',
      rating: 4,
      isNew: true,
      timestamp: new Date('2024-07-25T09:00:00Z').getTime(),
    },
    {
      id: 'prod8',
      name: 'SR-VIVE Creatine',
      category: 'Supplements',
      price: 25000,
      image: 'https://picsum.photos/seed/mp8/600/600',
      dataAiHint: 'supplement tub',
      rating: 4,
      isNew: false,
      timestamp: new Date('2024-07-10T10:00:00Z').getTime(),
    },
];
