const fs = require("fs");
const currVer = require("./package.json").version;
const changeType = process.env.CHANGE_TYPE;
console.log(changeType);
const currArr = currVer.split(".");
const nextVer = currArr
  .map((num, index) => {
    if (index === parseInt(changeType)) {
      num = parseInt(num) + 1;
    }
    return num;
  })
  .join(".");
console.log(nextVer);
fs.readFile("./package.json", "utf8", (err, data) => {
  const formatted = data.replace(currVer, nextVer);
  fs.writeFile("./package.json", formatted, "utf8", (err) => {
    if (err) return console.log(err);
  });
});

fs.readFile("./package-lock.json", "utf8", (err, data) => {
  const formatted = data.replace(currVer, nextVer);
  fs.writeFile("./package-lock.json", formatted, "utf8", (err) => {
    if (err) return console.log(err);
  });
});
