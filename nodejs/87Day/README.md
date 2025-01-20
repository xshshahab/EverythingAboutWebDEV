# Explanation of the Code

### 1. **`const fs = require("fs");`**

- This line loads the **File System (fs)** module in Node.js.
- The `fs` module lets you work with files (read, write, update, delete, etc.).
- Here, we are importing it to use its functions.

---

### 2. **`console.log("Starting...");`**

- This prints the message **"Starting..."** to the console.
- It’s like saying, “The program is starting now.”

---

### 3. **`fs.writeFileSync("demo.txt", "Syphar is a good boy");`**

- This line creates a new file named **`demo.txt`** in the current folder.
- The text **"Syphar is a good boy"** is written inside this file.
- **`writeFileSync`** is a function that writes to a file **synchronously** (waits until the task is finished).
- If `demo.txt` already exists, it will **overwrite** its content.

---

### 4. **`console.log("Ending...");`**

- After the file is created and written, this prints **"Ending..."** to the console.
- It’s like saying, “The program has finished running.”

---

## What Happens When You Run This Code:

1. The program starts and prints **"Starting..."**.
2. It creates (or updates) a file named **`demo.txt`** with the content:

```plaintext
Syphar is a good boy
```

3. Finally, it prints **"Ending..."** to indicate the work is done.

`Starting...`
`Ending...`

---

### **Output on Screen:**

---

### **File Created:**

- A file named **`demo.txt`** is created in the same folder where this code is running.

---

## Example of Writing to a File in Node.js

The following code demonstrates how to write to a file using the `fs` module in Node.js:

```javascript
const fs = require("fs");

console.log("Starting...");

fs.writeFile("temp.txt", "Learing fs modules in nodejs", () => {
  console.log("Task Completed...");
});

console.log("Ending...");
```

### Explanation

### Import `fs` Module

Required to handle file operations.

### Log Messages

- **Starting...** is logged before the file operation.
- **Ending...** is logged immediately after invoking the `writeFile()` method because it is asynchronous.

### Write to File

The `fs.writeFile()` method creates or overwrites `temp.txt` with the specified content.

### Callback Execution

Once the file operation completes, **"Task Completed..."** is logged.

### Expected Console Output

```arduino
Starting...
Ending...
Task Completed...
```
