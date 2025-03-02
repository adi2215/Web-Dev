import { Product } from './products.models';

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
