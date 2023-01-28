const json = '{"result":true, "count":42}'; // string data
const obj = JSON.parse(json); // turned string to object ---> {"result":true, "count":42}

const stringObj = JSON.stringify(obj);

// console.log(obj.count);
// Expected output: 42

// console.log(obj.result);
// Expected output: true

console.log(stringObj);
console.log(typeof stringObj);