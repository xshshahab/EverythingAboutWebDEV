const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the blog home page.");
});

router.get("/blog", (req, res) => {
  res.send("This is the blog listing page.");
});

router.get("/blogpost/:slug", (req, res) => {
  const slug = req.params.slug;
  res.send(`You are reading the blog post with slug: ${slug}`);
});

module.exports = router;
