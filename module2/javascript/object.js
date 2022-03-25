// Empty object
let obj = {};
console.log(obj);

let myObj = {
    "Name" : 'Aattreya Barthwal',
    "Age" : 20,
    phoneNo : 8392018283,
    lastName : 'Barthwal'
};
console.log(myObj);

let capAmerica = {
    name : 'Steve',
    age : 9999,
    friends : ['Natasha', 'Tony', 'Bruce', 'Thor'],
    address : {
        city : 'Queens',
        state : 'New York'
    },
    isAvenger : false,
    sayHi : function(){
        console.log("Captain america says Hiiii");
    }
}

console.log(capAmerica);
console.log(capAmerica.friends);
capAmerica.sayHi();

// adding a key
capAmerica.movies = ['Avengers', 'Civil War', 'Endgame'];
console.log(capAmerica);

// deleting a key
delete capAmerica.movies;
console.log(capAmerica);

// changing the value of a key
capAmerica.isAvenger = true;
console.log(capAmerica);

// second method to access a key
console.log(capAmerica.name);
console.log(capAmerica['name']);