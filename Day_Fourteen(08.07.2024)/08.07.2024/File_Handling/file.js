const fs = require('fs');

// Sync:- Creating and writing the file.
fs.writeFileSync('./test.txt', 'Hey test.txt');

// Async:- Creating and writing the file.
fs.writeFile('./test2.txt', 'Hey test2.txt', (err) => {
    if(err) {
        console.log("Some Error Occured.");
    }
    else {
        console.log("File Created and Wriiten Successfully.");
    }
});

// Sync:- Reading the file.
const result = fs.readFileSync('./contact.txt', "utf-8");
console.log(result);

// Async:- Reading the file.

fs.readFile("./contact.txt", "utf-8", (err, result) => {
    if(err) {
        console.log("Error", err);
    }
    else {
        console.log(result);
    }
});

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `Hey There \n`);

fs.cpSync('./test.txt', './copy.txt');

// For deleting a file.
fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt"));
console.log(fs.statSync("./test.txt").isFile());

fs.mkdirSync("my-docs1");

fs.mkdirSync("my-docs2/a/b", { recursive: true});

