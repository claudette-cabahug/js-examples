// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// parseInt() parses a string and returns the first integer
// parseInt() is used to convert the user input string to number.
// prompt() is used to take inputs from the user
// To display the result, we have used the template literal ` `. 
// This allows us to include variables inside strings.