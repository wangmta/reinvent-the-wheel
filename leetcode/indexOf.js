var indexOf = function (haystack, needle) {
    if (needle === '') return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, needle.length) === needle) {
            return i;
        }
    }
    return -1;
}

console.log(indexOf('hello', 'll'));
console.log(indexOf('flower', 'we'));
console.log(indexOf('nananana', 'ab'));
console.log(indexOf('nananana', ''));