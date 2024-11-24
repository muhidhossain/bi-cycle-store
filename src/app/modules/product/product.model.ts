import { model, Schema } from 'mongoose';
import { ProductModel, TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

productSchema.post('findOneAndUpdate', function (doc, next) {
  if (doc) {
    doc.inStock = doc.quantity > 0;
  }
  next();
});

productSchema.statics.isExistingProduct = async function (id: string) {
  const existingProduct = await this.findById(id);

  return existingProduct;
};

productSchema.statics.isSameProduct = async function (name: string) {
  const existingProduct = await this.findOne({ name });

  return existingProduct;
};

export const Product = model<TProduct, ProductModel>('Product', productSchema);
