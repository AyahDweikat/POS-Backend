import {Router} from 'express'
import * as UserConroller from './Controller/user.controller.js'
import { auth } from '../../Middleware/auth.midddleware.js';
import { asyncHandler } from '../../services/errorHandling.js';
import fileUpload, { HME } from '../../services/multer.js';
const router = Router()



router.get('/getProfile', auth, asyncHandler(UserConroller.getProfile))
router.patch('/addProfileImg', auth, fileUpload().single('image'), HME, UserConroller.addProfileImg)

export default router;