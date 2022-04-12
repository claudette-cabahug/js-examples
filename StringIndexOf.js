// program to check if a string contains a substring

// take input
const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str.indexOf(checkString) !== -1) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}

// Output:
// Enter a string: JavaScript is fun
// Enter a string that you want to check: fun
// The string contains fun

// The indexOf() method searches a string and returns the position of the first occurrence. 
// When a substring cannot be found, it returns -1.
// The indexOf() method is case sensitive.