# JavaScript Conditional Statements

This project provides examples of various conditional statements in JavaScript. It includes examples of `if`, `else`, `if-else`, and `if-else if` ladder statements.

## What Are Conditional Statements?

Conditional statements allow you to execute certain blocks of code based on conditions. In JavaScript, the common conditional statements are:

- **`if`**: Executes a block of code if the condition evaluates to `true`.
- **`else`**: Executes a block of code if the `if` condition evaluates to `false`.
- **`if-else`**: Combines `if` and `else` for two-way branching.
- **`if-else if` ladder**: Allows multiple conditions to be checked in sequence.

## File Descriptions

### 1. `if.js`

Demonstrates the use of the `if` statement to execute code when a condition is `true`.

### 2. `else.js`

Explains the `else` statement and its use when the `if` condition is `false`.

### 3. `elseif.js`

Covers the `if-else` statement for two-way branching.

### 4. `elseladder.js`

Explores the `if-else if` ladder, which is useful for checking multiple conditions.

## How to Use

1. Clone the repository or copy the files to your local environment.
2. Run each file with Node.js or include them in an HTML file to see the output in the browser console.
3. Modify the examples to experiment with your own conditions!

---

## Examples of Each Statement

### `if` Statement Example

```javascript
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote!");
}
```

### `else` Statement Example

```javascript
let age = 16;
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote.");
}
```

### `if-else` Statement Example

```javascript
let age = 17;
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote.");
}
```

### `if-else` `if` `Ladder` Example

```javascript
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 50) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}
```

---

### How to Execute

1. Save the files in a directory (e.g., `conditional-statements`).
2. Open a terminal and navigate to the directory.
3. Run each file with `Node.js`:

```bash
node if.js
node else.js
node elseif.js
node elseladder.js
```
