import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// product routes
router.post('/', ProductController.addProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProduct);
router.put('/:id', ProductController.updateProductUsingPut);
router.patch('/:id', ProductController.updateProductUsingPatch);
router.delete('/:id', ProductController.deleteProduct);

export const ProductRoutes = router;
