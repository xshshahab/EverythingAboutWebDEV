const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send(
    `You want to know about SYPHAR visit : http://localhost:3000/syphar`
  );
});

app.get("/syphar", (req, res) => {
  res.send("Hey, I am Syphar, nice to meet you!");
});

app.get("/blog", (req, res) => {
  res.send("Hey, I'm Syphar, and this is my blog!");
});

app.get("/blog/intro-to-js", (req, res) => {
  res.send("Hello, intro-to-js");
});

app.get("/blog/intro-to-python", (req, res) => {
  res.send("Hello, intro-to-python");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
