import express from 'express';
import User from '../models/User.js';   // mongoose model
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth.js';


// auth route
const router = express.Router();

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
    if (!user) {
      return res.status(400).send('Auth failed, email not found');
    }

    // 비밀번호 비교
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
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


// add to Cart
router.post('/cart', auth, async (req, res, next) => {
  try {
    // 먼저 User Collection에 해당 유저의 정보를 가져오기 
    const userInfo = await User.findOne({ _id: req.user._id })

    // 가져온 정보에서 카트에다 넣으려 하는 상품이 이미 들어 있는지 확인
    let duplicate = false;
    userInfo.cart.forEach((item) => {
      if (item.id === req.body.productId) {
        duplicate = true;
      }
    })

    // 상품이 이미 있을 때
    if (duplicate) {
      const user = await User.findOneAndUpdate(
        { _id: req.user._id, "cart.id": req.body.productId },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true }
      )

      return res.status(201).send(user.cart);
    }
    // 상품이 이미 있지 않을 때
    else {
      const user = await User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            cart: {
              id: req.body.productId,
              quantity: 1,
              date: Date.now()
            }
          }
        },
        { new: true }
      )

      return res.status(201).send(user.cart);
    }


  } catch (error) {
    next(error)
  }
})


export default router;

