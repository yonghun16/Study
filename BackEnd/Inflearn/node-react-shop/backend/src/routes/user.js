import express from 'express';
import User from '../models/User.js';   // mongoose model
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth.js';

const router = express.Router();


// auth route
router.get('/auth', auth, async (req, res, next) => {
  return res.json({
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
    cart: req.user.cart,
    history: req.user.history,
  })
})

// register route
router.post('/register', async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
})

// login route
router.post('/login', async (req, res, next) => {
  // req.body.email, password
  try {
    // 존재하는 유저인지 체크
    const user = await User.findOne({ email: req.body.email });
    if(!user) {
      return res.status(400).send('Auth failed, email not found');
    }

    // 비밀번호 비교
    const isMatch = await user.comparePassword(req.body.password);
    if(!isMatch) {
      return res.status(400).send('Auth failed, wrong password');
    }

    /* JWT */
    // 1. paload 생성
    const payload = {
      userId: user._id.toHexString()  // MongoDB의 ObjectId가 문자열(string) 형태로 변환
    }

    // 2. token 생성
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // 3. client로 전달
    return res.json({ user, accessToken });
  }
  catch (error) {
    next(error);
  }
})

// logout route
router.post('/logout', auth, async (req, res, next) => {
  try {
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
})

export default router;

