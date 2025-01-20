const fs = require("fs");

console.log("Starting...");

fs.writeFile("dummy.txt", "Syphar, Learning nodejs", () => {
  console.log("Task Completed...");
  fs.readFile("dummy.txt", (error, data) => {
    console.log("ERROR!!!", error);
    // 1. It's return data in the form of buffer
    console.log("Data", data);
    // 2. Convert buffer to string
    console.log("Data", data.toString());
  });
});

console.log("Ending...");
