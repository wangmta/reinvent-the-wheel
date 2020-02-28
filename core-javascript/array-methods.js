// new methods
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

const flatArray = matrix.flat(1);

// old js method
let flatArrayOld = Array.prototype.concat([...matrix]);
