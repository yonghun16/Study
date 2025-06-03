import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
})


export default router;

