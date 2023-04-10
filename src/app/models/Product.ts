import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  categories: {
    required: true,
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Category',
    }],
  }
}));
