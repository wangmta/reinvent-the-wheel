var reverse = function (x) {
    if (x <= Number.NEGATIVE_INFINITY || x >= Number.POSITIVE_INFINITY) return 0;
    let str = x.toString(), numArrayStr;
    numArrayStr = str.split('').reverse().join('');
    if (x < 0) {
        return parseInt(`${str[0]}${numArrayStr.substring(0, str.length - 1)}`);
    }
    return parseInt(`${numArrayStr}`)
};

let res1 = reverse(454664);
let res2 = reverse(-23353);
console.log(res1, res2);