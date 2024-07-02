/*

console.log("Server file is running.");

function add(a, b) {
    return a+b;
}
let result = add(2, 4);
console.log(result);

var add = function(a, b) {
    return a+b;
}

console.log(add(2,7));

let add1 = (a,b) => {
    return a+b;
}
console.log(add1(9, 2));

let add2 = (a, b) => a+b;
console.log(add2(78, 91));

(
    function() {
        console.log("Sahil");
    }
)();

function callback() {
    console.log("Calling callback function.");
}

let addition = function(a, b, callback) {
    let result = a+b;
    console.log(result);
    callback();
}

addition(10, 20, callback);

addition(10, 40, function() {
    console.log("Addition Completed");
});

addition(20, 50, () => console.log("Addition Completed successfully"));

var fs = require('fs');
var os = require('os');

let user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', 'HI' + user.username + '!', ()=> {
    console.log('File is created.');
});



const notes = require('./notes.js');
console.log("Notes File is available");

let age = notes.age;
console.log(age);

let res = notes.addNumber(age+18, 10);
console.log(`result is ${res}`);

var _ = require('lodash');

let data = ["Person", "Person", 1, 2, 1, 2, "Name", "Age", '2'];

let filter = _.uniqueId(data);

console.log(filter);

*/




// Express

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello.....');
});

app.get('/hi', function (req, res) {
    res.send("Hey...............")
});

app.get('/bye', function (req, res) {
    res.send("Byeeeeeee");
});

app.get('/idli', function (req, res) {
    let customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter'
    }
    res.send(customized_idli);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

