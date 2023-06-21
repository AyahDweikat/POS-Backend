import {Router} from 'express'
import * as ProductController from './Controller/product.controller.js'

import * as validators from './product.validation.js';

import { auth } from '../../Middleware/auth.midddleware.js';
import { asyncHandler } from '../../services/errorHandling.js';
import { validationFun } from '../../Middleware/validation.js';
const router = Router()



router.get('/getProducts', auth, asyncHandler(ProductController.getProducts))
router.post('/addProduct', auth, validationFun(validators.addProductSchema), asyncHandler(ProductController.addProduct))
router.delete('/deleteProduct/:productId', auth, validationFun(validators.deleteProductSchema), asyncHandler(ProductController.deleteProduct))
router.patch('/updateProduct/:productId', auth, validationFun(validators.updateProductSchema), asyncHandler(ProductController.updateProduct))




export default router;