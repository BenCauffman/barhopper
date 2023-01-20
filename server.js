const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "dist/index.html"));
});

app.get("/index.*.js", express.static(path.join(__dirname, "./dist/")));

app.listen(3000, () => {
  "listening on port 3000";
});
