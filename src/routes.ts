import { Router } from 'express';

import CategoryController from './app/controllers/CategoryController';
import ProductController from './app/controllers/ProductController';

export const router = Router();

router.get('/category', CategoryController.index);

router.get('/product', ProductController.index);
router.get('/product/:id', ProductController.show);
router.post('/product', ProductController.store);
router.patch('/product/:id', ProductController.update);
router.delete('/product/:id', (request, response) => {
  response.send('OK');
});

