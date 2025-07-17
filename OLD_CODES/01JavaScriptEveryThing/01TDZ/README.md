# TDZ stands for Temporal Dead Zone.

It refers to the time between when a variable is declared using `let`, `const`, or `class`, and when it is initialized. During this period, the variable cannot be accessed — attempting to do so will result in a `ReferenceError`.

### Example: 
```bash
console.log(a); // ReferenceError: Cannot access 'a' before initialization

let a = 10;
```
Here, the variable `a` is in the TDZ from the start of the block until the `let a = 10;` line is executed.

## Why TDZ Exists
The TDZ was introduced in ES6 to avoid issues with hoisting and to make code behavior more predictable:

- `var` variables are hoisted and initialized with `undefined`, which can lead to bugs.

- `let` and `const` are also hoisted, but not initialized — they remain in the TDZ until their declaration is evaluated.
