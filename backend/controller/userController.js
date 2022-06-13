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
    const { name, otp, message } = req.body;
    client.messages.create({
        body: message,
        to: '+919029480803',
        from: '+12399466108'
    }).then(message => {
        // const messageString = message.body;
        // console.log(messageString);
        // const dateCreated = message.dateCreated;
        // const otp = messageString.slice(-6);
        // const extractedName = messageString.slice(3, messageString.search(','));
        // const index = contacts.findIndex(contact => contact.firstName === extractedName);
        // contacts[index].otp = otp;
        // contacts[index].time = dateCreated;
        // return contacts;
        console.log(message);
    })
    .catch(error => console.log(error))

})

export { getUsers, getUsersById, updateUserProfile };