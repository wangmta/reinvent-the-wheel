// factory pattern

var peopleFactory = function(name, age, state) {
  var temp = {};
  temp.name = name;
  temp.age = age;
  temp.state = state;

  temp.printPerson = function() {
    console.log(`${this.name}, ${this.age}, ${this.city}`);
  };

  return temp;
};

var person1 = peopleFactory("John", 23, "CA");

// constructor pattern

var peopleConstructor = function(name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function() {
    console.log(`${this.name}, ${this.age}, ${this.city}`);
  };
};

var person2 = new peopleConstructor("John", 23, "CA");

// prototype pattern

var peopleProto = function() {};
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "No Name";
peopleProto.prototype.city = "No City";

peopleProto.prototype.printPerson = function() {
  console.log(`${this.name}, ${this.age}, ${this.city}`);
};

var person3 = new peopleProto();
person3.age = 11;
// person1.name = "John";
person3.city = "CA";

// this check if the obj has the property either in object or in its prototype
console.log("name" in person1);
// checks only property belongs to the object
person3.hasOwnProperty("name"); // if the person3.name = "John" is missing, then false

// dynamic prototype pattern

var peopleDynamicProto = function(name, age, state) {
  this.age = age;
  this.name = name;
  this.state = state;

  if (typeof this.printPerson !== "function") {
    peopleDynamicProto.prototype.printPerson = function() {
      console.log(`${this.name}, ${this.age}, ${this.city}`);
    };
  }
};

var person4 = new peopleDynamicProto("John", 23, "CA");
person4.hasOwnProperty("name"); // true
