Array.prototype.customReverse = function() {
  let len = this.length;
  for (let i = 0; i < len / 2; i++) {
    let temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this;
};
