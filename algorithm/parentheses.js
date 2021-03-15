// var isValid = function (s) {
//     const pMap = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };
//     const matchStack = [];

//     // validate input
//     if (s === null || s === undefined)
//         return false;

//     for (let i = 0; i < s.length; i++) {
//         const currChar = s.charAt(i);
//         let topElement;
//         if (pMap[currChar] !== undefined) {
//             topElement = (matchStack.length === 0) ? '#' : matchStack.pop();
//             if (topElement !== pMap[currChar])
//                 return false;
//         } else {
//             matchStack.push(currChar);
//         }
//     }
//     return matchStack.length === 0;
// }

// isValid('(){}[][()]')

// var isValid = function (s) {
//     if (!s) return false;
//     const pMap = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };
//     const tempArray = [];
//     for (let i = 0; i < s.length; i++) {
//         const currStr = s[i];
//         let topElement;
//         if (pMap[currStr] !== undefined) {
//             topElement = !tempArray.length ? 'placeholder' : tempArray.pop();
//             console.log('line1', tempArray);
//             // remove opening bracket one by one, whenever you meet a closing bracket, if should close last char.
//             // if not, then the statement is invalid
//             if (topElement !== pMap[currStr]) return false;
//         } else {
//             tempArray.push(currStr);
//             console.log('line2', tempArray);
//         }
//     }
//     return tempArray.length === 0;
// }

var isValid = function(s) {
  if (!s) return false;
  const pMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const matchArray = [];
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    let lastChar;
    // test if currentChar is opening bracket
    if (pMap[currentChar]) {
      matchArray.push(currentChar);
      // console.log('line1', matchArray);
    } else {
      // get last pushed bracket
      if (matchArray.length) {
        lastChar = matchArray.pop();
        // console.log('line2', matchArray);
        if (pMap[lastChar] !== currentChar) return false;
      }
    }
  }
  return matchArray.length === 0;
};

console.log(isValid("({)}"));
console.log(isValid("(){}[][()]"));
console.log(isValid("[({})][]()"));

// psudo code, solved with stack data structure
const bracketMap = {
  "}": "{",
  "]": "[",
  ")": "(",
};

function reversed(bracket) {
  return bracketMap[bracket];
}

function isLeft(bracket) {
  return !bracketMap[bracket];
}

function isValid(string) {
  let stack = [];
  for (let bracket of string) {
    if (isLeft(bracket)) {
      stack.unshift(bracket);
    } else if (!stack.length || stack.shift() != reversed(bracket)) {
      return false;
    }
  }
  return stack.length == 0;
}
