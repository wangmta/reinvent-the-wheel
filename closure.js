// 1. any outside var is automatically available inside the function
// var passed = 3;

// var addTo = function() {
//   var inner = 2;
//   return passed + inner;
// };

// console.dir(addTo);
// <function scope>  property=> Closure: passed: 3, Global: Window

var addTo = function(passed) {
  return function(inner) {
    return passed + inner;
  };
};

var addThree = new addTo(3);
addThree(1); // returns 4
