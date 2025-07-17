// A function that takes a callback as an argument
function processUserInput(name, callback) {
  console.log("Processing user input...");

  // Simulate some processing with a delay
  setTimeout(() => {
    console.log(`Hello, ${name}!`);

    // Call the callback function
    callback(name);
  }, 2000); // 2-second delay
}

// Callback function to display a thank-you message
function thankUser(name) {
  console.log(`Thank you for visiting, ${name}!`);
}

// Call processUserInput with a callback
processUserInput("Alice", thankUser);
