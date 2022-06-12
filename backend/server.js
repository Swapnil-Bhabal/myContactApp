import express from 'express';
import dotenv from 'dotenv';
import twilio from 'twilio';
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDb();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/contacts', userRoutes);



app.post('/send', (req, res) => {
    res.send('<h1>Sent succesfully</h1>');
    
    twilio(process.env.TWILIO_ACCOUNT_SID)(process.env.TWILIO_AUTH_TOKEN).messages.create({
        body: req.body.message,
        to: '+919029480803',
        from: '+12399466108'
    }).then(message => {
        const messageString = message.body;
        console.log(messageString);
        const dateCreated = message.dateCreated;
        const otp = messageString.slice(-6);
        const extractedName = messageString.slice(3, messageString.search(','));
        const index = contacts.findIndex(contact => contact.firstName === extractedName);
        contacts[index].otp = otp;
        contacts[index].time = dateCreated;
        console.log(contacts);
    })
    .catch(error => console.log(error))
})




app.listen(4000, console.log('Server running on port 4000'));