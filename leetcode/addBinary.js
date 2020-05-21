var addBinary = function (a, b) {
    const int = parseInt(a, 2) + parseInt(b, 2);
    return int.toString(2);

    // let index1 = a.length;
    // let index2 = b.length;
    // let result = '';
    // let carry = 0;
    // while (index1 || index2) {
    //     let sum = (index1 > 0 ? +a[--index1] : 0) + (index2 > 0 ? +b[--index2] : 0) + carry;
    //     result = (sum % 2) + result;
    //     carry = sum > 1 ? 1 : 0;
    // };
    // return carry ? carry + result : result;
};

console.log(addBinary(1010, 1011));