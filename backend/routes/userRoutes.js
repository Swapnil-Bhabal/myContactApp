import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

import { getUsers, getUsersById, updateUserProfile } from '../controller/userController.js';


const router = express.Router();

router.route('/').get(getUsers);
router.route('/:id').get(getUsersById);
router.route('/message').post(updateUserProfile);

export default router;