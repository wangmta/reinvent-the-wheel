// import {
//   registerClass,
//   classCollection,
//   protect,
//   protectedMethods,
//   override
// } from "./decorator";

// @registerClass
// class Business {
//   print() {
//     console.log(this.constructor.name);
//   }

//   @protect
//   loginTest() {
//     console.log("login successful Business");
//   }
// }

// @registerClass
// class Supermaket extends Business {
//   constructor() {
//     super();
//   }

//   @protect
//   loginTest() {
//     console.log("login successful Supermarket");
//   }

//   @override
//   anyMethod() {
//     // console.log(this.constructor.name);
//   }
// }

// // console.log(classCollection);
// // console.log(protectedMethods);
// // classCollection["class-Business"].print();
// // classCollection["class-Supermaket"].anyMethod();
// classCollection["class-Business"].loginTest({ token: "random" });
// classCollection["class-Supermaket"].loginTest({ token: "123" });

this.table = "window table";

this.garage = {
  table: "garage table",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  }
};

// true in browser, false here
console.log(this.table === window["table"]);
console.log(this.garage === window["garage"]);

console.log(this); //{table: ..., garage: ...}

let johnsRoom = {
  table: "john's table",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  }
};

console.log(johnsRoom.table);
// console.log(this.johnsRoom.table); //error Cannot read property 'table' of undefined

this.garage.cleanTable();

johnsRoom.cleanTable();

const cleanTable = function(soap?) {
  console.log(`Function: cleaning ${this.table}, using ${soap}`);
};

// cleanTable(); // Function: cleaning undefined

// cleanTable.call(this, "dish soap");

// cleanTable.call(this.garage, "dish soap");

// cleanTable.call(johnsRoom, "dish soap");

// inner fucntion

const cleanInnerTable = function(soap?) {
  // method 1
  // let useThis = this;
  // const innerFunction = function(_soap) {
  //   console.log(`Function: cleaning ${useThis.table}, using ${_soap}`);
  // };
  // innerFunction(soap);
  // const innerFunction = function(_soap) {
  //   console.log(`Function: cleaning ${this.table}, using ${_soap}`);
  // };
  // method 2
  // innerFunction.call(this, soap);
  // method 3
  // bind creates a new function with the old call signiture
  // innerFunction.bind(this)(soap);
  // method 4  user arrow function, it will get 'this' from its immediate outer scope
  const innerFunction = _soap => {
    console.log(`Function: cleaning ${this.table}, using ${_soap}`);
  };
  innerFunction(soap);
  // test nested arrow function
  // const innerFunction = _soap => {
  //   this.table = "inner inner table";
  //   const innerInnerFunction = __soap => {
  //     console.log(`Function: cleaning ${this.table}, using ${_soap}`);
  //   };
  //   innerInnerFunction(_soap);
  // };
  // innerFunction(soap);
};

// cleanInnerTable.call(this, "dish soap");
cleanInnerTable.bind(this)("bind soap");
cleanInnerTable.bind(this, "bind another soap")();

// cunstructor function
// let createRoom = function(name) {
//   this.table = `${name}'s table`;
// };

// createRoom.prototype.cleanInnerTable = function(soap) {
//   console.log(`Function: cleaning ${this.table}, using ${soap}`);
// };

class createRoom {
  table;
  constructor(name) {
    this.table = `${name}'s table`;
  }
  cleanInnerTable(soap) {
    console.log(`Function: cleaning ${this.table}, using ${soap}`);
  }
}

// let joesRoom = createRoom("Joe");
// cleanInnerTable.call(joesRoom, "special soap");

let joesRoom = new createRoom("Joe");
// joesRoom.cleanInnerTable("some soap.");
