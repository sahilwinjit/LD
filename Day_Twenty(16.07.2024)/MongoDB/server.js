const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res) {
    res.send("Hello.")
});

app.post('/person', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains the person data.

        // Create a new Person document using the Mongoose model
        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('Data saved ', response);
        res.status(200).json(response);        
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// GET method to get the method.
app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Data Fetched');
        res.status(200).json(data);
    } 
    catch (error) {
        console.log(err);
        res.status(500).json({
            error: 'Internal Server Error'
        })        
    }
});

app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});

