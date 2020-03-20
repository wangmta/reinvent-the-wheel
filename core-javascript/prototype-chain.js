const Car = function() {};

Car.prototype = {
  print() {
    return "I'm a Car.";
  }
};

const ToyCar = function() {};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function() {
  return "I'm a ToyCar.";
};

const TransformerCar = function() {};

TransformerCar.prototype = Object.create(ToyCar.prototype);

TransformerCar.prototype.print = function() {
  return "I'm a TransformerCar.";
};

const toyota = new Car();
const logoCar = new ToyCar();
const optimusPrim = new TransformerCar();

toyota.print();

logoCar.print();

optimusPrim.print();
