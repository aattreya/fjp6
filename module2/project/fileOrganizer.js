let fs = require("fs");
let path = require("path");

// Task 1 - taking input
// asuumption - no folder inside folder
let folderPath = process.argv[2];
// console.log(folderPath);

let extensions = {
    Audio : [".mp3"],
    Video : [".mp4", ".mkv"],
    Image : [".jpeg", ".jpg", ".png", ".gif"],
    Documents : [".doc", ".pdf", ".xlsx", ".txt"],
    Software : [".exe"]
}


// Task 2 - read folder
// Task 3 - differentiate files
let folderExists = fs.existsSync(folderPath);
if(folderExists){
    let files = fs.readdirSync(folderPath);
    for(let i = 0; i < files.length; i++){
        let ext = path.extname(files[i]);
        let folderName = giveFolderName(ext);
        // console.log("Ext -- "+ext+" Folder Name -- "+folderName);
        if(!fs.existsSync(path.join(folderPath,folderName)))
            fs.mkdirSync(path.join(folderPath,folderName));
        
        // can also put this in an entire separate function
        moveFile(folderPath,folderName,files[i]);
    }
    
}else{
    console.log("Please enter a Valid Path !!!!!!!");
}


function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i = 0; i < extArr.length; i++){
            if(ext == extArr[i]){
                return key;
            }
        }
    }
    return "Others";
}

function moveFile(folderPath,folderName,fileName){
    let srcPath = path.join(folderPath,fileName);
    let destPath = path.join(folderPath,folderName,fileName);
    fs.copyFileSync(srcPath,destPath);
    fs.unlinkSync(srcPath);
}