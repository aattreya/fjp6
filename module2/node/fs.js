let fs = require("fs");
// console.log(fs);

let path = require("path");
// let filePath = path.join(__dirname, "file.txt");
// console.log(filePath);

// C - create
// creates a file if not already existing else overwrites the data
// fs.writeFileSync(filePath, "Hello i am a text file ");

// // R - read
// console.log("Before update : ")
// let content = fs.readFileSync(filePath, 'utf-8');
// console.log(content);

// U - update
// fs.appendFileSync(filePath, "\nNewly added content");
// console.log("After update");
// console.log(fs.readFileSync(filePath, 'utf-8'));

// D- delete
// fs.unlinkSync(filePath);

// CRUD on directory

// alternate way to create a directory prevents the error
// if(!fs.existsSync("hamariDirectory"))
//     fs.mkdirSync("hamariDirectory");

// reads a directory
// let folderPath = "D:\\FJP6\\module1";
// let dirContent = fs.readdirSync(folderPath);
// console.log(dirContent);

// delete a directory
// fs.rmdirSync("hamariDirectory", {recursive : true});


// copy a file
let sourcePath = path.join(__dirname,"file.txt");
let destPath = path.join(__dirname,"module","file.txt");
console.log(sourcePath);
console.log(destPath);
fs.copyFileSync(sourcePath,destPath);
