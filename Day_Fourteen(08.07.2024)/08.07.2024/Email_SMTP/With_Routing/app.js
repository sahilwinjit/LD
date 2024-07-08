const express = require("express");
const app = express();
const sendMail = require("./controllers/sendMail");

app.get('/', (req, res) => {
    console.log("Hello.");
});

app.get('/sendMail', sendMail);

app.listen(3000, () => {
    console.log("Server Started");
});

