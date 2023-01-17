const arrValue = ['one', 'two', 'three', 'four'];

// destructuring assignment in arrays
// assigning remaining elements to y
const [x, ...y] = arrValue;

console.log(x); // one
console.log(y); // ["two", "three", "four"]

// You can skip unwanted items in an array without assigning them to local variables.


// The variable with the spread syntax cannot have a trailing comma ,. 
// You should use this rest element (variable with spread syntax) as the last variable.
// const [ ...x, y] = arrValue;
// console.log(x); // error


const person = {
  fname: 'Sara',
  age: 25,
  gender: 'female'    
}

// destructuring assignment
// assigning remaining properties to rest
let { fname, ...rest } = person;

console.log(fname); // Sara
console.log(rest); // {age: 25, gender: "female"}