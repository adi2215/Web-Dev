export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    description: string[];
    rating: number;
    price: number;
    link: string;
    likes?: number;
  }
  