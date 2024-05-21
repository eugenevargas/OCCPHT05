/*
    JS Expressions
        -- applications of JS Operators
*/
console.log('--  Arithmetics Expressions --');
let num1 = 20;
let num2 = 5;
let sum = num1 + num2;
console.log(sum);
let result = 5 + 3 * 2; //PEMDAS
console.log(result); // 11

console.log('--  String Expressions --');
// ( + ) --> string concatenation operator
console.log('Hello ' + 'World!');
let display = 'Hello' + ' ' + 'World! This is Alice.';
console.log(display);

console.log('--  Logical Expressions --');
let a = 7;
let b = 5;
console.log((a > 5) && (b < 10)); // ((7 > 5) && (5 < 10))

console.log('--  Assignment Expressions --');
// Arithmetic + setting a variable's value
let x = 10;
let y = 5;
x = x + y; //updating the value of x by adding y
console.log(x); //15

console.log('--  Function Call Expressions --');
//Function Definition
function greet(name) {
    return 'Hi! I am ' + name + '!' ;
}
 
//Function Call
let introduce = greet('Joseph'); // Call the function
console.log(introduce); // Output it in the console