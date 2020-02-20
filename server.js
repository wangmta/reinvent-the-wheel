var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var bodyParser = require("body-parser");

// create app
var app = express();

app.use(favicon(path.join(__dirname, "build/favicon.png")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"));

console.log("Listening on port: " + app.get("port"));

module.exports = app;
