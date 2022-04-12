// program to replace all line breaks in a string with <br>
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.split('\n').join('<br>');

console.log(result);

// Output:
// I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.

// The split('\n') splits the string into array elements by splitting on a line break.
// The join('<br>') method joins the array by adding <br> between array elements.