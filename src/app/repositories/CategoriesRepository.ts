import { Category } from '../models/Category';

class CategoriesRepository {
  async findAll() {
    const categories = await Category.find();

    return categories;
  }
}

export default new CategoriesRepository();
