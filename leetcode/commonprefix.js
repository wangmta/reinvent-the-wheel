var longestCommonPrefix = function (strs) {
    const firstStr = strs[0];
    let commonStr;
    for (let i = 0; i < firstStr.length; i++) {
        const isPrefix = strs.every(str => str.indexOf(firstStr.substr(0, i)) > -1);
        if (isPrefix) {
            commonStr = firstStr.substr(0, i);
        } else {
            return commonStr;
        }
    }
    return commonStr;

    // method 2:
    // 'use strict';
    // if (strs === undefined || strs.length === 0) { return ''; }

    // return strs.reduce((prev, next) => {
    //     let i = 0;
    //     while (prev[i] && next[i] && prev[i] === next[i]) i++;
    //     return prev.slice(0, i);
    // });
};

console.log(longestCommonPrefix(["flower", "flow", "flour", "float"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));