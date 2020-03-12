let f;

if (true) {
  let i = 1;
  f = () => {
    console.log(i);
  };
}

console.dir(f);

f(); //gets i
