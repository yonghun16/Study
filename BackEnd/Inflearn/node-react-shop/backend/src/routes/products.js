import express from 'express';
import auth from '../middleware/auth.js';
import Product from '../models/Product.js';   // mongoose model
import multer from 'multer';

// router
const router = express.Router();

// multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage: storage }).single('file')

// image
router.post('/image', auth, async (req, res, next) => {
  upload(req, res, err => {
    if (err) {
      return req.status(500).send(err);
    }
    return res.json({ fileName: req.file.filename })
  })
})


// get Detail Product
router.get('/:id', async (req, res, next) => {
  const type = req.query.type;
  let productIds = req.params.id;

  // productId를 이용해서 DB에서 productId와 같은 상품의 정보를 가져옵니다.
  try {
    const product = await Product
      .find({ _id: { $in: productIds } })  // SELECT * FROM products WHERE _in IN ('sadfdsaf', 'sdf23dsf', 'sdf2sdf');
      .populate('writer');

    return res.status(200).send(product);
  } catch (error) {
    next(error);
  }
})


// get product
router.get('/', async (req, res, next) => {
  // asc 오름차순, desc 내림차순
  const order = req.query.order ? req.query.order : 'desc';
  const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  const limit = req.query.limit ? Number(req.query.limit) : 20;
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const term = req.query.searchTerm;


  let findArgs = {};

  for (let key in req.query.filters) {
    if (req.query.filters[key].length > 0) {
      if (key === 'prices') {
        findArgs[key] = {
          $gte: req.query.filters[key][0],
          $lte: req.query.filters[key][1],
        };
      };
      findArgs[key] = req.query.filters[key];
    }
  }

  if (term) {
    findArgs["$text"] = { $search: term };
  }
  // console.log(findArgs)


  try {
    const products = await Product.find(findArgs)
      .populate('writer')
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit);

    const productsTotal = await Product.countDocuments(findArgs);
    const hasMore = skip + limit < productsTotal ? true : false;

    return res.status(200).json({
      products,
      hasMore
    });
  } catch (error) {
    next(error);
  }
})

// new product
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

