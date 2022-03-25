let fs = require("fs");
// console.log(fs);

let path = require("path");
let filePath = path.join(__dirname, "file.txt");
console.log(filePath);

// creates a file if not already existing else overwrites the data
fs.writeFileSync(filePath, "Hello i am a text file");