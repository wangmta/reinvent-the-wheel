var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");

// create app
var app = express();

app.use(favicon(path.join(__dirname, "build/favicon.png")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"));

console.log("Listening on port: " + app.get("port"));

module.exports = app;
