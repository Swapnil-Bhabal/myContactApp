import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const users = await User.find({});
        res.json(users);
    })
);

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        try {
            const user = await User.findById(req.params.id);

            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'ERROR' });
        }
    })
);

export default router;