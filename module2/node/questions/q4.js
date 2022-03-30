// read content of unorganised folder and make an array which has extension name of each file

let fs = require("fs");
let path = require("path");

let dirPath = path.join(__dirname, "..","unorganised");
let content = fs.readdirSync(dirPath);
console.log(content);


let arr = [];
console.log(arr);

for(let i = 0; i < content.length; i++){
    arr.push(path.extname(content[i]));
}
console.log(arr);