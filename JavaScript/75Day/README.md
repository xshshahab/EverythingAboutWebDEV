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

---

# What is a Promise in JavaScript?

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises help manage asynchronous tasks by providing a cleaner, more manageable approach compared to callbacks.

---

## States of a Promise

A promise has three states:

- `Pending:` The initial state, neither fulfilled nor rejected.
- `Fulfilled:` The operation was completed successfully.
- `Rejected:` The operation failed.

### Syntax of a Promise:

```javascript
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (/* success condition */) {
        resolve(value); // Call on success
    } else {
        reject(error); // Call on failure
    }
});
```

### Example Code with Explanation

```javascript
// Simulate an asynchronous task using a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    // Simulate a delay
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve({ id: 1, name: "John Doe" }); // Success
      } else {
        reject("Failed to fetch data"); // Failure
      }
    }, 2000); // 2-second delay
  });
}

// Use the Promise
fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation complete.");
  });
```

---

### Explanation

1. **Creating a Promise**:

   - The `fetchData` function returns a `Promise`.
   - Inside the promise:
     - `resolve` is called for success.
     - `reject` is called for failure.

2. **Using `.then()`**:

   - The `then` method is called when the promise is resolved.
   - It receives the resolved value as an argument.

3. **Using `.catch()`**:

   - The `catch` method handles any errors (rejected promises).

4. **Using `.finally()`**:
   - The `finally` method executes regardless of the promise's outcome.
