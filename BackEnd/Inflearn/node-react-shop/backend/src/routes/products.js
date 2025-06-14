import express from 'express';
import auth from '../middleware/auth.js';
import Product from '../models/Product.js';   // mongoose model
import multer from 'multer';

// auth route
const router = express.Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage: storage }).single('file')

router.post('/image', auth, async (req, res, next) => {

  upload(req, res, err => {
    if (err) {
      return req.status(500).send(err);
    }
    return res.json({ fileName: req.file.filename })
  })

})


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

