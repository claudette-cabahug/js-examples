const person = {
  fname: 'Jack',
  age: 26,
  hobbies: {
      read: true,
      playGame: true
  }
}

// nested destructuring 
// In order to execute the nested destructuring assignment for objects, 
// you have to enclose the variables in an object structure (by enclosing inside {}).
const {fname, hobbies: {read, playGame}} = person;

console.log(fname); // Jack
console.log(read); // true
console.log(playGame); // true