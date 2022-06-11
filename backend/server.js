const express = require('express');
const contacts = require('./data/contacts.js');

const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/contacts', (req, res) => {
    res.json(contacts);
})

app.get('/api/contacts/:id', (req, res) => {
    const contact = contacts.find(contact => contact._id == req.params.id);    
    res.json(contact);
})

app.listen(4000, console.log('Server running on port 4000'));