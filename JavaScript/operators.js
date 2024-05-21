//Arithmetic Operators - perform basic math operations
let num1 = 21;
let num2 = 10;

console.log("-- Arithmetic Operators --");

//Addition
console.log("Sum:", num1 + num2);

//Subtraction
console.log("Difference:", num1 - num2);

//Multiplication
console.log("Product:", num1 * num2);

//Division
console.log("Quotient:", num1 / num2);

//Modulus - returns the remainder of division
console.log("Modulus:", num1 % num2);

//Exponent
console.log("Exponent:", 5 ** 5);


/*
 Assignment Operators
    ( = ), ( += ), ( -= ), ( *= ), ( /= )
*/
console.log('-- Assignment Operators --');
//Equals [ = ]
let equals = 'this value';
console.log(equals);
let x = 5;
//Addition Assignment [ += ]
x += 5; // x = x + 5 --> x = 5 + 5 --> x = 10
console.log(x); //10
//Subtraction Assignment [ -= ]
x -= 5; // x = x - 5 --> x = 10 - 5 --> x = 5
console.log(x); //5
//Multiplication Assignment [ *= ]
x *= 5; //x = x * 5 --> x = 5 * 5 --> x = 25
console.log(x); //25
//Division Assignment [ /= ]
x /= 5;
console.log(x);

/*
 Comparison Operators
    -- returns boolean values
    ( == ) --> loose equality; checks if 2 values are equal, regardless of data type
    ( === ) --> strict equal; checks not just the value, but also the data type
    ( > ), ( < ), ( <= ), ( >= ), ( != )
*/
console.log('--  Comparison Operators --');
console.log(9 > 10) ; //f
console.log(10 < 20); //t
console.log(15 <= 30); //t
console.log(20 >= 50); //f
console.log('5' == 5); //t
console.log('5' === 5); //f
console.log(9 != 20); //t

/*
 Logical Operators
    --combines boolean values and logical opertors to evaluate conditions
    [ && ], [ || ], [ ! ]
*/
console.log('--  Logical Operators --');
// AND [ && ] -- returns true if both conditions are true
console.log('AND [&&]: ', true && true);
// OR [ || ] -- returns true if at least one of the conditions is true
console.log('OR [||]: ', false || true);
// NOT [ ! ] -- reverses the boolean value
console.log('NOT [!]: ', !true);

/*
 Unary Operators
    ( ++ ), ( -- )
*/
console.log('--  Unary Operators --');
let a = 10;
a++; // a + 1 --> 10 + 1
console.log(a); //11
a--; //a - 1 --> 11 - 1
console.log(a); //10

/*
 Ternary Operators
        -- takes 3 operands and returns a value based on a condition
    Syntax:
        condition ? expressionIfTrue : expressionIfFalse
*/
console.log('--  Ternary Operators --');
let age = 20;
let message =
    (age >= 20) ? 'You are of legal age' : 'You are a minor';
console.log(message);

/*
    typeOf Operator
        -- returns the data type of an operand
*/
console.log(typeof(message));
console.log(typeof(age));