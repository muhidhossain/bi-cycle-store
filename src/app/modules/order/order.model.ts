import { model, Schema } from 'mongoose';
import { OrderModel, TOrder } from './order.interface';
import { TProduct } from '../product/product.interface';

const orderSchema = new Schema(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

orderSchema.pre('save', async function (next) {
  const product = (await this.model('Product').findById(
    this.product,
  )) as TProduct;
  if (!product) {
    throw new Error('Product not found');
  }

  if (product.quantity <= 0) {
    throw new Error('Product out of stock');
  } else if (product.quantity < this.quantity) {
    throw new Error(`Only ${product.quantity} left in stock`);
  }

  if (product.price * this.quantity !== this.totalPrice) {
    throw new Error('Invalid total price');
  }

  product.quantity -= this.quantity;
  product.inStock = product.quantity > 0;

  if (product && typeof product.save === 'function') {
    await product.save();
  }

  this.totalPrice = product.price * this.quantity;

  next();
});

export const Order = model<TOrder, OrderModel>('Order', orderSchema);
