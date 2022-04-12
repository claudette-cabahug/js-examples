// program to replace all line breaks in a string with <br>
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.replace(/(\r\n|\r|\n)/g, '<br>');

console.log(result);

// Output:
// I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.

// The pattern /(\r\n|\r|\n)/ checks for line breaks.
// The pattern /g checks across all the string occurrences.