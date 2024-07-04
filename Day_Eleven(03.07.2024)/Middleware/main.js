const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");

const blog = require("./routes/blog");
app.use('/blog', blog);

// app.use(express.static("public"));

// Middleware 1 - Can be used a logger for our application.
app.use((req, res, next) => {
    console.log(req.headers);
    req.sahil = "Sahil Here";
    fs.appendFileSync("logs.txt", `${Date.now()} + ${req.method} \n`);
    console.log(`${Date.now()} + ${req.method}`);
    // res.send("Middleware 1");
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log('I am Sahil');
    req.sahil = 'I am Sahil req Middleware 2'
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('Hello About' + req.sahil);
});

app.get('/contact', (req, res) => {
    res.send('Hello Contact');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

