// Variables

var a = 5;
let b = 6;
var ans = a+b;
console.log("Hello");
console.log("Answer" + ans);

const name = "Sahil";
console.log(name);
console.log(typeof name);

// Arrays

const cars = ["Suzuki", "Volvo", "BMW", 32];
console.log(cars);

cars.push("Tesla")
console.log(cars[4]);

// If-else

let hour = 16;
if(hour < 12) {
    console.log("We are not allowed");
}
else {
    console.log("We are allowed");
}

// For Loop

var count = 10;
for(let i=0; i<=count; i++) {
    console.log(i);
}

// Object

const person = {
    name: "Sahil Gujarathi",
    age: 21,
    isStudent: false,
    hobbies: ["Reading", "Swimming", "Travelling"]
};

console.log(person);
console.log(person.age);
console.log(person.hobbies);

// Filter function

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAge);

function checkAge(age) {
    return age<=18;
}

console.log(result);

// Prompt

var prompt = require('prompt-sync')();

const age = prompt("Please enter your age: ");
if(age < 18) {
    console.log("You are below 18 years");
}
else {
    console.log("You are above 18 years");
}

