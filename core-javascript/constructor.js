"use strict";

let Car = function(color) {
  if (!new.target) {
    throw "Car() must be called with new keyword";
  }
  // if not use 'use strict' mode, this points to the global object, otherwise it creates a public property of this Class.
  this.color = color;
};

let redCar = new Car();

redCar.color;
