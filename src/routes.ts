import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import CategoryController from './app/controllers/CategoryController';
import ProductController from './app/controllers/ProductController';
import AuthController from './app/controllers/AuthController';

export const router = Router();

router.post('/auth/login', AuthController.authenticate);

router.get('/category', authMiddleware, CategoryController.index);

router.get('/product', authMiddleware, ProductController.index);
router.get('/product/:id', authMiddleware, ProductController.show);
router.post('/product', authMiddleware, ProductController.store);
router.patch('/product/:id', authMiddleware, ProductController.update);
router.delete('/product/:id', authMiddleware, ProductController.delete);

