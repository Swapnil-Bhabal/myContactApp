import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';

import User from '../models/userModel.js';


dotenv.config();

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);



const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

const getUsersById = asyncHandler(async (req, res) => {
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
});

const updateUserProfile = asyncHandler(async (req,res) => {
    const { name, otp, message, _id } = req.body;
    const user = await User.findById(_id);
    if (user) {
        user.firstName = name || user.firstName;
        user.lastName = user.lastName;
        user.contactNumber = user.contactNumber;
        user.otp = otp || user.otp;
        user.isDelivered = true;
        user.deliveredAt = Date.now();
    }

    const updatedUser = await user.save();

    res.json({
        firstName: updatedUser.firstName,
        otp: updatedUser.otp,
        deliveredAt: updatedUser.deliveredAt
    });
    
    client.messages.create({
        body: message,
        to: '+919029480803',
        from: '+12399466108'
    }).then(message => {
        console.log(message);
    })
    .catch(error => console.log(error))
})


const getOtps = asyncHandler(async (req,res) => {
    const userswithOtp = await User.find({ isDelivered: true });
    res.json(userswithOtp);
})

export { getUsers, getUsersById, updateUserProfile, getOtps };