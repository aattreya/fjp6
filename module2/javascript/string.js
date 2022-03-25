let str = 'I am a string';
console.log(str);

let len = str.length;
console.log(len);

// sliced method
let slice = str.slice(2,5);
console.log(slice);

// replace method
let replacedString = str.replace('am', 'was');
console.log(replacedString);
console.log(str);

// uppercase and lowercase
let upperCase = str.toUpperCase();
let lowerCase = str.toLowerCase();
console.log(upperCase);
console.log(lowerCase);

// concat
let firstName = 'Aattreya ';
let lastName = 'Barthwal';
let fullName = firstName.concat(lastName);
console.log(fullName);

// split
let split = str.split(" ");
console.log(split);

// each method returns a new string without changing the original string
console.log(str);



