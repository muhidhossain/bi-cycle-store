import { z } from 'zod';

const orderValidationSchema = z
  .object({
    email: z.string().email().trim(),
    product: z.string(),
    quantity: z.number().int(),
    totalPrice: z.number(),
  })
  .strict();

export { orderValidationSchema };
