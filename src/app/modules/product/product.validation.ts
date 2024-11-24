import { z } from 'zod';

const productValidationSchema = z
  .object({
    name: z
      .string({ required_error: 'Name is required' })
      .trim()
      .min(2, { message: 'Name is too short' })
      .max(50, { message: 'Name is too long' }),
    brand: z
      .string({ required_error: 'Brand is required' })
      .trim()
      .min(2, { message: 'Brand is too short' })
      .max(50, { message: 'Brand is too long' }),
    price: z
      .number({ required_error: 'Price is required' })
      .min(0, { message: 'Price must be a positive number' }),
    type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
      required_error: 'Type is required',
      message: 'Invalid product type',
    }),
    description: z
      .string({ required_error: 'Description is required' })
      .trim()
      .min(2, { message: 'Description is too short' })
      .max(255, { message: 'Description is too long' }),
    quantity: z
      .number({ required_error: 'Quantity is required' })
      .min(0, { message: 'Quantity must be a positive number' }),
    inStock: z.boolean({
      required_error: 'InStock is required',
      message: 'InStock must be a boolean value',
    }),
    isDeleted: z
      .boolean({
        required_error: 'IsDeleted is required',
        message: 'IsDeleted must be a boolean value',
      })
      .default(false),
  })
  .strict();

const partialProductValidationSchema = productValidationSchema.partial();

export { productValidationSchema, partialProductValidationSchema };
