let f;

if (true) {
  let i = 1;
  f = () => {
    console.log(i);
  };
}

console.dir(f);

f(); //gets i

function toBeCalled(a, b, c) {
  console.log(a, b, c);
}

function outer(fn) {
  return function(...args) {
    console.log([...args]);
  };
}

console.dir(outer(toBeCalled)(1, 2, 3));
