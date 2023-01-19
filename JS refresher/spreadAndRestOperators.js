//spread operator

var passengerCount = [2, 9, 7, 6]

function addPassengerCount(...args) {
  console.log(args);
  let sum = 0
  for (const arg of args) {
    sum += arg
  }
  return sum
}

console.log(addPassengerCount(...passengerCount));
