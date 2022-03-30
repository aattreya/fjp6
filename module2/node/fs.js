let fs = require("fs");
// console.log(fs);

let path = require("path");
let filePath = path.join(__dirname, "file.txt");
// console.log(filePath);

// C - create
// creates a file if not already existing else overwrites the data
fs.writeFileSync(filePath, "Hello i am a text file ");

// R - read
console.log("Before update : ")
let content = fs.readFileSync(filePath, 'utf-8');
console.log(content);

// U - update
fs.appendFileSync(filePath, "\nNewly added content");
console.log("After update");
console.log(fs.readFileSync(filePath, 'utf-8'));

// D- delete
fs.unlinkSync(filePath);

// CRUD on directory
let filePathDir = path.join(__dirname, "temp");
console.log(filePathDir);

// C- create
// we can also give only the dir name, it will create the directory by default in the same directory as the file
// fs.mkdirSync(filePathDir);

// alternate way
if(!fs.existsSync("hamariDirectory"))
    fs.mkdirSync("hamariDirectory");

// R - create
fs.readdirSync(filePathDir);

// D - delete
fs.rmdirSync(filePathDir);
