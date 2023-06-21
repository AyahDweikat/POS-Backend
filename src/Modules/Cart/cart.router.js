import {Router} from 'express'

import * as validators from './cart.validation.js';
import { validationFun } from '../../Middleware/validation.js';
import { asyncHandler } from '../../services/errorHandling.js';
import { auth } from '../../Middleware/auth.midddleware.js';
import * as CartController from './Controller/cart.controller.js'


const router = Router()


router.get('/getCarts', auth, asyncHandler(CartController.getCarts))
router.post('/addCart', auth, validationFun(validators.addCartSchema), asyncHandler(CartController.addCart))
router.delete('/deleteCart/:cartId', auth, validationFun(validators.deleteCartSchema), asyncHandler(CartController.deleteCart))
router.patch('/updateCart/:cartId', auth, validationFun(validators.updateCartSchema), asyncHandler(CartController.updateCart))




export default router;