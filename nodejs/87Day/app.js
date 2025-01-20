import fs from "fs/promises";

let readF = await fs.readFile("dummy.txt");

let writeF = await fs.writeFile(
  "demo.txt",
  "Hey, fs promises is an amazing thing in nodejs"
);

let appendF = await fs.appendFile(
  "syphar.txt",
  "Hey, fs promises is an amazing thing in node.js\n"
);

console.log(readF.toString());

console.log(writeF, appendF);
