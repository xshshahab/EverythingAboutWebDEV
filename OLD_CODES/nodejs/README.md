# Node.js Guide for Beginners

## What is Node.js?

Node.js is a runtime environment that allows you to run JavaScript on the server side. It uses Google’s V8 JavaScript engine and is designed for building scalable, high-performance applications.

### Key Features:

- **Asynchronous and Event-Driven**: Handles multiple requests without waiting for one to complete.
- **Lightweight**: Runs on a single-threaded event loop.
- **npm (Node Package Manager)**: Offers access to thousands of open-source libraries.
- **Cross-Platform**: Works on Windows, macOS, and Linux.

---

## Why Use Node.js?

- **Fast Performance**: Powered by Google’s V8 JavaScript engine.
- **Scalable**: Ideal for applications that handle multiple connections, such as chat apps.
- **Unified Codebase**: Use JavaScript for both client-side and server-side development.
- **Real-Time Apps**: Perfect for chat applications, gaming, and collaboration tools.
- **Large Ecosystem**: npm provides over 1.5 million packages.

---

## How to Install Node.js

### Step 1: Download Node.js

1. Visit the official [Node.js website](https://nodejs.org).
2. Choose one of the versions:
   - **LTS (Long-Term Support)**: Recommended for most users.
   - **Current**: Latest features but may not be as stable.

### Step 2: Install Node.js

1. Run the downloaded installer.
2. Follow the installation steps:
   - Accept the license agreement.
   - Choose the installation path.
   - Ensure **npm (Node Package Manager)** is selected.
3. Complete the installation.

### Step 3: Verify Installation

1. Open a terminal or command prompt.
2. Run the following commands:

```bash
node -v
```

This will display the installed Node.js version.

```bash
npm -v
```

---

## Create Your First Node.js App

### Step 1: Initialize a Project

**1. Create a new directory:**

```bash
mkdir node-hello-world
cd node-hello-world
```

**2. Initialize the project:**

```bash
npm init -y
```

This will create a `package.json` file.

### Step 2: Write a Server Script

- **Create a file named `server.js` and paste the following code:**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

### Step 3: Run the Server

**1. Start the server:**

```bash
node server.js
```

**2. Open your browser and visit:**

```plaintext
http://localhost:3000
```

You should see the message Hello, World! displayed in your browser.

---

## Congratulations!

You've successfully installed Node.js and created your first server. 🚀
