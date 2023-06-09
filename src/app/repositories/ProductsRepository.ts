import { Product } from '../models/Product';
import { ProductBody } from '../types/ProductBody';

class ProductsRepository {
  async findAll() {
    const products = await Product.find().populate('categories');

    return products;
  }

  async findById(id: string) {
    const product = await Product.findById(id).populate('categories');

    return product;
  }

  async create(product: ProductBody) {
    const newProduct = await Product.create(product);

    return newProduct;
  }

  async update(id: string, product: ProductBody) {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });

    return updatedProduct;
  }

  async delete(id: string) {
    await Product.findByIdAndDelete(id);
  }
}

export default new ProductsRepository();
