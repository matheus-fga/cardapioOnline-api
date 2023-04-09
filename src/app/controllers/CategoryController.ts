import { Request, Response } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';

class CategoryController {
  async index(req: Request, res: Response) {
    const categories = await CategoriesRepository.findAll();

    res.json(categories);
  }
}

export default new CategoryController();
