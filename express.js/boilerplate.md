# EXPRESS BOILER PLATE CODE

This is a minimal Express.js setup with just the basic routing and the server listening on a specified port. You can easily add more routes and features as needed.

```javascript
// Import express module
const express = require("express");

// Initialize express app
const app = express();

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define another route for testing
app.get("/about", (req, res) => {
  res.send("This is a basic Express.js app.");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
