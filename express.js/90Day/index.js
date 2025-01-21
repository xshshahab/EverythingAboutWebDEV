const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const fs = require("fs");

// Built in middelware
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(req.headers);
  req.syphar = "Hey, I am comming from middelware";

  fs.appendFileSync(
    "Logs.txt",
    `Date :  ${Date.now()} and it's method : ${req.method} and the url : ${
      req.url
    } \n`
  );

  console.log("First middelware");

  console.log(
    `Date :  ${Date.now()} and it's method : ${req.method} and the url : ${
      req.url
    }`
  );
  next();
});

app.use((req, res, next) => {
  console.log("Second middelware");
  next(); // Call the next middleware
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("Syphar, this is about page " + req.syphar);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
