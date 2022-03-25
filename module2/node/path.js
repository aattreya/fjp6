// "D:\FJP6\module2\node\path.js"
let path = require("path");
// console.log(path);

let extensionName = path.extname("D:\FJP6\module2\node\path.js");
console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName);

// console.log(__dirname);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath, "test.js");
console.log(newFilePath);