// basic function
function sayHello(){
    console.log("hello from functions");
}
sayHello();

// function with parameters
function sum(num1, num2){
    let addition = num1 + num2;
    console.log('sum of given numbers is '+ addition);
}
sum(4,8);

// function with return type
function multiply(num1, num2){
    return num1*num2;
}
let mult = multiply(3,5);
console.log('multiplication of given numbers is '+mult);

// functions are first class citizens in JS
let a = function sub(num1, num2){
            return num1 - num2;
        }

console.log(a(10,5));

// IIFE -> Immediately Invoked Function Expression
(function(){
    console.log('Hello from iife');
})();

// IIFE with parameters
(function(num1, num2){
    console.log(num1/num2);
})(10,5);

let test = (function(num1, num2){
                return num1 % num2;
            })(5,2);
console.log(test);