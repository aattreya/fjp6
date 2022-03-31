let fs = require("fs");
let path = require("path");

// Task 1 - taking input
// asuumption - no folder inside folder
let folderPath = process.argv[2];
// console.log(folderPath);

// Task 2 - read folder
let folderExists = fs.existsSync(folderPath);
if(folderExists){
    let files = fs.readdirSync(folderPath);
    console.log(files);
}else{
    console.log("Please enter a Valid Path !!!!!!!");
}

