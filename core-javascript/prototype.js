let Car = function(color) {
  this.color = color;
};

Car.prototype.getColor = function() {
  return this.color;
};

let redCar = new Car("red");

redCar.__proto__ === Car.prototype; // true

Car.__proto__ === Function.prototype; // true

Function.__proto__ === Function.prototype; // true

Car.__proto__.__proto__ === Object.prototype; // true

// only constructor function has prototype property
// prototype is pointing (reference) to instance (child)
// __proto__ is pointing to creator (parent)

const ToyCar = function() {};

// object.create extend the constructor
ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();

console.dir(legoCar);
console.dir(legoCar instanceof ToyCar); // true
console.dir(legoCar instanceof Car); // true
console.dir(legoCar instanceof Object); // true

ToyCar.prototype.isPrototypeOf(legoCar); // true
Car.prototype.isPrototypeOf(legoCar); // true
Object.prototype.isPrototypeOf(legoCar); // true
