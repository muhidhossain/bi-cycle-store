import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// order routes
router.post('/', OrderController.placeOrder);
router.get('/revenue', OrderController.calculateRevenue);

export const OrderRoutes = router;
