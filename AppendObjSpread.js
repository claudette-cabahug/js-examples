// program to append an object to an array

function insertObject(arr, obj) {

  // append object
   newArr = [...arr, obj];
   
   console.log(newArr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);

// Output:
// [1, 2, 3, {x: 12, y: 8}]

// The spread syntax allows you to copy all the elements to an array. Then, the object is added to the end of the array.