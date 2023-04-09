import { Request, Response } from 'express';

class ProductController {
  async index(req: Request, res: Response) {
    res.send('ProductController: index');
  }
}

export default new ProductController();
