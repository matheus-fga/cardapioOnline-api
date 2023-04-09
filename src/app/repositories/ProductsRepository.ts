import { Product } from '../models/Product';

class ProductsRepository {
  async findAll() {
    const products = await Product.find().populate('categories');

    return products;
  }

  async findById(id: string) {
    const product = await Product.findById(id);

    return product;
  }
}

export default new ProductsRepository();
