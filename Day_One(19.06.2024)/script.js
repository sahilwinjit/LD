// console.log("Welcome to Winjit !");
// console.log("Sahil Gujarathi");
// console.log("I love JS");

/*

fullName = "Tony Stark";
console.log(fullName);

// age = 24;
// console.log(age);

price = 99.99;
console.log(price);

x = null; // Value is known, but is empty.
console.log(x);

y = undefined; // Value not known.
console.log(y);

radius = 14;
console.log(radius);

isFollow = true;
console.log(isFollow);

*/

/*

let, const & var

var: Variable can be re-declared & updated. A global scope variable.
let: Variable cannot be re-declared but can be updated. A block scope variable.
const: Variable cannot be re-declared or updated. A block scope variable.

*/

/* 

Data Types in JS
- Primitive DataTypes:-
- Number, String, Boolean, Undefined, Null, BigInt, Symbol
- Null means absence of an object.

- Non-Primitive DataTypes:-
- Objects (Collection of values) (key:value)
    - Arrays
    - Functions

*/

// let x = BigInt("123"); // BigInt has n at number's last.

// let y = Symbol('dff');

/* 

// Object
const student = {
    fullName: "Sahil Gujarathi",
    age: 20,
    cgpa: 9.18,
    isPass: true
};

console.log(student.age);
console.log(student["age"]);

student["age"] = student["age"] + 1;
console.log(student.age);

console.log(typeof student);
console.log(typeof student["fullName"]);

// Conditional Statements

let age = 16;
if(age >= 18) {
    console.log("You can vote");
}

if(age < 18) {
    console.log("You cannot vote");
}

let mode = "dark"
let color;

if(mode === "dark") {
    color = "black";
}
else {
    color = "white";
}

console.log(color);

// Odd or even
let num = 10;

if(num%2 === 0) {
    console.log(num, "is Even");
}
else {
    console.log(num, "is Odd");
}

let mode1 = "silver";
let color1;

if(mode1 === "dark") {
    color1 = "black";
}
else if(mode1 === "blue") {
    color1 = "blue";
}
else if(mode1 === "pink") {
    color1 = "pink";
}
else {
    color1 = "white"
}

console.log(color1);

if(mode1 === "Dark") console.log(mode1);

// Ternary Operators

let age1 = 25;

let result = age1 >= 18 ? "adult" : "not adult"; // Simpler , compact id-else
console.log(result);

*/

// alert("Hello"); // One time popup

/*

let num = prompt("Enter a number: ");

if(num % 5 === 0) {
    console.log(num, " is a multiple of 5");
}
else {
    console.log(num, " is NOT a multiple of 5");
}

let score = prompt("Enter your score (0-100)");
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
}
else if(score >= 70 && score <= 89) {
    grade = "B";
}
else if(score >= 60 && score <= 69) {
    grade = "C";
}
else if(score >= 60 && score <= 59) {
    grade = "D";
}
else if(score >= 0 && score <= 49) {
    grade = "F";
}

console.log(grade);

*/

// Template Literals

let sentence = `This is a template literal ${1 + 2 + 3}`;
console.log(typeof sentence);

let obj = {
    item: "Pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// Template Literals - A way to have embedded expressions in strings.
// String Interpolation - To create strings by doing substituion of placeholders.

