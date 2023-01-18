var Car = function (make, model, owner) {
  this.make = make,
  this.model = model,
  this.owner = owner,
  this.getDetails = function () {
    console.log(`The owner of the ${this.make} ${this.model} is ${this.owner}.`)
  }
}

var car1 = new Car("BMW", 539, "Jeck-jeck")
var car2 = new Car("Mercedes-Benz", 503, "Claudette")
var car3 = new Car("Fiat", 166, "Rodney")

// console.log(car1);
// console.log(car2);
// console.log(car3);

car1.getDetails();
console.log(car1.owner);
car2.getDetails();
car3.getDetails();
