var isValid = function (s) {
    const pMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const matchStack = [];

    // validate input
    if (s === null || s === undefined)
        return false;

    for (var i = 0; i < s.length; i++) {
        const currChar = s.charAt(i);
        let topElement;
        if (pMap[currChar] !== undefined) {
            topElement = (matchStack.length === 0) ? '#' : matchStack.pop();
            if (topElement !== pMap[currChar])
                return false;
        } else {
            matchStack.push(currChar);
        }
    }
    return matchStack.length === 0;
}

console.log(isValid('({)}'));
console.log(isValid('(){}[][()]'));
console.log(isValid('[({})][]()'));
// isValid('(){}[][()]')