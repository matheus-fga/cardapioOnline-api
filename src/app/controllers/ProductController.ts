import { Request, Response } from 'express';

import { isValidObjectId } from 'mongoose';

import ProductsRepository from '../repositories/ProductsRepository';

class ProductController {
  async index(req: Request, res: Response) {
    const products = await ProductsRepository.findAll();

    res.json(products);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid product id' });
    }

    const product = ProductsRepository.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  }
}

export default new ProductController();
