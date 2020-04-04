const debounce = (fn, delay) => {
  let timerID;
  return (...args) => {
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document.getElementById("button").addEventListener(
  "click",
  debounce(event => {
    console.log("click event emitted");
  }, 5000)
);
