# What is Express.js?

`Express.js` is a web application framework for Node.js that is widely used to build APIs and web applications. It is fast, minimalistic, and unopinionated, allowing developers to create scalable and efficient server-side applications. Express abstracts the complexity of handling HTTP requests, responses, and routing, making it easier to develop robust applications.

## Features of Express.js

1. `Routing:` Provides robust and dynamic routing capabilities for handling HTTP requests.
2. `Middleware:` Supports middleware functions to process requests before reaching the final route.
3. `Template Engines:` Integrates easily with template engines like Pug, EJS, and Handlebars to render dynamic web pages.
4. `RESTful APIs:` Simplifies the creation of RESTful APIs with minimal boilerplate.
5. `Static File Serving:` Offers built-in support for serving static assets like CSS, images, and JavaScript files.

### **Code Example for `server.js`**

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Starter Project!");
});

app.get("/api/example", (req, res) => {
  res.json({ message: "This is an example API endpoint." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

### Why Use Express.js?

`Express.js` is one of the most popular frameworks for Node.js because it simplifies the process of building server-side applications and APIs. Here's why developers choose Express.js:

#### **1. Simplifies Development**

Express.js provides a clean and minimalistic interface for building web servers. Instead of writing verbose code to handle HTTP requests and responses, Express offers methods like `app.get()` and `app.post()` to streamline these tasks.

#### **2. Flexible and Unopinionated**

- Express is unopinionated, meaning it doesn’t enforce a specific structure or pattern for your project.
- You have the flexibility to choose tools, libraries, and architectures that suit your needs.

#### **3. Middleware Support**

- Middleware functions in Express allow you to process requests and responses before they reach the final route handler.
- It enables features like:
  - Logging requests
  - Parsing request bodies
  - Authenticating users
  - Serving static files

#### **4. Robust Routing**

- Express has a powerful and flexible routing mechanism for handling different `HTTP` methods (`GET`, `POST`, `PUT`, `DELETE`, etc.) and dynamic URL parameters.
- Example:

```javascript
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

#### **5. RESTful APIs**

Express is ideal for building RESTful APIs. Its lightweight design and routing capabilities make it easy to define CRUD operations.

#### **6. Integration with View Engines**

Express supports various template engines like Pug, EJS, and Handlebars to render dynamic HTML pages.

#### **7. Easy to Learn**

Express has a minimal learning curve, especially for developers familiar with JavaScript.
The framework’s documentation is thorough and beginner-friendly.

#### **8. Community and Ecosystem**

-Express has a large and active community, meaning you can find plenty of tutorials, examples, and third-party packages to extend its functionality.

- **Examples:**

- express-session for managing sessions.
- multer for handling file uploads.

#### **9. High Performance**

Express is lightweight and efficient, leveraging Node.js’s non-blocking I/O and event-driven architecture to handle multiple requests concurrently.

#### **10. Compatibility with Node.js**

Express fully integrates with the Node.js ecosystem, allowing you to use its core modules and third-party libraries seamlessly.

# -------------------------- Boiler Plate Code --------------------------

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
