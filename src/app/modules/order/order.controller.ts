import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { orderValidationSchema } from './order.validation';

const placeOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodParsedData = orderValidationSchema.parse(order);
    const result = await OrderService.placeOrderIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Order placed successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Order not placed',
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Order not placed',
        error: 'Unknown error',
      });
    }
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.calculateRevenueFromOrdersInDB();
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Revenue not calculated',
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Revenue not calculated',
        error: 'Unknown error',
      });
    }
  }
};

export const OrderController = {
  placeOrder,
  calculateRevenue,
};
