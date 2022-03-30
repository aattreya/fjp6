// read content of unorganized folder and print each file type 
let fs = require("fs");
let path = require("path");

let dirPath = path.join(__dirname,"..", "unorganised")
let content = fs.readdirSync(dirPath);
console.log(content);

for(let i = 0; i < content.length; i++){
    
    if(path.extname(content[i]) == '.jpg') console.log("Image");
    else if(path.extname(content[i]) == '.mp3') console.log("Audio");
    else if(path.extname(content[i]) == '.mp4') console.log("Video");
    else if(path.extname(content[i]) == '.zip') console.log("Compressed");
    else if(path.extname(content[i]) == '.xlsx') console.log("Excel");
    else if(path.extname(content[i]) == '.doc') console.log("Word");
    else if(path.extname(content[i]) == '.pdf') console.log("PDF");
}