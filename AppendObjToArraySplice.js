// program to append an object to an array

function insertObject(arr, obj) {

  // find the last index
   let index = arr.length;

   // appending object to end of array
   arr.splice(index, 0, obj);
   
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

// The splice() method is used to add an object to an array.
// The splice() method adds and/or removes an item.
// The first argument represents the index where you want to insert an item.
// The second argument represents the number of items to be removed (here, 0).
// The third argument represents the element that you want to add to an array.