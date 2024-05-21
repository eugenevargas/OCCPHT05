// Data Types

/* Primitive Data Types - most basic data type in JS*/

console.log('-- Primitive Data Types --')

//Number
let my_num1 = 20;
let my_num2 = 90.8;
let my_num3 = -10;

console.log('Number: ', my_num1, my_num2, my_num3)

//String
let my_string1 = "Hello World!";
let my_string2 = "Welcome to JS!";

console.log('String: ', my_string1, my_string2);

//Boolean
let isStudent = true;
console.log("Boolean: ", isStudent);

//Undefined - uninitialized or missing value
let nothing;
console.log("Undefined: ", nothing)

//Null - explicitly has no value
let nullVar = null;
console.log("Null: ", nullVar);

//Object - represents a collection of key-value pairs; enclosed in { } ; can also support multiple data types
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}
console.log(person);
console.log(person.name);

//Arrays - an ordered list of values enclosed in [ ]
let numbers = [1, 2, 3, 4, 5, 'JavaScript'];
console.log(numbers);
console.log(numbers[1]);
console.log(numbers[5]);

//Functions - reusable blocks of code called by name
function greet(name) {
    console.log("Hello,", name);
};

greet('Alice');

//Date
const today = new Date();
console.log(today);