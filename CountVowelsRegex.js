// program to count the number of vowels in a string

function countVowel(str) { 

  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;

  // return number of vowels
  return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

// Output:
// Enter a string: JavaScript program
// 5

// The regular expression (RegEx) pattern is used with the match() method to find the number of vowels in a string.
// The pattern /[aeiou]/gi checks for all the vowels (gobal) (case-insensitive) in a string. Here,
// str.match(/[aeiou]/gi); gives ["a", "a", "i", "o", "a"]
// The length property gives the number of vowels present.