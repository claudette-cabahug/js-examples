let arrValue = [10];

// assigning default value 5 and 7
let [x = 5,  y = 7] = arrValue;

console.log(x); // 10
console.log(y); // 7

// arrValue has only one element. Hence:
  // the x variable will be 10
  // the y variable takes the default value 7







// assign default value 26 to age if undefined
const person = {
    fname: 'Jack',
}

const { fname, age = 26} = person;

console.log(fname); // Jack
console.log(age); // 26