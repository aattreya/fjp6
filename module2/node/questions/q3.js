// copy index.html from module1 to module2
let path = require("path");
let fs = require("fs");

let srcPath = path.join(__dirname,"..","..","..","module1","index.html");
console.log(srcPath);
let destPath = path.join(__dirname, "..", "..", "index.html");
console.log(destPath);
fs.copyFileSync(srcPath, destPath);