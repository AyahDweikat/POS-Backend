import {Router} from 'express'
import { auth } from '../../Middleware/auth.midddleware.js';
import { asyncHandler } from '../../services/errorHandling.js';
import * as UnitController from './Controller/unit.controller.js'
import { validationFun } from '../../Middleware/validation.js';
import * as validators from './unit.validation.js';
const router = Router()



router.get('/getUnits', auth, asyncHandler(UnitController.getUnits))
router.post('/addUnit', auth,validationFun(validators.addUnitSchema), asyncHandler(UnitController.addUnit))
router.delete('/deleteUnit/:unitId', auth,validationFun(validators.deleteUnitSchema), asyncHandler(UnitController.deleteUnit))
router.patch('/updateUnit/:unitId', auth,validationFun(validators.updateUnitSchema), asyncHandler(UnitController.updateUnit))




export default router;