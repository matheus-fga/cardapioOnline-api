import { model, Schema } from 'mongoose';

export const Category = model('Category', new Schema({
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }
}));
