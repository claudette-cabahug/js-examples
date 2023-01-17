//JavaScript program to swap two variables

//take input from the users
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// This method only uses the two variables 
// and swaps the value of the variables using arithmetic operators + and -.

// Here, parseInt() is used because prompt() takes input from the user as a string. 
// And when numeric strings are added, it behaves as a string. 
// For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.