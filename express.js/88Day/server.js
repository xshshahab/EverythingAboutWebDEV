// Import the express module to create the app
const express = require("express");
const app = express();

// Define the port the app will listen on (either from environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// Route for the home page ("/")
app.get("/", (req, res) => {
  // Sends a response when the root URL is accessed
  res.send("Home Page");
});

// Route for the blog listing page ("/blog")
app.get("/blog", (req, res) => {
  // Sends a response with a simple text when the "/blog" URL is accessed
  res.send("Hey, I'm Syphar and this is my blog!");
});

// Route for an individual blog post with a dynamic slug ("/blog/:slug")
app.get("/blog/:slug", (req, res) => {
  // Extract the dynamic parameter `slug` from the URL
  const slug = req.params.slug;

  // The following lines log the request object, parameters, and query parameters to the console for debugging
  //  This URL Hits on webpage : http://localhost:3000/blog/my-first-post?author=Syphar&category=Tech
  console.log(req); // Logs the entire request object
  console.log(req.params); // Logs the route parameters (e.g., { slug: 'my-first-post' })
  console.log(req.query); // Logs the query parameters (e.g., { author: 'Syphar', category: 'Tech' })

  // Sends a response displaying the blog post slug to the client
  res.send(`You are reading blog post with slug: ${slug}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server has successfully started
  console.log(`Server is running on port ${PORT}`);
});
