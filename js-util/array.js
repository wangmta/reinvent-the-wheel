Array.prototype.customReverse = function() {
  let len = this.length;
  for (let i = 0; i < len / 2; i++) {
    let temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this;
};

Array.prototype.customForEach = function(func, obj) {
  let len = this.length,
    _this = obj ? obj : window;
  for (let i = 0; i < len; i++) {
    func.call(_this, this[i], i, this);
  }
};

Array.prototype.customMap = function(func, obj) {
  let len = this.length,
    _this = obj ? obj : window,
    arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(func.call(_this, this[i], i, this));
  }
  return arr;
};

var myObject = { name: "myObject" };

[1, 2].forEach(function(item) {
  console.log(typeof this.name);
  console.log(item); // 1, 2
  console.log(this === myObject, this); // true  {name: "myObject"}
}, myObject);
