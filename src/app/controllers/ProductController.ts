import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

import { ProductBody } from '../types/ProductBody';
import { isValidCategoriesIds } from '../utils/isValidCategoriesIds';

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

    const product = await ProductsRepository.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  }

  async store(req: Request, res: Response) {
    const { name, qty, price, categories } = req.body as ProductBody;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    if (price === undefined) {
      return res.status(400).json({ error: 'Price is required' });
    } else if (price <= 0) {
      return res.status(400).json({ error: 'price must be grater than 0' });
    }

    if (!categories || categories.length <= 0) {
      return res.status(400).json({ error: 'provide at least one category id' });
    }

    if (!isValidCategoriesIds(categories)) {
      return res.status(400).json({ error: 'Invalid category id' });
    }

    const newProduct = await ProductsRepository.create({
      name,
      qty,
      price,
      categories
    });

    res.status(201).json(newProduct);
  }
}

export default new ProductController();
