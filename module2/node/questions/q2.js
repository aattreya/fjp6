// given an array arr = [audio, video, image, software, documents, applications, other]
// make folder for each element in the given array and inside each folder make four files of that type

let fs = require("fs");
let path = require("path");

let arr = ["audio", "video", "image", "software", "documents", "applications", "other"];
let extArr = [".mp3", ".mp4", ".jpg", ".exe", ".txt", ".apk", ".rar"];
let nameArr = ["abc", "efg", "xyz", "def"];
if(!fs.existsSync("Organise"))
    fs.mkdirSync("Organise");

for(let i = 0; i < arr.length; i++){
    let folderPath =  path.join(__dirname,"Organise",arr[i]);
    if(!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath);
    for(let j = 0; j < nameArr.length; j++){
        let fileName = nameArr[j] + extArr[i];
        let filePath = path.join(folderPath,fileName);
        fs.writeFileSync(filePath, "");
    }
}