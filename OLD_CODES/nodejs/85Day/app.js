// Import the http module
const http = require("http");

// Define the server and what it will respond with
const server = http.createServer((req, res) => {
  // Set the response header to indicate content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a response message
  res.end("Hello, World!\n");
});

// Define the port where the server will listen
const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
