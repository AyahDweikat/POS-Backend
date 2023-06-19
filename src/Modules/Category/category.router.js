import {Router} from 'express'
import * as CategoryController from './Controller/category.controller.js'
import { auth } from '../../Middleware/auth.midddleware.js';
import { asyncHandler } from '../../services/errorHandling.js';
import * as validators from './category.validation.js';
import { validationFun } from '../../Middleware/validation.js';
const router = Router()



router.get('/getCategories', auth, asyncHandler(CategoryController.getCategories))
router.post('/addCategory', auth,validationFun(validators.addCategorySchema), asyncHandler(CategoryController.addCategory))
router.delete('/deleteCategory/:unitId', auth,validationFun(validators.deleteCategorySchema), asyncHandler(CategoryController.deleteCategory))
router.patch('/updateCategory/:unitId', auth,validationFun(validators.updateCategorySchema), asyncHandler(CategoryController.updateCategory))




export default router;