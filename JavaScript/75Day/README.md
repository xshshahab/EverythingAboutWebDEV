# What is a Callback in JavaScript?

A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are a way to ensure that a function is not executed before a task is completed, but will execute right after the task is finished.

## Why Use Callbacks?

Callbacks are used to handle asynchronous operations in JavaScript, such as:

- Fetching data from a server.
- Reading files.
- Timer-based operations.

### Example:

```javascript
// Function to simulate a delay using setTimeout
function fetchData(callback) {
  console.log("Fetching data...");

  // Simulate a delay with setTimeout
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    console.log("Data fetched!");

    // Call the callback function and pass the data
    callback(data);
  }, 2000); // 2-second delay
}

// Callback function to handle the fetched data
function handleData(data) {
  console.log("Handling data:");
  console.log(data);
}

// Call fetchData and pass handleData as the callback
fetchData(handleData);
```

### Explanation

1. `fetchData` Function:

- Simulates fetching data from a server using `setTimeout` to create a delay.
- After 2 seconds, the callback function is executed with the fetched data.

2. `handleData` Function:

-This is the callback function that is called once the data is "fetched."
-It receives the data as an argument and processes it.

3. `Passing` the Callback:

- When `fetchData` is called, the `handleData` function is passed as an argument.

### Output of the Code

```plaintext
Fetching data...
Data fetched!
Handling data:
{ id: 1, name: 'John Doe' }
```

#### Key Points

- Callbacks ensure that a piece of code is executed after a specific task is completed.
- They are commonly used in asynchronous programming.
- Arrow functions (`() => {}`) are often used as callbacks for simplicity.

##### Example with an inline arrow function:

```javascript
fetchData((data) => {
  console.log("Inline callback received data:", data);
});
```

This approach is concise and often used in modern JavaScript development.
