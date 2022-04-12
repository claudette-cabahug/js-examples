// program to reverse a string

function reverseString(str) {

  // return a new array of strings
  const arrayStrings = str.split(""); // h e l l o
 
  // reverse the new created array elements
  const reverseArray = arrayStrings.reverse(); // o l l e h

  // join all elements of the array into a string
  const joinArray = reverseArray.join(""); // olleh
  
  // return the reversed string
  return joinArray;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);


// Output:
// Enter a string: hello
// olleh

// Short Form:
const str = 'asdfghjkl'
const strReverse = str.split('').reverse().join('')
// Output: 'lkjhgfdsa'