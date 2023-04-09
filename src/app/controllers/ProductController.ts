import { Request, Response } from 'express';

import ProductsRepository from '../repositories/ProductsRepository';

class ProductController {
  async index(req: Request, res: Response) {
    const products = await ProductsRepository.findAll();

    res.json(products);
  }
}

export default new ProductController();
