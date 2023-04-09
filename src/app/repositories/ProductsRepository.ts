import { Product } from '../models/Product';

class ProductsRepository {
  async findAll() {
    const products = await Product.find().populate('categories');

    return products;
  }
}

export default new ProductsRepository();
