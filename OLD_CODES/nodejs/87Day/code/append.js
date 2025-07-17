const fs = require("fs");

console.log("Starting...");

fs.writeFile("dummy.txt", "Syphar, Learning nodejs", () => {
  console.log("Task Completed...");
  fs.readFile("dummy.txt", (error, data) => {
    console.log("ERROR!!!", error);
    console.log("Data", data.toString());
  });
});

fs.appendFile(
  "demo.txt",
  "\nNow, Syphar is learning Node.js",
  (error, data) => {
    console.log("Task Completed...", data);
  }
);

console.log("Ending...");
