// "type" : "commonjs"
// commonjs example

const http = require("http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

// This is for use html
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Hello, World!</h1>");
// });

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
