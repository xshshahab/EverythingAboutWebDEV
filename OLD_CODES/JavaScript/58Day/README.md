# Functions in JavaScript

A **function** in JavaScript is a block of code that is designed to perform a particular task. You can call a function to execute its code whenever needed, instead of repeating the same code multiple times.

## Declaring a Function

In JavaScript, functions can be declared using the `function` keyword, followed by a name, parentheses, and curly braces. Here's a basic example:

```javascript
function greet() {
  console.log("Hello, World!");
}
```

## Function with Parameters

Functions can also accept parameters (inputs). These parameters can be used inside the function to perform operations.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

You can call the function with a value (called an argument):

```javascript
greet("Alice"); // Output: Hello, Alice!
```

## Returning a Value

Functions can return a value using the return keyword. This allows you to capture the result of a function and use it later.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8
```

## Function Expressions

Functions can also be defined as expressions, and they are often assigned to variables. These are known as function expressions.

```javascript
const multiply = function (a, b) {
  return a * b;
};

let product = multiply(4, 3);
console.log(product); // Output: 12
```

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions. They are especially useful for functions that are used as callbacks or in one-liner operations.

```javascript
const subtract = (a, b) => a - b;

let difference = subtract(10, 4);
console.log(difference); // Output: 6
```

### Arrow Function with No Parameters

If a function doesn't take any parameters, you can leave the parentheses empty:

```javascript
const sayHello = () => console.log("Hello!");
sayHello(); // Output: Hello!
```

### **IIFE (Immediately Invoked Function Expression)**

An IIFE is a function that is defined and executed immediately after it's created.

```javascript
(function () {
  console.log("This function runs immediately!");
})();
```

## Function Hoisting

In JavaScript, function declarations are hoisted, meaning they are moved to the top of their containing scope during the compilation phase. This allows you to call a function before it's declared in the code.

```javascript
greet(); // Output: Hello, World!

function greet() {
  console.log("Hello, World!");
}
```

However, `function expressions` are not hoisted in the same way. Trying to call them before they are defined will result in an error.

```javascript
sayHi(); // Error: sayHi is not a function

const sayHi = function () {
  console.log("Hi!");
};
```
