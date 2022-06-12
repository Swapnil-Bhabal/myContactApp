import dotenv from 'dotenv';
import contacts from './data/contacts.js';
import User from './models/userModel.js';
import connectDb from './config/db.js';

dotenv.config();

connectDb();

const importData = async () => {
    try {
        await User.deleteMany();

        await User.insertMany(contacts);
        console.log('Data Import');
        process.exit();
    } catch (err) {
        console.error(`${err}`);
        process.exit(1);
    }    
};

importData();