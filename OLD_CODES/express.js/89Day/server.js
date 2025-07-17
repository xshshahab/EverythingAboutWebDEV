const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app
  .get("/", (req, res) => {
    console.log("Hey, It's a get request");
    res.send("Hello, World!");
  })
  .post("/", (req, res) => {
    console.log("Hey, It's a post request");
    res.send("Hello, World! [ POST REQUEST ]");
  })
  .put("/myput", (req, res) => {
    console.log("Hey, It's a post request");
    res.send("Hello, World! [ PUT REQUEST ]");
  })
  .delete("/mydel", (req, res) => {
    console.log("Hey, It's a post request");
    res.send("Hello, World! [ DELETE REQUEST ]");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
