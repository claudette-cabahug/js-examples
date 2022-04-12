// nested array elements
const arrValue = ['one', ['two', 'three']];

// nested destructuring assignment in arrays
// In order to execute the nested destructuring assignment, 
// you have to enclose the variables in an array structure (by enclosing inside []).
const [x, [y, z]] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three