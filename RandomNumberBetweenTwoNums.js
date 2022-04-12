// Math.random() * (highestNumber - lowestNumber) + lowestNumber

// generating a random number between 1 and 10
const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);

// This will show a random floating-point number greater than 1 and less than 10.
// You can use Math.floor() to get a random integer value. 
// Math.floor() returns the number by decreasing the value to the nearest integer value. 

// find the random integer value between two numbers
Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber




// find the random integer in between min (inclusive) to max (inclusive), you can use the following formula
Math.floor(Math.random() * (max - min + 1)) + min