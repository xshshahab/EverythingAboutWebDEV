# EXPRESS BOILER PLATE CODE

This is a minimal Express.js setup with just the basic routing and the server listening on a specified port. You can easily add more routes and features as needed.

```javascript
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hey, This is Home page");
});

app.get("/about", (req, res) => {
  res.send("Hello, Syphar. This is About page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
