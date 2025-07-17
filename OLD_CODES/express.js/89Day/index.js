const express = require("express");
const PORT = process.env.PORT || 3000;
const blog = require("./routes/blog");
const app = express();

app.use(express.static("public"));
app.use("/blog", blog);

app.get("/", (req, res) => {
  console.log("Hey, It's a get request");
  res.send("Hello, World!");
});

app.post("/", (req, res) => {
  console.log("Hey, It's a post request");
  res.send("Hello, World! [ POST REQUEST ]");
});

app.put("/", (req, res) => {
  console.log("Hey, It's a PUT request");
  res.send("Hello, World! [ PUT REQUEST ]");
});

app.get("/index", (req, res) => {
  console.log("Hey, It's Index file");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      username: "john_doe",
      email: "john.doe@example.com",
      password: "securePassword123",
      isActive: true,
    },
    {
      username: "jane_smith",
      email: "jane.smith@example.com",
      password: "password12345",
      isActive: false,
    },
    {
      username: "alex_jones",
      email: "alex.jones@example.com",
      password: "alexSecure789",
      isActive: true,
    },
  ]);
});

app.get("/api/user/1", (req, res) => {
  res.json({
    username: "john_doe",
    email: "john.doe@example.com",
    password: "securePassword123",
    isActive: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
