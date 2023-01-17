// The factorial of a number is the product of all the numbers from 1 to that number. For example,
// factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
// The factorial of negative numbers do not exist and the factorial of 0 is 1.

// program to find the factorial of a number
function factorial(x) {

  // if number is 0
  if (x == 0) {
      return 1;
  }

  // if number is positive
  else {
      return x * factorial(x - 1);
  }
}

// take input from the user
const num = prompt('Enter a positive number: ');

// calling factorial() if num is positive
if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}
else {
  console.log('Enter a positive number.');
}

// Output:
// Enter a positive number: 4
// The factorial of 4 is 24

// If the user enters the number 0, the program will return 1.
// If the user enters a number greater than 0, the program will recursively call itself by decreasing the number.
// This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.