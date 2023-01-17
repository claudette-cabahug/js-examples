// program to convert date to number
// create date
const d1 = new Date();
console.log(d1);

// converting to number
const result = d1.getTime();
console.log(result);

// Output:
// Mon Nov 09 2020 10:52:32 GMT+0545 (Nepal Time)
// 1604898452084

// The getTime() method returns the number of milliseconds 
// from midnight of January 1, 1970 (EcmaScript epoch) to the specified date.