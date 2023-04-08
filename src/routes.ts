import { Router } from 'express';

export const router = Router();

router.get('/category', (request, response) => {
  response.send('OK');
});

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

