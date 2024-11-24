import { Model } from 'mongoose';

export interface TProduct {
  name: string;
  brand: string;
  price: number;
  type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
  save?: () => Promise<TProduct>;
}

export type TPartialProduct = Partial<TProduct>;

export interface ProductModel extends Model<TProduct> {
  isExistingProduct(id: string): Promise<TProduct | null>;
  isSameProduct(name: string): Promise<TProduct | null>;
}
