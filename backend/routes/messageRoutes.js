import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

import { getOtps } from '../controller/userController.js';


const router = express.Router();

router.route('/').get(getOtps);

export default router;