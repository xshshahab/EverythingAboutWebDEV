// "type" : "modules"
// ecmascript modules example

import http from "http";
const PORT = 8080;

import { num1, num2 } from "./mymodules";
console.log(num1, num2);

import obj from "./mymodules";
console.log(obj);

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
