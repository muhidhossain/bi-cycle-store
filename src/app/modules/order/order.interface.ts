import { Model } from 'mongoose';

export interface TOrder {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
}

export type OrderModel = Model<TOrder>;
