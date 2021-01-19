function convertToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

function findLongestWordLength(str) {
  let arr = str.split(" ");
  return arr.reduce((acc, curr) => {
    if (curr.length > acc) {
      acc = curr.length;
    }
    return acc;
  }, 0);
}

function largestInFourArrays(arr) {
  let max = 0,
    res = {};
  arr.forEach((item, index) => {
    const arrMax = Math.max(...item);
    if (arrMax > max) {
      max = arrMax;
      res[max] = index;
    }
  });
  return arr[res[max]];
}

console.log(
  largestInFourArrays([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

function largestOfFourArrays(arr) {
  let max = [];
  arr.forEach((item) => {
    max.push(Math.max(...item));
  });
  return max;
}

console.log(
  largestOfFourArrays([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

function confirmEnding(str, target) {
  const len = target.length;
  return str.slice(-len) === target;
}

confirmEnding("Britain", "in");

function repeatStringNumTimes(str, num) {
  let res = "";
  for (let i = 0; i < num; i++) {
    res += str;
  }
  return res;
}

function truncateString(str, num) {
  if (str.length > num) {
    str = str.slice(0, num) + "...";
  }
  return str;
}

function findFirstElement(arr, func) {
  let num = null;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return arr[i];
    }
  }
  if (num === null) return undefined;
}

console.log(findFirstElement([1, 2, 3, 4], (num) => num % 2 === 0));

function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(null));

function titleCase(str) {
  const arr = str.toLowerCase().split(" ");
  str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
  }
  return str.trim();
}

titleCase("I'm a little tea pot");

function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  arr = arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
  return arr.join(" ");
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  // The second array should remain the same after the function runs.
  // no splice
  let res = arr2.slice();
  res.splice(n, 0, ...arr1);
  return res;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// falsy bouncer
const res = arr.filter((item) => item);
return res;

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
// 2
console.log(getIndexToIns([5, 3, 20, 3], 5));
// 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

function mutation([one, two]) {
  one = one.toLowerCase();
  two = two.toLowerCase();
  return two.split("").every((char) => one.includes(char));
}

mutation(["hello", "hey"]);

function chunkArrayInGroups(arr, size) {
  if (arr.length / size < 1) return;
  let res = [];
  let step = Math.ceil(arr.length / size);
  for (let i = 0; i < arr.length; i += size) {
    if (i + size <= arr.length) {
      res.push(arr.slice(i, i + size));
    } else {
      res.push(arr.slice(i));
    }
  }
  console.log(res);
  return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
