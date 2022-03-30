// create a new folder inside the same directory and create a file inside it with the content
//"new file has been added"

let fs = require("fs");
let path = require("path");

if(!fs.existsSync("newFolder"))
    fs.mkdirSync("newFolder");

let fileKaPath = path.join(__dirname,"newFolder","newFile");
console.log(fileKaPath);

fs.writeFileSync(fileKaPath, "new file has been added");