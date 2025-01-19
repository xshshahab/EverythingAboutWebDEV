// Creating a function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Simulate success or failure randomly

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000); // Simulating an asynchronous operation
  });
}

// Using the Promise
fetchData()
  .then((data) => {
    console.log("Success:", data); // Handle the resolved value
  })
  .catch((error) => {
    console.error("Error:", error); // Handle the rejected value
  })
  .finally(() => {
    console.log("Operation complete."); // Runs regardless of success or failure
  });
