import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import contacts from './data/contacts.js';

dotenv.config();

connectDb();

const app = express();

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/contacts', userRoutes);



app.listen(4000, console.log('Server running on port 4000'));