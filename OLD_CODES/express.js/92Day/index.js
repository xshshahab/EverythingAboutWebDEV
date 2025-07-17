const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Unlok Bit.";
  let siteDescription = "A website that helps you navigate the world of coding";
  res.render("index", {
    siteName: siteName,
    siteDescription: siteDescription,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Unlok Bit.";
  let blogContent = "It's a very good software developement agency";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.get("/mine", (req, res) => {
  res.sendFile("templates/index.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
