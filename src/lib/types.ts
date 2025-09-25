

export interface Trainer {
  id: string;
  name: string;
  bio: string;
  specializations: string[];
  imageUrl: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    dataAiHint: string;
    rating: number;
    isNew: boolean;
    timestamp: any;
}
