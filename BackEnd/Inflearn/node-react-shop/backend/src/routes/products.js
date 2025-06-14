import express from 'express';
import auth from '../middleware/auth.js';
import Product from '../models/Product.js';   // mongoose model


// auth route
const router = express.Router();

router.post('/', auth, async (req, res, next) => {
  try {
    const product = new Product(req.body);
    product.save();
    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
})

export default router;

