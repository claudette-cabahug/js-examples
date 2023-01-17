// program to append an object to an array

function insertObject(arr, obj) {

  // append object
  arr.push(obj);
  
  console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);

// Output:
// [1, 2, 3, {x: 12, y: 8}]

// The push() method adds an item to the end of an array.