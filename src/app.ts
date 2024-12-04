import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

const rootController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', rootController);

export default app;
