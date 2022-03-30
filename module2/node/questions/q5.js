// move a file (file1.txt - from questions to newFolder)

let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname,"file1.txt");
let destPath = path.join(__dirname,"newFolder","file1.txt");

fs.copyFileSync(srcPath, destPath);
fs.unlinkSync(srcPath);
