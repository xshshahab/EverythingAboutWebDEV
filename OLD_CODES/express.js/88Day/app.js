const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/syphar", (req, res) => {
  res.send("Hey, I am Syphar, nice to meet you!");
});

app.get("/blog", (req, res) => {
  res.send("Hey, I'm Syphar, and this is my blog!");
});

app.get("/blog/:slug", (req, res) => {
  const slug = req.params.slug;
  res.send(`You are reading blog post with slug: ${slug}`);
});

app.get("/blog/:slug/:second-slug", (req, res) => {
  const slug = req.params.slug;
  const secondSlug = req.params["second-slug"];
  res.send(`You are reading blog post with slug: ${slug} and ${secondSlug}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
