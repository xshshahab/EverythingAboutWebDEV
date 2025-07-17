# JavaScript: Variables, Data Types, and Naming Conventions

## Variables in JavaScript

Variables are used to store data values. In JavaScript, you can declare variables using:

- `var` (old, function-scoped)
- `let` (modern, block-scoped)
- `const` (block-scoped, immutable)

### Example:

```javascript
// Declaring variables
var x = 5; // Function-scoped
let y = 10; // Block-scoped
const z = 15; // Immutable

// Modifying values
x = 20; // Allowed
y = 30; // Allowed
// z = 40; // Error: Assignment to constant variable
```

## Data Types in JavaScript

JavaScript has two main categories of data types:

1. **Primitive Data Types:** Immutable and stored by value.
2. **Reference Data Types:** Mutable and stored by reference.

### **Primitive Data Types:**

1. **String:** Represents textual data.

```javascript
let name = "John Doe";
```

2. **Number:** Represents numeric values (both integer and floating-point).

```javascript
let age = 30;
```

3. **BigInt:** For very large integers.

```javascript
let bigNumber = 12345678901234567890n;
```

4. **Boolean:** Represents true or false.

```javascript
let isActive = true;
```

5. **Undefined:** A variable that has been declared but not initialized.

```javascript
let value; // undefined
```

6. **Null:** Represents an explicitly empty value.

```javascript
let data = null;
```

7. **Symbol:** Unique identifiers.

```javascript
let sym = Symbol("unique");
```

### **Reference Data Types:**

1. **Object:** Key-value pairs.

```javascript
let person = { name: "John", age: 30 };
```

2. **Array:** Ordered list of values.

```javascript
let fruits = ["apple", "banana", "cherry"];
```

3. **Function:** Block of reusable code.

```javascript
function greet() {
  console.log("Hello, world!");
}
```

## `Note:` **Date, Set, Map, etc.**

# Naming Conventions in JavaScript

Naming conventions in JavaScript are critical for maintaining readable, consistent, and maintainable code. Following these conventions helps developers understand the purpose of variables, functions, classes, and constants more easily.

---

## General Rules for Naming:

1. **Use Descriptive and Meaningful Names**:

   - Always name variables, functions, and classes descriptively.

   ```javascript
   let userAge = 25; // Good
   let x = 25; // Bad: Not descriptive
   ```

2. **Case Sensitivity:**

JavaScript is **case-sensitive**, meaning variable names, function names, and other identifiers must match exactly in their usage. For example:

```javascript
let myVariable = 10;
let myvariable = 20;

console.log(myVariable); // Output: 10
console.log(myvariable); // Output: 20
```
