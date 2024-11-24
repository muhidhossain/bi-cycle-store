import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const placeOrderIntoDB = async (order: TOrder) => {
  const isExistingProduct = await Product.isExistingProduct(order.product);
  if (!isExistingProduct) {
    throw new Error('Product not found');
  }

  const result = await Order.create(order);

  return result;
};

const calculateRevenueFromOrdersInDB = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        totalRevenue: { $round: ['$totalRevenue', 2] },
      },
    },
  ]);

  return result;
};

export const OrderService = {
  placeOrderIntoDB,
  calculateRevenueFromOrdersInDB,
};
