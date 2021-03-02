var romanToInt = function (s) {
    // switch (s) {
    //     case 'I':
    //         return 1;
    //     case 'V':
    //         return 5;
    //     case 'X':
    //         return 10;
    //     case 'L':
    //         return 50;
    //     case 'C':
    //         return 100;
    //     case 'D':
    //         return 500;
    //     case 'M':
    //         return 1000;
    //     default:
    //         return 0;
    // }
    const valueMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        let charValue = valueMap[char];

        if (i < s.length - 1) {
            const nextChar = s[i + 1];
            const nextCharValue = valueMap[nextChar];
            if (charValue < nextCharValue) {
                result -= charValue * 2;
            }
        }

        result += charValue;
    }

    return result;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
