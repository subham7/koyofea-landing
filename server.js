const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, resp) {
  resp.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/r", function(req, resp) {
  resp.sendFile(path.join(__dirname, "public", "recruiter.html"));
});

app.get("/c", function(req, resp) {
  resp.sendFile(path.join(__dirname, "public", "college.html"));
});

app.listen(port, function() {
  console.log(`Server started at ${port}`);
});
