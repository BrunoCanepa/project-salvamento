const { Router } = require('express');
const router = Router();


const ProductController = require('../controllers/productController');

router.get('/product/getById/:productId', ProductController.getProductById);
router.get('/product/getAll', ProductController.getAllProducts);
router.post('/product/create', ProductController.createProduct);
router.put('/product/update/:productId', ProductController.updateProduct);

module.exports = router;