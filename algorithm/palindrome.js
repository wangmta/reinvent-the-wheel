var isPalindrome = function (x) {
    // method 1:
    // if (x < 0) return false;
    // let str = x.toString();
    // let halfLen = Math.floor(str.length / 2)
    // let left, right, reserveRight;
    // left = str.substr(0, halfLen);
    // right = str.substr(-halfLen);
    // reserveRight = right.split('').reverse().join('');
    // if (left === reserveRight) {
    //     return true;
    // }
    // return false;

    // method 2:
    if (x < 0) return false;
    return x.toString() === x.toString().split('').reverse().join('');

    // method 3: not working, because JS is not suitable for precise NUM operations
    // if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    // let reverseNum = 0;
    // while (x > reverseNum) {
    //     reverseNum = (reverseNum * 10) + (x % 10);
    //     console.log(reverseNum);
    //     x = x / 10;
    // }
    // return x === reverseNum;
};

console.log(isPalindrome(123435));
console.log(isPalindrome(-12321));
console.log(isPalindrome(121));
console.log(isPalindrome(123321));
console.log(isPalindrome(12321));