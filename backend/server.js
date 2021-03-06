import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
// import contacts from './data/contacts.js';

dotenv.config();

connectDb();

const app = express();

// app.use(express.urlencoded({extended:false}))

app.use(cors());
app.use(express.json());

app.use('/api/contacts', userRoutes);
app.use('/api/otp', messageRoutes);


const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
  
    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, 'frontend', 'build', 'index.html')
      );
    });
  } else {
    app.get('/', (req, res) => {
      res.send('API is running');
    });
  }

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`));