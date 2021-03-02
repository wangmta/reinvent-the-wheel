var lengthOfLastWord = function (s) {
    const trimmedS = s.trim();
    const reversedS = trimmedS.split('').reverse().join('');
    const index = reversedS.indexOf(' ');
    return index;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('Hello   World   '));
console.log(lengthOfLastWord('Hello   World  Yeah '));

// Input: [1,2,3] Output: [1,2,4]
var plusOne = function (digits) {
    digits[digits.length - 1]++;
    return digits;
};