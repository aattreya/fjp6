let cp = require('child_process');
// console.log(cp)

// opening calculator via node
cp.execSync("calc");

// executing a diff file via cp
let content = cp.execSync("node test.js");
console.log("Output of test.js :- " + content);
