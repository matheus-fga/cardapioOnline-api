import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categories: {
    required: true,
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Category',
    }],
  }
}));
