let arr = [];
console.log(arr);

let eleArr = [1, 2, 3, 'I am string', 4.5, 'a', true];
console.log(eleArr);
console.log(eleArr[3]);

eleArr[2] = 'Nothing';
console.log(eleArr);

console.log('#############################');

// Array methods
// 1.push returns the new length of the array
console.log('Array before push :- '+eleArr);
console.log(eleArr.push("new item"));  
console.log("Array after push :- "+eleArr);

// 2.pop returns the element that was popped out
console.log('Array before pop :- '+eleArr);
console.log(eleArr.pop());  
console.log("Array after pop :- "+eleArr);

// 3.shift returns the element that was shifted
console.log('Array before shift :- '+eleArr);
console.log(eleArr.shift()); 
console.log("Array after shift :- "+eleArr);

// 4.unshift returns the new length of the array
console.log('Array before unshift :- '+eleArr);
console.log(eleArr.unshift('new element')); 
console.log("Array after unshift :- "+eleArr);