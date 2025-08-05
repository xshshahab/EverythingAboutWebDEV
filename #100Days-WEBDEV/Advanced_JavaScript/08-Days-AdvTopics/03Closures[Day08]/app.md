In JavaScript, **closures** are a fundamental concept that allows a function to "remember" the variables from its **lexical scope** even when the function is executed **outside** that scope.

---

### 🔑 What Is a Closure?

A **closure** is created when:

- A function is defined **inside another function**, and
- The inner function **accesses variables** from the **outer function**.

---

### 📦 Basic Example:

```javascript
function outer() {
  let outerVar = "I'm outside!";

  function inner() {
    console.log(outerVar); // Accesses variable from the outer scope
  }

  return inner;
}

const myClosure = outer(); // outer() is called, but inner() is returned
myClosure(); // Logs: "I'm outside!"
```

✅ Even though `outer()` has finished executing, the inner function (`inner`) still has access to `outerVar` — this is a closure.

---

### 🔍 Why Are Closures Useful?

Closures are powerful for:

1. **Data privacy / encapsulation** (emulating private variables)
2. **Factory functions**
3. **Callback functions**
4. **Maintaining state in asynchronous code**

---

### 🔒 Data Privacy Example:

```javascript
function secretHolder() {
  let secret = "🔐 Super Secret";

  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

const mySecret = secretHolder();
console.log(mySecret.getSecret()); // 🔐 Super Secret
mySecret.setSecret("🤫 New Secret");
console.log(mySecret.getSecret()); // 🤫 New Secret
```

Here, `secret` is **not directly accessible** from outside — it's safely enclosed in the closure.

---

### 🧠 Visualizing the Closure

JavaScript keeps a **reference** to the scope in which the function was created — **not** just the current values, but the entire environment.

---

### 🔁 Common Pitfall: Closures in Loops

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Logs: 3, 3, 3
  }, 1000);
}
```

**Why?** Because `var` is function-scoped, not block-scoped — by the time the callback runs, `i` is already 3.

✅ Fix it using `let` (block-scoped):

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Logs: 0, 1, 2
  }, 1000);
}
```

---

Would you like to see how closures are used in real-world code like in React or event listeners?
