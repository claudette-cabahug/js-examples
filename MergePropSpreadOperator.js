// program to merge property of two objects

// object 1
const person = {
  name: 'Jack',
  age:26
}

// object 2
const student = {
  gender: 'male'
}

// merge two objects
const newObj = {...person, ...student};

console.log(newObj);


// Output:
// {
//   name: "Jack",
//   age: 26,
//   gender: "male"
// }

// if the two objects have the same key, then the second object's key overwrites the first object's key