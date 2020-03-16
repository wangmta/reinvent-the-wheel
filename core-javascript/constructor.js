"use strict";

// the job of the constructor is to set the initial properties of the Obj it creates

let Car = function(color) {
  if (!new.target) {
    throw "Car() must be called with new keyword";
  }
  // if not use 'use strict' mode, this points to the global object, otherwise it creates a public property of this Class.
  this.color = color;
};

let redCar = new Car();

redCar.color;

// extending constructor
let Mammal = function(legs) {
  this.legs = legs;
};

Mammal.prototype = {
  walk() {
    return "walking";
  },
  sleep() {
    return "sleeping";
  }
};

let Bat = function(legs, isVegetarian) {
  // this is similar to super(props)
  Mammal.call(this, legs);
  this.isVegetarian = isVegetarian;
};

console.dir(Bat);
// set Bat's prototype to Mammal's prototype, reference
// this will delete Bat's prototype properties, including constructor
Bat.prototype = Object.create(Mammal.prototype);

// this extends Bat's constructor
Bat.prototype.constructor = Bat;
console.dir(Bat);

Bat.prototype.fly = function() {
  return "flying";
};

let fruitBat = new Bat(4, true);
fruitBat.fly();
fruitBat.sleep();
