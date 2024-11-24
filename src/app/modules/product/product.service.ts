import { TPartialProduct, TProduct } from './product.interface';
import { Product } from './product.model';

const addProductIntoDB = async (product: TProduct) => {
  const sameProduct = await Product.isSameProduct(product.name);
  if (sameProduct) {
    throw new Error('Product already exists, please update the quantity');
  }

  const result = await Product.create(product);

  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();

  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

const updateProductUsingPutInDB = async (id: string, product: TProduct) => {
  const existingProduct = await Product.isExistingProduct(id);
  if (!existingProduct) {
    throw new Error('Product does not exist, please add the product');
  }

  const result = await Product.findByIdAndUpdate(id, product, { new: true });

  return result;
};

const updateProductUsingPatchInDB = async (
  id: string,
  product: TPartialProduct,
) => {
  const existingProduct = await Product.isExistingProduct(id);
  if (!existingProduct) {
    throw new Error('Product does not exist, please add the product');
  }

  const result = await Product.findByIdAndUpdate(id, product, { new: true });

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const existingProduct = await Product.isExistingProduct(id);
  if (!existingProduct) {
    throw new Error('Product does not exist, please add the product');
  }

  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};

export const ProductService = {
  addProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductUsingPutInDB,
  updateProductUsingPatchInDB,
  deleteProductFromDB,
};
