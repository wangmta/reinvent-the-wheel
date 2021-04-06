this.table = "window table";

this.garage = {
  table: "garage table",
};

let johnsRoom = { table: "john's table" };

console.log(johnsRoom.table);
console.log(this.johnsRoom.table);

let obj = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); // "bar"
    console.log("outer func:  self.foo = " + self.foo); // "bar"

    (function() {
      console.log(this === global); // true
      console.log("inner func:  this.foo = " + this.foo); // undefined
      console.log("inner func:  self.foo = " + self.foo); // "bar"
    })();

    (() => {
      console.log(this === obj); //true
      console.log("inner func:  this.foo = " + this.foo); // "bar"
      console.log("inner func:  self.foo = " + self.foo); // "bar"
    })();
  },
};

obj.func();
