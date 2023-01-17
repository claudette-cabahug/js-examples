// ES6 - assigning object attributes to variables 
const person = {
  fname: 'Sara',
  age: 25,
  gender: 'female'    
}

// destructuring assignment
let { fname, age, gender } = person;

// *using different variable names
// let { name: name1, age: age1, gender:gender1 } = person;
// console.log(name1); // Sara

console.log(fname); // Sara
console.log(age); // 25
console.log(gender); // female

// The order of the name does not matter in object destructuring.
// When destructuring objects, you should use the same name for the variable as the corresponding object key.

// Before ES6 - *assigning object attributes to variables
// const person = {
//   name: 'Sara',
//   age: 25,
//   gender: 'female'    
// }

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female