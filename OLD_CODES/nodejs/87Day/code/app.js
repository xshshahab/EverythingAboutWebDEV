const fs = require("fs");
// console.log(fs);

console.log("Starting...");
/* writeFileSync is a function that writes to a file synchronously (waits until the task is finished). */
fs.writeFileSync("demo.txt", "Syphar is a good boy");
console.log("Ending...");
