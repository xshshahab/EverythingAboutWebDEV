In JavaScript, **execution context** is a fundamental concept that refers to the environment in which a piece of JavaScript code is executed.

---

### 🔹 What is an Execution Context?

An **execution context** is a structure that contains the information the JavaScript engine needs to **execute code**. It keeps track of:

1. **Variable Object (VO)** – where variables and function declarations are stored.
2. **Scope Chain** – to resolve variable access.
3. **`this` value** – what `this` refers to in that context.

---

### 🔹 Types of Execution Contexts

1. **Global Execution Context (GEC):**

   - Created when the script first runs.
   - Only one global context per program.
   - The global object (`window` in browsers, `global` in Node.js) and `this` are set up here.

2. **Function Execution Context (FEC):**

   - Created every time a function is called.
   - Each function call gets its own execution context.

3. **Eval Execution Context:**

   - Created when code is executed inside `eval()`.
   - Rare and discouraged.

---

### 🔹 Execution Context Lifecycle

Every execution context goes through **three phases**:

1. **Creation Phase:**

   - The scope chain is created.
   - Variables and functions are hoisted.
   - The `this` value is determined.

2. **Execution Phase:**

   - Code is executed line-by-line.
   - Variables are assigned, functions are invoked, etc.

---

### 🔹 Execution Stack (Call Stack)

JavaScript uses a **stack** (called the **call stack**) to keep track of execution contexts:

```javascript
function a() {
  b();
}
function b() {
  console.log("Hello");
}
a();
```

- The **Global Context** is created and pushed on the stack.
- `a()` is called → its context is pushed.
- `b()` is called → its context is pushed.
- `console.log()` is called.
- As functions complete, their contexts are popped off the stack.

---

### 🔹 Visual Summary

```
Call Stack:
┌──────────────────────┐
│ Global Context       │
├──────────────────────┤
│ a() Execution Context│
├──────────────────────┤
│ b() Execution Context│
└──────────────────────┘
```

---

Would you like an illustration or a live example in code to show this in action?
