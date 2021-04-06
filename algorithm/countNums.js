let test = [7, 7, 7, 9, 9, 3, 3, 6, 6, 6, 0, 0, 2, 3, 3, 1];

const count = (arr) => {
  let map = {},
    index = 0;
  while (arr[index] !== undefined) {
    if (map[arr[index]] === undefined) {
      map[arr[index]] = 1;
    } else {
      map[arr[index]]++;
    }
    index++;
  }
  return map;
};

console.log(count(test));

let test = [7, 7, 7, 9, 9, 3, 3, 6, 6, 6, 0, 0, 2, 1];

const hasNext = (arr, i, callback) => {
  if (arr[i] === arr[i + 1]) {
    callback();
    hasNext(arr, i + 1, callback);
  }
};

const countNum = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    hasNext(arr, i, () => {
      if (!map[arr[i]]) {
        map[arr[i]] = 1;
      }
      map[arr[i]]++;
      i++;
    });
  }
  return map;
};

console.log(countNum(test));
