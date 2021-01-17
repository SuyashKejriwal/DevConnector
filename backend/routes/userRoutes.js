import express from 'express';
const router=express.Router();
import { TestController } from '../controllers/UserController.js'

//@route GET/api/users
//@desc Test Route
//@access Public
router.get('/',TestController);

export default router;