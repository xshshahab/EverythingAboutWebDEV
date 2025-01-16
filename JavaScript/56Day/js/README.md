# JavaScript Arithmetic Operators

Arithmetic operators in JavaScript are used to perform mathematical operations on numbers. This project demonstrates all the arithmetic operators in JavaScript with examples.

---

## Arithmetic Operators in JavaScript

| Operator | Description            | Example          | Result      |
| -------- | ---------------------- | ---------------- | ----------- |
| `+`      | Addition               | `5 + 3`          | `8`         |
| `-`      | Subtraction            | `5 - 3`          | `2`         |
| `*`      | Multiplication         | `5 * 3`          | `15`        |
| `/`      | Division               | `6 / 3`          | `2`         |
| `%`      | Modulus (Remainder)    | `5 % 3`          | `2`         |
| `++`     | Increment (Add 1)      | `let x = 5; x++` | `6` (after) |
| `--`     | Decrement (Subtract 1) | `let x = 5; x--` | `4` (after) |

---

## Examples in `arithmetic.js`

The file `arithmetic.js` demonstrates how these operators work with practical examples. You can run it to observe the results.

### Example Code

Here is a summary of what is included in the `arithmetic.js`:

```javascript
// Example usage of arithmetic operators
let a = 10,
  b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Increment and Decrement
let c = 5;
console.log("Initial value of c:", c);
console.log("Post-Increment:", c++);
console.log("Value after Post-Increment:", c);
console.log("Pre-Increment:", ++c);

console.log("Post-Decrement:", c--);
console.log("Value after Post-Decrement:", c);
console.log("Pre-Decrement:", --c);
```

# JavaScript Assignment Operators

Assignment operators in JavaScript are used to assign values to variables. These operators perform assignments with different levels of convenience.

This project demonstrates various assignment operators in JavaScript with examples.

---

## Assignment Operators in JavaScript

| Operator | Description               | Example  | Result      |
| -------- | ------------------------- | -------- | ----------- |
| `=`      | Assignment                | `x = 5`  | `x = 5`     |
| `+=`     | Addition Assignment       | `x += 5` | `x = x + 5` |
| `-=`     | Subtraction Assignment    | `x -= 5` | `x = x - 5` |
| `*=`     | Multiplication Assignment | `x *= 5` | `x = x * 5` |
| `/=`     | Division Assignment       | `x /= 5` | `x = x / 5` |
| `%=`     | Modulus Assignment        | `x %= 5` | `x = x % 5` |
| `++`     | Increment Assignment      | `x++`    | `x = x + 1` |
| `--`     | Decrement Assignment      | `x--`    | `x = x - 1` |

---

## Examples in `assignment.js`

The file `assignment.js` demonstrates how these operators work with practical examples. You can run it to observe the results.

### Example Code

Here is a summary of what is included in the `assignment.js`:

```javascript
// Example usage of assignment operators
let x = 10;

x += 5; // x = x + 5
console.log("After x += 5: ", x);

x -= 3; // x = x - 3
console.log("After x -= 3: ", x);

x *= 2; // x = x * 2
console.log("After x *= 2: ", x);

x /= 4; // x = x / 4
console.log("After x /= 4: ", x);

x %= 3; // x = x % 3
console.log("After x %= 3: ", x);

x++; // x = x + 1
console.log("After x++: ", x);

x--; // x = x - 1
console.log("After x--: ", x);
```

# JavaScript Comparison Operators

Comparison operators in JavaScript are used to compare two values. These operators return `true` or `false` based on the comparison.

This project demonstrates various comparison operators in JavaScript with examples.

---

## Comparison Operators in JavaScript

| Operator | Description                   | Example     | Result  |
| -------- | ----------------------------- | ----------- | ------- |
| `==`     | Equal to (value only)         | `5 == 5`    | `true`  |
| `===`    | Equal to (value and type)     | `5 === '5'` | `false` |
| `!=`     | Not equal to (value only)     | `5 != 3`    | `true`  |
| `!==`    | Not equal to (value and type) | `5 !== '5'` | `true`  |
| `>`      | Greater than                  | `5 > 3`     | `true`  |
| `<`      | Less than                     | `5 < 3`     | `false` |
| `>=`     | Greater than or equal to      | `5 >= 3`    | `true`  |
| `<=`     | Less than or equal to         | `5 <= 5`    | `true`  |

---

## Examples in `comparison.js`

The file `comparison.js` demonstrates how these operators work with practical examples. You can run it to observe the results.

### Example Code

Here is a summary of what is included in the `comparison.js`:

```javascript
// Example usage of comparison operators

let a = 5;
let b = 3;
let c = "5";

// Equal to (==)
console.log("a == b: ", a == b); // false

// Strict Equal to (===)
console.log("a === c: ", a === c); // false

// Not Equal to (!=)
console.log("a != b: ", a != b); // true

// Strict Not Equal to (!==)
console.log("a !== c: ", a !== c); // true

// Greater Than (>)
console.log("a > b: ", a > b); // true

// Less Than (<)
console.log("a < b: ", a < b); // false

// Greater Than or Equal To (>=)
console.log("a >= b: ", a >= b); // true

// Less Than or Equal To (<=)
console.log("a <= b: ", a <= b); // false
```

# JavaScript Logical Operators

Logical operators in JavaScript are used to combine multiple conditions or expressions. These operators return a boolean value (`true` or `false`) based on the evaluation of the conditions.

This project demonstrates various logical operators in JavaScript with examples.

---

## Logical Operators in JavaScript

| Operator | Description | Example         | Result     |
| -------- | ----------- | --------------- | ---------- | ----- | --- | ------ | ------ |
| `&&`     | Logical AND | `true && false` | `false`    |
| `        |             | `               | Logical OR | `true |     | false` | `true` |
| `!`      | Logical NOT | `!true`         | `false`    |

---

## Examples in `logical.js`

The file `logical.js` demonstrates how these operators work with practical examples. You can run it to observe the results.

### Example Code

Here is a summary of what is included in the `logical.js`:

```javascript
// Example usage of logical operators

let x = true;
let y = false;

// Logical AND (&&)
console.log("x && y: ", x && y); // Returns false because y is false

// Logical OR (||)
console.log("x || y: ", x || y); // Returns true because x is true

// Logical NOT (!)
console.log("!x: ", !x); // Returns false because x is true
console.log("!y: ", !y); // Returns true because y is false
```
