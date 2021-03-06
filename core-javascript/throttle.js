const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    fn(...args);
  };
};

document.getElementById("button").addEventListener(
  "click",
  throttle(event => {
    console.log("click event emitted");
  }, 5000)
);
