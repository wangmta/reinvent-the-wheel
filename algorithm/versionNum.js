const versionNumString = (num1, num2) => {
  const arr1 = num1.split("."),
    arr2 = num2.split(".");
  const maxLen = [...arr1, ...arr2].reduce((prev, curr) => {
    return Math.max(prev, curr.length);
  }, 0);
  console.log(maxLen);
  const numArr1 = arr1.map((num) => num.padStart(maxLen, "0"));
  const numArr2 = arr2.map((num) => num.padStart(maxLen, "0"));
  return numArr1.join("") - numArr2.join("");
};

console.log(versionNumString("3.2.25", "3.12.7"));
