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
