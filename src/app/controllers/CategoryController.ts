import { Request, Response } from 'express';

class CategoryController {
  async index(req: Request, res: Response) {
    res.send('CategoryControler: index');
  }
}

export default new CategoryController();
