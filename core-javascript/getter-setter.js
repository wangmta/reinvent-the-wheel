let o = {
  get getLog() {
    return this.log;
  },
  log: "log info",
  data: null,
  set setData(input) {
    this.data = input;
  },
};

o.setData = "hello";
console.log(o.getLog);
console.log(o.data);

let test = {
  one: 1,
  two: null,
  get valueOne() {
    return this.one;
  },
  set setTwo(value) {
    this.two = value;
  },
};

console.log(test.valueOne);
test.setTwo = 2;
console.log(test.two);
