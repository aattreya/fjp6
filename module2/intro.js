// printing in js
console.log("Welcome to JavaScript");

// variables and datatypes in js
let num = 10;
console.log(num);

let char = 'a';
console.log(char);

let str = 'i am string';
console.log(str);

let bool = true;
console.log(bool);

// loops in js
for(let i = 1; i <= 5; i++){
    console.log(i);
}
console.log();
let count = 10;
while(count > 0){
    console.log(count);
    count--;
}

// is Prime in JS

let flag = 1;
let n = 7;
for(let i = 2; i*i <= n; i++){
    if(n % i == 0){
        flag = 0;
    }
}
if(flag == 1) console.log('prime');
else console.log('not prime');