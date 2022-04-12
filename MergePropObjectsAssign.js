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
const newObj = Object.assign(person, student);

console.log(newObj);


// Output:
// {
//   name: "Jack",
//   age: 26,
//   gender: "male"
// }


// The Object.assign() method returns an object 
// by copying the values of all enumerable properties from one or more source objects.

// if the two objects have the same key, then the second object's key overwrites the first object's key