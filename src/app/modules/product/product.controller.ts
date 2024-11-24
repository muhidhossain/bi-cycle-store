import { Request, Response } from 'express';
import { ProductService } from './product.service';
import {
  partialProductValidationSchema,
  productValidationSchema,
} from './product.validation';

const addProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodParsedData = productValidationSchema.parse(product);
    const result = await ProductService.addProductIntoDB(zodParsedData);
    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Product not added',
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Product not added',
        error: 'Unknown error',
      });
    }
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Products not fetched',
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Products not fetched',
        error: 'Unknown error',
      });
    }
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.getSingleProductFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Product not fetched',
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Product not fetched',
        error: 'Unknown error',
      });
    }
  }
};

const updateProductUsingPut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const zodParsedData = productValidationSchema.parse(product);
    const result = await ProductService.updateProductUsingPutInDB(
      id,
      zodParsedData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Product not updated',
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Product not updated',
        error: 'Unknown error',
      });
    }
  }
};

const updateProductUsingPatch = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const zodParsedData = partialProductValidationSchema.parse(product);
    const result = await ProductService.updateProductUsingPatchInDB(
      id,
      zodParsedData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Product not updated',
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Product not updated',
        error: 'Unknown error',
      });
    }
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.deleteProductFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Product not deleted',
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Product not deleted',
        error: 'Unknown error',
      });
    }
  }
};

export const ProductController = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProductUsingPut,
  updateProductUsingPatch,
  deleteProduct,
};
