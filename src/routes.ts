import { Router } from 'express';

import CategoryController from './app/controllers/CategoryController';

export const router = Router();

router.get('/category', CategoryController.index);

router.get('/product', (request, response) => {
  response.send('OK');
});
router.get('/product/:id', (request, response) => {
  response.send('OK');
});
router.post('/product', (request, response) => {
  response.send('OK');
});
router.patch('/product/:id', (request, response) => {
  response.send('OK');
});
router.delete('/product/:id', (request, response) => {
  response.send('OK');
});

