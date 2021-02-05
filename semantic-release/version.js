const fs = require("fs");
const currVer = require("./package.json").version;
const changeType = process.env.CHANGE_TYPE;
const changeVer = (currVer, changeType) => {
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
  return nextVer;
};
const nextVer = changeVer(currVer, changeType);
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

fs.readFile("./config.xml", "utf8", (err, data) => {
  const str = 'id="io.ionic.aria2" version=';
  const anchor1 = data.search(str),
    anchor2 = data.search(" xmlns=");
  const currVer = data.substring(anchor1 + str.length, anchor2);
  const nextVer = changeVer(currVer, changeType);
  const formatted = data.replace(currVer, nextVer);
  fs.writeFile("./config.xml", formatted, "utf8", (err) => {
    if (err) return console.log(err);
  });
});
