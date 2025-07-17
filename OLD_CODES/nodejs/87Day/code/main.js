const fs = require("fs");

console.log("Starting...");

/*
The function is asynchronous, meaning it doesn't block the program while writing the file.
When the file writing is completed, the callback function executes, printing "Task Completed..." to the console.
*/

fs.writeFile("temp.txt", "Learning fs modules in nodejs", () => {
  console.log("Task Completed...");
});

console.log("Ending...");
