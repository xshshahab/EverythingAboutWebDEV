# Explanation of `setTimeout` and `setInterval`

## 1. `setTimeout`

`setTimeout` is used to execute a function after a specified delay (in milliseconds). It only runs the function **once** unless it is explicitly called again.

### Syntax:

```javascript
const timeoutId = setTimeout(callback, delay, [optionalArguments]);
```

- `callback:` The function to execute.
- `delay:` Time in milliseconds after which the callback will be executed.
- `optionalArguments:` Additional arguments to pass to the callback function.
- `timeoutId:` A unique identifier for the timeout, used with `clearTimeout`.

#### Stopping `setTimeout`

Use `clearTimeout(timeoutId)` to cancel the scheduled function call.

##### Example:

```javascript
let timeoutId = setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

// Cancel the timeout
clearTimeout(timeoutId);
```

## 2. `setInterval`

setInterval is used to execute a function repeatedly at a specified interval (in milliseconds).

#### Syntax:

```javascript
const intervalId = setInterval(callback, delay, [optionalArguments]);
```

- `callback:` The function to execute.
- `delay:` Time in milliseconds between each execution of the callback.
- `optionalArguments:` Additional arguments to pass to the callback function.
- `intervalId:` A unique identifier for the interval, used with `clearInterval`.

#### Stopping `setInterval`

Use `clearInterval(intervalId)` to stop the repeated execution.

##### Example:

```javascript
let intervalId = setInterval(() => {
  console.log("Repeating every 3 seconds");
}, 3000);

// Cancel the interval
clearInterval(intervalId);
```

# Key Differences: `setTimeout` vs `setInterval`

| Feature       | `setTimeout`                    | `setInterval`                         |
| ------------- | ------------------------------- | ------------------------------------- |
| **Execution** | Executes the function **once**. | Executes the function **repeatedly**. |
| **Stopping**  | Use `clearTimeout(timeoutId)`.  | Use `clearInterval(intervalId)`.      |

---

# Clear Timeout/Interval

## 1. `clearTimeout`

This function is used to stop a scheduled `setTimeout` before it executes.

### Example:

```javascript
// Using clearTimeout
let timeoutId = setTimeout(() => console.log("Hello!"), 5000);
clearTimeout(timeoutId); // This prevents "Hello!" from being logged
```

## 2. `clearInterval`

This function is used to stop a repeating setInterval before its next execution.

### Example:

```javascript
// Using clearInterval
let intervalId = setInterval(() => console.log("Hi!"), 2000);
clearInterval(intervalId); // This stops the repeated execution
```
